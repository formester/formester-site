import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import CanvasPage from "../src/CanvasPage.vue";
import { createFillableElement, createElement } from "@formester/pdf-core/constants/pdf-builder-schema.js";

describe("CanvasPage with fillable elements", () => {
  it("renders a tinted preview per fillable field and a static header alongside", () => {
    const header = createElement({ type: "header" }, 40, 40);
    const text = createFillableElement("text", 40, 100, { name: "full_name", required: true });
    const check = createFillableElement("checkbox", 40, 140, { name: "agree" });
    const sig = createFillableElement("signature", 40, 200, { name: "sign" });

    const wrapper = mount(CanvasPage, {
      props: { elements: [header, text, check, sig], pageWidth: 612, pageHeight: 792, zoom: 100, disableSnap: true },
    });

    const previews = wrapper.findAll(".fillable-preview");
    expect(previews).toHaveLength(3);
    expect(wrapper.find(".fillable-preview--text").text()).toContain("full_name");
    expect(wrapper.find(".fillable-preview--text .fillable-preview__req").exists()).toBe(true);
    expect(wrapper.find(".fillable-preview--checkbox").text()).toBe("");
    expect(wrapper.find(".fillable-preview--signature").text()).toContain("sign");
    expect(wrapper.findAll(".canvas-el")).toHaveLength(4);
  });

  it("emits select when a fillable element is clicked", async () => {
    const el = createFillableElement("dropdown", 10, 10, { name: "country" });
    const wrapper = mount(CanvasPage, { props: { elements: [el], disableSnap: true } });
    await wrapper.find(".canvas-el").trigger("click");
    expect(wrapper.emitted("select")?.[0]?.[0]).toBe(el.id);
  });
});
