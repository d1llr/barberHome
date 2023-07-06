"use strict";
(() => {
var exports = {};
exports.id = 442;
exports.ids = [442];
exports.modules = {

/***/ 9648:
/***/ ((module) => {

module.exports = import("axios");;

/***/ }),

/***/ 1059:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9648);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_0__]);
axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

function handler(req, res) {
    const token = "ctxn2pt2jwz2ushknuds";
    const { user_token , record_id  } = req.body;
    axios__WEBPACK_IMPORTED_MODULE_0__["default"]["delete"](`https://api.yclients.com/api/v1/user/records/${record_id}/`, {
        headers: {
            "Authorization": `Bearer ${token}, User ${user_token}`,
            "Accept": "application/vnd.yclients.v2+json"
        }
    }).then((response)=>{
        // Обработка ответа от API и отправка на frontend
        res.status(200).send(response.data);
    }).catch((error)=>{
        console.log(error);
        res.status(500).send(error);
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(1059));
module.exports = __webpack_exports__;

})();