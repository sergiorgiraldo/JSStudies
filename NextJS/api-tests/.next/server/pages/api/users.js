"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    if (req.method === "GET") {
        const ret = await fetch("https://reqres.in/api/users/", {
            method: "GET"
        });
        const data = await ret.json();
        res.status(200).json(data);
    } else if (req.method === "POST") {
        const newUser = {
            "name": "john doe",
            "job": "aleph"
        };
        const ret1 = await fetch("https://reqres.in/api/users/", {
            method: "POST",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data1 = await ret1.json();
        res.status(200).json(data1);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(641));
module.exports = __webpack_exports__;

})();