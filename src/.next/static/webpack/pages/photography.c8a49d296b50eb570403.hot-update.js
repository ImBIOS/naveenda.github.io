webpackHotUpdate_N_E("pages/photography",{

/***/ "./components/utils.js":
/*!*****************************!*\
  !*** ./components/utils.js ***!
  \*****************************/
/*! exports provided: cdnImage, shuffle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cdnImage\", function() { return cdnImage; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"shuffle\", function() { return shuffle; });\n/* harmony import */ var _babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n\nvar cdnImage = function cdnImage(name, placeholder) {\n  var folder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"/photography\";\n\n  if (false) {} else {\n    return \"/photography/\" + name;\n  }\n};\nvar shuffle = function shuffle(array) {\n  array = Object(_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(array);\n  var currentIndex = array.length,\n      temporaryValue,\n      randomIndex; // While there remain elements to shuffle...\n\n  while (0 !== currentIndex) {\n    // Pick a remaining element...\n    randomIndex = Math.floor(Math.random() * currentIndex);\n    currentIndex -= 1; // And swap it with the current element.\n\n    temporaryValue = array[currentIndex];\n    array[currentIndex] = array[randomIndex];\n    array[randomIndex] = temporaryValue;\n  }\n\n  return array;\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy91dGlscy5qcz83ZTY5Il0sIm5hbWVzIjpbImNkbkltYWdlIiwibmFtZSIsInBsYWNlaG9sZGVyIiwiZm9sZGVyIiwic2h1ZmZsZSIsImFycmF5IiwiY3VycmVudEluZGV4IiwibGVuZ3RoIiwidGVtcG9yYXJ5VmFsdWUiLCJyYW5kb21JbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxDQUFDQyxJQUFELEVBQU9DLFdBQVAsRUFBZ0Q7QUFBQSxNQUE1QkMsTUFBNEIsdUVBQW5CLGNBQW1COztBQUN0RSxhQUEyQyxFQUEzQyxNQWdCTztBQUNMLFdBQU8sa0JBQWtCRixJQUF6QjtBQUNEO0FBQ0YsQ0FwQk07QUFzQkEsSUFBTUcsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFXO0FBQ2hDQSxPQUFLLEdBQUcsNkZBQUlBLEtBQVAsQ0FBTDtBQUNBLE1BQUlDLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxNQUF6QjtBQUFBLE1BQ0VDLGNBREY7QUFBQSxNQUVFQyxXQUZGLENBRmdDLENBTWhDOztBQUNBLFNBQU8sTUFBTUgsWUFBYixFQUEyQjtBQUN6QjtBQUNBRyxlQUFXLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0JOLFlBQTNCLENBQWQ7QUFDQUEsZ0JBQVksSUFBSSxDQUFoQixDQUh5QixDQUt6Qjs7QUFDQUUsa0JBQWMsR0FBR0gsS0FBSyxDQUFDQyxZQUFELENBQXRCO0FBQ0FELFNBQUssQ0FBQ0MsWUFBRCxDQUFMLEdBQXNCRCxLQUFLLENBQUNJLFdBQUQsQ0FBM0I7QUFDQUosU0FBSyxDQUFDSSxXQUFELENBQUwsR0FBcUJELGNBQXJCO0FBQ0Q7O0FBRUQsU0FBT0gsS0FBUDtBQUNELENBbkJNIiwiZmlsZSI6Ii4vY29tcG9uZW50cy91dGlscy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBjZG5JbWFnZSA9IChuYW1lLCBwbGFjZWhvbGRlciwgZm9sZGVyID0gXCIvcGhvdG9ncmFwaHlcIikgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcImh0dHBzOi8vY2RuLnN0YXRpY2FsbHkuaW8vaW1nL25hdmVlbmRhLmdpdGh1Yi5pb1wiICtcbiAgICAgICAgZm9sZGVyICtcbiAgICAgICAgXCIvaD0xMDAvXCIgK1xuICAgICAgICBuYW1lXG4gICAgICApO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBcImh0dHBzOi8vY2RuLnN0YXRpY2FsbHkuaW8vaW1nL25hdmVlbmRhLmdpdGh1Yi5pby9mPWF1dG8vXCIgK1xuICAgICAgICBmb2xkZXIgK1xuICAgICAgICBcIi9cIiArXG4gICAgICAgIG5hbWVcbiAgICAgICk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIi9waG90b2dyYXBoeS9cIiArIG5hbWU7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBzaHVmZmxlID0gKGFycmF5KSA9PiB7XG4gIGFycmF5ID0gWy4uLmFycmF5XTtcbiAgdmFyIGN1cnJlbnRJbmRleCA9IGFycmF5Lmxlbmd0aCxcbiAgICB0ZW1wb3JhcnlWYWx1ZSxcbiAgICByYW5kb21JbmRleDtcblxuICAvLyBXaGlsZSB0aGVyZSByZW1haW4gZWxlbWVudHMgdG8gc2h1ZmZsZS4uLlxuICB3aGlsZSAoMCAhPT0gY3VycmVudEluZGV4KSB7XG4gICAgLy8gUGljayBhIHJlbWFpbmluZyBlbGVtZW50Li4uXG4gICAgcmFuZG9tSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjdXJyZW50SW5kZXgpO1xuICAgIGN1cnJlbnRJbmRleCAtPSAxO1xuXG4gICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgIHRlbXBvcmFyeVZhbHVlID0gYXJyYXlbY3VycmVudEluZGV4XTtcbiAgICBhcnJheVtjdXJyZW50SW5kZXhdID0gYXJyYXlbcmFuZG9tSW5kZXhdO1xuICAgIGFycmF5W3JhbmRvbUluZGV4XSA9IHRlbXBvcmFyeVZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIGFycmF5O1xufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/utils.js\n");

/***/ })

})