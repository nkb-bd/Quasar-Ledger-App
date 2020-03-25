(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "b612":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  computed: {
    otherUserDetails: function otherUserDetails() {
      if (this.$store.state.LedgerStore.users[this.$route.params.otherUserId]) {
        return this.$store.state.LedgerStore.users[this.$route.params.otherUserId];
      }

      return {};
    }
  }
});

/***/ }),

/***/ "eb60":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fbda");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_MyLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "f241":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MyLayout.vue?vue&type=template&id=cd871c02&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{attrs:{"view":"lHh Lpr lFf"}},[_c('q-header',[_c('q-toolbar',[_c('q-btn',{attrs:{"flat":"","dense":"","round":"","icon":"menu","aria-label":"Menu"},on:{"click":function($event){_vm.leftDrawerOpen = !_vm.leftDrawerOpen}}}),_c('br'),(_vm.$route.path != '/')?_c('q-btn',{directives:[{name:"go-back",rawName:"v-go-back.single",modifiers:{"single":true}}],attrs:{"icon":"arrow_back","flat":"","dense":"","label":"Back"}}):_vm._e(),_c('q-toolbar-title',[_c('q-btn',{attrs:{"flat":"","exact":"","to":"/"}},[_vm._v("  Ledger App\n        ")])],1),(!_vm.userDetails.userId)?_c('div',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/auth","outline":"","clickable":"","icon-right":"account_box","label":"Login"}})],1):_vm._e(),(_vm.userDetails.userId)?_c('div',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"outline":"","clickable":"","icon-right":"exit_to_app"},on:{"click":_vm.logoutUser}},[_vm._v("\n          Logout\n        ")])],1):_vm._e()],1),_c('div',{staticClass:"q-px-lg q-pt-md q-mb-md"},[_c('q-fab',{staticClass:"my-fab-btn q-mb-sm",attrs:{"label":"Menu","label-position":"left","color":"white","square":"","dense":"","outline":"","icon":"keyboard_arrow_right","direction":"right"},model:{value:(_vm.fab1),callback:function ($$v) {_vm.fab1=$$v},expression:"fab1"}},[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/","clickable":""}},[_c('q-item-section',{staticClass:"my-item-menu"},[_c('q-icon',{attrs:{"name":"list"}})],1),_c('q-item-section',{staticClass:"q-pa-none"},[_vm._v("\n            Dashbaord\n          ")])],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/history","clickable":""}},[_c('q-item-section',{staticClass:"my-item-menu"},[_c('q-icon',{attrs:{"name":"history"}})],1),_c('q-item-section',[_vm._v("\n            History\n          ")])],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/users","clickable":""}},[_c('q-item-section',{staticClass:"my-item-menu"},[_c('q-icon',{attrs:{"name":"supervised_user_circle"}})],1),_c('q-item-section',[_vm._v("\n            Users\n          ")])],1)],1),_c('div',{staticClass:"text-h5"},[_vm._v("\n       "+_vm._s(_vm.title)+"\n      ")]),_c('div',{staticClass:"text-subtitle-1"},[_vm._v("\n        "+_vm._s(_vm.todaysDate)+"\n      ")])],1),_c('q-img',{staticClass:"header-image absolute-top",attrs:{"src":'statics/mountain.jpg'}}),_c('div',{staticClass:"absolute-bottom-right z-max"},[_vm._v(" "+_vm._s(_vm.loggedInUser)+"      @created by lukman.nakib@gmail.com\n    ")])],1),_c('q-drawer',{attrs:{"width":200,"breakpoint":400,"elevated":"","overlay":""},model:{value:(_vm.leftDrawerOpen),callback:function ($$v) {_vm.leftDrawerOpen=$$v},expression:"leftDrawerOpen"}},[_c('q-scroll-area',{staticStyle:{"height":"calc(100% - 185px)","margin-top":"185px","border-right":"1px solid #ddd"}},[_c('q-list',{attrs:{"padding":""}},[_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/","clickable":""}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"list"}})],1),_c('q-item-section',[_vm._v("\n           Dashbaord\n          ")])],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/history","clickable":""}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"history"}})],1),_c('q-item-section',[_vm._v("\n            History\n          ")])],1),_c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"exact":"","to":"/users","clickable":""}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":"supervised_user_circle"}})],1),_c('q-item-section',[_vm._v("\n            Users\n          ")])],1)],1)],1),_c('q-img',{staticClass:"absolute-top",staticStyle:{"height":"185px"},attrs:{"src":'statics/mountain.jpg'}},[_c('div',{staticClass:"absolute-bottom bg-transparent"},[_c('q-avatar',{staticClass:"q-mb-sm",attrs:{"size":"56px"}},[_c('img',{attrs:{"src":"https://cdn.quasar.dev/img/boy-avatar.png"}})]),(_vm.userDetails.userId)?_c('div',{staticClass:"text-weight-bold"},[_vm._v(" "+_vm._s(_vm.userDetails.name))]):_vm._e(),_c('div',[_vm._v("@lukman.nakib")])],1)]),(_vm.leftDrawerOpen)?_c('div',[_c('div',{staticClass:"q-mini-drawer-hide absolute",staticStyle:{"top":"15px","right":"-12px"}},[_c('q-btn',{attrs:{"dense":"","round":"","unelevated":"","color":"accent","icon":"chevron_left"},on:{"click":function($event){_vm.leftDrawerOpen = false}}})],1)]):_vm._e()],1),_c('q-page-container',[_c('keep-alive',[(_vm.loading)?_c('q-inner-loading',[_c('q-spinner-gears',{attrs:{"size":"50px","color":"primary"}})],1):_vm._e(),_c('transition',{attrs:{"name":"slide","mode":"out-in"}},[_c('router-view')],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/MyLayout.vue?vue&type=template&id=cd871c02&

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

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__("bd4c");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/mixings/other-user-details.js
var other_user_details = __webpack_require__("b612");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/MyLayout.vue?vue&type=script&lang=js&











function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { defineProperty_default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var MyLayoutvue_type_script_lang_js_ = ({
  name: 'MyLayout',
  mixins: [other_user_details["a" /* default */]],
  data: function data() {
    return {
      loading: true,
      fab1: false,
      leftDrawerOpen: false
    };
  },
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])('LedgerStore', ['logoutUser'])),
  computed: _objectSpread({}, Object(vuex_esm["d" /* mapState */])('LedgerStore', ['userDetails', 'loggedInUser']), {
    todaysDate: function todaysDate() {
      var timeStamp = Date.now();
      return date["a" /* default */].formatDate(timeStamp, 'dddd, DD MMMM ');
    },
    title: function title() {
      var currentPath = this.$route.path;
      if (currentPath == '/') return "Ledger App ";
      if (currentPath == '/users') return "User List ";
      if (currentPath == '/history') return "Record History ";
      if (currentPath.includes('/chat')) return this.otherUserDetails.name;
      if (currentPath == '/auth') return "Login ";
    }
  }),
  mounted: function mounted() {
    var _this = this;

    this.leftDrawerOpen = false;
    console.log(this.leftDrawerOpen);
    this.$router.beforeEach(function (to, from, next) {
      if (to.meta.requiresAuth) {
        if (!_this.userDetails) {
          next('/auth');
        } else {
          next();
        }
      } else {
        next();
      }
    });
    this.loading = false;
  }
});
// CONCATENATED MODULE: ./src/layouts/MyLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_MyLayoutvue_type_script_lang_js_ = (MyLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layouts/MyLayout.vue?vue&type=style&index=0&lang=css&
var MyLayoutvue_type_style_index_0_lang_css_ = __webpack_require__("eb60");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js
var QLayout = __webpack_require__("4d5a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/header/QHeader.js
var QHeader = __webpack_require__("e359");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbarTitle.js
var QToolbarTitle = __webpack_require__("6ac5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/fab/QFab.js + 1 modules
var QFab = __webpack_require__("c294");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js
var QDrawer = __webpack_require__("9404");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/scroll-area/QScrollArea.js
var QScrollArea = __webpack_require__("4983");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("09e3");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/inner-loading/QInnerLoading.js
var QInnerLoading = __webpack_require__("74f7");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/GoBack.js
var GoBack = __webpack_require__("2eeb");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// CONCATENATED MODULE: ./src/layouts/MyLayout.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  layouts_MyLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var MyLayout = __webpack_exports__["default"] = (component.exports);


















runtime_auto_import_default()(component, 'components', {QLayout: QLayout["a" /* default */],QHeader: QHeader["a" /* default */],QToolbar: QToolbar["a" /* default */],QBtn: QBtn["a" /* default */],QToolbarTitle: QToolbarTitle["a" /* default */],QFab: QFab["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QIcon: QIcon["a" /* default */],QImg: QImg["a" /* default */],QDrawer: QDrawer["a" /* default */],QScrollArea: QScrollArea["a" /* default */],QList: QList["a" /* default */],QAvatar: QAvatar["a" /* default */],QPageContainer: QPageContainer["a" /* default */],QInnerLoading: QInnerLoading["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */]})



runtime_auto_import_default()(component, 'directives', {GoBack: GoBack["a" /* default */],Ripple: Ripple["a" /* default */]})


/***/ }),

/***/ "fbda":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=2.js.map