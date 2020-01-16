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
      color = _ref.color,
      children = _ref.children,
      _ref$target = _ref.target,
      target = _ref$target === void 0 ? '_blank' : _ref$target;
  return __jsx("a", {
    href: href,
    target: target,
    style: {
      borderColor: color,
      outlineColor: color
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children);
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
      lineNumber: 52
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/".concat(favicon),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE), __jsx("link", {
    rel: "canonical",
    href: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Hi, I'm Jeremy Benaim. I build stuff for the internet."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "I've been a ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "I've been exclusively ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "working remotely"), " since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, ["Some companies I've worked with: ", __jsx(Link, {
    href: "https://jour.com/",
    color: "#fc7669",
    key: "jour",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Jour"), ', ', __jsx(Link, {
    href: "https://www.waldo.io/",
    color: "#5792fc",
    key: "waldo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "Waldo.io"), ', ', __jsx(Link, {
    href: "https://hivyapp.com/",
    color: "#75fbc4",
    key: "hivy",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, "Hivy (YC W17, acquired)"), ', ', __jsx(Link, {
    href: "https://www.efounders.com/",
    color: "#52cc51",
    key: "ef",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "eFounders"), ', ', __jsx(Link, {
    href: "https://viadeo.com/",
    color: "#f07355",
    key: "viadeo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, "Viadeo"), '.']), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:jeremybenaim@gmail.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Feel free to contact me"), " if you'd like to chat."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "You can also find me on ", __jsx(Link, {
    href: "https://twitter.com/jeremybenaim/",
    color: "#1da1f2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Twitter"), " and ", __jsx(Link, {
    href: "https://www.linkedin.com/in/jeremybenaim/",
    color: "#0073b1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "LinkedIn"), "."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["2661245958", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Bye now. \uD83D\uDC4B")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2661245958",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor],
    __self: this
  }, "html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}::selection{background:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}strong::selection{background:inherit;color:inherit;}html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:18px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:3.5rem 3.15rem;max-width:40rem;}strong{border:2px solid yellow;background:yellow;font-weight:600;color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}a{color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";font-weight:600;padding-bottom:2px;-webkit-text-decoration:none;text-decoration:none;-webkit-transition:.2s ease;transition:.2s ease;}a:hover{border-bottom:2px solid;}@media (prefers-color-scheme:dark){html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}a{color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0d5QixBQUdpQyxBQUdILEFBSXFCLEFBSUEsQUFJckIsQUFLcUIsQUFLNkcsQUFlL0gsQUFLRSxBQU9XLEFBT1gsQUFLa0IsQUFJSixBQUdLLEFBSUEsbUJBdkU3QyxBQVlnQixHQWZoQixBQXdDa0IsRUFLRSxBQWNwQixTQTNDQSxFQW9Da0IsQ0FnQmhCLEVBM0JGLEVBbENxQyxBQUlBLEFBU0EsQUE0Q0UsQ0FPQyxBQUlBLENBN0J0QixTQU9HLE9BTmdCLFlBT2QsS0E5Q3ZCLEFBSUEsQUFTQSxBQTRDRSxFQU9BLEFBSUEsZ0JBNUJGLDJCQU9zQiw0QkE5QkosZ0JBQ0QsSUE4QmpCLFdBN0JrQixnQkFDUCxTQUNLLGNBQ2UsNkJBQ0ssa0NBQ0osOEJBQ0ssbUNBQ0Qsa0NBQ1gsNkdBQ3pCIiwiZmlsZSI6Ii9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgdGhlbWUsIE1FVEEgfSBmcm9tICcuLi9jb21tb24vY29uc3RhbnRzJztcblxuY29uc3QgRkFWSUNPTiA9IHtcbiAgREVGQVVMVDogJ2RlZmF1bHQucG5nJyxcbiAgSURMRTogJ2lkbGUucG5nJyxcbn07XG5cblxuY29uc3QgTGluayA9ICh7aHJlZiwgY29sb3IsIGNoaWxkcmVuLCB0YXJnZXQgPSAnX2JsYW5rJ30pID0+IChcbiAgPGFcbiAgICBocmVmPXtocmVmfVxuICAgIHRhcmdldD17dGFyZ2V0fVxuICAgIHN0eWxlPXt7XG4gICAgICBib3JkZXJDb2xvcjogY29sb3IsXG4gICAgICBvdXRsaW5lQ29sb3I6IGNvbG9yLFxuICAgIH19XG4gID5cbiAgICB7Y2hpbGRyZW59XG4gIDwvYT5cbik7XG5cbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xuICBjb25zdCBbZmF2aWNvbiwgc2V0RmF2aWNvbl0gPSB1c2VTdGF0ZShGQVZJQ09OLkRFRkFVTFQpO1xuICBjb25zdCBbaXNQYWdlVmlzaWJsZSwgc2V0SXNQYWdlVmlzaWJsZV0gPSB1c2VTdGF0ZSh0cnVlKTtcblxuICBjb25zdCBvblZpc2liaWxpdHlDaGFuZ2UgPSAoKSA9PiB7XG4gICAgaWYgKGRvY3VtZW50LmhpZGRlbikge1xuICAgICAgc2V0SXNQYWdlVmlzaWJsZShmYWxzZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2V0SXNQYWdlVmlzaWJsZSh0cnVlKTtcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0RmF2aWNvbihpc1BhZ2VWaXNpYmxlID8gRkFWSUNPTi5ERUZBVUxUIDogRkFWSUNPTi5JRExFKVxuICB9LCBbaXNQYWdlVmlzaWJsZV0pO1xuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd2aXNpYmlsaXR5Y2hhbmdlJywgb25WaXNpYmlsaXR5Q2hhbmdlLCBmYWxzZSk7XG5cbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuICAgIH07XG4gIH0sIFtdKVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8bWV0YSBjaGFyc2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBodHRwLWVxdWl2PVwiWC1VQS1Db21wYXRpYmxlXCIgY29udGVudD1cIklFPWVkZ2VcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuXG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPXtgLyR7ZmF2aWNvbn1gfSAvPlxuXG4gICAgICAgIDx0aXRsZT57TUVUQS5USVRMRX08L3RpdGxlPlxuICAgICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtNRVRBLlVSTH0gLz5cblxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuXG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6bG9jYWxlXCIgY29udGVudD1cImVuX1VTXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0eXBlXCIgY29udGVudD1cIndlYnNpdGVcIiAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnVybFwiIGNvbnRlbnQ9e01FVEEuVVJMfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnNpdGVfbmFtZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cblxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpzaXRlXCIgY29udGVudD1cImplcmVteWJlbmFpbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNyZWF0b3JcIiBjb250ZW50PVwiamVyZW15YmVuYWltXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6dXJsXCIgY29udGVudD17TUVUQS5VUkx9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnRpdGxlXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtNRVRBLkRFU0NSSVBUSU9OfSAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgPGFydGljbGU+XG4gICAgICAgIDxwPkhpLCBJJ20gSmVyZW15IEJlbmFpbS4gSSBidWlsZCBzdHVmZiBmb3IgdGhlIGludGVybmV0LjwvcD5cbiAgICAgICAgPHA+SSd2ZSBiZWVuIGEgPHN0cm9uZz5TZW5pb3IgRnVsbCBTdGFjayBKYXZhc2NyaXB0IGRldmVsb3Blcjwvc3Ryb25nPiBzaW5jZSAyMDA4LiBNeSBqb2IgaXMgdG8gaGVscCBjb21wYW5pZXMgYXJvdW5kIHRoZSB3b3JsZCB0byBidWlsZCBzdWNjZXNzZnVsIHByb2R1Y3RzIGFuZCBkZWxpdmVyIGdyZWF0IHVzZXIgZXhwZXJpZW5jZXMuPC9wPlxuICAgICAgICA8cD5JIGhhdmUgY29uc2lkZXJhYmxlIGV4cGVydGlzZSBpbiBGcm9udCBFbmQgZGV2ZWxvcG1lbnQgd2l0aCA8c3Ryb25nPnJlYWN0PC9zdHJvbmc+LCA8c3Ryb25nPnJlZHV4PC9zdHJvbmc+LCA8c3Ryb25nPm5vZGVqczwvc3Ryb25nPiBhbmQgPHN0cm9uZz5yZWFjdC1uYXRpdmU8L3N0cm9uZz4gYW5kIGhhdmUgd29ya2VkIHdpdGggYSBudW1iZXIgb2YgZGlmZmVyZW50IGZyYW1ld29ya3MgYW5kIGxhbmd1YWdlcyB0aHJvdWdob3V0IG15IGNhcmVlci48L3A+XG4gICAgICAgIDxwPkkndmUgYmVlbiBleGNsdXNpdmVseSA8c3Ryb25nPndvcmtpbmcgcmVtb3RlbHk8L3N0cm9uZz4gc2luY2UgMjAxNiBhbmQgaGF2ZSBiZWVuIGEgc3VwcG9ydGVyIG9mIHRoZSByZW1vdGUgY29tbXVuaXR5IHNpbmNlIHRoZW4uPC9wPlxuICAgICAgICA8cD57XG4gICAgICAgICAgW1xuICAgICAgICAgICAgYFNvbWUgY29tcGFuaWVzIEkndmUgd29ya2VkIHdpdGg6IGAsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9qb3VyLmNvbS9cIiBjb2xvcj1cIiNmYzc2NjlcIiBrZXk9XCJqb3VyXCI+Sm91cjwvTGluaz4sXG4gICAgICAgICAgICAnLCAnLFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LndhbGRvLmlvL1wiIGNvbG9yPVwiIzU3OTJmY1wiIGtleT1cIndhbGRvXCI+V2FsZG8uaW88L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL2hpdnlhcHAuY29tL1wiIGNvbG9yPVwiIzc1ZmJjNFwiIGtleT1cImhpdnlcIj5IaXZ5IChZQyBXMTcsIGFjcXVpcmVkKTwvTGluaz4sXG4gICAgICAgICAgICAnLCAnLFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vd3d3LmVmb3VuZGVycy5jb20vXCIgY29sb3I9XCIjNTJjYzUxXCIga2V5PVwiZWZcIj5lRm91bmRlcnM8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3ZpYWRlby5jb20vXCIgY29sb3I9XCIjZjA3MzU1XCIga2V5PVwidmlhZGVvXCI+VmlhZGVvPC9MaW5rPixcbiAgICAgICAgICAgICcuJyxcbiAgICAgICAgICBdfVxuICAgICAgICA8L3A+XG4gICAgICAgIDxwPjxhIGhyZWY9XCJtYWlsdG86amVyZW15YmVuYWltQGdtYWlsLmNvbVwiPkZlZWwgZnJlZSB0byBjb250YWN0IG1lPC9hPiBpZiB5b3UnZCBsaWtlIHRvIGNoYXQuPC9wPlxuICAgICAgICA8cD5Zb3UgY2FuIGFsc28gZmluZCBtZSBvbiA8TGluayBocmVmPVwiaHR0cHM6Ly90d2l0dGVyLmNvbS9qZXJlbXliZW5haW0vXCIgY29sb3I9XCIjMWRhMWYyXCI+VHdpdHRlcjwvTGluaz4gYW5kIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vamVyZW15YmVuYWltL1wiIGNvbG9yPVwiIzAwNzNiMVwiPkxpbmtlZEluPC9MaW5rPi48L3A+XG4gICAgICAgIDxwPkJ5ZSBub3cuIPCfkYs8L3A+XG4gICAgICA8L2FydGljbGU+XG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICBodG1sIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgICosICo6YmVmb3JlLCAqOmFmdGVyIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgfVxuICAgICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5kYXJrLnRleHRDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgc3Ryb25nOjpzZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gICAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLEJsaW5rTWFjU3lzdGVtRm9udCwnU2Vnb2UgVUknLCdSb2JvdG8nLCdPeHlnZW4nLCdVYnVudHUnLCAnQ2FudGFyZWxsJywnRmlyYSBTYW5zJywnRHJvaWQgU2FucycsJ0hlbHZldGljYSBOZXVlJyxzYW5zLXNlcmlmO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogJ2tlcm4nO1xuICAgICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xuICAgICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgICAgIH1cblxuICAgICAgICBhcnRpY2xlIHtcbiAgICAgICAgICBtYXJnaW46IDMuNXJlbSAzLjE1cmVtO1xuICAgICAgICAgIG1heC13aWR0aDogNDByZW07XG4gICAgICAgIH1cblxuICAgICAgICBzdHJvbmcge1xuICAgICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHllbGxvdztcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB5ZWxsb3c7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgIHRyYW5zaXRpb246IC4ycyBlYXNlO1xuICAgICAgICB9XG4gICAgICAgIGE6aG92ZXIge1xuICAgICAgICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBhIHtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjpzZWxlY3Rpb24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.5d41a233dbfe64d2e483.hot-update.js.map