/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		1: 0
/******/ 	}
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1,"4":1,"5":1,"6":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"2":"28ce56df","3":"95cdd6eb","4":"7739c956","5":"662568f4","6":"93c66a79","7":"31d6cfe0","8":"31d6cfe0","9":"31d6cfe0","10":"31d6cfe0","11":"31d6cfe0","12":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/regenerator/index.js
var regenerator = __webpack_require__("967e");
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.replace.js
var es6_regexp_replace = __webpack_require__("a481");

// EXTERNAL MODULE: ./node_modules/regenerator-runtime/runtime.js
var runtime = __webpack_require__("96cf");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__("fa84");
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.sass
var quasar = __webpack_require__("985d");

// EXTERNAL MODULE: ./src/css/app.scss
var css_app = __webpack_require__("31cd");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/slide-transition/QSlideTransition.js
var QSlideTransition = __webpack_require__("e9c1");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Dialog.js + 6 modules
var Dialog = __webpack_require__("436b");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/







vue_runtime_esm["a" /* default */].use(vue_plugin["a" /* default */], {
  config: {},
  lang: en_us["a" /* default */],
  iconSet: icon_set_material_icons["a" /* default */],
  components: {
    QSlideTransition: QSlideTransition["a" /* default */]
  },
  plugins: {
    Dialog: Dialog["a" /* default */],
    Notify: Notify["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=694996a3&
var Appvue_type_template_id_694996a3_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=694996a3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__("ac6a");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__("cadf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__("06db");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__("456d");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&








function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//

/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App',
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])('LedgerStore', ['handleAuthChange'])),
  mounted: function mounted() {
    this.handleAuthChange();
  }
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  Appvue_type_template_id_694996a3_render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./src/store/LedgerStore.js
var LedgerStore = __webpack_require__("7001");

// CONCATENATED MODULE: ./src/store/index.js

 // we first import the module


vue_runtime_esm["a" /* default */].use(vuex_esm["a" /* default */]);
/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  var Store = new vuex_esm["a" /* default */].Store({
    modules: {
      LedgerStore: LedgerStore["a" /* default */]
    },
    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: false
  });
  /*
    if we want some HMR magic for it, we handle
    the hot update like below. Notice we guard this
    code with "process.env.DEV" -- so this doesn't
    get into our production build (and it shouldn't).
  */

  return Store;
});
// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// CONCATENATED MODULE: ./src/router/routes.js
var routes = [{
  path: '/',
  component: function component() {
    return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "f241"));
  },
  children: [{
    path: '',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "9f3b"));
    }
  }, {
    path: '/todo',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "a751"));
    }
  }, {
    path: '/history',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "f3e7"));
    }
  }, {
    path: '/help',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "9fc0"));
    }
  }, {
    path: '/auth',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "ed20"));
    }
  }, {
    path: '/users',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "051b"));
    },
    meta: {
      requiresAuth: true
    }
  }, {
    path: '/chat/:otherUserId',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "ab55"));
    },
    meta: {
      requiresAuth: true
    }
  }]
}]; // Always leave this as last one

if (true) {
  routes.push({
    path: '*',
    component: function component() {
      return Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "e51e"));
    }
  });
}

/* harmony default export */ var router_routes = (routes);
// CONCATENATED MODULE: ./src/router/index.js




vue_runtime_esm["a" /* default */].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

/* harmony default export */ var src_router = (function ()
/* { store, ssrContext } */
{
  var _VueRouter;

  var Router = new vue_router_esm["a" /* default */]((_VueRouter = {
    scrollBehavior: function scrollBehavior() {
      return {
        x: 0,
        y: 0
      };
    },
    mode: 'history',
    routes: router_routes
  }, defineProperty_default()(_VueRouter, "mode", "hash"), defineProperty_default()(_VueRouter, "base", ""), _VueRouter));
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js




/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (function () {
  return _ref.apply(this, arguments);
});

function _ref() {
  _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var store, router, app;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof src_store === 'function')) {
              _context.next = 6;
              break;
            }

            _context.next = 3;
            return src_store({
              Vue: vue_runtime_esm["a" /* default */]
            });

          case 3:
            _context.t0 = _context.sent;
            _context.next = 7;
            break;

          case 6:
            _context.t0 = src_store;

          case 7:
            store = _context.t0;

            if (!(typeof src_router === 'function')) {
              _context.next = 14;
              break;
            }

            _context.next = 11;
            return src_router({
              Vue: vue_runtime_esm["a" /* default */],
              store: store
            });

          case 11:
            _context.t1 = _context.sent;
            _context.next = 15;
            break;

          case 14:
            _context.t1 = src_router;

          case 15:
            router = _context.t1;
            // make router instance available in store
            store.$router = router; // Create the app instantiation Object.
            // Here we inject the router, store to all child components,
            // making them available everywhere as `this.$router` and `this.$store`.

            app = {
              el: '#q-app',
              router: router,
              store: store,
              render: function render(h) {
                return h(App);
              }
            }; // expose the app, the router and the store.
            // note we are not mounting the app here, since bootstrapping will be
            // different depending on whether we are in a browser or on the server.

            return _context.abrupt("return", {
              app: app,
              store: store,
              router: router
            });

          case 19:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref.apply(this, arguments);
}
// EXTERNAL MODULE: ./src/boot/firebase.js
var firebase = __webpack_require__("fc1b");

// CONCATENATED MODULE: ./.quasar/client-entry.js





/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/

 // We load Quasar stylesheet file







function start() {
  return _start.apply(this, arguments);
}

function _start() {
  _start = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee() {
    var _yield$createApp, app, store, router, routeUnchanged, redirect, urlPath, bootFiles, i;

    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _quasar_app();

          case 2:
            _yield$createApp = _context.sent;
            app = _yield$createApp.app;
            store = _yield$createApp.store;
            router = _yield$createApp.router;
            routeUnchanged = true;

            redirect = function redirect(url) {
              routeUnchanged = false;
              window.location.href = url;
            };

            urlPath = window.location.href.replace(window.location.origin, '');
            bootFiles = [firebase["default"]];
            i = 0;

          case 11:
            if (!(routeUnchanged === true && i < bootFiles.length)) {
              _context.next = 29;
              break;
            }

            if (!(typeof bootFiles[i] !== 'function')) {
              _context.next = 14;
              break;
            }

            return _context.abrupt("continue", 26);

          case 14:
            _context.prev = 14;
            _context.next = 17;
            return bootFiles[i]({
              app: app,
              router: router,
              store: store,
              Vue: vue_runtime_esm["a" /* default */],
              ssrContext: null,
              redirect: redirect,
              urlPath: urlPath
            });

          case 17:
            _context.next = 26;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](14);

            if (!(_context.t0 && _context.t0.url)) {
              _context.next = 24;
              break;
            }

            window.location.href = _context.t0.url;
            return _context.abrupt("return");

          case 24:
            console.error('[Quasar] boot error:', _context.t0);
            return _context.abrupt("return");

          case 26:
            i++;
            _context.next = 11;
            break;

          case 29:
            if (!(routeUnchanged === false)) {
              _context.next = 31;
              break;
            }

            return _context.abrupt("return");

          case 31:
            document.addEventListener('deviceready', function () {
              vue_runtime_esm["a" /* default */].prototype.$q.cordova = window.cordova;
              new vue_runtime_esm["a" /* default */](app);
            }, false); // on deviceready

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[14, 19]]);
  }));
  return _start.apply(this, arguments);
}

start();

/***/ }),

/***/ "31cd":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "7001":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ac6a");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cadf");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("06db");
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("456d");
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("a481");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("7f7f");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Users_nakib_Projects_quasar_quasar_todo_node_modules_babel_runtime_corejs2_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("dad6");
/* harmony import */ var _Users_nakib_Projects_quasar_quasar_todo_node_modules_babel_runtime_corejs2_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_Users_nakib_Projects_quasar_quasar_todo_node_modules_babel_runtime_corejs2_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("f751");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("2b0e");
/* harmony import */ var quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("2a19");
/* harmony import */ var quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("f508");
/* harmony import */ var quasar_src_components_spinner_QSpinnerPuff_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("06d5");
/* harmony import */ var _boot_firebase__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("fc1b");
/* harmony import */ var quasar_src_utils_uid_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("1732");














var messageRef;
var businessRef;
var state = {
  userDetails: {},
  users: {},
  messages: {},
  businessList: {},
  records: {},
  errors: []
};
var mutations = {
  addBusiness: function addBusiness(state, payload) {
    console.log('get b2');
    vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].set(state.businessList, payload.businessId, payload.businessDetails);
  },
  addRecord: function addRecord(state, payload) {
    vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].set(state.records, payload.recordId, payload.recordDetails);
  },
  setUserDetails: function setUserDetails(state, payload) {
    state.userDetails = payload;
  },
  addUser: function addUser(state, payload) {
    vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].set(state.users, payload.userId, payload.userDetails);
  },
  updateUser: function updateUser(state, payload) {
    Object.assign(state.users[payload.userId], payload.userDetails);
  },
  addMessage: function addMessage(state, payload) {
    vue__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"].set(state.messages, payload.messageId, payload.messageDetails);
  },
  clearMessages: function clearMessages() {
    state.messages = {};
  },
  setErrors: function setErrors(state, payload) {
    state.errors.push(payload);
  },
  clearError: function clearError() {
    state.errors = [];
  }
};
var actions = {
  registerUser: function registerUser(_ref, payload) {
    _Users_nakib_Projects_quasar_quasar_todo_node_modules_babel_runtime_corejs2_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6___default()(_ref);

    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].createUserWithEmailAndPassword(payload.email, payload.password).then(function (response) {
      var userId = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].currentUser.uid;
      _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('users/' + userId).set({
        name: payload.name,
        email: payload.email,
        password: payload.password,
        online: true
      });
    }).catch(function (error) {
      console.log(error);
      dispatch('addErrorMessage', error); // return error.message
    });
  },
  loginUser: function loginUser(_ref2, payload) {
    var commit = _ref2.commit,
        dispatch = _ref2.dispatch;
    console.log('?');
    var errorMessage = '';
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].signInWithEmailAndPassword(payload.email, payload.password).then(function (response) {
      var userId = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].currentUser.uid;
    }).catch(function (error) {
      dispatch('addErrorMessage', error);
    });
  },
  logoutUser: function logoutUser() {
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].signOut();
  },
  handleAuthChange: function handleAuthChange(_ref3) {
    var _this = this;

    var commit = _ref3.commit,
        dispatch = _ref3.dispatch,
        state = _ref3.state;
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].onAuthStateChanged(function (user) {
      if (user) {
        // User is logged in.
        var userId = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseAuth */ "b"].currentUser.uid;
        _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('users/' + userId).once('value', function (snapshot) {
          var userDetails = snapshot.val();
          commit('setUserDetails', {
            name: userDetails.name,
            email: userDetails.email,
            userId: userId
          });
        });
        dispatch('firebaseUpdateUser', {
          userId: userId,
          updates: {
            online: true
          }
        });
        dispatch('firebaseGetBusiness', userId);
        dispatch('clearErrorMessage');

        _this.$router.replace('/');
      } else {
        // User is signed out.
        dispatch('firebaseUpdateUser', {
          userId: state.userDetails.userId,
          updates: {
            online: false
          }
        });
        commit('setUserDetails', {});

        _this.$router.replace('/auth');
      }
    });
  },
  firebaseUpdateUser: function firebaseUpdateUser(_ref4, payload) {
    _Users_nakib_Projects_quasar_quasar_todo_node_modules_babel_runtime_corejs2_helpers_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_6___default()(_ref4);

    if (payload.userId) {
      _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('users/' + payload.userId).update(payload.updates);
    }
  },
  firebaseGetUsers: function firebaseGetUsers(_ref5, payload) {
    var commit = _ref5.commit;
    console.log('get users');
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('users/').on('child_added', function (snapshot) {
      var userDetails = snapshot.val();
      var userId = snapshot.key;
      commit('addUser', {
        userId: userId,
        userDetails: userDetails
      });
    });
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('users/').on('child_changed', function (snapshot) {
      var userDetails = snapshot.val();
      var userId = snapshot.key;
      commit('updateUser', {
        userId: userId,
        userDetails: userDetails
      });
    });
  },
  firebaseGetMessages: function firebaseGetMessages(_ref6, otherUserId) {
    var commit = _ref6.commit,
        state = _ref6.state;
    var userId = state.userDetails.userId;
    messageRef = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('chats/' + userId + '/' + otherUserId);
    messageRef.on('child_added', function (snapshot) {
      var messageDetails = snapshot.val();
      var messageId = snapshot.key;
      commit('addMessage', {
        messageId: messageId,
        messageDetails: messageDetails
      });
    });
  },
  firebaseStopGettingMessages: function firebaseStopGettingMessages(_ref7) {
    var commit = _ref7.commit;

    if (messageRef) {
      messageRef.off('child_added');
    }

    commit('clearMessages');
  },
  firebaseSendMessage: function firebaseSendMessage(_ref8, payload) {
    var commit = _ref8.commit,
        state = _ref8.state;
    var userId = state.userDetails.userId;
    payload.message.created = Date.now();
    messageRef = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('chats/' + userId + '/' + payload.otherUserId).push(payload.message);
    payload.message.from = 'them';
    messageRef = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('chats/' + payload.otherUserId + '/' + userId).push(payload.message);
  },
  firebaseAddBusiness: function firebaseAddBusiness(_ref9, businessData) {
    var commit = _ref9.commit,
        state = _ref9.state;
    var userId = state.userDetails.userId;
    businessData.created = Date.now();
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('business_list/' + userId).push(businessData);
  },
  firebaseGetBusiness: function firebaseGetBusiness(_ref10, userId) {
    var commit = _ref10.commit,
        state = _ref10.state;
    quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].show({
      spinner: quasar_src_components_spinner_QSpinnerPuff_js__WEBPACK_IMPORTED_MODULE_11__[/* default */ "a"]
    });
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('business_list/' + userId).on('child_added', function (snapshot) {
      var businessDetails = snapshot.val();
      var businessId = snapshot.key;
      commit('addBusiness', {
        businessId: businessId,
        businessDetails: businessDetails
      });
      quasar_src_plugins_Loading_js__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"].hide();
    });
  },
  firebaseAddRecord: function firebaseAddRecord(_ref11, recordData) {
    var commit = _ref11.commit,
        state = _ref11.state;
    var userId = state.userDetails.userId;
    recordData.userId = userId;
    _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('entry_records/' + recordData.businessId).push(recordData);
    quasar_src_plugins_Notify_js__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"].create({
      type: 'positive',
      color: 'positive',
      timeout: 600,
      position: 'center',
      message: 'Record saved.'
    });
  },
  firebaseGetRecordList: function firebaseGetRecordList(_ref12, payload) {
    var commit = _ref12.commit,
        state = _ref12.state;
    var userId = state.userDetails.userId;
    messageRef = _boot_firebase__WEBPACK_IMPORTED_MODULE_12__[/* firebaseDb */ "c"].ref('entry_records' + '/' + payload.businessId).on('child_added', function (snapshot) {
      var recordDetails = snapshot.val();
      var recordId = snapshot.key;
      commit('addRecord', {
        recordId: recordId,
        recordDetails: recordDetails
      });
    });
  },
  addErrorMessage: function addErrorMessage(_ref13, payload) {
    var commit = _ref13.commit;
    var errorMessage = '';

    if (payload.code == "auth/wrong-password") {
      errorMessage = 'Invalid User login info !';
      commit('setErrors', errorMessage);
    } else if (payload.code == "auth/user-not-found") {
      errorMessage = 'No user found !';
    } else {
      errorMessage = 'An error occurred please check your internet connection!';
    }

    commit('setErrors', errorMessage);
  },
  clearErrorMessage: function clearErrorMessage(_ref14) {
    var commit = _ref14.commit;
    commit('clearError');
  }
};
var getters = {
  users: function users(state) {
    var usersFiltered = {};
    Object.keys(state.users).forEach(function (key) {
      if (key != state.userDetails.userId) {
        usersFiltered[key] = state.users[key];
      }
    });
    return usersFiltered;
  },
  loggedInUser: function loggedInUser(state) {
    if (state.userDetails) {
      return state.userDetails;
    }

    return false;
  },
  businessListGetter: function businessListGetter(state) {
    return state.businessList;
  },
  recordListGetter: function recordListGetter(state) {
    console.log('ggeetter');
    return state.records;
  },
  getErrors: function getErrors(state) {
    return state.errors;
  }
};
/* harmony default export */ __webpack_exports__["a"] = ({
  namespaced: true,
  state: state,
  mutations: mutations,
  actions: actions,
  getters: getters
});

/***/ }),

/***/ "fc1b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return firebaseAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return firebaseDb; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("59ca");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var firebase_analytics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("000b");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ea7b");
/* harmony import */ var firebase_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("66ce");
// Firebase App (the core Firebase SDK) is always required and must be listed first
 // If you enabled Analytics in your project, add the Firebase SDK for Analytics

 // Add the Firebase products that you want to use


 // Your web app's Firebase configuration

var firebaseConfig = {
  apiKey: "AIzaSyCQo5S5l8LLm_d1LIRifVOmd-_CSEXi5L8",
  authDomain: "vue-firebase-1-b3001.firebaseapp.com",
  databaseURL: "https://vue-firebase-1-b3001.firebaseio.com",
  projectId: "vue-firebase-1-b3001",
  storageBucket: "vue-firebase-1-b3001.appspot.com",
  messagingSenderId: "636174946136",
  appId: "1:636174946136:web:5b42a9e5bb6e4c5f071f2d"
}; // Initialize Firebase

var firebaseApp = firebase_app__WEBPACK_IMPORTED_MODULE_0__["initializeApp"](firebaseConfig);
var firebaseAuth = firebaseApp.auth();
var firebaseDb = firebaseApp.database();


/***/ })

/******/ });
//# sourceMappingURL=app.js.map