import { W as ensure_array_like, S as store_get, T as unsubscribe_stores, x as pop, v as push } from './index-CSLrv6GN.js';
import { d as dataStore, o as onDestroy, g as globalLoading } from './store-BmBUOc8f.js';
import { w as writable } from './index3-BHgDL_ZE.js';
import { a as attr } from './attributes-BeaNKpgU.js';
import { e as escape_html } from './escaping-CqgfEcN3.js';

function Loading($$payload) {
  $$payload.out += `<div class="absolute rounded-xl left-0 bottom-0 bg-black bg-opacity-10 z-10 h-full w-full flex items-center justify-center"><div class="flex items-center"><span class="text-3xl text-black mr-4">Loading</span> <svg class="animate-spin h-8 w-8 text-gray-800" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg></div></div>`;
}
function _page($$payload, $$props) {
  push();
  var $$store_subs;
  const formData = writable({
    email: "",
    address: "",
    phoneNumberDisplay: "",
    phoneNumber: "",
    logo: "",
    dateWorking: "",
    timeStart: "",
    timeEnd: "",
    socialLinks: [
      {
        label: "Facebook",
        link: "",
        iconClass: "fab fa-facebook-f"
      },
      {
        icon: "Twitter",
        link: "",
        iconClass: "fab fa-twitter"
      },
      {
        icon: "Printerest",
        link: "",
        iconClass: "fab fa-pinterest-p"
      }
    ]
  });
  const unsubscribeLoading = dataStore.subscribe((globalLoading2) => {
  });
  const unsubscribe = dataStore.subscribe((data) => {
    const infoData = data.infoData;
    if (infoData) {
      formData.set({
        email: infoData.email || "",
        address: infoData.address || "",
        phoneNumberDisplay: infoData.phoneNumberDisplay || "",
        phoneNumber: infoData.phoneNumber || "",
        logo: infoData.logo || "",
        dateWorking: infoData.dateWorking || "",
        timeStart: infoData.timeStart || "",
        timeEnd: infoData.timeEnd || "",
        socialLinks: infoData.socialLinks || []
      });
    }
  });
  onDestroy(() => {
    unsubscribe();
    unsubscribeLoading();
  });
  const each_array = ensure_array_like(store_get($$store_subs ??= {}, "$formData", formData).socialLinks);
  $$payload.out += `<div class="bg-gray-100"><div class="py-12 px-16 text-center container"><form class="!w-auto relative inline-block p-8 mt-6 lg:mt-0 rounded-xl shadow bg-white">`;
  if (store_get($$store_subs ??= {}, "$globalLoading", globalLoading)) {
    $$payload.out += "<!--[-->";
    Loading($$payload);
  } else {
    $$payload.out += "<!--[!-->";
  }
  $$payload.out += `<!--]--> <h2 class="font-sans font-bold break-normal text-gray-700 pb-8 text-xl">Information</h2> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Email :</label></div> <div class="md:w-[600px]"><input placeholder="info@example.com" type="email" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).email)}></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Address :</label></div> <div class="md:w-[600px]"><input placeholder="Ex: 55 Main Street, 2nd block, Malborne ,Australia" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).address)}></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Phone Number Display :</label></div> <div class="md:w-[600px]"><input placeholder="Ex: +236 (456) 896 22" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).phoneNumberDisplay)}></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Phone Number :</label></div> <div class="md:w-[600px]"><input placeholder="Ex: +23645689622" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).phoneNumber)}></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Logo URL :</label></div> <div class="md:w-[600px] flex gap-2 items-center"><input placeholder="Ex: +23645689622" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" disabled type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).logo)}> <label for="logo-upload" class="cursor-pointer relative inline-block px-4 py-2 font-medium group"><span class="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span> <span class="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span> <span class="relative text-black group-hover:text-white">Upload</span></label> <input class="p-2 rounded-md hidden svelte-13fc07g" type="file" id="logo-upload" accept="image/*"></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Working Days:</label></div> <div class="md:w-[600px]"><input placeholder="Ex: +23645689622" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).dateWorking)}></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">Start Time:</label></div> <div class="md:w-[600px]"><input placeholder="Ex: 9.30 am" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).timeStart)}></div></div> <div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">End Time:</label></div> <div class="md:w-[600px]"><input placeholder="Ex: 6.30 pm" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", store_get($$store_subs ??= {}, "$formData", formData).timeEnd)}></div></div> <!--[-->`;
  for (let index = 0, $$length = each_array.length; index < $$length; index++) {
    let link = each_array[index];
    $$payload.out += `<div class="md:flex mb-6 items-center"><div class="md:w-[220px]"><label class="block text-gray-600 font-bold md:text-left pr-4" for="my-textfield">${escape_html(link.label || link.icon)} Link:</label></div> <div class="md:w-[600px]"><input placeholder="Ex: https://example.com" class="w-full p-2 rounded-md svelte-13fc07g" id="my-textfield" type="text"${attr("value", link.link)}></div></div>`;
  }
  $$payload.out += `<!--]--> <button type="submit" class="mt-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group"><span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg></span> <span class="absolute flex items-center justify-center w-full h-full text-purple-500 transition-all duration-300 transform group-hover:translate-x-full ease">Save</span> <span class="relative invisible">Save</span></button></form></div></div>`;
  if ($$store_subs) unsubscribe_stores($$store_subs);
  pop();
}

export { _page as default };
//# sourceMappingURL=_page.svelte-DT24mkkg.js.map
