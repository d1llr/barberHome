"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/redux/slices/CartSlice.ts":
/*!***************************************!*\
  !*** ./src/redux/slices/CartSlice.ts ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PullService\": function() { return /* binding */ PullService; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n\nconst initialState = {\n    services: [],\n    barber: \"\"\n};\nconst cartSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"cartSlice\",\n    initialState,\n    reducers: {\n        PullService (state, action) {\n            state.services.push(action.payload);\n        },\n        RemoveService (state, action) {\n            state.services = state.services.filter((item)=>item != action.payload);\n        }\n    }\n});\nconst { PullService  } = cartSlice.actions;\n/* harmony default export */ __webpack_exports__[\"default\"] = (cartSlice.reducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVkdXgvc2xpY2VzL0NhcnRTbGljZS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUE4QztBQVE5QyxNQUFNQyxlQUFlO0lBQ2pCQyxVQUFVLEVBQUU7SUFDWkMsUUFBUTtBQUNaO0FBRUEsTUFBTUMsWUFBWUosNkRBQVdBLENBQUM7SUFDMUJLLE1BQU07SUFDTko7SUFDQUssVUFBVTtRQUNOQyxhQUFZQyxLQUFLLEVBQUVDLE1BQTZCLEVBQUU7WUFDOUNELE1BQU1OLFFBQVEsQ0FBQ1EsSUFBSSxDQUFDRCxPQUFPRSxPQUFPO1FBQ3RDO1FBQ0FDLGVBQWNKLEtBQUssRUFBRUMsTUFBNkIsRUFBRTtZQUNoREQsTUFBTU4sUUFBUSxHQUFHTSxNQUFNTixRQUFRLENBQUNXLE1BQU0sQ0FBQ0MsQ0FBQUEsT0FBTUEsUUFBUUwsT0FBT0UsT0FBTztRQUN2RTtJQVVKO0FBQ0o7QUFFTyxNQUFNLEVBQUVKLFlBQVcsRUFBRSxHQUFHSCxVQUFVVyxPQUFPO0FBQ2hELCtEQUFlWCxVQUFVWSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9yZWR1eC9zbGljZXMvQ2FydFNsaWNlLnRzP2ZkNGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5pbXBvcnQgdHlwZSB7IFBheWxvYWRBY3Rpb24gfSBmcm9tICdAcmVkdXhqcy90b29sa2l0J1xyXG5cclxuaW50ZXJmYWNlIENhcnRTdGF0ZSB7XHJcbiAgICBzZXJ2aWNlczogQXJyYXk8bnVtYmVyPixcclxuICAgIGJhcmJlcjogc3RyaW5nXHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICAgIHNlcnZpY2VzOiBbXSxcclxuICAgIGJhcmJlcjogJydcclxufSBhcyBDYXJ0U3RhdGVcclxuXHJcbmNvbnN0IGNhcnRTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICAgIG5hbWU6ICdjYXJ0U2xpY2UnLFxyXG4gICAgaW5pdGlhbFN0YXRlLFxyXG4gICAgcmVkdWNlcnM6IHtcclxuICAgICAgICBQdWxsU2VydmljZShzdGF0ZSwgYWN0aW9uOiBQYXlsb2FkQWN0aW9uPG51bWJlcj4pIHtcclxuICAgICAgICAgICAgc3RhdGUuc2VydmljZXMucHVzaChhY3Rpb24ucGF5bG9hZClcclxuICAgICAgICB9LFxyXG4gICAgICAgIFJlbW92ZVNlcnZpY2Uoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxudW1iZXI+KSB7XHJcbiAgICAgICAgICAgIHN0YXRlLnNlcnZpY2VzID0gc3RhdGUuc2VydmljZXMuZmlsdGVyKGl0ZW09Pml0ZW0gIT0gYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGRlY3JlbWVudChzdGF0ZSkge1xyXG4gICAgICAgIC8vICAgICBhY3Rpb24ucGF5bG9hZCA/IFxyXG4gICAgICAgIC8vICAgICBzdGF0ZS5zdGFnZSArPSBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICAgIC8vICAgICA6XHJcbiAgICAgICAgLy8gICAgIHN0YXRlLnN0YWdlICs9IDFcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGluY3JlbWVudEJ5QW1vdW50KHN0YXRlLCBhY3Rpb246IFBheWxvYWRBY3Rpb248bnVtYmVyPikge1xyXG4gICAgICAgIC8vICAgc3RhdGUuc3RhZ2UgKz0gYWN0aW9uLnBheWxvYWRcclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBjb25zdCB7IFB1bGxTZXJ2aWNlIH0gPSBjYXJ0U2xpY2UuYWN0aW9uc1xyXG5leHBvcnQgZGVmYXVsdCBjYXJ0U2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInNlcnZpY2VzIiwiYmFyYmVyIiwiY2FydFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwiUHVsbFNlcnZpY2UiLCJzdGF0ZSIsImFjdGlvbiIsInB1c2giLCJwYXlsb2FkIiwiUmVtb3ZlU2VydmljZSIsImZpbHRlciIsIml0ZW0iLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/redux/slices/CartSlice.ts\n"));

/***/ })

});