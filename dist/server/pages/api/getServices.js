"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/getServices";
exports.ids = ["pages/api/getServices"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/getServices.ts":
/*!**************************************!*\
  !*** ./src/pages/api/getServices.ts ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    const token = \"ctxn2pt2jwz2ushknuds\";\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.yclients.com/api/v1/book_services/256926\", {\n        headers: {\n            \"Authorization\": `Bearer ${token}`,\n            \"Accept\": \"application/vnd.yclients.v2+json\"\n        }\n    }).then((response)=>{\n        // Обработка ответа от API и отправка на frontend\n        res.status(200).send(response.data.data);\n    }).catch((error)=>{\n        console.log(error);\n        res.status(500).send(\"Server error\");\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldFNlcnZpY2VzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQzBCO0FBR1gsU0FBU0MsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUN6RSxNQUFNQyxRQUFRO0lBQ2RKLGlEQUFTLENBQUMsd0RBQXdEO1FBQ2hFTSxTQUFTO1lBQ1AsaUJBQWlCLENBQUMsT0FBTyxFQUFFRixNQUFNLENBQUM7WUFDbEMsVUFBVTtRQUNaO0lBQ0YsR0FDR0csSUFBSSxDQUFDLENBQUNDLFdBQWE7UUFDbEIsaURBQWlEO1FBQ2pETCxJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDRixTQUFTRyxJQUFJLENBQUNBLElBQUk7SUFDekMsR0FDQ0MsS0FBSyxDQUFDLENBQUNDLFFBQVU7UUFDaEJDLFFBQVFDLEdBQUcsQ0FBQ0Y7UUFDWlYsSUFBSU0sTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztJQUN2QjtBQUNKLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS1hcHAvLi9zcmMvcGFnZXMvYXBpL2dldFNlcnZpY2VzLnRzPzhhMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpIHtcclxuICBjb25zdCB0b2tlbiA9ICdjdHhuMnB0Mmp3ejJ1c2hrbnVkcydcclxuICBheGlvcy5nZXQoJ2h0dHBzOi8vYXBpLnljbGllbnRzLmNvbS9hcGkvdjEvYm9va19zZXJ2aWNlcy8yNTY5MjYnLCB7XHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgICdBdXRob3JpemF0aW9uJzogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vdm5kLnljbGllbnRzLnYyK2pzb24nXHJcbiAgICB9XHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAvLyDQntCx0YDQsNCx0L7RgtC60LAg0L7RgtCy0LXRgtCwINC+0YIgQVBJINC4INC+0YLQv9GA0LDQstC60LAg0L3QsCBmcm9udGVuZFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZW5kIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getServices.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getServices.ts"));
module.exports = __webpack_exports__;

})();