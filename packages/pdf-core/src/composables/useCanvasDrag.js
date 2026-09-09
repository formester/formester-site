import { ref, computed, onMounted, onBeforeUnmount } from "vue";

/**
 * Composable for free-form canvas drag/resize with smart snapping.
 *
 * @param {Object} options
 * @param {import('vue').Ref}         options.elements       - Ref<Element[]> — array of canvas elements
 * @param {import('vue').Ref}         options.scale          - Ref<number>    — zoom scale (1 = 100%)
 * @param {import('vue').Ref}         options.margin         - Ref<{top,bottom,left,right}> — page margins in pts
 * @param {number}                    [options.pageWidth=595]
 * @param {number}                    [options.pageHeight=842]
 * @param {number}                    [options.minWidth=10]
 * @param {number}                    [options.minHeight=10]
 * @param {number}                    [options.gridSize=8]        - Grid snap size in pts
 * @param {number}                    [options.snapThreshold=6]   - Smart snap pull distance in pts
 * @param {function}                  options.onUpdate       - Called with element patch {id, ...changes}
 * @param {function}                  options.onSelect       - Called with elementId when drag begins
 * @param {function}                  [options.onDragEnd]    - Called with {id, x, y, w, h} when move drag ends
 *
 * @returns {{
 *   drag: import('vue').Ref,
 *   snapLines: import('vue').Ref,
 *   marginGuideStyle: import('vue').ComputedRef,
 *   startMove: function,
 *   startResize: function,
 * }}
 */
export function useCanvasDrag({
  elements,
  scale,
  margin,
  pageWidth = 595,
  pageHeight = 842,
  minWidth = 10,
  minHeight = 10,
  gridSize = 8,
  snapThreshold = 6,
  onUpdate,
  onSelect,
  onDragEnd,
  selectedIds,
}) {
  const drag = ref(null);
  const snapLines = ref([]);

  // Margin guide style
  const marginGuideStyle = computed(() => {
    const m = margin.value;
    const s = scale.value;
    return {
      top: `${m.top * s}px`,
      left: `${m.left * s}px`,
      right: `${m.right * s}px`,
      bottom: `${m.bottom * s}px`,
    };
  });

  // TODO: Still Rotate DND not working well.

  // Rotated bounding box (axis-aligned) for clamping
  const rotatedBounds = (el) => {
    const angle = ((el.style?.rotate ?? 0) * Math.PI) / 180;
    if (!angle) return { bw: el.w, bh: el.h };
    const cos = Math.abs(Math.cos(angle));
    const sin = Math.abs(Math.sin(angle));
    return { bw: el.w * cos + el.h * sin, bh: el.w * sin + el.h * cos };
  };

  // Map screen-space delta to element-local delta for a rotated element.
  // CSS rotate(θ) is clockwise.  After rotation the element's local axes are:
  //   local +x = (cos θ,  sin θ) in screen space
  //   local +y = (−sin θ, cos θ) in screen space
  // To go screen→local we project onto each local axis:
  //   ldx = dot(screen_delta, local_x_hat) =  dx·cos θ + dy·sin θ
  //   ldy = dot(screen_delta, local_y_hat) = −dx·sin θ + dy·cos θ
  const toLocalDelta = (dx, dy, el) => {
    const angle = ((el.style?.rotate ?? 0) * Math.PI) / 180;
    if (!angle) return { ldx: dx, ldy: dy };
    const cos = Math.cos(angle);
    const sin = Math.sin(angle);
    return { ldx: dx * cos + dy * sin, ldy: -dx * sin + dy * cos };
  };

  // gridSize <= 0 → no grid quantization (smart-snap still runs).
  const gridSnap = (val) =>
    gridSize > 0 ? Math.round(val / gridSize) * gridSize : val;

  const getVTargets = (excludeId) => {
    const m = margin.value;
    return [
      m.left,
      pageWidth - m.right,
      pageWidth / 2,
      ...elements.value
        .filter((e) => e.id !== excludeId)
        .flatMap((e) => [e.x, e.x + e.w, e.x + e.w / 2]),
    ];
  };

  const getHTargets = (excludeId) => {
    const m = margin.value;
    return [
      m.top,
      pageHeight - m.bottom,
      pageHeight / 2,
      ...elements.value
        .filter((e) => e.id !== excludeId)
        .flatMap((e) => [e.y, e.y + e.h, e.y + e.h / 2]),
    ];
  };

  // Try to snap leading edge, trailing edge, or center to nearest target.
  // Falls back to grid snap if nothing is within threshold.
  const trySnapAxis = (raw, size, targets) => {
    let bestDist = snapThreshold;
    let snapped = null;
    let snapPos = null;

    for (const t of targets) {
      const dLeading = Math.abs(raw - t);
      if (dLeading < bestDist) {
        bestDist = dLeading;
        snapped = t;
        snapPos = t;
      }
      const dTrailing = Math.abs(raw + size - t);
      if (dTrailing < bestDist) {
        bestDist = dTrailing;
        snapped = t - size;
        snapPos = t;
      }
      const dCenter = Math.abs(raw + size / 2 - t);
      if (dCenter < bestDist) {
        bestDist = dCenter;
        snapped = t - size / 2;
        snapPos = t;
      }
    }

    return { val: snapped !== null ? snapped : gridSnap(raw), snapPos };
  };

  // Snap a single edge value (no size offset) — used for resize handles.
  const snapEdge = (raw, targets) => {
    let bestDist = snapThreshold;
    let snapPos = null;
    let val = gridSnap(raw);

    for (const t of targets) {
      const d = Math.abs(raw - t);
      if (d < bestDist) {
        bestDist = d;
        snapPos = t;
        val = t;
      }
    }

    return { val, snapPos };
  };

  // Window-level mouse handlers
  const onWindowMouseMove = (e) => {
    if (!drag.value) return;
    const dx = (e.clientX - drag.value.startX) / scale.value;
    const dy = (e.clientY - drag.value.startY) / scale.value;
    if (drag.value.type === "move") applyMove(dx, dy);
    else applyResize(dx, dy, e.shiftKey);
  };

  const onWindowMouseUp = () => {
    if (onDragEnd && drag.value?.type === "move") {
      const el = elements.value.find((e) => e.id === drag.value.elementId);
      if (el) {
        onDragEnd({
          id: drag.value.elementId,
          x: drag.value.lastX ?? el.x,
          y: drag.value.lastY ?? el.y,
          w: el.w,
          h: el.h,
        });
      }
    }
    drag.value = null;
    snapLines.value = [];
  };

  onMounted(() => {
    window.addEventListener("mousemove", onWindowMouseMove);
    window.addEventListener("mouseup", onWindowMouseUp);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("mousemove", onWindowMouseMove);
    window.removeEventListener("mouseup", onWindowMouseUp);
  });

  const startMove = ({ event, elementId }) => {
    const isGroup =
      selectedIds?.value?.length > 1 && selectedIds.value.includes(elementId);
    const ids = isGroup ? [...selectedIds.value] : [elementId];

    const origins = ids
      .map((id) => {
        const el = elements.value.find((e) => e.id === id);
        return el ? { id, x: el.x, y: el.y } : null;
      })
      .filter(Boolean);

    const primaryEl = elements.value.find((e) => e.id === elementId);
    const primary = origins.find((o) => o.id === elementId) ?? origins[0];
    if (!primary || !primaryEl) return;

    drag.value = {
      type: "move",
      elementId,
      origins,
      startX: event.clientX,
      startY: event.clientY,
      origBaseX: primary.x,
      origBaseY: primary.y,
      origBaseW: primaryEl.w,
      origBaseH: primaryEl.h,
      vTargets: getVTargets(elementId),
      hTargets: getHTargets(elementId),
    };
    // Skip replacing selection on Ctrl/Meta — the click handler manages toggle-select.
    // Also skip when dragging an element that's part of a multi-selection, so the group survives the drag.
    if (!event.ctrlKey && !event.metaKey && !isGroup) onSelect?.(elementId);
  };

  const applyMove = (dx, dy) => {
    const { origBaseX, origBaseY, origBaseW, origBaseH, vTargets, hTargets, origins } =
      drag.value;

    const { val: snapX, snapPos: vSnap } = trySnapAxis(
      origBaseX + dx,
      origBaseW,
      vTargets,
    );
    const { val: snapY, snapPos: hSnap } = trySnapAxis(
      origBaseY + dy,
      origBaseH,
      hTargets,
    );

    const lines = [
      ...(vSnap !== null ? [{ axis: "v", pos: vSnap }] : []),
      ...(hSnap !== null ? [{ axis: "h", pos: hSnap }] : []),
    ];
    if (lines.length !== snapLines.value.length) snapLines.value = lines;

    const rx = Math.round(snapX);
    const ry = Math.round(snapY);
    const actualDx = rx - origBaseX;
    const actualDy = ry - origBaseY;
    drag.value.lastX = rx;
    drag.value.lastY = ry;

    for (const origin of origins) {
      onUpdate?.({ id: origin.id, x: origin.x + actualDx, y: origin.y + actualDy });
    }
  };

  const startResize = ({ event, elementId, handleId }) => {
    const el = elements.value.find((e) => e.id === elementId);
    if (!el) return;
    drag.value = {
      type: "resize",
      elementId,
      handleId,
      startX: event.clientX,
      startY: event.clientY,
      origBaseX: el.x,
      origBaseY: el.y,
      origBaseW: el.w,
      origBaseH: el.h,
      vTargets: getVTargets(elementId),
      hTargets: getHTargets(elementId),
    };
  };

  // TODO: Resize not working when rotated
  const applyResize = (dx, dy, shiftKey = false) => {
    const {
      origBaseX,
      origBaseY,
      origBaseW,
      origBaseH,
      handleId,
      elementId,
      vTargets,
      hTargets,
    } = drag.value;
    const el = elements.value.find((e) => e.id === elementId);
    if (!el) return;

    const { ldx, ldy } = toLocalDelta(dx, dy, el);
    let x = origBaseX;
    let y = origBaseY;
    let w = origBaseW;
    let h = origBaseH;
    const lines = [];

    if (handleId.includes("e")) {
      const renderedX = origBaseX + origBaseW + ldx;
      const { val, snapPos } = snapEdge(renderedX, vTargets);
      w = Math.max(minWidth, Math.round(val - origBaseX));
      if (snapPos !== null) lines.push({ axis: "v", pos: snapPos });
    }
    if (handleId.includes("s")) {
      const renderedY = origBaseY + origBaseH + ldy;
      const { val, snapPos } = snapEdge(renderedY, hTargets);
      h = Math.max(minHeight, Math.round(val - origBaseY));
      if (snapPos !== null) lines.push({ axis: "h", pos: snapPos });
    }
    if (handleId.includes("w")) {
      const renderedX = origBaseX + ldx;
      const { val, snapPos } = snapEdge(renderedX, vTargets);
      const nx = Math.max(0, Math.round(val));
      w = Math.max(minWidth, origBaseX + origBaseW - nx);
      x = nx;
      if (snapPos !== null) lines.push({ axis: "v", pos: snapPos });
    }
    if (handleId.includes("n")) {
      const renderedY = origBaseY + ldy;
      const { val, snapPos } = snapEdge(renderedY, hTargets);
      const ny = Math.max(0, Math.round(val));
      h = Math.max(minHeight, origBaseY + origBaseH - ny);
      y = ny;
      if (snapPos !== null) lines.push({ axis: "h", pos: snapPos });
    }

    // Shift = aspect-lock for circle. Pin the opposite corner and snap both
    // dimensions to the larger one so the user gets a true circle no matter
    // which corner handle they're dragging.
    if (shiftKey && el.type === "circle") {
      const size = Math.max(w, h, minWidth, minHeight);
      const draggingW = handleId.includes("w");
      const draggingN = handleId.includes("n");
      // Anchor is the corner opposite the one being dragged.
      const anchorX = draggingW ? origBaseX + origBaseW : origBaseX;
      const anchorY = draggingN ? origBaseY + origBaseH : origBaseY;
      w = size;
      h = size;
      x = draggingW ? anchorX - size : anchorX;
      y = draggingN ? anchorY - size : anchorY;
      // Suppress snap lines when aspect-locking — the snap targets no longer
      // match the constrained geometry and the lines look stale.
      lines.length = 0;
    }

    snapLines.value = lines;
    onUpdate?.({ id: elementId, x, y, w, h });
  };

  return {
    drag,
    snapLines,
    marginGuideStyle,
    startMove,
    startResize,
  };
}
