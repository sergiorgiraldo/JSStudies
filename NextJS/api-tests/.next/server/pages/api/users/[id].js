"use strict";
(() => {
var exports = {};
exports.id = 56;
exports.ids = [56];
exports.modules = {

/***/ 32:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
async function handler(req, res) {
    const userId = req.query.id;
    if (req.method === "GET") {
        const ret = await fetch(`https://reqres.in/api/users/${userId}`, {
            method: "GET"
        });
        const data = await ret.json();
        res.status(200).json(data);
    } else if (req.method === "PUT") {
        const newUser = {
            name: "jane doe",
            job: "doppelganger"
        };
        const ret1 = await fetch(`https://reqres.in/api/users/${userId}`, {
            method: "PUT",
            body: JSON.stringify(newUser),
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data1 = await ret1.json();
        res.status(200).json(data1);
    } else if (req.method === "DELETE") {
        const ret2 = await fetch(`https://reqres.in/api/users/${userId}`, {
            method: "DELETE"
        });
        const data2 = await ret2.status;
        res.status(200).json({
            status: data2
        });
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(32));
module.exports = __webpack_exports__;

})();