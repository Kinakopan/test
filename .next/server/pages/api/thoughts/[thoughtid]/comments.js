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
exports.id = "pages/api/thoughts/[thoughtid]/comments";
exports.ids = ["pages/api/thoughts/[thoughtid]/comments"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/thoughts/[thoughtid]/comments/index.js":
/*!**********************************************************!*\
  !*** ./pages/api/thoughts/[thoughtid]/comments/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handle)\n/* harmony export */ });\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/db/client */ \"(api)/./server/db/client.js\");\n// pages/api/posts.js\n\nasync function handle(req, res) {\n    const { method  } = req;\n    switch(method){\n        case \"GET\":\n            // get all posts from the database\n            const comments = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.comment.findMany({\n                where: {\n                    thoughtId: parseInt(req.query.thoughtid)\n                }\n            });\n            // send the posts to the client\n            res.status(200).json(comments);\n            break;\n        case \"POST\":\n            const comment = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.comment.create({\n                data: {\n                    content: req.body.content,\n                    thought: {\n                        connect: {\n                            id: parseInt(req.query.thoughtid)\n                        }\n                    }\n                }\n            });\n            res.status(201).json(post);\n            break;\n        default:\n            res.status(405).end(`Method ${method} Not Allowed`);\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGhvdWdodHMvW3Rob3VnaHRpZF0vY29tbWVudHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxxQkFBcUI7QUFDdUI7QUFFN0IsZUFBZUMsT0FBT0MsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDN0MsTUFBTSxFQUFFQyxPQUFNLEVBQUUsR0FBR0Y7SUFFbkIsT0FBUUU7UUFDTixLQUFLO1lBQ0gsa0NBQWtDO1lBQ2xDLE1BQU1DLFdBQVcsTUFBTUwsc0VBQXVCLENBQUM7Z0JBQzdDUSxPQUFPO29CQUNMQyxXQUFXQyxTQUFTUixJQUFJUyxLQUFLLENBQUNDLFNBQVM7Z0JBQ3pDO1lBQ0Y7WUFDQSwrQkFBK0I7WUFDL0JULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNUO1lBQ3JCLEtBQU07UUFFTixLQUFLO1lBQ0gsTUFBTUMsVUFBVSxNQUFNTixvRUFBcUIsQ0FBQztnQkFDMUNnQixNQUFNO29CQUNKQyxTQUFTZixJQUFJZ0IsSUFBSSxDQUFDRCxPQUFPO29CQUN6QkUsU0FBUzt3QkFDUEMsU0FBUzs0QkFDUEMsSUFBSVgsU0FBU1IsSUFBSVMsS0FBSyxDQUFDQyxTQUFTO3dCQUNsQztvQkFDRjtnQkFDRjtZQUNGO1lBQ0FULElBQUlVLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUNRO1lBQ3JCLEtBQU07UUFDVjtZQUNFbkIsSUFBSVUsTUFBTSxDQUFDLEtBQUtVLEdBQUcsQ0FBQyxDQUFDLE9BQU8sRUFBRW5CLE9BQU8sWUFBWSxDQUFDO0lBQ3REO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXAtZmluYWwvLi9wYWdlcy9hcGkvdGhvdWdodHMvW3Rob3VnaHRpZF0vY29tbWVudHMvaW5kZXguanM/YWYxYyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwYWdlcy9hcGkvcG9zdHMuanNcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL3NlcnZlci9kYi9jbGllbnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgbWV0aG9kIH0gPSByZXE7XG5cbiAgc3dpdGNoIChtZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAvLyBnZXQgYWxsIHBvc3RzIGZyb20gdGhlIGRhdGFiYXNlXG4gICAgICBjb25zdCBjb21tZW50cyA9IGF3YWl0IHByaXNtYS5jb21tZW50LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB0aG91Z2h0SWQ6IHBhcnNlSW50KHJlcS5xdWVyeS50aG91Z2h0aWQpXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gc2VuZCB0aGUgcG9zdHMgdG8gdGhlIGNsaWVudFxuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24oY29tbWVudHMpO1xuICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJQT1NUXCI6XG4gICAgICAgIGNvbnN0IGNvbW1lbnQgPSBhd2FpdCBwcmlzbWEuY29tbWVudC5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHJlcS5ib2R5LmNvbnRlbnQsXG4gICAgICAgICAgICB0aG91Z2h0OiB7XG4gICAgICAgICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogcGFyc2VJbnQocmVxLnF1ZXJ5LnRob3VnaHRpZClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHBvc3QpO1xuICAgICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZChgTWV0aG9kICR7bWV0aG9kfSBOb3QgQWxsb3dlZGApO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlIiwicmVxIiwicmVzIiwibWV0aG9kIiwiY29tbWVudHMiLCJjb21tZW50IiwiZmluZE1hbnkiLCJ3aGVyZSIsInRob3VnaHRJZCIsInBhcnNlSW50IiwicXVlcnkiLCJ0aG91Z2h0aWQiLCJzdGF0dXMiLCJqc29uIiwiY3JlYXRlIiwiZGF0YSIsImNvbnRlbnQiLCJib2R5IiwidGhvdWdodCIsImNvbm5lY3QiLCJpZCIsInBvc3QiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/thoughts/[thoughtid]/comments/index.js\n");

/***/ }),

/***/ "(api)/./server/db/client.js":
/*!*****************************!*\
  !*** ./server/db/client.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zZXJ2ZXIvZGIvY2xpZW50LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUV0QyxNQUFNQyxTQUFTQyxPQUFPRCxNQUFNLElBQUksSUFBSUQsd0RBQVlBLEdBQUU7QUFFekQsSUFBSUcsSUFBcUMsRUFBRUQsT0FBT0QsTUFBTSxHQUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXAtZmluYWwvLi9zZXJ2ZXIvZGIvY2xpZW50LmpzPzczYjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCJcblxuZXhwb3J0IGNvbnN0IHByaXNtYSA9IGdsb2JhbC5wcmlzbWEgfHwgbmV3IFByaXNtYUNsaWVudCgpXG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWFcbiJdLCJuYW1lcyI6WyJQcmlzbWFDbGllbnQiLCJwcmlzbWEiLCJnbG9iYWwiLCJwcm9jZXNzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./server/db/client.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/thoughts/[thoughtid]/comments/index.js"));
module.exports = __webpack_exports__;

})();