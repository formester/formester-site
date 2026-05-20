<template>
  <div class="fsv-wl">
    <svg viewBox="0 0 360 360" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <filter id="wl-shadow-browser" x="-3%" y="-3%" width="110%" height="112%">
          <feDropShadow dx="0" dy="4" stdDeviation="10" flood-color="rgba(16,24,40,0.08)" />
        </filter>

        <filter id="wl-shadow-panel" x="-12%" y="-10%" width="132%" height="135%">
          <feDropShadow dx="0" dy="6" stdDeviation="10" flood-color="rgba(16,24,40,0.14)" />
        </filter>
      </defs>

      <!-- Reduced page background -->
      <rect x="38" y="55" width="284" height="305" fill="#f9fafb" rx="14" />

      <!-- Browser shell -->
      <rect x="46" y="66" width="268" height="286" rx="14" fill="#ffffff" stroke="#eaecf0" stroke-width="1"
        filter="url(#wl-shadow-browser)" />

      <!-- Browser header -->
      <rect x="46" y="66" width="268" height="49" rx="14" fill="#ffffff" />
      <rect x="46" y="101" width="268" height="14" fill="#ffffff" />

      <line x1="46" y1="115" x2="314" y2="115" stroke="#eaecf0" stroke-width="1" />

      <!-- macOS dots -->
      <circle cx="68" cy="90" r="7" fill="#ff5f57" />
      <circle cx="89" cy="90" r="7" fill="#febc2e" />
      <circle cx="110" cy="90" r="7" fill="#28c840" />

      <!-- URL bar -->
      <rect x="146" y="77" width="128" height="26" rx="13" fill="#f9fafb" stroke="#eaecf0" stroke-width="1" />

      <rect x="156" y="81" width="108" height="18" rx="5">
        <animate attributeName="fill" values="#f0ebfa;#e6faef;#fff3e0" dur="6s" keyTimes="0;0.333;0.667"
          calcMode="discrete" repeatCount="indefinite" />
      </rect>

      <text x="200" y="93" text-anchor="middle" font-family="Inter, ui-sans-serif, system-ui, sans-serif" font-size="8"
        font-weight="700" fill="#6434d0">
        hotel.custom.com
        <animate attributeName="fill" values="#6434d0;#11c15b;#f79009" dur="6s" keyTimes="0;0.333;0.667"
          calcMode="discrete" repeatCount="indefinite" />
      </text>

      <!-- Form card -->
      <rect x="66" y="126" width="168" height="206" rx="10" fill="#ffffff" stroke="#eaecf0" stroke-width="1" />

      <!-- Brand logo -->
      <circle cx="150" cy="165" r="20" fill="#6434d0">
        <animate attributeName="fill" values="#6434d0;#11c15b;#f79009" dur="6s" keyTimes="0;0.333;0.667"
          calcMode="discrete" repeatCount="indefinite" />
      </circle>

      <!-- Form label 1 -->
      <rect x="82" y="204" width="70" height="7" rx="3" fill="#d0d5dd" />

      <!-- Input 1 -->
      <rect x="76" y="216" width="148" height="26" rx="6" fill="#ffffff" stroke="#eaecf0" stroke-width="1" />

      <!-- Form label 2 -->
      <rect x="82" y="252" width="54" height="7" rx="3" fill="#d0d5dd" />

      <!-- Input 2 -->
      <rect x="76" y="264" width="148" height="26" rx="6" fill="#ffffff" stroke="#eaecf0" stroke-width="1" />

      <!-- CTA button -->
      <rect x="76" y="304" width="148" height="28" rx="8" fill="#6434d0">
        <animate attributeName="fill" values="#6434d0;#11c15b;#f79009" dur="6s" keyTimes="0;0.333;0.667"
          calcMode="discrete" repeatCount="indefinite" />
      </rect>

      <!-- Theme panel -->
      <rect x="206" y="214" width="92" height="108" rx="12" fill="#ffffff" stroke="#eaecf0" stroke-width="1"
        filter="url(#wl-shadow-panel)" />

      <!-- Panel header -->
      <rect x="220" y="228" width="50" height="7" rx="3" fill="#d0d5dd" />

      <!-- Swatches -->
      <rect x="220" y="244" width="32" height="32" rx="7" fill="#6434d0" />
      <rect x="260" y="244" width="32" height="32" rx="7" fill="#11c15b" />
      <rect x="220" y="284" width="32" height="32" rx="7" fill="#f79009" />
      <rect x="260" y="284" width="32" height="32" rx="7" fill="#eaecf0" />


      <!-- Selection ring -->
      <g id="wl-sel-ring">
        <rect width="32" height="32" rx="7" fill="none" stroke="#101828" stroke-width="2.5">
          <animateTransform attributeName="transform" type="translate" values="220,244; 260,244; 220,284"
            keyTimes="0;0.333;0.667" calcMode="discrete" dur="6s" repeatCount="indefinite" />
        </rect>
      </g>

      <!-- Cursor -->
      <g id="wl-cursor">
        <animateTransform attributeName="transform" type="translate"
          values="236,260; 236,260; 276,260; 276,260; 236,300; 236,300; 236,260" keyTimes="0;0.27;0.33;0.60;0.67;0.93;1"
          calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
          dur="6s" repeatCount="indefinite" />

        <!-- Click ripple -->
        <circle cx="0" cy="0" r="0" fill="#101828" fill-opacity="0">
          <animate attributeName="r" values="0;0;14;0;0;14;0;0;14;0"
            keyTimes="0;0.27;0.31;0.35;0.60;0.64;0.68;0.93;0.97;1" dur="6s" repeatCount="indefinite" />

          <animate attributeName="fill-opacity" values="0;0;0.15;0;0;0.15;0;0;0.15;0"
            keyTimes="0;0.27;0.31;0.35;0.60;0.64;0.68;0.93;0.97;1" dur="6s" repeatCount="indefinite" />
        </circle>

        <!-- Cursor shape -->
        <path d="M0 0 L13 5 L5.5 7 L2 13 Z" fill="#101828" stroke="#ffffff" stroke-width="1.1"
          stroke-linejoin="round" />
      </g>
    </svg>
  </div>
</template>

<style scoped>
.fsv-wl {
  position: relative;
  width: 100%;
  max-width: 320px;
  height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(1.2) translateY(-16px);
}

.fsv-wl svg {
  width: 100%;
  height: 100%;
  display: block;
}
</style>
