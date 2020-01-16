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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/".concat(favicon),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE), __jsx("link", {
    rel: "canonical",
    href: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  })), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Hi, I'm Jeremy Benaim. I build stuff for the internet."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "I've been a ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "I've been exclusively ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "working remotely"), " since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("a", {
    href: "mailto:jeremybenaim@gmail.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "Feel free to contact me"), " if you'd like to chat."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["261574440", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Bye now. \uD83D\uDC4B")), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "261574440",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor],
    __self: this
  }, "html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}::selection{background:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}strong::selection{background:inherit;color:inherit;}html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:18px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:3.5rem 3.15rem;max-width:40rem;}strong{border:2px solid yellow;background:yellow;font-weight:600;color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}@media (prefers-color-scheme:dark){html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0d5QixBQUdpQyxBQUdILEFBSXFCLEFBSUEsQUFJckIsQUFLcUIsQUFLNkcsQUFlL0gsQUFLRSxBQVFrQixBQUlBLEFBSUMsbUJBekQ3QyxBQVlnQixHQWZoQixBQXdDa0IsRUFLRSxTQTdCcEIsS0F5QkEsRUFsQ3FDLEFBSUEsQUFTQSxBQWlDRSxBQUlDLENBSUEsQ0FmdEIsZ0JBQ21CLGlCQXZDckMsQUFJQSxBQVNBLEFBaUNFLENBSUEsQ0FJQSxnQkFkRix1REF2QmtCLGdCQUNELGVBQ0MsZ0JBQ1AsU0FDSyxjQUNlLDZCQUNLLGtDQUNKLDhCQUNLLG1DQUNELGtDQUNYLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW15YmVuYWltL3dvcmtzcGFjZS9qZXJlbXliZW5haW0uY29tL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRoZW1lLCBNRVRBIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZBVklDT04gPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0LnBuZycsXG4gIElETEU6ICdpZGxlLnBuZycsXG59O1xuXG5cbmNvbnN0IExpbmsgPSAoe2hyZWYsIGNvbG9yLCBjaGlsZHJlbiwgdGFyZ2V0ID0gJ19ibGFuayd9KSA9PiAoXG4gIDxhXG4gICAgaHJlZj17aHJlZn1cbiAgICB0YXJnZXQ9e3RhcmdldH1cbiAgICBzdHlsZT17e1xuICAgICAgYm9yZGVyQ29sb3I6IGNvbG9yLFxuICAgICAgb3V0bGluZUNvbG9yOiBjb2xvcixcbiAgICB9fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2E+XG4pO1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoRkFWSUNPTi5ERUZBVUxUKTtcbiAgY29uc3QgW2lzUGFnZVZpc2libGUsIHNldElzUGFnZVZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgIHNldElzUGFnZVZpc2libGUoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzUGFnZVZpc2libGUodHJ1ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZhdmljb24oaXNQYWdlVmlzaWJsZSA/IEZBVklDT04uREVGQVVMVCA6IEZBVklDT04uSURMRSlcbiAgfSwgW2lzUGFnZVZpc2libGVdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17YC8ke2Zhdmljb259YH0gLz5cblxuICAgICAgICA8dGl0bGU+e01FVEEuVElUTEV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17TUVUQS5VUkx9IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cImplcmVteWJlbmFpbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e01FVEEuVVJMfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8cD5IaSwgSSdtIEplcmVteSBCZW5haW0uIEkgYnVpbGQgc3R1ZmYgZm9yIHRoZSBpbnRlcm5ldC48L3A+XG4gICAgICAgIDxwPkkndmUgYmVlbiBhIDxzdHJvbmc+U2VuaW9yIEZ1bGwgU3RhY2sgSmF2YXNjcmlwdCBkZXZlbG9wZXI8L3N0cm9uZz4gc2luY2UgMjAwOC4gTXkgam9iIGlzIHRvIGhlbHAgY29tcGFuaWVzIGFyb3VuZCB0aGUgd29ybGQgdG8gYnVpbGQgc3VjY2Vzc2Z1bCBwcm9kdWN0cyBhbmQgZGVsaXZlciBncmVhdCB1c2VyIGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgPHA+SSBoYXZlIGNvbnNpZGVyYWJsZSBleHBlcnRpc2UgaW4gRnJvbnQgRW5kIGRldmVsb3BtZW50IHdpdGggPHN0cm9uZz5yZWFjdDwvc3Ryb25nPiwgPHN0cm9uZz5yZWR1eDwvc3Ryb25nPiwgPHN0cm9uZz5ub2RlanM8L3N0cm9uZz4gYW5kIDxzdHJvbmc+cmVhY3QtbmF0aXZlPC9zdHJvbmc+IGFuZCBoYXZlIHdvcmtlZCB3aXRoIGEgbnVtYmVyIG9mIGRpZmZlcmVudCBmcmFtZXdvcmtzIGFuZCBsYW5ndWFnZXMgdGhyb3VnaG91dCBteSBjYXJlZXIuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gZXhjbHVzaXZlbHkgPHN0cm9uZz53b3JraW5nIHJlbW90ZWx5PC9zdHJvbmc+IHNpbmNlIDIwMTYgYW5kIGhhdmUgYmVlbiBhIHN1cHBvcnRlciBvZiB0aGUgcmVtb3RlIGNvbW11bml0eSBzaW5jZSB0aGVuLjwvcD5cbiAgICAgICAgPHA+e1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIGBTb21lIGNvbXBhbmllcyBJJ3ZlIHdvcmtlZCB3aXRoOiBgLFxuICAgICAgICAgICAgPExpbmsgaHJlZj1cImh0dHBzOi8vam91ci5jb20vXCIgY29sb3I9XCIjZmM3NjY5XCIga2V5PVwiam91clwiPkpvdXI8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy53YWxkby5pby9cIiBjb2xvcj1cIiM1NzkyZmNcIiBrZXk9XCJ3YWxkb1wiPldhbGRvLmlvPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly9oaXZ5YXBwLmNvbS9cIiBjb2xvcj1cIiM3NWZiYzRcIiBrZXk9XCJoaXZ5XCI+SGl2eSAoWUMgVzE3LCBhY3F1aXJlZCk8L0xpbms+LFxuICAgICAgICAgICAgJywgJyxcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCJodHRwczovL3d3dy5lZm91bmRlcnMuY29tL1wiIGNvbG9yPVwiIzUyY2M1MVwiIGtleT1cImVmXCI+ZUZvdW5kZXJzPC9MaW5rPixcbiAgICAgICAgICAgICcsICcsXG4gICAgICAgICAgICA8TGluayBocmVmPVwiaHR0cHM6Ly92aWFkZW8uY29tL1wiIGNvbG9yPVwiI2YwNzM1NVwiIGtleT1cInZpYWRlb1wiPlZpYWRlbzwvTGluaz4sXG4gICAgICAgICAgICAnLicsXG4gICAgICAgICAgXX1cbiAgICAgICAgPC9wPlxuICAgICAgICA8cD48YSBocmVmPVwibWFpbHRvOmplcmVteWJlbmFpbUBnbWFpbC5jb21cIj5GZWVsIGZyZWUgdG8gY29udGFjdCBtZTwvYT4gaWYgeW91J2QgbGlrZSB0byBjaGF0LjwvcD5cbiAgICAgICAgPHA+WW91IGNhbiBhbHNvIGZpbmQgbWUgb24gPExpbmsgaHJlZj1cImh0dHBzOi8vdHdpdHRlci5jb20vamVyZW15YmVuYWltL1wiIGNvbG9yPVwiIzFkYTFmMlwiPlR3aXR0ZXI8L0xpbms+IGFuZCA8TGluayBocmVmPVwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2plcmVteWJlbmFpbS9cIiBjb2xvcj1cIiMwMDczYjFcIj5MaW5rZWRJbjwvTGluaz4uPC9wPlxuICAgICAgICA8cD5CeWUgbm93LiDwn5GLPC9wPlxuICAgICAgPC9hcnRpY2xlPlxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgaHRtbCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgfVxuICAgICAgICAqLCAqOmJlZm9yZSwgKjphZnRlciB7XG4gICAgICAgICAgYm94LXNpemluZzogaW5oZXJpdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDo6c2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmRhcmsuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5kYXJrLnRleHRDb2xvcn07XG4gICAgICAgIH1cbiAgICAgICAgOjotbW96LXNlbGVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICB9XG4gICAgICAgIHN0cm9uZzo6c2VsZWN0aW9uIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICB9XG5cbiAgICAgICAgaHRtbCwgYm9keSB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5saWdodC5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgIH1cblxuICAgICAgICBib2R5IHtcbiAgICAgICAgICBmb250LWZhbWlseTogLWFwcGxlLXN5c3RlbSxCbGlua01hY1N5c3RlbUZvbnQsJ1NlZ29lIFVJJywnUm9ib3RvJywnT3h5Z2VuJywnVWJ1bnR1JywgJ0NhbnRhcmVsbCcsJ0ZpcmEgU2FucycsJ0Ryb2lkIFNhbnMnLCdIZWx2ZXRpY2EgTmV1ZScsc2Fucy1zZXJpZjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBkaXJlY3Rpb246IGx0cjtcbiAgICAgICAgICBmb250LWZlYXR1cmUtc2V0dGluZ3M6ICdrZXJuJztcbiAgICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xuICAgICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJ0aWNsZSB7XG4gICAgICAgICAgbWFyZ2luOiAzLjVyZW0gMy4xNXJlbTtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgc3Ryb25nIHtcbiAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB5ZWxsb3c7XG4gICAgICAgICAgYmFja2dyb3VuZDogeWVsbG93O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUubGlnaHQudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC8+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdfQ== */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.3d86ce243e039173beab.hot-update.js.map