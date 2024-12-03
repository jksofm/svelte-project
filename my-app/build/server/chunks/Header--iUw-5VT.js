import { W as ensure_array_like, x as pop, S as store_get, T as unsubscribe_stores, v as push } from './index-CSLrv6GN.js';
import { i as infoData, f as footerData, p as path } from './common-hxGttqce.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { p as page } from './stores-BfmLvb6E.js';

function Cursor($$payload) {
  $$payload.out += `<div class="mouse-cursor cursor-outer"></div> <div class="mouse-cursor cursor-inner"></div> <div class="scroll-up"><svg class="scroll-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102"><path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98"></path></svg></div>`;
}
function Footer($$payload, $$props) {
  push();
  const each_array = ensure_array_like(infoData.socialLinks);
  const each_array_1 = ensure_array_like(footerData.exploreLinks);
  $$payload.out += `<footer class="footer-section footer-bg"><div class="container"><div class="footer-widgets-wrapper"><div class="row"><div class="col-xl-3 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".2s"><div class="single-footer-widget"><div class="widget-head"><a href="index.html"><img${attr("src", footerData.logo)} alt="logo-img"></a></div> <div class="footer-content"><p>We believe it has the power to do <br> amazing things.</p> <a${attr("href", `mailto:${infoData.email}`)} class="link">${escape_html(infoData.email)}</a> <div class="social-icon d-flex align-items-center"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let socialLink = each_array[$$index];
    $$payload.out += `<a${attr("href", socialLink.link)}${attr("aria-label", socialLink.label)}><i${attr("class", socialLink.iconClass)}></i></a>`;
  }
  $$payload.out += `<!--]--></div></div></div></div> <div class="col-xl-2 ps-lg-5 col-sm-6 col-md-3 col-lg-3 wow fadeInUp" data-wow-delay=".4s"><div class="single-footer-widget"><div class="widget-head"><h5>Explore</h5></div> <ul class="list-items"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let exploreLink = each_array_1[$$index_1];
    $$payload.out += `<li><a${attr("href", exploreLink.link)}>${escape_html(exploreLink.label)}</a></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div> <div class="col-xl-4 col-sm-6 col-md-6 col-lg-3 wow fadeInUp" data-wow-delay=".8s"><div class="single-footer-widget"><div class="widget-head"><h5>Address:</h5></div> <div class="footer-address-text"><p>${escape_html(infoData.address)}</p> <h5>Hours:</h5> <p>${escape_html(infoData.timeStart)} – ${escape_html(infoData.timeEnd)} <br> ${escape_html(infoData.dateWorking)}</p></div></div></div></div></div></div> <div class="footer-bottom"><div class="container"><div class="footer-wrapper d-flex align-items-center justify-content-between"><p class="wow fadeInLeft color-2" data-wow-delay=".3s">Copyright © 2024 <a${attr("href", path.home.base())}>SkySolutions</a>. All Rights Reserved.</p></div></div></div></footer>`;
  pop();
}
function Header($$payload, $$props) {
  push();
  var $$store_subs;
  const isAdmin = store_get($$store_subs ??= {}, "$page", page).url.pathname.includes("admin");
  let headerData = void 0;
  let infoData2 = void 0;
  const each_array_1 = ensure_array_like(headerData?.menuLinks);
  $$payload.out += `<div>`;
  if (!isAdmin) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<div class="header-top-section fix"><div class="container">`;
    {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></div></div>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <header class="header-section-1"><div id="header-sticky" class="header-1"><div class="container-fluid"><div class="mega-menu-wrapper"><div class="header-main"><div class="header-left"><div class="logo"><a${attr("href", path.home.base())} class="header-logo"><img${attr("src", headerData?.logo)} alt="logo-img"></a></div> <div class="mean__menu-wrapper"><div class="main-menu"><nav id="mobile-menu"><ul><!--[-->`;
  for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
    let menuLink = each_array_1[$$index_2];
    $$payload.out += `<li${attr("class", `${menuLink.children && "has-dropdown"} menu-thumb`)}><a${attr("class", menuLink.link === store_get($$store_subs ??= {}, "$page", page).url.pathname ? "!text-red-500" : "")}${attr("href", menuLink.link)}>${escape_html(menuLink.label)} `;
    if (menuLink.children) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<i class="fas fa-angle-down"></i>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></a> `;
    if (menuLink.children) {
      $$payload.out += "<!--[-->";
      const each_array_2 = ensure_array_like(menuLink.children);
      $$payload.out += `<ul class="submenu"><!--[-->`;
      for (let $$index_1 = 0, $$length2 = each_array_2.length; $$index_1 < $$length2; $$index_1++) {
        let subMenu = each_array_2[$$index_1];
        $$payload.out += `<li><a${attr("href", subMenu.link)}>${escape_html(subMenu.label)}</a></li>`;
      }
      $$payload.out += `<!--]--></ul>`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]--></li>`;
  }
  $$payload.out += `<!--]--></ul></nav></div></div></div> <div class="header-right d-flex justify-content-end align-items-center"><div class="contact-info"><div class="icon"><img src="/img/call.png" alt="img"></div> <div class="content"><p>Phone:</p> <h6><a${attr("href", `tel:${infoData2?.phoneNumber}`)}>${escape_html(infoData2?.phoneNumberDisplay)}</a></h6></div></div>  <div class="header__hamburger d-lg-none my-auto"><div class="sidebar__toggle"><i class="far fa-bars"></i></div></div></div></div></div></div></div></header></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { Cursor as C, Footer as F, Header as H };
//# sourceMappingURL=Header--iUw-5VT.js.map
