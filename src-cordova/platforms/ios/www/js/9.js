(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "ed20":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Authentication.vue?vue&type=template&id=051258ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{attrs:{"padding":""}},[_c('q-card',[_c('q-tabs',{staticClass:"text-grey",attrs:{"dense":"","active-color":"primary","indicator-color":"primary","align":"center","narrow-indicator":""},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('q-tab',{attrs:{"name":"login","label":"Login"}}),_c('q-tab',{attrs:{"name":"register","label":"Register"}})],1),_c('q-separator'),_c('q-tab-panels',{attrs:{"animated":"","swipeable":"","transition-prev":"fade","transition-next":"fade"},model:{value:(_vm.tab),callback:function ($$v) {_vm.tab=$$v},expression:"tab"}},[_c('q-tab-panel',{attrs:{"name":"login"}},[_c('q-card-section',[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmitLogin($event)}}},[_c('div',{staticClass:"row"},[_c('q-input',{ref:"email",staticClass:"full-width ",attrs:{"outlined":"","autofocus":"","type":"email","rules":[ function (val) { return val && val.length > 0 || 'Please type something'; }],"label":"Email"},model:{value:(_vm.formDataLogin.email),callback:function ($$v) {_vm.$set(_vm.formDataLogin, "email", $$v)},expression:"formDataLogin.email"}}),_c('q-input',{ref:"password",staticClass:"full-width ",attrs:{"filled":"","type":_vm.isPwd ? 'password' : 'text',"label":"Password","outlined":""},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":_vm.isPwd ? 'visibility_off' : 'visibility'},on:{"click":function($event){_vm.isPwd = !_vm.isPwd}}})]},proxy:true}]),model:{value:(_vm.formDataLogin.password),callback:function ($$v) {_vm.$set(_vm.formDataLogin, "password", $$v)},expression:"formDataLogin.password"}}),_c('div',{staticClass:"col-12 text-center q-mt-md "},[_c('q-btn',{attrs:{"loading":_vm.loading,"color":"primary center","type":"submit","label":"Login"},on:{"click":function($event){_vm.loading=true}}})],1)],1)])])],1),_c('q-tab-panel',{attrs:{"name":"register"}},[_c('q-card-section',[_c('form',{on:{"submit":function($event){$event.preventDefault();return _vm.onSubmitReg($event)}}},[_c('div',{staticClass:"row"},[_c('q-input',{ref:"name",staticClass:"full-width ",attrs:{"outlined":"","autofocus":"","rules":[ function (val) { return val && val.length > 0 || 'Please type something'; }],"type":"text","label":"Name"},model:{value:(_vm.formDataRegister.name),callback:function ($$v) {_vm.$set(_vm.formDataRegister, "name", $$v)},expression:"formDataRegister.name"}}),_c('q-input',{ref:"email",staticClass:"full-width ",attrs:{"outlined":"","rules":[ function (val) { return val && val.length > 0 || 'Please type something'; }],"type":"email","label":"Email"},model:{value:(_vm.formDataRegister.email),callback:function ($$v) {_vm.$set(_vm.formDataRegister, "email", $$v)},expression:"formDataRegister.email"}}),_c('q-input',{ref:"password",staticClass:"full-width ",attrs:{"filled":"","type":_vm.isPwd ? 'password' : 'text',"label":"Password","outlined":""},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",attrs:{"name":_vm.isPwd ? 'visibility_off' : 'visibility'},on:{"click":function($event){_vm.isPwd = !_vm.isPwd}}})]},proxy:true}]),model:{value:(_vm.formDataRegister.password),callback:function ($$v) {_vm.$set(_vm.formDataRegister, "password", $$v)},expression:"formDataRegister.password"}}),_c('div',{staticClass:"col-12 text-center "},[_c('q-btn',{attrs:{"loading":_vm.loading,"color":"primary q-mt-md center","type":"submit","label":"Register "},on:{"click":function($event){_vm.loading=true}}})],1)],1)])])],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Authentication.vue?vue&type=template&id=051258ac&

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

// EXTERNAL MODULE: ./node_modules/@babel/runtime-corejs2/helpers/defineProperty.js
var defineProperty = __webpack_require__("c47a");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty);

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Authentication.vue?vue&type=script&lang=js&









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

/* harmony default export */ var Authenticationvue_type_script_lang_js_ = ({
  // name: 'ComponentName',
  data: function data() {
    return {
      isPwd: true,
      loading: false,
      tab: 'login',
      formDataLogin: {
        email: 'harry@email.com',
        password: '123456'
      },
      formDataRegister: {
        name: '',
        email: '',
        mobile: ''
      }
    };
  },
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])('LedgerStore', ['registerUser', 'loginUser']), {
    closeModal: function closeModal() {
      this.$emit('updated', true);
    },
    onSubmitLogin: function onSubmitLogin() {
      this.loading = true;

      if (!this.$refs.password.hasError && !this.$refs.email.hasError) {
        console.log('no error');
        this.$emit('updated', true);
        this.loginUser(this.formDataLogin); // this.loading = false;
      } // this.loading = false;

    },
    onSubmitReg: function onSubmitReg() {
      var _this = this;

      if (!this.$refs.password.hasError && !this.$refs.email.hasError && !this.$refs.name.hasError) {
        this.$emit('updated', true);
        this.loading = true;
        this.registerUser(this.formDataRegister);
        setTimeout(function () {
          // we're done, we reset loading state
          _this.loading = false;
        }, 800);
      }
    }
  })
});
// CONCATENATED MODULE: ./src/pages/Authentication.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Authenticationvue_type_script_lang_js_ = (Authenticationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCard.js
var QCard = __webpack_require__("f09f");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTabs.js
var QTabs = __webpack_require__("429b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tabs/QTab.js
var QTab = __webpack_require__("7460");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/separator/QSeparator.js
var QSeparator = __webpack_require__("eb85");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanels.js
var QTabPanels = __webpack_require__("adad");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/tab-panels/QTabPanel.js
var QTabPanel = __webpack_require__("823b");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/card/QCardSection.js
var QCardSection = __webpack_require__("a370");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/pages/Authentication.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Authenticationvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Authentication = __webpack_exports__["default"] = (component.exports);












runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QCard: QCard["a" /* default */],QTabs: QTabs["a" /* default */],QTab: QTab["a" /* default */],QSeparator: QSeparator["a" /* default */],QTabPanels: QTabPanels["a" /* default */],QTabPanel: QTabPanel["a" /* default */],QCardSection: QCardSection["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QBtn: QBtn["a" /* default */]})


/***/ })

}]);
//# sourceMappingURL=9.js.map