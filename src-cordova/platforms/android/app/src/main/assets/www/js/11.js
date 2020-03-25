(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "f3e7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/History.vue?vue&type=template&id=38fa8b62&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"q-pa-md"},[(_vm.showList)?_c('div',[_c('p',[_vm._v("Select")]),_c('q-list',{attrs:{"bordered":"","separator":""}},_vm._l((_vm.businessList),function(b,key){return _c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":""},on:{"click":function($event){return _vm.showHistory(key)}}},[_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(b.name))]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v(_vm._s(b.owner))])],1)],1)}),1)],1):_vm._e(),(_vm.showTable)?_c('div',[_c('q-btn',{staticClass:"bg-blue-grey-1 q-mt-md",attrs:{"flat":"","label":"Back"},on:{"click":function($event){return _vm.toggleTable()}}}),_c('q-input',{staticClass:"q-mb-sm q-mt-sm",attrs:{"outlined":"","dense":"","debounce":"300","clear-icon":"close","placeholder":"Search"},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{attrs:{"name":"search"}})]},proxy:true}],null,false,4009527860),model:{value:(_vm.filter),callback:function ($$v) {_vm.filter=$$v},expression:"filter"}}),_c('q-table',{attrs:{"title":"","data":_vm.data,"columns":_vm.columns,"row-key":"businessId","pagination":_vm.pagination,"filter":_vm.filter,"binary-state-sort":""},on:{"update:pagination":function($event){_vm.pagination=$event}}})],1):_vm._e()])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/History.vue?vue&type=template&id=38fa8b62&

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__("8e6e");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__("8a81");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.array.includes.js
var es7_array_includes = __webpack_require__("6762");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.string.includes.js
var es6_string_includes = __webpack_require__("2fdb");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__("7f7f");

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

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__("bd4c");

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--1-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/History.vue?vue&type=script&lang=js&











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


/* harmony default export */ var Historyvue_type_script_lang_js_ = ({
  data: function data() {
    return {
      showList: true,
      showTable: false,
      filter: '',
      loading: false,
      pagination: {
        sortBy: 'desc',
        descending: false,
        page: 1,
        rowsPerPage: 3,
        rowsNumber: 10
      },
      columns: [{
        name: 'businessName',
        required: true,
        label: 'Business Name',
        align: 'left',
        field: function field(row) {
          return row.businessName;
        },
        format: function format(val) {
          return "".concat(val);
        },
        sortable: true,
        classes: 'bg-grey-2 ellipsis',
        headerClasses: 'bg-primary text-white'
      }, {
        name: 'in',
        align: 'center',
        label: 'In',
        field: 'in',
        sortable: true,
        headerClasses: 'bg-blue-grey-1'
      }, {
        name: 'out',
        label: 'Out',
        field: 'out',
        sortable: true,
        headerClasses: 'bg-blue-grey-1'
      }, {
        name: 'date',
        label: 'Date',
        field: 'created',
        sortable: true,
        headerClasses: 'bg-blue-grey-1'
      }],
      data: []
    };
  },
  mounted: function mounted() {},
  methods: _objectSpread({}, Object(vuex_esm["b" /* mapActions */])('LedgerStore', ['firebaseGetRecordList']), {
    showHistory: function showHistory(key) {
      this.firebaseGetRecordList({
        businessId: key
      });
      this.showList = !this.showList;
      this.showTable = !this.showTable;
      this.readyDataForTable();
    },
    toggleTable: function toggleTable() {
      this.data = [];
      this.showList = !this.showList;
      this.showTable = !this.showTable;
    },
    readyDataForTable: function readyDataForTable() {
      var _this = this;

      Object.keys(this.recordListGetter).forEach(function (key) {
        console.log(key);
        var bkey = _this.recordListGetter[key].businessId;
        var tableData = {
          businessId: key,
          businessName: _this.$store.state.LedgerStore.businessList[bkey].name,
          in: _this.recordListGetter[key].in,
          out: _this.recordListGetter[key].out,
          created: date["a" /* default */].formatDate(_this.recordListGetter[key].created, ' DD MMMM YYYY hh:mm A')
        };
        _this.pagination.rowsNumber = _this.getRowsNumberCount();

        _this.data.push(tableData);

        console.log(_this.recordListGetter[key].in);
      });
    },
    getRowsNumberCount: function getRowsNumberCount(filter) {
      if (!filter) {
        return this.data.length;
      }

      var count = 0;
      this.data.forEach(function (treat) {
        if (treat.name.includes(filter)) {
          ++count;
        }
      });
      return count;
    }
  }),
  computed: _objectSpread({}, Object(vuex_esm["c" /* mapGetters */])('LedgerStore', ['recordListGetter']), {
    businessList: function businessList() {
      return this.$store.getters['LedgerStore/businessListGetter'];
    }
  })
});
// CONCATENATED MODULE: ./src/pages/History.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Historyvue_type_script_lang_js_ = (Historyvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 1 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/table/QTable.js + 26 modules
var QTable = __webpack_require__("eaac");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

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









runtime_auto_import_default()(component, 'components', {QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QBtn: QBtn["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */],QTable: QTable["a" /* default */]})


runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]})


/***/ })

}]);
//# sourceMappingURL=11.js.map