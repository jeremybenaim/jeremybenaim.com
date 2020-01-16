webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "./node_modules/core-js/library/fn/object/define-properties.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/core-js/library/fn/object/define-properties.js":
/*!*********************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/define-properties.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.object.define-properties */ "./node_modules/core-js/library/modules/es6.object.define-properties.js");
var $Object = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es7.object.get-own-property-descriptors */ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertyDescriptors;


/***/ }),

/***/ "./node_modules/core-js/library/fn/object/get-own-property-symbols.js":
/*!****************************************************************************!*\
  !*** ./node_modules/core-js/library/fn/object/get-own-property-symbols.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.symbol */ "./node_modules/core-js/library/modules/es6.symbol.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Object.getOwnPropertySymbols;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_own-keys.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/library/modules/_own-keys.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(/*! ./_object-gopn */ "./node_modules/core-js/library/modules/_object-gopn.js");
var gOPS = __webpack_require__(/*! ./_object-gops */ "./node_modules/core-js/library/modules/_object-gops.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/library/modules/_an-object.js");
var Reflect = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.object.define-properties.js":
/*!******************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.object.define-properties.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/library/modules/_descriptors.js"), 'Object', { defineProperties: __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/library/modules/_object-dps.js") });


/***/ }),

/***/ "./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es7.object.get-own-property-descriptors.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var ownKeys = __webpack_require__(/*! ./_own-keys */ "./node_modules/core-js/library/modules/_own-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/library/modules/_to-iobject.js");
var gOPD = __webpack_require__(/*! ./_object-gopd */ "./node_modules/core-js/library/modules/_object-gopd.js");
var createProperty = __webpack_require__(/*! ./_create-property */ "./node_modules/core-js/library/modules/_create-property.js");

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/constants */ "./common/constants.js");







var _jsxFileName = "/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }




var FAVICON = {
  DEFAULT: 'default.png',
  IDLE: 'idle.png'
};

var Link = function Link(_ref) {
  var href = _ref.href,
      color = _ref.color,
      children = _ref.children,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target;
  return __jsx("a", {
    href: href,
    target: target,
    style: _objectSpread({
      borderColor: color,
      outlineColor: color
    }, style),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["3430226568", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "3430226568",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor],
    __self: this
  }, "a{color:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, ";font-weight:600;padding-bottom:2px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:.2s ease;transition:.2s ease;}a:hover{border-bottom:2px solid;}@media (prefers-color-scheme:dark){a{color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUJ1QixBQUc0QyxBQU9YLEFBSWEsd0JBSHZDLFdBUGtCLEFBV2hCLGdCQVZtQixtQkFDRSxrREFDRCxnREFDdEIiLCJmaWxlIjoiL1VzZXJzL2plcmVteWJlbmFpbS93b3Jrc3BhY2UvamVyZW15YmVuYWltLmNvbS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0aGVtZSwgTUVUQSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBGQVZJQ09OID0ge1xuICBERUZBVUxUOiAnZGVmYXVsdC5wbmcnLFxuICBJRExFOiAnaWRsZS5wbmcnLFxufTtcblxuXG5jb25zdCBMaW5rID0gKHtocmVmLCBjb2xvciwgY2hpbGRyZW4sIHRhcmdldCA9ICdfYmxhbmsnfSkgPT4gKFxuICA8YVxuICAgIGhyZWY9e2hyZWZ9XG4gICAgdGFyZ2V0PXt0YXJnZXR9XG4gICAgc3R5bGU9e3tcbiAgICAgIGJvcmRlckNvbG9yOiBjb2xvcixcbiAgICAgIG91dGxpbmVDb2xvcjogY29sb3IsXG4gICAgICAuLi5zdHlsZSxcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiAuMnMgZWFzZTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQ7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9hPlxuKTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKEZBVklDT04uREVGQVVMVCk7XG4gIGNvbnN0IFtpc1BhZ2VWaXNpYmxlLCBzZXRJc1BhZ2VWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICBzZXRJc1BhZ2VWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc1BhZ2VWaXNpYmxlKHRydWUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGYXZpY29uKGlzUGFnZVZpc2libGUgPyBGQVZJQ09OLkRFRkFVTFQgOiBGQVZJQ09OLklETEUpXG4gIH0sIFtpc1BhZ2VWaXNpYmxlXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2AvJHtmYXZpY29ufWB9IC8+XG5cbiAgICAgICAgPHRpdGxlPntNRVRBLlRJVExFfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e01FVEEuVVJMfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17TUVUQS5VUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+SGksIEknbSBKZXJlbXkgQmVuYWltLiBJIGJ1aWxkIHN0dWZmIGZvciB0aGUgaW50ZXJuZXQuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gYSA8c3Ryb25nPlNlbmlvciBGdWxsIFN0YWNrIEphdmFzY3JpcHQgZGV2ZWxvcGVyPC9zdHJvbmc+IHNpbmNlIDIwMDguIE15IGpvYiBpcyB0byBoZWxwIGNvbXBhbmllcyBhcm91bmQgdGhlIHdvcmxkIHRvIGJ1aWxkIHN1Y2Nlc3NmdWwgcHJvZHVjdHMgYW5kIGRlbGl2ZXIgZ3JlYXQgdXNlciBleHBlcmllbmNlcy48L3A+XG4gICAgICAgIDxwPkkgaGF2ZSBjb25zaWRlcmFibGUgZXhwZXJ0aXNlIGluIEZyb250IEVuZCBkZXZlbG9wbWVudCB3aXRoIDxzdHJvbmc+cmVhY3Q8L3N0cm9uZz4sIDxzdHJvbmc+cmVkdXg8L3N0cm9uZz4sIDxzdHJvbmc+bm9kZWpzPC9zdHJvbmc+IGFuZCA8c3Ryb25nPnJlYWN0LW5hdGl2ZTwvc3Ryb25nPiBhbmQgaGF2ZSB3b3JrZWQgd2l0aCBhIG51bWJlciBvZiBkaWZmZXJlbnQgZnJhbWV3b3JrcyBhbmQgbGFuZ3VhZ2VzIHRocm91Z2hvdXQgbXkgY2FyZWVyLjwvcD5cbiAgICAgICAgPHA+SSd2ZSBiZWVuIGV4Y2x1c2l2ZWx5IDxzdHJvbmc+d29ya2luZyByZW1vdGVseTwvc3Ryb25nPiBzaW5jZSAyMDE2IGFuZCBoYXZlIGJlZW4gYSBzdXBwb3J0ZXIgb2YgdGhlIHJlbW90ZSBjb21tdW5pdHkgc2luY2UgdGhlbi48L3A+XG4gICAgICAgIDxwPntcbiAgICAgICAgICBbXG4gICAgICAgICAgICBgU29tZSBjb21wYW5pZXMgSSd2ZSB3b3JrZWQgd2l0aDogYCxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2pvdXIuY29tL1wiIGNvbG9yPVwiI2ZjNzY2OVwiIGtleT1cImpvdXJcIj5Kb3VyPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cud2FsZG8uaW8vXCIgY29sb3I9XCIjNTc5MmZjXCIga2V5PVwid2FsZG9cIj5XYWxkby5pbzwvTGluaz4sXG4gICAgICAgICAgICAnLCAnLFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vaGl2eWFwcC5jb20vXCIgY29sb3I9XCIjNzVmYmM0XCIga2V5PVwiaGl2eVwiPkhpdnkgKFlDIFcxNywgYWNxdWlyZWQpPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZWZvdW5kZXJzLmNvbS9cIiBjb2xvcj1cIiM1MmNjNTFcIiBrZXk9XCJlZlwiPmVGb3VuZGVyczwvTGluaz4sXG4gICAgICAgICAgICAnLCAnLFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vdmlhZGVvLmNvbS9cIiBjb2xvcj1cIiNmMDczNTVcIiBrZXk9XCJ2aWFkZW9cIj5WaWFkZW88L0xpbms+LFxuICAgICAgICAgICAgJy4nLFxuICAgICAgICAgIF19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+PExpbmsgaHJlZj1cIm1haWx0bzpqZXJlbXliZW5haW1AZ21haWwuY29tXCI+RmVlbCBmcmVlIHRvIGNvbnRhY3QgbWU8L0xpbms+IGlmIHlvdSdkIGxpa2UgdG8gY2hhdC48L3A+XG4gICAgICAgIDxwPllvdSBjYW4gYWxzbyBmaW5kIG1lIG9uIDxMaW5rIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2plcmVteWJlbmFpbS9cIiBjb2xvcj1cIiMxZGExZjJcIj5Ud2l0dGVyPC9MaW5rPiBhbmQgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9qZXJlbXliZW5haW0vXCIgY29sb3I9XCIjMDA3M2IxXCI+TGlua2VkSW48L0xpbms+LjwvcD5cbiAgICAgICAgPHA+QnllIG5vdy4g8J+RizwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICB9XG4gICAgICAgIDo6LW1vei1zZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICBzdHJvbmc6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsJ1JvYm90bycsJ094eWdlbicsJ1VidW50dScsICdDYW50YXJlbGwnLCdGaXJhIFNhbnMnLCdEcm9pZCBTYW5zJywnSGVsdmV0aWNhIE5ldWUnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgIG1hcmdpbjogMy41cmVtIDMuMTVyZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiA0MHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgYm9yZGVyOiAycHggc29saWQgeWVsbG93O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHllbGxvdztcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(FAVICON.DEFAULT),
      favicon = _useState[0],
      setFavicon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_8__["useState"])(true),
      isPageVisible = _useState2[0],
      setIsPageVisible = _useState2[1];

  var onVisibilityChange = function onVisibilityChange() {
    if (document.hidden) {
      setIsPageVisible(false);
      return;
    }

    setIsPageVisible(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    setFavicon(isPageVisible ? FAVICON.DEFAULT : FAVICON.IDLE);
  }, [isPageVisible]);
  Object(react__WEBPACK_IMPORTED_MODULE_8__["useEffect"])(function () {
    document.addEventListener('visibilitychange', onVisibilityChange, false);
    return function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_9___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/".concat(favicon),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].TITLE), __jsx("link", {
    rel: "canonical",
    href: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_10__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Hi, I'm Jeremy Benaim. I build stuff for the internet."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "I've been a ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "I've been exclusively ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "working remotely"), " since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, ["Some companies I've worked with: ", __jsx(Link, {
    href: "https://jour.com/",
    color: "#fc7669",
    key: "jour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Jour"), ', ', __jsx(Link, {
    href: "https://www.waldo.io/",
    color: "#5792fc",
    key: "waldo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Waldo.io"), ', ', __jsx(Link, {
    href: "https://hivyapp.com/",
    color: "#75fbc4",
    key: "hivy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Hivy (YC W17, acquired)"), ', ', __jsx(Link, {
    href: "https://www.efounders.com/",
    color: "#52cc51",
    key: "ef",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "eFounders"), ', ', __jsx(Link, {
    href: "https://viadeo.com/",
    color: "#f07355",
    key: "viadeo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Viadeo"), '.']), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, __jsx(Link, {
    href: "mailto:jeremybenaim@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "Feel free to contact me"), " if you'd like to chat."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "You can also find me on ", __jsx(Link, {
    href: "https://twitter.com/jeremybenaim/",
    color: "#1da1f2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "Twitter"), " and ", __jsx(Link, {
    href: "https://www.linkedin.com/in/jeremybenaim/",
    color: "#0073b1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116
    },
    __self: this
  }, "LinkedIn"), "."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, "Bye now. \uD83D\uDC4B")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
    id: "261574440",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor],
    __self: this
  }, "html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}::selection{background:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, ";}strong::selection{background:inherit;color:inherit;}html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, ";}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:18px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:3.5rem 3.15rem;max-width:40rem;}strong{border:2px solid yellow;background:yellow;font-weight:600;color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, ";}@media (prefers-color-scheme:dark){html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].dark.textColor, ";}::selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_10__["theme"].light.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0h5QixBQUdpQyxBQUdILEFBSXFCLEFBSUEsQUFJckIsQUFLcUIsQUFLNkcsQUFlL0gsQUFLRSxBQVFrQixBQUlBLEFBSUMsbUJBekQ3QyxBQVlnQixHQWZoQixBQXdDa0IsRUFLRSxTQTdCcEIsS0F5QkEsRUFsQ3FDLEFBSUEsQUFTQSxBQWlDRSxBQUlDLENBSUEsQ0FmdEIsZ0JBQ21CLGlCQXZDckMsQUFJQSxBQVNBLEFBaUNFLENBSUEsQ0FJQSxnQkFkRix1REF2QmtCLGdCQUNELGVBQ0MsZ0JBQ1AsU0FDSyxjQUNlLDZCQUNLLGtDQUNKLDhCQUNLLG1DQUNELGtDQUNYLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW15YmVuYWltL3dvcmtzcGFjZS9qZXJlbXliZW5haW0uY29tL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRoZW1lLCBNRVRBIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZBVklDT04gPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0LnBuZycsXG4gIElETEU6ICdpZGxlLnBuZycsXG59O1xuXG5cbmNvbnN0IExpbmsgPSAoe2hyZWYsIGNvbG9yLCBjaGlsZHJlbiwgdGFyZ2V0ID0gJ19ibGFuayd9KSA9PiAoXG4gIDxhXG4gICAgaHJlZj17aHJlZn1cbiAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICBzdHlsZT17e1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICAgIC4uLnN0eWxlLFxuICAgIH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgIGEge1xuICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xuICAgICAgfVxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2E+XG4pO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoRkFWSUNPTi5ERUZBVUxUKTtcbiAgY29uc3QgW2lzUGFnZVZpc2libGUsIHNldElzUGFnZVZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgIHNldElzUGFnZVZpc2libGUoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzUGFnZVZpc2libGUodHJ1ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZhdmljb24oaXNQYWdlVmlzaWJsZSA/IEZBVklDT04uREVGQVVMVCA6IEZBVklDT04uSURMRSlcbiAgfSwgW2lzUGFnZVZpc2libGVdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17YC8ke2Zhdmljb259YH0gLz5cblxuICAgICAgICA8dGl0bGU+e01FVEEuVElUTEV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17TUVUQS5VUkx9IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cImplcmVteWJlbmFpbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e01FVEEuVVJMfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8cD5IaSwgSSdtIEplcmVteSBCZW5haW0uIEkgYnVpbGQgc3R1ZmYgZm9yIHRoZSBpbnRlcm5ldC48L3A+XG4gICAgICAgIDxwPkkndmUgYmVlbiBhIDxzdHJvbmc+U2VuaW9yIEZ1bGwgU3RhY2sgSmF2YXNjcmlwdCBkZXZlbG9wZXI8L3N0cm9uZz4gc2luY2UgMjAwOC4gTXkgam9iIGlzIHRvIGhlbHAgY29tcGFuaWVzIGFyb3VuZCB0aGUgd29ybGQgdG8gYnVpbGQgc3VjY2Vzc2Z1bCBwcm9kdWN0cyBhbmQgZGVsaXZlciBncmVhdCB1c2VyIGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgPHA+SSBoYXZlIGNvbnNpZGVyYWJsZSBleHBlcnRpc2UgaW4gRnJvbnQgRW5kIGRldmVsb3BtZW50IHdpdGggPHN0cm9uZz5yZWFjdDwvc3Ryb25nPiwgPHN0cm9uZz5yZWR1eDwvc3Ryb25nPiwgPHN0cm9uZz5ub2RlanM8L3N0cm9uZz4gYW5kIDxzdHJvbmc+cmVhY3QtbmF0aXZlPC9zdHJvbmc+IGFuZCBoYXZlIHdvcmtlZCB3aXRoIGEgbnVtYmVyIG9mIGRpZmZlcmVudCBmcmFtZXdvcmtzIGFuZCBsYW5ndWFnZXMgdGhyb3VnaG91dCBteSBjYXJlZXIuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gZXhjbHVzaXZlbHkgPHN0cm9uZz53b3JraW5nIHJlbW90ZWx5PC9zdHJvbmc+IHNpbmNlIDIwMTYgYW5kIGhhdmUgYmVlbiBhIHN1cHBvcnRlciBvZiB0aGUgcmVtb3RlIGNvbW11bml0eSBzaW5jZSB0aGVuLjwvcD5cbiAgICAgICAgPHA+e1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIGBTb21lIGNvbXBhbmllcyBJJ3ZlIHdvcmtlZCB3aXRoOiBgLFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vam91ci5jb20vXCIgY29sb3I9XCIjZmM3NjY5XCIga2V5PVwiam91clwiPkpvdXI8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy53YWxkby5pby9cIiBjb2xvcj1cIiM1NzkyZmNcIiBrZXk9XCJ3YWxkb1wiPldhbGRvLmlvPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9oaXZ5YXBwLmNvbS9cIiBjb2xvcj1cIiM3NWZiYzRcIiBrZXk9XCJoaXZ5XCI+SGl2eSAoWUMgVzE3LCBhY3F1aXJlZCk8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5lZm91bmRlcnMuY29tL1wiIGNvbG9yPVwiIzUyY2M1MVwiIGtleT1cImVmXCI+ZUZvdW5kZXJzPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly92aWFkZW8uY29tL1wiIGNvbG9yPVwiI2YwNzM1NVwiIGtleT1cInZpYWRlb1wiPlZpYWRlbzwvTGluaz4sXG4gICAgICAgICAgICAnLicsXG4gICAgICAgICAgXX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD48TGluayBocmVmPVwibWFpbHRvOmplcmVteWJlbmFpbUBnbWFpbC5jb21cIj5GZWVsIGZyZWUgdG8gY29udGFjdCBtZTwvTGluaz4gaWYgeW91J2QgbGlrZSB0byBjaGF0LjwvcD5cbiAgICAgICAgPHA+WW91IGNhbiBhbHNvIGZpbmQgbWUgb24gPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vamVyZW15YmVuYWltL1wiIGNvbG9yPVwiIzFkYTFmMlwiPlR3aXR0ZXI8L0xpbms+IGFuZCA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2plcmVteWJlbmFpbS9cIiBjb2xvcj1cIiMwMDczYjFcIj5MaW5rZWRJbjwvTGluaz4uPC9wPlxuICAgICAgICA8cD5CeWUgbm93LiDwn5GLPC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5kYXJrLnRleHRDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZzo6c2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsJ1NlZ29lIFVJJywnUm9ib3RvJywnT3h5Z2VuJywnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsJ0ZpcmEgU2FucycsJ0Ryb2lkIFNhbnMnLCdIZWx2ZXRpY2EgTmV1ZScsc2Fucy1zZXJpZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luOiAzLjVyZW0gMy4xNXJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.088a851ed11da0e82acc.hot-update.js.map