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
exports.id = "pages/api/getCompany";
exports.ids = ["pages/api/getCompany"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ "(api)/./src/pages/api/getCompany.ts":
/*!*************************************!*\
  !*** ./src/pages/api/getCompany.ts ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);\naxios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nfunction handler(req, res) {\n    const token = \"ctxn2pt2jwz2ushknuds\";\n    axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"https://api.yclients.com/api/v1/company/256926/\", {\n        headers: {\n            \"Authorization\": `Bearer ${token}`,\n            \"Accept\": \"application/vnd.yclients.v2+json\"\n        }\n    }).then((response)=>{\n        // Обработка ответа от API и отправка на frontend\n        res.status(200).send(response.data.data);\n    }).catch((error)=>{\n        console.log(error);\n        res.status(500).send(\"Server error\");\n    });\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2dldENvbXBhbnkudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDMEI7QUFHWCxTQUFTQyxRQUFRQyxHQUFtQixFQUFFQyxHQUFvQixFQUFFO0lBQ3pFLE1BQU1DLFFBQVE7SUFDZEosaURBQVMsQ0FBQyxtREFBbUQ7UUFDM0RNLFNBQVM7WUFDUCxpQkFBaUIsQ0FBQyxPQUFPLEVBQUVGLE1BQU0sQ0FBQztZQUNsQyxVQUFVO1FBQ1o7SUFDRixHQUNHRyxJQUFJLENBQUMsQ0FBQ0MsV0FBYTtRQUNsQixpREFBaUQ7UUFFakRMLElBQUlNLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNGLFNBQVNHLElBQUksQ0FBQ0EsSUFBSTtJQUN6QyxHQUNDQyxLQUFLLENBQUMsQ0FBQ0MsUUFBVTtRQUNoQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUNaVixJQUFJTSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO0lBQ3ZCO0FBQ0osQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWFwcC8uL3NyYy9wYWdlcy9hcGkvZ2V0Q29tcGFueS50cz9jNDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XHJcbiAgY29uc3QgdG9rZW4gPSAnY3R4bjJwdDJqd3oydXNoa251ZHMnXHJcbiAgYXhpb3MuZ2V0KCdodHRwczovL2FwaS55Y2xpZW50cy5jb20vYXBpL3YxL2NvbXBhbnkvMjU2OTI2LycsIHtcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgJ0F1dGhvcml6YXRpb24nOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi92bmQueWNsaWVudHMudjIranNvbidcclxuICAgIH1cclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIC8vINCe0LHRgNCw0LHQvtGC0LrQsCDQvtGC0LLQtdGC0LAg0L7RgiBBUEkg0Lgg0L7RgtC/0YDQsNCy0LrQsCDQvdCwIGZyb250ZW5kXHJcbiAgICAgIFxyXG4gICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZS5kYXRhLmRhdGEpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZCgnU2VydmVyIGVycm9yJyk7XHJcbiAgICB9KTtcclxufSJdLCJuYW1lcyI6WyJheGlvcyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJ0b2tlbiIsImdldCIsImhlYWRlcnMiLCJ0aGVuIiwicmVzcG9uc2UiLCJzdGF0dXMiLCJzZW5kIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/getCompany.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/getCompany.ts"));
module.exports = __webpack_exports__;

})();