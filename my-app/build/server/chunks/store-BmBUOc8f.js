import { a0 as current_component } from './index-CSLrv6GN.js';
import { w as writable } from './index3-BHgDL_ZE.js';

function onDestroy(fn) {
  var context = (
    /** @type {Component} */
    current_component
  );
  (context.d ??= []).push(fn);
}
const dataStore = writable({});
const globalLoading = writable(false);

export { dataStore as d, globalLoading as g, onDestroy as o };
//# sourceMappingURL=store-BmBUOc8f.js.map
