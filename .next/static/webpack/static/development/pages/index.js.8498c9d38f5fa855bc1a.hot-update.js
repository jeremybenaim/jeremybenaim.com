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
var META = {
  URL: 'https://jeremybenaim.com/',
  TITLE: 'Jeremy Benaim – Full Stack Javascript Developer',
  DESCRIPTION: 'Jeremy Benaim – Full Stack Javascript Developer. UX / Product. Available for freelance'
};
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
      lineNumber: 49
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("title", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, META.TITLE), __jsx("link", {
    rel: "canonical",
    href: META.URL,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: META.DESCRIPTION,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: META.URL,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: META.TITLE,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: META.TITLE,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: META.DESCRIPTION,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: META.URL,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: META.TITLE,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: META.DESCRIPTION,
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  })), __jsx("article", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Hi, I'm Jeremy. I build stuff for the internet."), __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "I'm a ", __jsx("strong", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "I've been exclusively working remotely since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, "Companies I've worked with:"), __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, __jsx("a", {
    href: "https://jour.com/",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Jour"), ", ", __jsx("a", {
    href: "https://www.waldo.io/",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Waldo.io"), ", ", __jsx("a", {
    href: "https://hivyapp.com/",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Hivy"), " (YC W17, acquired), ", __jsx("a", {
    href: "https://www.efounders.com/",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "eFounders"), " and ", __jsx("a", {
    href: "https://viadeo.com/",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Viadeo"), "."), __jsx("p", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("mark", {
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "If you\u2019d like to chat ", __jsx("a", {
    href: "mailto:jeremybenaim@gmail.com",
    className: "jsx-262861902",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "feel free to email me"), "."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "262861902",
    __self: this
  }, "*,*:before,*:after{@ box-sizing:inherit;}html,body{background:".concat(theme.light.backgroundColor, ";color:").concat(theme.light.textColor, ";}html{height:100%;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:16px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:1.5rem 2rem;max-width:700px;}@-webkit-keyframes fadeIn{0%{-webkit-transform:scale(.97);-ms-transform:scale(.97);transform:scale(.97);opacity:0;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@keyframes fadeIn{0%{-webkit-transform:scale(.97);-ms-transform:scale(.97);transform:scale(.97);opacity:0;}to{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;}}@media only screen and (min-width:992px){article{-webkit-animation:fadeIn .6s;animation:fadeIn .6s;-webkit-animation-delay:.2s;animation-delay:.2s;-webkit-animation-fill-mode:both;animation-fill-mode:both;}}@media (prefers-color-scheme:dark){html,body{background:").concat(theme.dark.backgroundColor, ";color:").concat(theme.dark.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0Z5QixBQUc4QixBQUlxQixBQUs1QixBQUt5SSxBQWVsSSxBQU1JLEFBSUYsQUFPRSxBQVFtQixZQTVDcEIsT0FvQk4sRUE3QmxCLGFBVUEsQ0FvQkEsS0ExQnFDLEFBa0RFLFVBUmYsbUJBUFYsTUFsQ2QsQUE4QmMsQUFvQlosSUFmQSxNQUpBLGFBVzJCLGtEQWpDWCxRQWtDaEIsUUFqQ2UsZUFDQyxnQkFDUCxTQUNLLGNBQ2UsNkJBQ0ssa0NBQ0osOEJBQ0ssbUNBQ0Qsa0NBQ1gsNkdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCB0aGVtZSA9IHtcbiAgbGlnaHQ6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmZmJyxcbiAgICB0ZXh0Q29sb3I6ICcjMmUyZjMwJyxcbiAgfSxcbiAgZGFyazoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJyMyZTJmMzAnLFxuICAgIHRleHRDb2xvcjogJyNmZmYnLFxuICB9LFxufTtcblxuY29uc3QgTUVUQSA9IHtcbiAgVVJMOiAnaHR0cHM6Ly9qZXJlbXliZW5haW0uY29tLycsXG4gIFRJVExFOiAnSmVyZW15IEJlbmFpbSDigJMgRnVsbCBTdGFjayBKYXZhc2NyaXB0IERldmVsb3BlcicsXG4gIERFU0NSSVBUSU9OOiAnSmVyZW15IEJlbmFpbSDigJMgRnVsbCBTdGFjayBKYXZhc2NyaXB0IERldmVsb3Blci4gVVggLyBQcm9kdWN0LiBBdmFpbGFibGUgZm9yIGZyZWVsYW5jZScsXG59O1xuXG5jb25zdCBGQVZJQ09OX1NUQVRFID0ge1xuICBERUZBVUxUOiAnREVGQVVMVCcsXG4gIElETEU6ICdJRExFJyxcbn07XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZmF2aWNvbiwgc2V0RmF2aWNvbl0gPSB1c2VTdGF0ZShGQVZJQ09OX1NUQVRFLkRFRkFVTFQpO1xuICBjb25zdCBbaXNQYWdlVmlzaWJsZSwgc2V0SXNQYWdlVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBvblZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XG4gICAgc2V0SXNQYWdlVmlzaWJsZShkb2N1bWVudC5oaWRkZW4pO1xuICB9XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRGYXZpY29uKGlzUGFnZVZpc2libGUgPyBGQVZJQ09OX1NUQVRFLkRFRkFVTFQgOiBGQVZJQ09OX1NUQVRFLklETEUpXG4gIH0sIFtpc1BhZ2VWaXNpYmxlXSk7XG5cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcblxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG4gICAgfTtcbiAgfSwgW10pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICAgIDxtZXRhIGh0dHAtZXF1aXY9XCJYLVVBLUNvbXBhdGlibGVcIiBjb250ZW50PVwiSUU9ZWRnZVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG5cbiAgICAgICAgPHRpdGxlPntNRVRBLlRJVExFfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e01FVEEuVVJMfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17TUVUQS5VUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+SGksIEknbSBKZXJlbXkuIEkgYnVpbGQgc3R1ZmYgZm9yIHRoZSBpbnRlcm5ldC48L3A+XG4gICAgICAgIDxwPkknbSBhIDxzdHJvbmc+U2VuaW9yIEZ1bGwgU3RhY2sgSmF2YXNjcmlwdCBkZXZlbG9wZXI8L3N0cm9uZz4gc2luY2UgMjAwOC4gTXkgam9iIGlzIHRvIGhlbHAgY29tcGFuaWVzIGFyb3VuZCB0aGUgd29ybGQgdG8gYnVpbGQgc3VjY2Vzc2Z1bCBwcm9kdWN0cyBhbmQgZGVsaXZlciBncmVhdCB1c2VyIGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgPHA+SSBoYXZlIGNvbnNpZGVyYWJsZSBleHBlcnRpc2UgaW4gRnJvbnQgRW5kIGRldmVsb3BtZW50IHdpdGggPHN0cm9uZz5yZWFjdDwvc3Ryb25nPiwgPHN0cm9uZz5yZWR1eDwvc3Ryb25nPiwgPHN0cm9uZz5ub2RlanM8L3N0cm9uZz4gYW5kIDxzdHJvbmc+cmVhY3QtbmF0aXZlPC9zdHJvbmc+IGFuZCBoYXZlIHdvcmtlZCB3aXRoIGEgbnVtYmVyIG9mIGRpZmZlcmVudCBmcmFtZXdvcmtzIGFuZCBsYW5ndWFnZXMgdGhyb3VnaG91dCBteSBjYXJlZXIuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gZXhjbHVzaXZlbHkgd29ya2luZyByZW1vdGVseSBzaW5jZSAyMDE2IGFuZCBoYXZlIGJlZW4gYSBzdXBwb3J0ZXIgb2YgdGhlIHJlbW90ZSBjb21tdW5pdHkgc2luY2UgdGhlbi48L3A+XG4gICAgICAgIDxwPkNvbXBhbmllcyBJJ3ZlIHdvcmtlZCB3aXRoOjwvcD5cbiAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vam91ci5jb20vXCI+Sm91cjwvYT4sIDxhIGhyZWY9XCJodHRwczovL3d3dy53YWxkby5pby9cIj5XYWxkby5pbzwvYT4sIDxhIGhyZWY9XCJodHRwczovL2hpdnlhcHAuY29tL1wiPkhpdnk8L2E+IChZQyBXMTcsIGFjcXVpcmVkKSwgPGEgaHJlZj1cImh0dHBzOi8vd3d3LmVmb3VuZGVycy5jb20vXCI+ZUZvdW5kZXJzPC9hPiBhbmQgPGEgaHJlZj1cImh0dHBzOi8vdmlhZGVvLmNvbS9cIj5WaWFkZW88L2E+LjwvcD5cbiAgICAgICAgPHA+PG1hcms+SWYgeW914oCZZCBsaWtlIHRvIGNoYXQgPGEgaHJlZj1cIm1haWx0bzpqZXJlbXliZW5haW1AZ21haWwuY29tXCI+ZmVlbCBmcmVlIHRvIGVtYWlsIG1lPC9hPi48L21hcms+PC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge0BcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLCdSb2JvdG8nLCdPeHlnZW4nLCdVYnVudHUnLCAnQ2FudGFyZWxsJywnRmlyYSBTYW5zJywnRHJvaWQgU2FucycsJ0hlbHZldGljYSBOZXVlJyxzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICBtYXJnaW46IDEuNXJlbSAycmVtO1xuICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVJbntcbiAgICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKC45Nyk7XG4gICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6OTkycHgpIHtcbiAgICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZUluIC42cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XG4gICAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.8498c9d38f5fa855bc1a.hot-update.js.map