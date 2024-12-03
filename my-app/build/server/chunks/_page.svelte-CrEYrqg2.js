import { W as ensure_array_like, v as push, S as store_get, Y as stringify, T as unsubscribe_stores, x as pop, Z as fallback, _ as slot, $ as bind_props } from './index-CSLrv6GN.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';
import { w as writable } from './index3-BHgDL_ZE.js';
import { d as dataStore, o as onDestroy } from './store-BmBUOc8f.js';
import { a as attr } from './attributes-BeaNKpgU.js';

function About($$payload) {
  $$payload.out += `<h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 2</h2> <div id="section2" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white"><form><div class="md:flex mb-6"><div class="md:w-1/3"><label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textfield">Text Field</label></div> <div class="md:w-2/3"><input class="form-input block w-full focus:bg-white" id="my-textfield" type="text" value=""> <p class="py-2 text-sm text-gray-600">add notes about populating the field</p></div></div> <div class="md:flex mb-6"><div class="md:w-1/3"><label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-select">Drop down field</label></div> <div class="md:w-2/3"><select name="" class="form-select block w-full focus:bg-white" id="my-select"><option value="Default">Default</option><option value="A">A</option><option value="B">B</option><option value="C">C</option></select> <p class="py-2 text-sm text-gray-600">add notes about populating the field</p></div></div> <div class="md:flex mb-6"><div class="md:w-1/3"><label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-textarea">Text Area</label></div> <div class="md:w-2/3"><textarea class="form-textarea block w-full focus:bg-white" id="my-textarea" rows="8">`;
  const $$body = escape_html("");
  if ($$body) {
    $$payload.out += `${$$body}`;
  }
  $$payload.out += `</textarea> <p class="py-2 text-sm text-gray-600">add notes about populating the field</p></div></div> <div class="md:flex md:items-center"><div class="md:w-1/3"></div> <div class="md:w-2/3"><button class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Save</button></div></div></form></div>`;
}
const toasts = writable([]);
function SuccessIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 464c-118.664 0-216-96.055-216-216 0-118.663 96.055-216 216-216 118.664 0 216 96.055 216 216 0 118.663-96.055 216-216 216zm141.63-274.961L217.15 376.071c-4.705 4.667-12.303 4.637-16.97-.068l-85.878-86.572c-4.667-4.705-4.637-12.303.068-16.97l8.52-8.451c4.705-4.667 12.303-4.637 16.97.068l68.976 69.533 163.441-162.13c4.705-4.667 12.303-4.637 16.97.068l8.451 8.52c4.668 4.705 4.637 12.303-.068 16.97z"></path></svg>`;
  bind_props($$props, { width });
}
function ErrorIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-11.49 120h22.979c6.823 0 12.274 5.682 11.99 12.5l-7 168c-.268 6.428-5.556 11.5-11.99 11.5h-8.979c-6.433 0-11.722-5.073-11.99-11.5l-7-168c-.283-6.818 5.167-12.5 11.99-12.5zM256 340c-15.464 0-28 12.536-28 28s12.536 28 28 28 28-12.536 28-28-12.536-28-28-28z"></path></svg>`;
  bind_props($$props, { width });
}
function InfoIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M256 40c118.621 0 216 96.075 216 216 0 119.291-96.61 216-216 216-119.244 0-216-96.562-216-216 0-119.203 96.602-216 216-216m0-32C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm-36 344h12V232h-12c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12h48c6.627 0 12 5.373 12 12v140h12c6.627 0 12 5.373 12 12v8c0 6.627-5.373 12-12 12h-72c-6.627 0-12-5.373-12-12v-8c0-6.627 5.373-12 12-12zm36-240c-17.673 0-32 14.327-32 32s14.327 32 32 32 32-14.327 32-32-14.327-32-32-32z"></path></svg>`;
  bind_props($$props, { width });
}
function CloseIcon($$payload, $$props) {
  let width = fallback($$props["width"], "1em");
  $$payload.out += `<svg${attr("width", width)} style="text-align: center; display: inline-block;" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>`;
  bind_props($$props, { width });
}
function Toast($$payload, $$props) {
  push();
  let type = fallback($$props["type"], "error");
  let dismissible = fallback($$props["dismissible"], true);
  $$payload.out += `<article${attr("class", `${stringify(type)} svelte-tp2z8e`)} role="alert">`;
  if (type === "success") {
    $$payload.out += "<!--[-->";
    SuccessIcon($$payload, { width: "1.1em" });
  } else {
    $$payload.out += "<!--[!-->";
    if (type === "error") {
      $$payload.out += "<!--[-->";
      ErrorIcon($$payload, { width: "1.1em" });
    } else {
      $$payload.out += "<!--[!-->";
      InfoIcon($$payload, { width: "1.1em" });
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--> <div class="text svelte-tp2z8e"><!---->`;
  slot($$payload, $$props, "default", {});
  $$payload.out += `<!----></div> `;
  if (dismissible) {
    $$payload.out += "<!--[-->";
    $$payload.out += `<button class="close svelte-tp2z8e">`;
    CloseIcon($$payload, { width: "0.8em" });
    $$payload.out += `<!----></button>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--></article>`;
  bind_props($$props, { type, dismissible });
  pop();
}
function Toasts($$payload, $$props) {
  push();
  var $$store_subs;
  if (store_get($$store_subs ??= {}, "$toasts", toasts)) {
    $$payload.out += "<!--[-->";
    const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$toasts", toasts));
    $$payload.out += `<section class="svelte-1wow8bn"><!--[-->`;
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let toast = each_array[$$index];
      Toast($$payload, {
        type: toast.type,
        dismissible: toast.dismissible,
        children: ($$payload2) => {
          $$payload2.out += `<!---->${escape_html(toast.message)}`;
        },
        $$slots: { default: true }
      });
    }
    $$payload.out += `<!--]--></section>`;
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]-->`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Hero($$payload, $$props) {
  push();
  var $$store_subs;
  let slides = writable([
    {
      background: "",
      tag: "",
      title: "",
      description: "",
      btnLink: "",
      btnText: ""
    }
  ]);
  const unsubscribe = dataStore.subscribe((data) => {
    const slidesData = data?.heroData?.slides;
    if (slidesData?.length) {
      slides.update((currentSlides) => [...slidesData]);
    }
  });
  onDestroy(() => {
    unsubscribe();
  });
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$slides", slides));
  Toasts($$payload);
  $$payload.out += `<!----> <h2 class="font-sans text-center font-bold break-normal text-gray-700 pb-4 text-xl">Slides Configuration</h2> <div class="bg-gray-100"><div class="px-16 text-center container"><form class="!w-auto relative inline-block p-8 mt-6 lg:mt-0 rounded-xl">`;
  {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let slide = each_array[index];
    $$payload.out += `<div class="slide-container shadow-xl mb-6 rounded-lg bg-white p-4"><h3 class="text-lg mb-4 font-semibold">Slide ${escape_html(index + 1)}</h3> <div class="md:flex mb-4 items-center"><label class="md:w-[220px] text-gray-600 font-bold md:text-left pr-4">Background URL:</label> <div class="flex w-full gap-2 md:w-[600px]"><input disabled type="text" class="p-2 flex-1 rounded-md svelte-1bg9vnu"${attr("value", slide.background)} placeholder="https://placehold.co/1920x800"> <label${attr("for", `logo-upload-${stringify(index)}`)} class="cursor-pointer relative inline-block px-4 py-2 font-medium group"><span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span> <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span> <span class="relative text-black group-hover:text-white">Upload</span></label> <input class="p-2 rounded-md hidden svelte-1bg9vnu" type="file"${attr("id", `logo-upload-${stringify(index)}`)} accept="image/*"></div></div> <div class="md:flex mb-4 items-center"><label class="md:w-[220px] text-gray-600 font-bold md:text-left pr-4">Tag:</label> <input type="text" class="md:w-[600px] w-full p-2 rounded-md svelte-1bg9vnu"${attr("value", slide.tag)} placeholder="Your Most Trusted Partners"></div> <div class="md:flex mb-4 items-center"><label class="md:w-[220px] text-gray-600 font-bold md:text-left pr-4">Title:</label> <textarea class="md:w-[600px] w-full p-2 rounded-md svelte-1bg9vnu" placeholder="Ex: Immigration &amp; &lt;br>  Visa Consulting &lt;br>  Here...">`;
    const $$body = escape_html(slide.title);
    if ($$body) {
      $$payload.out += `${$$body}`;
    }
    $$payload.out += `</textarea></div> <div class="md:flex mb-4 items-center"><label class="md:w-[220px] text-gray-600 font-bold md:text-left pr-4">Description:</label> <textarea class="md:w-[600px] h-[200px] w-full p-2 rounded-md svelte-1bg9vnu" placeholder="Ex: Transmds is the world’s driving worldwide coordinations supplier we uphold &lt;br> industry and exchange  the worldwide trade of merchandi">`;
    const $$body_1 = escape_html(slide.description);
    if ($$body_1) {
      $$payload.out += `${$$body_1}`;
    }
    $$payload.out += `</textarea></div> <div class="md:flex mb-4 items-center"><label class="md:w-[220px] text-gray-600 font-bold md:text-left pr-4">Button Link:</label> <input type="text" class="md:w-[600px] w-full p-2 rounded-md svelte-1bg9vnu"${attr("value", slide.btnLink)} placeholder="Ex: /about"></div> <div class="md:flex mb-4 items-center"><label class="md:w-[220px] text-gray-600 font-bold md:text-left pr-4">Button Text:</label> <input type="text" class="md:w-[600px] w-full p-2 rounded-md svelte-1bg9vnu"${attr("value", slide.btnText)} placeholder="Ex: Find more"></div> <button type="button" class="mt-2 text-red-500">Remove Slide</button></div>`;
  }
  $$payload.out += `<!--]--> <button type="button" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Add Slide</button> <button type="submit" class="mt-4 bg-green-500 text-white px-4 py-2 rounded">Save All</button></form></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}
function Service($$payload) {
  $$payload.out += `<h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 3</h2> <div id="section3" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white"><form><div class="md:flex mb-6"><div class="md:w-1/3"><label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-multiselect">Multi Select</label></div> <div class="md:w-2/3"><select class="form-multiselect block w-full" multiple id="my-multiselect"><option>Option 1</option><option>Option 2</option><option>Option 3</option><option>Option 4</option><option>Option 5</option></select> <p class="py-2 text-sm text-gray-600">add notes about populating the field</p></div></div> <div class="md:flex md:items-center"><div class="md:w-1/3"></div> <div class="md:w-2/3"><button class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Save</button></div></div></form></div>`;
}
function Team($$payload) {
  $$payload.out += `<h2 class="font-sans font-bold break-normal text-gray-700 px-2 pb-8 text-xl">Section 4</h2> <div id="section4" class="p-8 mt-6 lg:mt-0 rounded shadow bg-white"><form><div class="md:flex mb-6"><div class="md:w-1/3"><label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-radio">Radio Buttons</label></div> <div class="md:w-2/3"><div class="mt-2"><label class="inline-flex items-center"><input type="radio" class="form-radio text-indigo-600" name="radioOption" value="A"> <span class="ml-2">Radio A</span></label> <label class="inline-flex items-center ml-6"><input type="radio" class="form-radio" name="radioOption" value="B"> <span class="ml-2">Radio B</span></label></div> <p class="py-2 text-sm text-gray-600">add notes about populating the field</p></div></div> <div class="md:flex mb-6"><div class="md:w-1/3"><label class="block text-gray-600 font-bold md:text-left mb-3 md:mb-0 pr-4" for="my-checkbox">Checkboxes</label></div> <div class="md:w-2/3"><div><label class="inline-flex items-center"><input type="checkbox" class="form-checkbox text-indigo-600" checked> <span class="ml-2">Option 1</span></label></div> <div><label class="inline-flex items-center"><input type="checkbox" class="form-checkbox text-green-500" checked> <span class="ml-2">Option 2</span></label></div> <div><label class="inline-flex items-center"><input type="checkbox" class="form-checkbox text-pink-600" checked> <span class="ml-2">Option 3</span></label></div> <p class="py-2 text-sm text-gray-600">add notes about populating the field</p></div></div> <div class="md:flex md:items-center"><div class="md:w-1/3"></div> <div class="md:w-2/3"><button class="shadow bg-yellow-700 hover:bg-yellow-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">Save</button></div></div></form></div>`;
}
function _page($$payload) {
  let currentSectionId = 1;
  const sections = [
    { id: 1, name: "Hero Section", component: Hero },
    { id: 2, name: "Team Section", component: Team },
    {
      id: 3,
      name: "About section",
      component: About
    },
    {
      id: 4,
      name: "Service section",
      component: Service
    }
  ];
  const each_array = ensure_array_like(sections);
  const each_array_1 = ensure_array_like(sections);
  $$payload.out += `<div class="bg-gray-100 text-gray-900 tracking-wider leading-normal"><div class="w-full flex flex-wrap mx-auto px-24 pt-16 pb-16"><div class="w-full lg:w-1/5 px-6 text-xl text-gray-800 leading-normal"><p class="text-base font-bold py-2 lg:pb-6 text-gray-700">Menu</p> <div class="block lg:hidden sticky inset-0"><button id="menu-toggle" class="flex w-full justify-end px-3 py-3 bg-white lg:bg-transparent border rounded border-gray-600 hover:border-yellow-600 appearance-none focus:outline-none"><svg class="fill-current h-3 float-right" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg></button></div> <div class="w-full inset-0 max-h-64 lg:h-auto overflow-x-hidden overflow-y-auto lg:overflow-y-hidden lg:block mt-0 my-2 lg:my-0 lg:shadow-none lg:bg-transparent z-20" style="top:6em;" id="menu-content"><ul class="list-reset py-2 md:py-0"><!--[-->`;
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let section = each_array[$$index];
    $$payload.out += `<li${attr("class", `py-1 md:my-2 hover:bg-yellow-100 lg:hover:bg-transparent  border-transparent font-bold ${section.id === currentSectionId && "border-l-4 border-yellow-600"}`)}><div${attr("class", `block pl-4 align-middle cursor-pointer ${section.id === currentSectionId ? "text-gray-700" : "text-gray-500"} no-underline hover:text-yellow-600`)}><span class="pb-1 md:pb-0 text-sm">${escape_html(section.name)}</span></div></li>`;
  }
  $$payload.out += `<!--]--></ul></div></div> <section class="w-full lg:w-4/5"><!--[-->`;
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let section = each_array_1[$$index_1];
    if (section.id === currentSectionId) {
      $$payload.out += "<!--[-->";
      $$payload.out += `<!---->`;
      section.component?.($$payload, {});
      $$payload.out += `<!---->`;
    } else {
      $$payload.out += "<!--[!-->";
    }
    $$payload.out += `<!--]-->`;
  }
  $$payload.out += `<!--]--></section></div></div>`;
}

export { _page as default };
//# sourceMappingURL=_page.svelte-CrEYrqg2.js.map
