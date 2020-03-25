(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "40d3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("adee");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_scss_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_Todo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "a751":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Todo.vue?vue&type=template&id=7c8eb1d0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"q-pa-lg  bg-grey-2 column"},[_c('div',{staticClass:"row q-pa-sm bg-primary"},[_c('q-input',{staticClass:"col bg-white q-pl-sm",attrs:{"borderless":"","placeholder":"Add Task","dense":""},on:{"keydown":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.addTask($event)}},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-btn',{attrs:{"round":"","dense":"","flat":"","icon":"add"},on:{"click":_vm.addTask}})]},proxy:true}]),model:{value:(_vm.newTask),callback:function ($$v) {_vm.newTask=$$v},expression:"newTask"}})],1),_c('div',[_c('div',{staticClass:"q-gutter-sm"},[_c('q-list',{staticClass:"bg-white",attrs:{"separator":"","bordered":""}},_vm._l((_vm.tasks),function(task,index){return _c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],key:task.title,class:{'done bg-blue-1' : task.done  },attrs:{"clickable":""},on:{"click":function($event){task.done= !task.done}}},[_c('q-item-section',{attrs:{"avatar":"","top":""}},[_c('q-checkbox',{model:{value:(task.done),callback:function ($$v) {_vm.$set(task, "done", $$v)},expression:"task.done"}})],1),_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(task.title))])],1),(task.done)?_c('q-item-section',{attrs:{"side":""}},[_c('q-btn',{attrs:{"dense":"","outline":"","round":"","color":"primary","icon":"delete"},on:{"click":function($event){$event.stopPropagation();return _vm.deleteTask(index)}}})],1):_vm._e()],1)}),1),(!_vm.tasks.length)?_c('div',{staticClass:"no-tasks absolute-center"},[_c('q-icon',{attrs:{"name":"check","size":"100px","color":"primary text-center"}}),_c('div',{staticClass:"text-h5 text-primary text-center"},[_vm._v("\n              No task\n            ")])],1):_vm._e()],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Todo.vue?vue&type=template&id=7c8eb1d0&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Todo.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Todovue_type_script_lang_js_ = ({
  name: 'Todo',
  data: function data() {
    return {
      newTask: '',
      tasks: []
    };
  },
  methods: {
    deleteTask: function deleteTask(index) {
      var _this = this;

      this.$q.dialog({
        title: 'Delete',
        message: 'Confirm Delete?'
      }).onOk(function () {
        // console.log('OK')
        _this.tasks.splice(index, 1); // inside of a Vue component


        _this.$q.notify.setDefaults({
          position: 'top-right',
          timeout: 2500,
          textColor: 'white',
          color: 'primary',
          actions: [{
            icon: 'close',
            color: 'white'
          }]
        });

        _this.$q.notify('Task Deleted!');
      }).onCancel(function () {// console.log('Cancel')
      }).onDismiss(function () {// console.log('I am triggered on both OK and Cancel')
      });
    },
    addTask: function addTask() {
      if (this.newTask != '') {
        this.tasks.push({
          title: this.newTask,
          done: false
        });
        this.newTask = '';
      } else {
        this.$q.notify('Can not add empty task!');
      }
    }
  }
});
// CONCATENATED MODULE: ./src/pages/Todo.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Todovue_type_script_lang_js_ = (Todovue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/Todo.vue?vue&type=style&index=0&lang=scss&
var Todovue_type_style_index_0_lang_scss_ = __webpack_require__("40d3");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/checkbox/QCheckbox.js
var QCheckbox = __webpack_require__("8f8e");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/field/QField.js + 2 modules
var QField = __webpack_require__("8572");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// CONCATENATED MODULE: ./src/pages/Todo.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Todovue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Todo = __webpack_exports__["default"] = (component.exports);











runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QCheckbox: QCheckbox["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QIcon: QIcon["a" /* default */],QField: QField["a" /* default */]})


runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]})


/***/ }),

/***/ "adee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6.js.map