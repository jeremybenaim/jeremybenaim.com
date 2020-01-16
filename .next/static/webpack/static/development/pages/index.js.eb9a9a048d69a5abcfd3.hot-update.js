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
var _jsxFileName = "/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


var theme = {
  light: {
    backgroundColor: '#fff',
    textColor: '#2e2f30'
  },
  dark: {
    backgroundColor: '#2e2f30',
    textColor: '#fff'
  }
};
var METAS = {};
var FAVICON_STATE = {
  DEFAULT: 'DEFAULT',
  IDLE: 'IDLE'
};

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(FAVICON_STATE.DEFAULT),
      favicon = _useState[0],
      setFavicon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isPageVisible = _useState2[0],
      setIsPageVisible = _useState2[1];

  var onVisibilityChange = function onVisibilityChange() {
    setIsPageVisible(document.hidden);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setFavicon(isPageVisible ? FAVICON_STATE.DEFAULT : FAVICON_STATE.IDLE);
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
      lineNumber: 47
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }, "Jeremy Benaim \u2013 Full Stack Javascript Developer"), __jsx("link", {
    rel: "canonical",
    href: "https://jeremybenaim.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: "Jeremy Benaim \u2013 Full Stack Javascript Developer. UX / Product. Available for freelance",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: "https://jeremybenaim.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: "jeremybenaim.com",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: "Jeremy Benaim \u2013 Full Stack Javascript Developer",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: "Jeremy Benaim \u2013 Full Stack Javascript Developer. UX / Product. Available for freelance",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: "https://jeremybenaim.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: "Jeremy Benaim \u2013 Full Stack Javascript Developer",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: "Jeremy Benaim \u2013 Full Stack Javascript Developer. UX / Product. Available for freelance",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("article", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "Hi, I'm Jeremy. I build stuff for the internet."), __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "I'm a ", __jsx("strong", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "I've been exclusively working remotely since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Companies I've worked with:"), __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx("a", {
    href: "https://jour.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Jour"), ", ", __jsx("a", {
    href: "https://www.waldo.io/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Waldo.io"), ", ", __jsx("a", {
    href: "https://hivyapp.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Hivy"), " (YC W17, acquired), ", __jsx("a", {
    href: "https://www.efounders.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "eFounders"), " and ", __jsx("a", {
    href: "https://viadeo.com/",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Viadeo"), "."), __jsx("p", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("mark", {
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "If you\u2019d like to chat ", __jsx("a", {
    href: "mailto:jeremybenaim@gmail.com",
    className: "jsx-2528687918",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "feel free to email me"), "."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2528687918",
    __self: this
  }, "*,*:before,*:after{box-sizing:inherit;}html,body{background:".concat(theme.light.backgroundColor, ";color:").concat(theme.light.textColor, ";}html{height:100%;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:16px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:1.5rem 2rem;max-width:700px;}@-webkit-keyframes fadeIn{0%{-webkit-transform:scale(.97);-ms-transform:scale(.97);transform:scale(.97);opacity:0;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes fadeIn{0%{-webkit-transform:scale(.97);-ms-transform:scale(.97);transform:scale(.97);opacity:0;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@media only screen and (min-width:992px){article{-webkit-animation:fadeIn .6s;animation:fadeIn .6s;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;}}@media (prefers-color-scheme:dark){html,body{background:").concat(theme.dark.backgroundColor, ";color:").concat(theme.dark.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEV5QixBQUc4QixBQUlxQixBQUs1QixBQUt5SSxBQWVsSSxBQU1JLEFBSUYsQUFPRSxBQVFtQixZQTVDcEIsT0FUeEIsQUE2QmtCLGVBbkJsQixDQW9CQSxLQTFCcUMsQUFrREUsVUFSZixtQkFQVixNQWxDZCxBQThCYyxBQW9CWixJQWZBLE1BSkEsYUFXMkIsa0RBakNYLFFBa0NoQixRQWpDZSxlQUNDLGdCQUNQLFNBQ0ssY0FDZSw2QkFDSyxrQ0FDSiw4QkFDSyxtQ0FDRCxrQ0FDWCw2R0FDekIiLCJmaWxlIjoiL1VzZXJzL2plcmVteWJlbmFpbS93b3Jrc3BhY2UvamVyZW15YmVuYWltLmNvbS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IHRoZW1lID0ge1xuICBsaWdodDoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgIHRleHRDb2xvcjogJyMyZTJmMzAnLFxuICB9LFxuICBkYXJrOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzJlMmYzMCcsXG4gICAgdGV4dENvbG9yOiAnI2ZmZicsXG4gIH0sXG59O1xuXG5jb25zdCBNRVRBUyA9IHtcblxufVxuXG5jb25zdCBGQVZJQ09OX1NUQVRFID0ge1xuICBERUZBVUxUOiAnREVGQVVMVCcsXG4gIElETEU6ICdJRExFJyxcbn1cblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKEZBVklDT05fU1RBVEUuREVGQVVMVCk7XG4gIGNvbnN0IFtpc1BhZ2VWaXNpYmxlLCBzZXRJc1BhZ2VWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc1BhZ2VWaXNpYmxlKGRvY3VtZW50LmhpZGRlbik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZhdmljb24oaXNQYWdlVmlzaWJsZSA/IEZBVklDT05fU1RBVEUuREVGQVVMVCA6IEZBVklDT05fU1RBVEUuSURMRSlcbiAgfSwgW2lzUGFnZVZpc2libGVdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICA8dGl0bGU+SmVyZW15IEJlbmFpbSDigJMgRnVsbCBTdGFjayBKYXZhc2NyaXB0IERldmVsb3BlcjwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9XCJodHRwczovL2plcmVteWJlbmFpbS5jb20vXCIgLz5cblxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSmVyZW15IEJlbmFpbSDigJMgRnVsbCBTdGFjayBKYXZhc2NyaXB0IERldmVsb3Blci4gVVggLyBQcm9kdWN0LiBBdmFpbGFibGUgZm9yIGZyZWVsYW5jZVwiIC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD1cImh0dHBzOi8vamVyZW15YmVuYWltLmNvbS9cIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW0uY29tXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9XCJKZXJlbXkgQmVuYWltIOKAkyBGdWxsIFN0YWNrIEphdmFzY3JpcHQgRGV2ZWxvcGVyXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJKZXJlbXkgQmVuYWltIOKAkyBGdWxsIFN0YWNrIEphdmFzY3JpcHQgRGV2ZWxvcGVyLiBVWCAvIFByb2R1Y3QuIEF2YWlsYWJsZSBmb3IgZnJlZWxhbmNlXCIgLz5cblxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cImplcmVteWJlbmFpbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD1cImh0dHBzOi8vamVyZW15YmVuYWltLmNvbS9cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9XCJKZXJlbXkgQmVuYWltIOKAkyBGdWxsIFN0YWNrIEphdmFzY3JpcHQgRGV2ZWxvcGVyXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PVwiSmVyZW15IEJlbmFpbSDigJMgRnVsbCBTdGFjayBKYXZhc2NyaXB0IERldmVsb3Blci4gVVggLyBQcm9kdWN0LiBBdmFpbGFibGUgZm9yIGZyZWVsYW5jZVwiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+SGksIEknbSBKZXJlbXkuIEkgYnVpbGQgc3R1ZmYgZm9yIHRoZSBpbnRlcm5ldC48L3A+XG4gICAgICAgIDxwPkknbSBhIDxzdHJvbmc+U2VuaW9yIEZ1bGwgU3RhY2sgSmF2YXNjcmlwdCBkZXZlbG9wZXI8L3N0cm9uZz4gc2luY2UgMjAwOC4gTXkgam9iIGlzIHRvIGhlbHAgY29tcGFuaWVzIGFyb3VuZCB0aGUgd29ybGQgdG8gYnVpbGQgc3VjY2Vzc2Z1bCBwcm9kdWN0cyBhbmQgZGVsaXZlciBncmVhdCB1c2VyIGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgPHA+SSBoYXZlIGNvbnNpZGVyYWJsZSBleHBlcnRpc2UgaW4gRnJvbnQgRW5kIGRldmVsb3BtZW50IHdpdGggPHN0cm9uZz5yZWFjdDwvc3Ryb25nPiwgPHN0cm9uZz5yZWR1eDwvc3Ryb25nPiwgPHN0cm9uZz5ub2RlanM8L3N0cm9uZz4gYW5kIDxzdHJvbmc+cmVhY3QtbmF0aXZlPC9zdHJvbmc+IGFuZCBoYXZlIHdvcmtlZCB3aXRoIGEgbnVtYmVyIG9mIGRpZmZlcmVudCBmcmFtZXdvcmtzIGFuZCBsYW5ndWFnZXMgdGhyb3VnaG91dCBteSBjYXJlZXIuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gZXhjbHVzaXZlbHkgd29ya2luZyByZW1vdGVseSBzaW5jZSAyMDE2IGFuZCBoYXZlIGJlZW4gYSBzdXBwb3J0ZXIgb2YgdGhlIHJlbW90ZSBjb21tdW5pdHkgc2luY2UgdGhlbi48L3A+XG4gICAgICAgIDxwPkNvbXBhbmllcyBJJ3ZlIHdvcmtlZCB3aXRoOjwvcD5cbiAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vam91ci5jb20vXCI+Sm91cjwvYT4sIDxhIGhyZWY9XCJodHRwczovL3d3dy53YWxkby5pby9cIj5XYWxkby5pbzwvYT4sIDxhIGhyZWY9XCJodHRwczovL2hpdnlhcHAuY29tL1wiPkhpdnk8L2E+IChZQyBXMTcsIGFjcXVpcmVkKSwgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVmb3VuZGVycy5jb20vXCI+ZUZvdW5kZXJzPC9hPiBhbmQgPGEgaHJlZj1cImh0dHBzOi8vdmlhZGVvLmNvbS9cIj5WaWFkZW88L2E+LjwvcD5cbiAgICAgICAgPHA+PG1hcms+SWYgeW914oCZZCBsaWtlIHRvIGNoYXQgPGEgaHJlZj1cIm1haWx0bzpqZXJlbXliZW5haW1AZ21haWwuY29tXCI+ZmVlbCBmcmVlIHRvIGVtYWlsIG1lPC9hPi48L21hcms+PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsJ1JvYm90bycsJ094eWdlbicsJ1VidW50dScsICdDYW50YXJlbGwnLCdGaXJhIFNhbnMnLCdEcm9pZCBTYW5zJywnSGVsdmV0aWNhIE5ldWUnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgIG1hcmdpbjogMS41cmVtIDJyZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk3KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xuICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gLjZzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiAuMnM7XG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBib3RoO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.eb9a9a048d69a5abcfd3.hot-update.js.map