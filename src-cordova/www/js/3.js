(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "ab55":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Chat.vue?vue&type=template&id=62ef6709&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{ref:"pageChat",staticClass:"flex column page-chat"},[(!_vm.otherUserDetails.online)?_c('q-banner',{staticClass:"fixed-top bg-grey-4 text-center"},[_vm._v("\n    "+_vm._s(_vm.otherUserDetails.name)+" is offline.\n\n    "+_vm._s(_vm.newMessage)+"\n  ")]):_vm._e(),(!_vm.loading)?_c('div',{staticClass:"fixed-top bg-grey-4 text-center"},[_c('div',{staticClass:"q-gutter-md row justify-center"},[_c('q-spinner-puff',{attrs:{"color":"primary","size":"2em"}})],1)]):_vm._e(),_c('div',{staticClass:"q-pa-md column col justify-end"},_vm._l((_vm.messages),function(message,key){return _c('q-chat-message',{key:message.key,class:{'invisible' : !_vm.showMessages},attrs:{"name":message.from == 'me' ? _vm.userDetails.name : _vm.otherUserDetails.name,"text":[message.text],"sent":message.from == 'me' ? true : false,"bg-color":message.from == 'me' ? 'white': 'light-green-2',"stamp":_vm.messageDate(message.created)}})}),1),_c('q-footer',{attrs:{"elevated":""}},[_c('q-toolbar',[_c('q-form',{staticClass:"full-width",on:{"submit":_vm.sendMessage}},[_c('q-input',{ref:"chatInput",attrs:{"bg-color":"white","outlined":"","rounded":"","autofocus":"","label":"Message","dense":""},on:{"blur":_vm.scrollToBottom},scopedSlots:_vm._u([{key:"after",fn:function(){return [_c('q-btn',{attrs:{"round":"","dense":"","flat":"","type":"submit","color":"white","icon":"send"},on:{"click":_vm.sendMessage}})]},proxy:true}]),model:{value:(_vm.newMessage),callback:function ($$v) {_vm.newMessage=$$v},expression:"newMessage"}})],1)],1)],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Chat.vue?vue&type=template&id=62ef6709&

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

// EXTERNAL MODULE: ./src/store/LedgerStore.js
var LedgerStore = __webpack_require__("7001");

// EXTERNAL MODULE: ./src/mixings/other-user-details.js
var other_user_details = __webpack_require__("b612");

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__("bd4c");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Chat.vue?vue&type=script&lang=js&








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




/* harmony default export */ var Chatvue_type_script_lang_js_ = ({
  mixins: [other_user_details["a" /* default */]],
  data: function data() {
    return {
      newMessage: '',
      showMessages: false,
      loading: true
    };
  },
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])('LedgerStore', ['firebaseGetMessages', 'firebaseStopGettingMessages', 'firebaseSendMessage']), {
    sendMessage: function sendMessage() {
      if (this.newMessage == '') {
        return;
      }

      this.firebaseSendMessage({
        message: {
          text: this.newMessage,
          from: 'me'
        },
        otherUserId: this.$route.params.otherUserId
      });
      this.newMessage = '';
      this.$refs.chatInput.$el.focus();
    },
    scrollToBottom: function scrollToBottom() {
      var pageChat = this.$refs.pageChat.$el;
      setTimeout(function () {
        window.scrollTo(0, pageChat.scrollHeight);
      }, 20);
    },
    messageDate: function messageDate(timestamp) {
      return date["a" /* default */].formatDate(timestamp, ' DD MMMM YYYY hh:mm A');
    }
  }),
  computed: _objectSpread({}, Object(vuex_esm["d" /* mapState */])('LedgerStore', ['messages', 'userDetails'])),
  mounted: function mounted() {
    this.firebaseGetMessages(this.$route.params.otherUserId);
    this.loading = false;
  },
  destroyed: function destroyed() {
    this.firebaseStopGettingMessages();
  },
  watch: {
    messages: function messages(val) {
      var _this = this;

      if (Object.keys(val).length) {
        this.scrollToBottom();
        setTimeout(function () {
          _this.showMessages = true;
        }, 100);
      }
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Chat.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Chatvue_type_script_lang_js_ = (Chatvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Chat.vue?vue&type=style&index=0&lang=css&
var Chatvue_type_style_index_0_lang_css_ = __webpack_require__("ac93");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/banner/QBanner.js
var QBanner = __webpack_require__("54e1");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerPuff.js
var QSpinnerPuff = __webpack_require__("06d5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/chat/QChatMessage.js
var QChatMessage = __webpack_require__("8169");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/footer/QFooter.js
var QFooter = __webpack_require__("7ff0");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/toolbar/QToolbar.js
var QToolbar = __webpack_require__("65c6");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/form/QForm.js
var QForm = __webpack_require__("0378");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/pages/Chat.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Chatvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Chat = __webpack_exports__["default"] = (component.exports);










runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBanner: QBanner["a" /* default */],QSpinnerPuff: QSpinnerPuff["a" /* default */],QChatMessage: QChatMessage["a" /* default */],QFooter: QFooter["a" /* default */],QToolbar: QToolbar["a" /* default */],QForm: QForm["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */]})


/***/ }),

/***/ "ac93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("d79d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_5_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_5_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Chat_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

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

/***/ "d79d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=3.js.map