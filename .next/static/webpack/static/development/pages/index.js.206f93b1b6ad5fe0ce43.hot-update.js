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

var Index = function Index() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(FAVICON.DEFAULT),
      favicon = _useState[0],
      setFavicon = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(true),
      isPageVisible = _useState2[0],
      setIsPageVisible = _useState2[1];

  var onVisibilityChange = function onVisibilityChange() {
    setIsPageVisible(document.hidden);
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
      lineNumber: 33
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }), __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE), __jsx("link", {
    rel: "canonical",
    href: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  })), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "Hi, I'm Jeremy Benaim. I build stuff for the internet."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "I've been a ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "I've been exclusively working remotely since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Some companies I've worked with: ", __jsx("a", {
    href: "https://jour.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Jour"), ", ", __jsx("a", {
    href: "https://www.waldo.io/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Waldo.io"), ", ", __jsx("a", {
    href: "https://hivyapp.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Hivy"), " (YC W17, acquired), ", __jsx("a", {
    href: "https://www.efounders.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "eFounders"), ", ", __jsx("a", {
    href: "https://viadeo.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, "Viadeo"), "."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("mark", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "If you\u2019d like to chat ", __jsx("a", {
    href: "mailto:jeremybenaim@gmail.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["432516050", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "feel free to email me"), "."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "432516050",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor],
    __self: this
  }, "*,*:before,*:after{@ box-sizing:inherit;}html,body{background:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}html{height:100%;box-sizing:border-box;}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:16px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:1.5rem 2rem;max-width:700px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUV5QixBQUc4QixBQUlxQixBQUs1QixBQUt5SSxBQWVsSSxZQW5CRyxPQW9CTixFQTdCbEIsYUFVQSxDQW9CQSxLQTFCcUMsbUNBQ3JDLHlFQVNrQixnQkFDRCxlQUNDLGdCQUNQLFNBQ0ssY0FDZSw2QkFDSyxrQ0FDSiw4QkFDSyxtQ0FDRCxrQ0FDWCw2R0FDekIiLCJmaWxlIjoiL1VzZXJzL2plcmVteWJlbmFpbS93b3Jrc3BhY2UvamVyZW15YmVuYWltLmNvbS9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB0aGVtZSwgTUVUQSB9IGZyb20gJy4uL2NvbW1vbi9jb25zdGFudHMnO1xuXG5jb25zdCBGQVZJQ09OID0ge1xuICBERUZBVUxUOiAnZGVmYXVsdC5wbmcnLFxuICBJRExFOiAnaWRsZS5wbmcnLFxufTtcblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIGNvbnN0IFtmYXZpY29uLCBzZXRGYXZpY29uXSA9IHVzZVN0YXRlKEZBVklDT04uREVGQVVMVCk7XG4gIGNvbnN0IFtpc1BhZ2VWaXNpYmxlLCBzZXRJc1BhZ2VWaXNpYmxlXSA9IHVzZVN0YXRlKHRydWUpO1xuXG4gIGNvbnN0IG9uVmlzaWJpbGl0eUNoYW5nZSA9ICgpID0+IHtcbiAgICBzZXRJc1BhZ2VWaXNpYmxlKGRvY3VtZW50LmhpZGRlbik7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZhdmljb24oaXNQYWdlVmlzaWJsZSA/IEZBVklDT04uREVGQVVMVCA6IEZBVklDT04uSURMRSlcbiAgfSwgW2lzUGFnZVZpc2libGVdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9cIi8+XG5cbiAgICAgICAgPHRpdGxlPntNRVRBLlRJVExFfTwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImNhbm9uaWNhbFwiIGhyZWY9e01FVEEuVVJMfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpsb2NhbGVcIiBjb250ZW50PVwiZW5fVVNcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnR5cGVcIiBjb250ZW50PVwid2Vic2l0ZVwiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dXJsXCIgY29udGVudD17TUVUQS5VUkx9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6Y3JlYXRvclwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8YXJ0aWNsZT5cbiAgICAgICAgPHA+SGksIEknbSBKZXJlbXkgQmVuYWltLiBJIGJ1aWxkIHN0dWZmIGZvciB0aGUgaW50ZXJuZXQuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gYSA8c3Ryb25nPlNlbmlvciBGdWxsIFN0YWNrIEphdmFzY3JpcHQgZGV2ZWxvcGVyPC9zdHJvbmc+IHNpbmNlIDIwMDguIE15IGpvYiBpcyB0byBoZWxwIGNvbXBhbmllcyBhcm91bmQgdGhlIHdvcmxkIHRvIGJ1aWxkIHN1Y2Nlc3NmdWwgcHJvZHVjdHMgYW5kIGRlbGl2ZXIgZ3JlYXQgdXNlciBleHBlcmllbmNlcy48L3A+XG4gICAgICAgIDxwPkkgaGF2ZSBjb25zaWRlcmFibGUgZXhwZXJ0aXNlIGluIEZyb250IEVuZCBkZXZlbG9wbWVudCB3aXRoIDxzdHJvbmc+cmVhY3Q8L3N0cm9uZz4sIDxzdHJvbmc+cmVkdXg8L3N0cm9uZz4sIDxzdHJvbmc+bm9kZWpzPC9zdHJvbmc+IGFuZCA8c3Ryb25nPnJlYWN0LW5hdGl2ZTwvc3Ryb25nPiBhbmQgaGF2ZSB3b3JrZWQgd2l0aCBhIG51bWJlciBvZiBkaWZmZXJlbnQgZnJhbWV3b3JrcyBhbmQgbGFuZ3VhZ2VzIHRocm91Z2hvdXQgbXkgY2FyZWVyLjwvcD5cbiAgICAgICAgPHA+SSd2ZSBiZWVuIGV4Y2x1c2l2ZWx5IHdvcmtpbmcgcmVtb3RlbHkgc2luY2UgMjAxNiBhbmQgaGF2ZSBiZWVuIGEgc3VwcG9ydGVyIG9mIHRoZSByZW1vdGUgY29tbXVuaXR5IHNpbmNlIHRoZW4uPC9wPlxuICAgICAgICA8cD5Tb21lIGNvbXBhbmllcyBJJ3ZlIHdvcmtlZCB3aXRoOiA8YSBocmVmPVwiaHR0cHM6Ly9qb3VyLmNvbS9cIj5Kb3VyPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vd3d3LndhbGRvLmlvL1wiPldhbGRvLmlvPC9hPiwgPGEgaHJlZj1cImh0dHBzOi8vaGl2eWFwcC5jb20vXCI+SGl2eTwvYT4gKFlDIFcxNywgYWNxdWlyZWQpLCA8YSBocmVmPVwiaHR0cHM6Ly93d3cuZWZvdW5kZXJzLmNvbS9cIj5lRm91bmRlcnM8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly92aWFkZW8uY29tL1wiPlZpYWRlbzwvYT4uPC9wPlxuICAgICAgICA8cD48bWFyaz5JZiB5b3XigJlkIGxpa2UgdG8gY2hhdCA8YSBocmVmPVwibWFpbHRvOmplcmVteWJlbmFpbUBnbWFpbC5jb21cIj5mZWVsIGZyZWUgdG8gZW1haWwgbWU8L2E+LjwvbWFyaz48L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAqLCAqOmJlZm9yZSwgKjphZnRlciB7QFxuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsJ1JvYm90bycsJ094eWdlbicsJ1VidW50dScsICdDYW50YXJlbGwnLCdGaXJhIFNhbnMnLCdEcm9pZCBTYW5zJywnSGVsdmV0aWNhIE5ldWUnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgIG1hcmdpbjogMS41cmVtIDJyZW07XG4gICAgICAgICAgbWF4LXdpZHRoOiA3MDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1hcmsge1xuICAgICAgICAgIC8vIGJhY2tncm91bmQ6IHBpbms7XG4gICAgICAgIH1cbi8qXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk3KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xuICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gLjU1cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiovXG5cbi8qXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuKi9cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8Lz5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl19 */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.206f93b1b6ad5fe0ce43.hot-update.js.map