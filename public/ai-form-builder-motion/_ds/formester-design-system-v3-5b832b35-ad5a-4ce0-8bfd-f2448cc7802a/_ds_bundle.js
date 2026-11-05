/* @ds-bundle: {"format":4,"namespace":"FormesterDesignSystemV3_5b832b","components":[],"sourceHashes":{"preview/shell.js":"dffbaae370ac"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.FormesterDesignSystemV3_5b832b = window.FormesterDesignSystemV3_5b832b || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// preview/shell.js
try { (() => {
/* Single source for the app shell: fixed sidebar + top bar + profile popover.
   Every page mounts it the same way so the chrome can't drift:
     <div class="app"><div class="main"><div class="content"> …page… </div></div></div>
     <script src="shell.js" data-active="integrations" data-title="Integrations"></script>
   Optional: data-folders="true" + a <template id="rail-folders"> to inject the
   forms-list Folders block. */
(function () {
  var s = document.currentScript;
  var active = s.getAttribute("data-active") || "";
  var title = s.getAttribute("data-title") || "";
  var withFolders = s.getAttribute("data-folders") === "true";
  var LOGO = '<svg class="rail__brand-mark" viewBox="0 0 18 24" fill="none" aria-hidden="true"><rect width="17.4545" height="24" rx="2.28571" fill="#6434D0"/><rect x="2.18182" y="5.71429" width="13.0909" height="5.71429" rx="2.85714" fill="#fff"/><circle cx="5.95041" cy="8.56006" r="1.55" fill="#6434D0"/><circle cx="11.5041" cy="8.57143" r="1.55" fill="#6434D0"/></svg>';
  var ICON = {
    forms: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M16 13H8"/><path d="M16 17H8"/><path d="M10 9H8"/>',
    templates: '<rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/>',
    gallery: '<rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>',
    trash: '<path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/>',
    api: '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
    domains: '<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>',
    integrations: '<rect width="8" height="8" x="3" y="3" rx="2"/><path d="M7 11v4a2 2 0 0 0 2 2h4"/><rect width="8" height="8" x="13" y="13" rx="2"/>',
    branding: '<circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>',
    profile: '<circle cx="12" cy="8" r="4"/><path d="M4 20a8 8 0 0 1 16 0"/>',
    refer: '<rect x="3" y="8" width="18" height="4" rx="1"/><path d="M12 8v13"/><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"/><path d="M7.5 8a2.5 2.5 0 0 1 0-5C11 3 12 8 12 8s1-5 4.5-5a2.5 2.5 0 0 1 0 5"/>',
    usage: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
    billing: '<rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/>',
    logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/>'
  };
  function svg(name, cls) {
    return '<svg class="' + cls + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICON[name] + "</svg>";
  }
  var PM = '<span class="pm"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 16l-2-9 5.5 4L12 5l3.5 6L21 7l-2 9H5z"/></svg>PRO</span>';
  function navItem(key, label, premium) {
    var on = key === active ? " is-active" : "";
    var cur = on ? ' aria-current="page"' : "";
    return '<a class="nav-item' + on + '" data-nav="' + key + '" href="#"' + cur + ">" + svg(key, "nav-item__icon") + label + (premium ? PM : "") + "</a>";
  }
  function menuItem(key, label, danger) {
    return '<a class="menu__item' + (danger ? " menu__item--danger" : "") + '" data-nav="' + key + '" href="#">' + svg(key, "") + label + "</a>";
  }
  var rail = '<nav class="rail">' + '<div class="rail__brand">' + LOGO + "Formester</div>" + navItem("forms", "Forms") + navItem("templates", "Templates") + navItem("gallery", "Gallery") + navItem("api", "API", true) + navItem("trash", "Trash") + '<div class="rail__folders" id="rail-folders-slot"></div>' + '<hr class="rail__divider">' + navItem("domains", "Domains") + navItem("integrations", "Integrations") + navItem("branding", "Branding") + '<div class="rail__foot">' + '<div class="menu rail__profile-menu" id="rail-profile-menu" role="menu" hidden>' + menuItem("profile", "Profile Settings") + menuItem("refer", "Refer a Friend") + menuItem("usage", "Usage") + menuItem("billing", "Billing") + '<hr class="menu__sep">' + menuItem("logout", "Logout", true) + "</div>" + '<button class="rail__profile" id="rail-profile" aria-haspopup="true" aria-expanded="false">' + '<span class="avatar">A</span>' + '<div class="rail__user"><div class="rail__user-name">Anirudh Tantry</div>' + '<div class="rail__user-email">anirudhthantry@gmail.com</div></div>' + svg_caret() + "</button>" + "</div>" + "</nav>";
  function svg_caret() {
    return '<svg class="rail__profile-caret" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"/></svg>';
  }
  var head = '<header class="page-head">' + '<h1 class="page-head__title">' + title + "</h1>" + '<button class="org-switch"><span class="org-switch__avatar">A</span>Anirudh\'s Organization' + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button>' + "</header>";
  var app = document.querySelector(".app");
  if (app) app.insertAdjacentHTML("afterbegin", rail);
  var content = document.querySelector(".content");
  if (content) content.insertAdjacentHTML("afterbegin", head);
  var slot = document.getElementById("rail-folders-slot");
  var tpl = document.getElementById("rail-folders");
  if (withFolders && slot && tpl) slot.appendChild(tpl.content.cloneNode(true));else if (slot) slot.remove();

  // Profile popover
  var btn = document.getElementById("rail-profile");
  var menu = document.getElementById("rail-profile-menu");
  if (btn && menu) {
    btn.addEventListener("click", function (e) {
      e.stopPropagation();
      var open = menu.hasAttribute("hidden");
      if (open) menu.removeAttribute("hidden");else menu.setAttribute("hidden", "");
      btn.setAttribute("aria-expanded", String(open));
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") {
        menu.setAttribute("hidden", "");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "preview/shell.js", error: String((e && e.message) || e) }); }

})();
