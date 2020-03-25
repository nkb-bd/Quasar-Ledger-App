(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "f3e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/History.vue?vue&type=template&id=4229d0d3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{attrs:{"padding":""}},[_c('div',{},[_c('q-table',{attrs:{"data":_vm.data,"columns":_vm.columns,"row-key":"name"}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/History.vue?vue&type=template&id=4229d0d3&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/History.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Historyvue_type_script_lang_js_ = ({
  // name: 'PageName',
  data: function data() {
    return {
      columns: [{
        name: 'name',
        required: true,
        label: 'Busniness Name',
        align: 'left',
        field: function field(row) {
          return row.name;
        },
        format: function format(val) {
          return "".concat(val);
        },
        sortable: true,
        classes: 'bg-grey-2 ellipsis',
        style: 'max-width: 100px',
        headerClasses: 'bg-primary text-white'
      }, {
        name: 'in',
        align: 'In',
        label: 'In',
        field: 'in',
        sortable: true
      }, {
        name: 'out',
        label: 'Out',
        field: 'out',
        sortable: true
      }, {
        name: 'date',
        label: 'Date',
        field: 'date',
        sortable: true
      }, {
        name: 'time',
        label: 'Time',
        field: 'time',
        sortable: true
      }],
      data: [{
        name: 'Frozen Yogurt',
        in: 159,
        out: 6.0,
        date: '10-10-2020',
        time: '1 min ago'
      }, {
        name: 'Ice cream sandwich',
        in: 237,
        out: 9.0,
        date: '10-10-2020'
      }, {
        name: 'Eclair',
        in: 262,
        out: 16.0,
        date: '10-10-2020'
      }, {
        name: 'Cupcake',
        in: 305,
        out: 3.7,
        date: '10-10-2020'
      }]
    };
  }
});
// CONCATENATED MODULE: ./src/pages/History.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Historyvue_type_script_lang_js_ = (Historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 27 modules
var QTable = __webpack_require__("eaac");

// CONCATENATED MODULE: ./src/pages/History.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Historyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var History = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QTable: QTable["a" /* default */]})


/***/ })

}]);
//# sourceMappingURL=11.js.map