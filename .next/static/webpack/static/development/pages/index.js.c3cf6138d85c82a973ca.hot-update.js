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
      lineNumber: 38
    },
    __self: this
  }, __jsx("meta", {
    charset: "utf-8",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), __jsx("meta", {
    "http-equiv": "X-UA-Compatible",
    content: "IE=edge",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }), __jsx("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }), __jsx("link", {
    rel: "icon",
    href: "/".concat(favicon),
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx("title", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE), __jsx("link", {
    rel: "canonical",
    href: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }), __jsx("meta", {
    name: "description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }), __jsx("meta", {
    property: "og:locale",
    content: "en_US",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }), __jsx("meta", {
    property: "og:type",
    content: "website",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), __jsx("meta", {
    property: "og:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52
    },
    __self: this
  }), __jsx("meta", {
    property: "og:site_name",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }), __jsx("meta", {
    property: "og:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }), __jsx("meta", {
    property: "og:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:site",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:creator",
    content: "jeremybenaim",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:url",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].URL,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:title",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].TITLE,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }), __jsx("meta", {
    name: "twitter:description",
    content: _common_constants__WEBPACK_IMPORTED_MODULE_3__["META"].DESCRIPTION,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  })), __jsx("article", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "Hi, I'm Jeremy Benaim. I build stuff for the internet."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "I've been a ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Senior Full Stack Javascript developer"), " since 2008. My job is to help companies around the world to build successful products and deliver great user experiences."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "I have considerable expertise in Front End development with ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "react"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "redux"), ", ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "nodejs"), " and ", __jsx("strong", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "react-native"), " and have worked with a number of different frameworks and languages throughout my career."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "I've been exclusively working remotely since 2016 and have been a supporter of the remote community since then."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Some companies I've worked with: ", __jsx("a", {
    href: "https://jour.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Jour"), ", ", __jsx("a", {
    href: "https://www.waldo.io/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Waldo.io"), ", ", __jsx("a", {
    href: "https://hivyapp.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Hivy"), " (YC W17, acquired), ", __jsx("a", {
    href: "https://www.efounders.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "eFounders"), ", ", __jsx("a", {
    href: "https://viadeo.com/",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, "Viadeo"), "."), __jsx("p", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("mark", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "If you\u2019d like to chat, ", __jsx("a", {
    href: "mailto:jeremybenaim@gmail.com",
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a.dynamic([["1940696453", [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "feel free to contact me"), "."))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1940696453",
    dynamic: [_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, _common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor],
    __self: this
  }, "html{box-sizing:border-box;}*,*:before,*:after{box-sizing:inherit;}::selection{background:".concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}::-moz-selection{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].dark.textColor, ";}html,body{background:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.backgroundColor, ";color:").concat(_common_constants__WEBPACK_IMPORTED_MODULE_3__["theme"].light.textColor, ";}body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI','Roboto','Oxygen','Ubuntu','Cantarell','Fira Sans','Droid Sans','Helvetica Neue',sans-serif;line-height:1.4;font-size:18px;font-weight:400;margin:0;direction:ltr;font-feature-settings:'kern';text-rendering:optimizeLegibility;-webkit-text-size-adjust:none;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;}article{margin:3.75rem 3.15rem;max-width:700px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9qZXJlbXliZW5haW0vd29ya3NwYWNlL2plcmVteWJlbmFpbS5jb20vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0V5QixBQUdpQyxBQUdILEFBSXFCLEFBSUEsQUFLQSxBQUs2RyxBQWU5SCxtQkFoQ3pCLEdBSEEsQ0FvQ2tCLGdCQUNsQixDQTlCcUMsQUFJQSxBQUtBLG1DQVJyQyxBQUlBLEFBS0EseUVBSWtCLGdCQUNELGVBQ0MsZ0JBQ1AsU0FDSyxjQUNlLDZCQUNLLGtDQUNKLDhCQUNLLG1DQUNELGtDQUNYLDZHQUN6QiIsImZpbGUiOiIvVXNlcnMvamVyZW15YmVuYWltL3dvcmtzcGFjZS9qZXJlbXliZW5haW0uY29tL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IHRoZW1lLCBNRVRBIH0gZnJvbSAnLi4vY29tbW9uL2NvbnN0YW50cyc7XG5cbmNvbnN0IEZBVklDT04gPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0LnBuZycsXG4gIElETEU6ICdpZGxlLnBuZycsXG59O1xuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgY29uc3QgW2Zhdmljb24sIHNldEZhdmljb25dID0gdXNlU3RhdGUoRkFWSUNPTi5ERUZBVUxUKTtcbiAgY29uc3QgW2lzUGFnZVZpc2libGUsIHNldElzUGFnZVZpc2libGVdID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgY29uc3Qgb25WaXNpYmlsaXR5Q2hhbmdlID0gKCkgPT4ge1xuICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgIHNldElzUGFnZVZpc2libGUoZmFsc2UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNldElzUGFnZVZpc2libGUodHJ1ZSk7XG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldEZhdmljb24oaXNQYWdlVmlzaWJsZSA/IEZBVklDT04uREVGQVVMVCA6IEZBVklDT04uSURMRSlcbiAgfSwgW2lzUGFnZVZpc2libGVdKTtcblxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndmlzaWJpbGl0eWNoYW5nZScsIG9uVmlzaWJpbGl0eUNoYW5nZSwgZmFsc2UpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Zpc2liaWxpdHljaGFuZ2UnLCBvblZpc2liaWxpdHlDaGFuZ2UsIGZhbHNlKTtcbiAgICB9O1xuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPG1ldGEgY2hhcnNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cC1lcXVpdj1cIlgtVUEtQ29tcGF0aWJsZVwiIGNvbnRlbnQ9XCJJRT1lZGdlXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cblxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj17YC8ke2Zhdmljb259YH0gLz5cblxuICAgICAgICA8dGl0bGU+e01FVEEuVElUTEV9PC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17TUVUQS5VUkx9IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cblxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmxvY2FsZVwiIGNvbnRlbnQ9XCJlbl9VU1wiIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtNRVRBLlVSTH0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtNRVRBLlRJVExFfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17TUVUQS5USVRMRX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e01FVEEuREVTQ1JJUFRJT059IC8+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cInR3aXR0ZXI6c2l0ZVwiIGNvbnRlbnQ9XCJqZXJlbXliZW5haW1cIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD1cImplcmVteWJlbmFpbVwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnVybFwiIGNvbnRlbnQ9e01FVEEuVVJMfSAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjp0aXRsZVwiIGNvbnRlbnQ9e01FVEEuVElUTEV9IC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmRlc2NyaXB0aW9uXCIgY29udGVudD17TUVUQS5ERVNDUklQVElPTn0gLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxhcnRpY2xlPlxuICAgICAgICA8cD5IaSwgSSdtIEplcmVteSBCZW5haW0uIEkgYnVpbGQgc3R1ZmYgZm9yIHRoZSBpbnRlcm5ldC48L3A+XG4gICAgICAgIDxwPkkndmUgYmVlbiBhIDxzdHJvbmc+U2VuaW9yIEZ1bGwgU3RhY2sgSmF2YXNjcmlwdCBkZXZlbG9wZXI8L3N0cm9uZz4gc2luY2UgMjAwOC4gTXkgam9iIGlzIHRvIGhlbHAgY29tcGFuaWVzIGFyb3VuZCB0aGUgd29ybGQgdG8gYnVpbGQgc3VjY2Vzc2Z1bCBwcm9kdWN0cyBhbmQgZGVsaXZlciBncmVhdCB1c2VyIGV4cGVyaWVuY2VzLjwvcD5cbiAgICAgICAgPHA+SSBoYXZlIGNvbnNpZGVyYWJsZSBleHBlcnRpc2UgaW4gRnJvbnQgRW5kIGRldmVsb3BtZW50IHdpdGggPHN0cm9uZz5yZWFjdDwvc3Ryb25nPiwgPHN0cm9uZz5yZWR1eDwvc3Ryb25nPiwgPHN0cm9uZz5ub2RlanM8L3N0cm9uZz4gYW5kIDxzdHJvbmc+cmVhY3QtbmF0aXZlPC9zdHJvbmc+IGFuZCBoYXZlIHdvcmtlZCB3aXRoIGEgbnVtYmVyIG9mIGRpZmZlcmVudCBmcmFtZXdvcmtzIGFuZCBsYW5ndWFnZXMgdGhyb3VnaG91dCBteSBjYXJlZXIuPC9wPlxuICAgICAgICA8cD5JJ3ZlIGJlZW4gZXhjbHVzaXZlbHkgd29ya2luZyByZW1vdGVseSBzaW5jZSAyMDE2IGFuZCBoYXZlIGJlZW4gYSBzdXBwb3J0ZXIgb2YgdGhlIHJlbW90ZSBjb21tdW5pdHkgc2luY2UgdGhlbi48L3A+XG4gICAgICAgIDxwPlNvbWUgY29tcGFuaWVzIEkndmUgd29ya2VkIHdpdGg6IDxhIGhyZWY9XCJodHRwczovL2pvdXIuY29tL1wiPkpvdXI8L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly93d3cud2FsZG8uaW8vXCI+V2FsZG8uaW88L2E+LCA8YSBocmVmPVwiaHR0cHM6Ly9oaXZ5YXBwLmNvbS9cIj5IaXZ5PC9hPiAoWUMgVzE3LCBhY3F1aXJlZCksIDxhIGhyZWY9XCJodHRwczovL3d3dy5lZm91bmRlcnMuY29tL1wiPmVGb3VuZGVyczwvYT4sIDxhIGhyZWY9XCJodHRwczovL3ZpYWRlby5jb20vXCI+VmlhZGVvPC9hPi48L3A+XG4gICAgICAgIDxwPjxtYXJrPklmIHlvdeKAmWQgbGlrZSB0byBjaGF0LCA8YSBocmVmPVwibWFpbHRvOmplcmVteWJlbmFpbUBnbWFpbC5jb21cIj5mZWVsIGZyZWUgdG8gY29udGFjdCBtZTwvYT4uPC9tYXJrPjwvcD5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgICAgKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuICAgICAgICAgIGJveC1zaXppbmc6IGluaGVyaXQ7XG4gICAgICAgIH1cblxuICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgYmFja2dyb3VuZDogJHt0aGVtZS5kYXJrLmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICB9XG4gICAgICAgIDo6LW1vei1zZWxlY3Rpb24ge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmRhcmsudGV4dENvbG9yfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh0bWwsIGJvZHkge1xuICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sQmxpbmtNYWNTeXN0ZW1Gb250LCdTZWdvZSBVSScsJ1JvYm90bycsJ094eWdlbicsJ1VidW50dScsICdDYW50YXJlbGwnLCdGaXJhIFNhbnMnLCdEcm9pZCBTYW5zJywnSGVsdmV0aWNhIE5ldWUnLHNhbnMtc2VyaWY7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiAna2Vybic7XG4gICAgICAgICAgdGV4dC1yZW5kZXJpbmc6IG9wdGltaXplTGVnaWJpbGl0eTtcbiAgICAgICAgICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XG4gICAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgICAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFydGljbGUge1xuICAgICAgICAgIG1hcmdpbjogMy43NXJlbSAzLjE1cmVtO1xuICAgICAgICAgIG1heC13aWR0aDogNzAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBtYXJrIHtcblxuICAgICAgICB9XG5cbi8qXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZUlue1xuICAgICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoLjk3KTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRvIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDo5OTJweCkge1xuICAgICAgICAgIGFydGljbGUge1xuICAgICAgICAgICAgYW5pbWF0aW9uOiBmYWRlSW4gLjU1cztcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLjJzO1xuICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogYm90aDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiovXG5cbi8qXG4gICAgICAgIEBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcbiAgICAgICAgICBodG1sLCBib2R5IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUuZGFyay5iYWNrZ3JvdW5kQ29sb3J9O1xuICAgICAgICAgICAgY29sb3I6ICR7dGhlbWUuZGFyay50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6OnNlbGVjdGlvbiB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoZW1lLmxpZ2h0LmJhY2tncm91bmRDb2xvcn07XG4gICAgICAgICAgICBjb2xvcjogJHt0aGVtZS5saWdodC50ZXh0Q29sb3J9O1xuICAgICAgICAgIH1cbiAgICAgICAgICA6Oi1tb3otc2VsZWN0aW9uIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR7dGhlbWUubGlnaHQuYmFja2dyb3VuZENvbG9yfTtcbiAgICAgICAgICAgIGNvbG9yOiAke3RoZW1lLmxpZ2h0LnRleHRDb2xvcn07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4qL1xuICAgICAgYH08L3N0eWxlPlxuICAgIDwvPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XG4iXX0= */\n/*@ sourceURL=/Users/jeremybenaim/workspace/jeremybenaim.com/pages/index.js */")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.c3cf6138d85c82a973ca.hot-update.js.map