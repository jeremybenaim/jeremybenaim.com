webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/constants */ "./common/constants.js");
var _jsxFileName = "/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



var FAVICON = {
  DEFAULT: 'default.png',
  IDLE: 'idle.png'
};

var Link = function Link(_ref) {
  var href = _ref.href,
      background = _ref.background,
      color = _ref.color,
      children = _ref.children,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target;
  return __jsx("a", {
    href: href,
    target: target,
    style: {
      // background,
      color: 'inherit',
      fontWeight: 500,
      // borderBottom: `2px solid ${background}`,
      borderColor: background
    },
    className: "jsx-3028956866",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3028956866",
    __self: this
  }, "a{-webkit-text-decoration:none;text-decoration:none;}a:hover{opacity:.75;border-bottom:2px solid;}a::selection{background:inherit;color:inherit;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJ1QixBQUs4QixBQUdULEFBSU8sWUFISyxPQUlWLGNBQ2hCLEdBSkEsY0FKQSIsImZpbGUiOiIvVXNlcnMvamVyZW15YmVuYWltL3dvcmtzcGFjZS9qZXJlbXliZW5haW0uY29tL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRoZW1lLCBNRVRBIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZBVklDT04gPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0LnBuZycsXG4gIElETEU6ICdpZGxlLnBuZycsXG59O1xuXG5cbmNvbnN0IExpbmsgPSAoe2hyZWYsIGJhY2tncm91bmQsIGNvbG9yLCBjaGlsZHJlbiwgdGFyZ2V0ID0gJ19ibGFuayd9KSA9PiAoXG4gIDxhXG4gICAgaHJlZj17aHJlZn1cbiAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICBzdHlsZT17e1xuICAgICAgLy8gYmFja2dyb3VuZCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAvLyBib3JkZXJCb3R0b206IGAycHggc29saWQgJHtiYWNrZ3JvdW5kfWAsXG4gICAgICBib3JkZXJDb2xvcjogYmFja2dyb3VuZCxcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBhIHtcbiAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAgIH1cbiAgICAgIGE6OnNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9hPlxuKTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKEZBVklDT04uREVGQVVMVCk7XG4gIGNvbnN0IFtpc1BhZ2VWaXNpYmxlLCBzZXRJc1BhZ2VWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICBzZXRJc1BhZ2VWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc1BhZ2VWaXNpYmxlKHRydWUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGYXZpY29uKGlzUGFnZVZpc2libGUgPyBGQVZJQ09OLkRFRkFVTFQgOiBGQVZJQ09OLklETEUpXG4gIH0sIFtpc1BhZ2VWaXNpYmxlXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2AvJHtmYXZpY29ufWB9IC8+XG5cbiAgICAgICAgPHRpdGxlPntNRVRBLlRJVExFfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e01FVEEuVVJMfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17TUVUQS5VUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+SGksIEknbSBKZXJlbXkgQmVuYWltLiBJIGJ1aWxkIHN0dWZmIGZvciB0aGUgaW50ZXJuZXQuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gYSA8c3Ryb25nPlNlbmlvciBGdWxsIFN0YWNrIEphdmFzY3JpcHQgZGV2ZWxvcGVyPC9zdHJvbmc+IHNpbmNlIDIwMDguIE15IGpvYiBpcyB0byBoZWxwIGNvbXBhbmllcyBhcm91bmQgdGhlIHdvcmxkIHRvIGJ1aWxkIHN1Y2Nlc3NmdWwgcHJvZHVjdHMgYW5kIGRlbGl2ZXIgZ3JlYXQgdXNlciBleHBlcmllbmNlcy48L3A+XG4gICAgICAgIDxwPkkgaGF2ZSBjb25zaWRlcmFibGUgZXhwZXJ0aXNlIGluIEZyb250IEVuZCBkZXZlbG9wbWVudCB3aXRoIDxzdHJvbmc+cmVhY3Q8L3N0cm9uZz4sIDxzdHJvbmc+cmVkdXg8L3N0cm9uZz4sIDxzdHJvbmc+bm9kZWpzPC9zdHJvbmc+IGFuZCA8c3Ryb25nPnJlYWN0LW5hdGl2ZTwvc3Ryb25nPiBhbmQgaGF2ZSB3b3JrZWQgd2l0aCBhIG51bWJlciBvZiBkaWZmZXJlbnQgZnJhbWV3b3JrcyBhbmQgbGFuZ3VhZ2VzIHRocm91Z2hvdXQgbXkgY2FyZWVyLjwvcD5cbiAgICAgICAgPHA+SSd2ZSBiZWVuIGV4Y2x1c2l2ZWx5IDxzdHJvbmc+d29ya2luZyByZW1vdGVseTwvc3Ryb25nPiBzaW5jZSAyMDE2IGFuZCBoYXZlIGJlZW4gYSBzdXBwb3J0ZXIgb2YgdGhlIHJlbW90ZSBjb21tdW5pdHkgc2luY2UgdGhlbi48L3A+XG4gICAgICAgIDxwPntcbiAgICAgICAgICBbXG4gICAgICAgICAgICBgU29tZSBjb21wYW5pZXMgSSd2ZSB3b3JrZWQgd2l0aDogYCxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2pvdXIuY29tL1wiIGJhY2tncm91bmQ9XCIjZmM3NjY5XCIgY29sb3I9XCIjZmZmXCIga2V5PVwiam91clwiPkpvdXI8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy53YWxkby5pby9cIiBiYWNrZ3JvdW5kPVwiIzU3OTJmY1wiIGNvbG9yPVwiI2ZmZlwiIGtleT1cIndhbGRvXCI+V2FsZG8uaW88L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2hpdnlhcHAuY29tL1wiIGJhY2tncm91bmQ9XCIjNzVmYmM0XCIgY29sb3I9XCIjMDAwXCIga2V5PVwiaGl2eVwiPkhpdnkgKFlDIFcxNywgYWNxdWlyZWQpPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZWZvdW5kZXJzLmNvbS9cIiBiYWNrZ3JvdW5kPVwiIzUyY2M1MVwiIGNvbG9yPVwiI2ZmZlwiIGtleT1cImVmXCI+ZUZvdW5kZXJzPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly92aWFkZW8uY29tL1wiIGJhY2tncm91bmQ9XCIjZjA3MzU1XCIgY29sb3I9XCIjZmZmXCIgdGFyZ2V0PVwiX3NlbGZcIiBrZXk9XCJ2aWFkZW9cIj5WaWFkZW88L0xpbms+LFxuICAgICAgICAgICAgJy4nLFxuICAgICAgICAgIF19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+SWYgeW914oCZZCBsaWtlIHRvIGNoYXQsIDxMaW5rIGhyZWY9XCJtYWlsdG86amVyZW15YmVuYWltQGdtYWlsLmNvbVwiPmZlZWwgZnJlZSB0byBjb250YWN0IG1lPC9MaW5rPi48L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5kYXJrLnRleHRDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLCdSb2JvdG8nLCdPeHlnZW4nLCdVYnVudHUnLCAnQ2FudGFyZWxsJywnRmlyYSBTYW5zJywnRHJvaWQgU2FucycsJ0hlbHZldGljYSBOZXVlJyxzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICBtYXJnaW46IDMuNzVyZW0gMy4xNXJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */"));
};

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(FAVICON.DEFAULT),
      favicon = _useState[0],
      setFavicon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isPageVisible = _useState2[0],
      setIsPageVisible = _useState2[1];

  var onVisibilityChange = function onVisibilityChange() {
    if (document.hidden) {
      setIsPageVisible(false);
      return;
    }

    setIsPageVisible(true);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setFavicon(isPageVisible ? FAVICON.DEFAULT : FAVICON.IDLE);
  }, [isPageVisible]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener('visibilitychange', onVisibilityChange, false);
    return function () {
      document.removeEventListener('visibilitychange', onVisibilityChange, false);
    };
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/".concat(favicon),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE), __jsx("link", {
    rel: "canonical",
    href: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  })), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, "Hi, I'm Jeremy Benaim. I build stuff for the internet."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "I've been a ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "I've been exclusively ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "working remotely"), " since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 100
    },
    __self: this
  }, ["Some companies I've worked with: ", __jsx(Link, {
    href: "https://jour.com/",
    background: "#fc7669",
    color: "#fff",
    key: "jour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: this
  }, "Jour"), ', ', __jsx(Link, {
    href: "https://www.waldo.io/",
    background: "#5792fc",
    color: "#fff",
    key: "waldo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Waldo.io"), ', ', __jsx(Link, {
    href: "https://hivyapp.com/",
    background: "#75fbc4",
    color: "#000",
    key: "hivy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "Hivy (YC W17, acquired)"), ', ', __jsx(Link, {
    href: "https://www.efounders.com/",
    background: "#52cc51",
    color: "#fff",
    key: "ef",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, "eFounders"), ', ', __jsx(Link, {
    href: "https://viadeo.com/",
    background: "#f07355",
    color: "#fff",
    target: "_self",
    key: "viadeo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "Viadeo"), '.']), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2979006336", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "If you\u2019d like to chat, ", __jsx(Link, {
    href: "mailto:jeremybenaim@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  }, "feel free to contact me"), ".")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2979006336",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor],
    __self: this
  }, "html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}::selection{background:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}strong::selection{background:inherit;color:inherit;}html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:18px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:3.75rem 3.15rem;max-width:40rem;}strong{border:2px solid yellow;background:yellow;color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}@media (prefers-color-scheme:dark){html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0h5QixBQUdpQyxBQUdILEFBSXFCLEFBSUEsQUFJckIsQUFLcUIsQUFLNkcsQUFlOUgsQUFLQyxBQU9rQixBQUlBLEFBSUMsbUJBeEQ3QyxBQVlnQixHQWZoQixDQXdDa0IsQ0FLRSxTQTdCcEIsTUF5QkEsQ0FsQ3FDLEFBSUEsQUFTQSxBQWdDRSxBQUlDLENBSUEsQ0FkSCxpQ0F0Q3JDLEFBSUEsQUFTQSxBQWdDRSxDQUlBLENBVkYsQUFjRSx1RUFwQ2dCLGdCQUNELGVBQ0MsZ0JBQ1AsU0FDSyxjQUNlLDZCQUNLLGtDQUNKLDhCQUNLLG1DQUNELGtDQUNYLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW15YmVuYWltL3dvcmtzcGFjZS9qZXJlbXliZW5haW0uY29tL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRoZW1lLCBNRVRBIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZBVklDT04gPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0LnBuZycsXG4gIElETEU6ICdpZGxlLnBuZycsXG59O1xuXG5cbmNvbnN0IExpbmsgPSAoe2hyZWYsIGJhY2tncm91bmQsIGNvbG9yLCBjaGlsZHJlbiwgdGFyZ2V0ID0gJ19ibGFuayd9KSA9PiAoXG4gIDxhXG4gICAgaHJlZj17aHJlZn1cbiAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICBzdHlsZT17e1xuICAgICAgLy8gYmFja2dyb3VuZCxcbiAgICAgIGNvbG9yOiAnaW5oZXJpdCcsXG4gICAgICBmb250V2VpZ2h0OiA1MDAsXG4gICAgICAvLyBib3JkZXJCb3R0b206IGAycHggc29saWQgJHtiYWNrZ3JvdW5kfWAsXG4gICAgICBib3JkZXJDb2xvcjogYmFja2dyb3VuZCxcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICBhIHtcbiAgICAgICAgLy8gYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICAgIC8vIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICAgIGE6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAuNzU7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAgIH1cbiAgICAgIGE6OnNlbGVjdGlvbiB7XG4gICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9hPlxuKTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKEZBVklDT04uREVGQVVMVCk7XG4gIGNvbnN0IFtpc1BhZ2VWaXNpYmxlLCBzZXRJc1BhZ2VWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBpZiAoZG9jdW1lbnQuaGlkZGVuKSB7XG4gICAgICBzZXRJc1BhZ2VWaXNpYmxlKGZhbHNlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZXRJc1BhZ2VWaXNpYmxlKHRydWUpO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGYXZpY29uKGlzUGFnZVZpc2libGUgPyBGQVZJQ09OLkRFRkFVTFQgOiBGQVZJQ09OLklETEUpXG4gIH0sIFtpc1BhZ2VWaXNpYmxlXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9e2AvJHtmYXZpY29ufWB9IC8+XG5cbiAgICAgICAgPHRpdGxlPntNRVRBLlRJVExFfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e01FVEEuVVJMfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17TUVUQS5VUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+SGksIEknbSBKZXJlbXkgQmVuYWltLiBJIGJ1aWxkIHN0dWZmIGZvciB0aGUgaW50ZXJuZXQuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gYSA8c3Ryb25nPlNlbmlvciBGdWxsIFN0YWNrIEphdmFzY3JpcHQgZGV2ZWxvcGVyPC9zdHJvbmc+IHNpbmNlIDIwMDguIE15IGpvYiBpcyB0byBoZWxwIGNvbXBhbmllcyBhcm91bmQgdGhlIHdvcmxkIHRvIGJ1aWxkIHN1Y2Nlc3NmdWwgcHJvZHVjdHMgYW5kIGRlbGl2ZXIgZ3JlYXQgdXNlciBleHBlcmllbmNlcy48L3A+XG4gICAgICAgIDxwPkkgaGF2ZSBjb25zaWRlcmFibGUgZXhwZXJ0aXNlIGluIEZyb250IEVuZCBkZXZlbG9wbWVudCB3aXRoIDxzdHJvbmc+cmVhY3Q8L3N0cm9uZz4sIDxzdHJvbmc+cmVkdXg8L3N0cm9uZz4sIDxzdHJvbmc+bm9kZWpzPC9zdHJvbmc+IGFuZCA8c3Ryb25nPnJlYWN0LW5hdGl2ZTwvc3Ryb25nPiBhbmQgaGF2ZSB3b3JrZWQgd2l0aCBhIG51bWJlciBvZiBkaWZmZXJlbnQgZnJhbWV3b3JrcyBhbmQgbGFuZ3VhZ2VzIHRocm91Z2hvdXQgbXkgY2FyZWVyLjwvcD5cbiAgICAgICAgPHA+SSd2ZSBiZWVuIGV4Y2x1c2l2ZWx5IDxzdHJvbmc+d29ya2luZyByZW1vdGVseTwvc3Ryb25nPiBzaW5jZSAyMDE2IGFuZCBoYXZlIGJlZW4gYSBzdXBwb3J0ZXIgb2YgdGhlIHJlbW90ZSBjb21tdW5pdHkgc2luY2UgdGhlbi48L3A+XG4gICAgICAgIDxwPntcbiAgICAgICAgICBbXG4gICAgICAgICAgICBgU29tZSBjb21wYW5pZXMgSSd2ZSB3b3JrZWQgd2l0aDogYCxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2pvdXIuY29tL1wiIGJhY2tncm91bmQ9XCIjZmM3NjY5XCIgY29sb3I9XCIjZmZmXCIga2V5PVwiam91clwiPkpvdXI8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy53YWxkby5pby9cIiBiYWNrZ3JvdW5kPVwiIzU3OTJmY1wiIGNvbG9yPVwiI2ZmZlwiIGtleT1cIndhbGRvXCI+V2FsZG8uaW88L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2hpdnlhcHAuY29tL1wiIGJhY2tncm91bmQ9XCIjNzVmYmM0XCIgY29sb3I9XCIjMDAwXCIga2V5PVwiaGl2eVwiPkhpdnkgKFlDIFcxNywgYWNxdWlyZWQpPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cuZWZvdW5kZXJzLmNvbS9cIiBiYWNrZ3JvdW5kPVwiIzUyY2M1MVwiIGNvbG9yPVwiI2ZmZlwiIGtleT1cImVmXCI+ZUZvdW5kZXJzPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly92aWFkZW8uY29tL1wiIGJhY2tncm91bmQ9XCIjZjA3MzU1XCIgY29sb3I9XCIjZmZmXCIgdGFyZ2V0PVwiX3NlbGZcIiBrZXk9XCJ2aWFkZW9cIj5WaWFkZW88L0xpbms+LFxuICAgICAgICAgICAgJy4nLFxuICAgICAgICAgIF19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+SWYgeW914oCZZCBsaWtlIHRvIGNoYXQsIDxMaW5rIGhyZWY9XCJtYWlsdG86amVyZW15YmVuYWltQGdtYWlsLmNvbVwiPmZlZWwgZnJlZSB0byBjb250YWN0IG1lPC9MaW5rPi48L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5kYXJrLnRleHRDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLCdSb2JvdG8nLCdPeHlnZW4nLCdVYnVudHUnLCAnQ2FudGFyZWxsJywnRmlyYSBTYW5zJywnRHJvaWQgU2FucycsJ0hlbHZldGljYSBOZXVlJyxzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICBtYXJnaW46IDMuNzVyZW0gMy4xNXJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.9fb2cb07d8103dea8c8f.hot-update.js.map