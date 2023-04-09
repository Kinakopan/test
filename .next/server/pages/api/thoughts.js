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
exports.id = "pages/api/thoughts";
exports.ids = ["pages/api/thoughts"];
exports.modules = {

/***/ "@next-auth/prisma-adapter":
/*!********************************************!*\
  !*** external "@next-auth/prisma-adapter" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].js":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @next-auth/prisma-adapter */ \"@next-auth/prisma-adapter\");\n/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../server/db/client */ \"(api)/./server/db/client.js\");\n\n\n\n\nconst authOptions = {\n    // Configure one or more authentication providers\n    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_server_db_client__WEBPACK_IMPORTED_MODULE_3__.prisma),\n    providers: [\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        })\n    ]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFnQztBQUN1QjtBQUNFO0FBQ1A7QUFFM0MsTUFBTUksY0FBYztJQUN6QixpREFBaUQ7SUFDakRDLFNBQVNILHdFQUFhQSxDQUFDQyxxREFBTUE7SUFDN0JHLFdBQVc7UUFDVEwsaUVBQWNBLENBQUM7WUFDYk0sVUFBVUMsUUFBUUMsR0FBRyxDQUFDQyxTQUFTO1lBQy9CQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLGFBQWE7UUFDekM7S0FFRDtBQUNILEVBQUM7QUFHRCxpRUFBZVosZ0RBQVFBLENBQUNJLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jb21wLWZpbmFsLy4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcz81MjdmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuaW1wb3J0IHsgUHJpc21hQWRhcHRlciB9IGZyb20gXCJAbmV4dC1hdXRoL3ByaXNtYS1hZGFwdGVyXCJcbmltcG9ydCB7IHByaXNtYSB9IGZyb20gXCIuLi8uLi8uLi9zZXJ2ZXIvZGIvY2xpZW50XCJcblxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zID0ge1xuICAvLyBDb25maWd1cmUgb25lIG9yIG1vcmUgYXV0aGVudGljYXRpb24gcHJvdmlkZXJzXG4gIGFkYXB0ZXI6IFByaXNtYUFkYXB0ZXIocHJpc21hKSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgR2l0aHViUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdJVEhVQl9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX1NFQ1JFVCxcbiAgICB9KSxcbiAgICAvLyAuLi5hZGQgbW9yZSBwcm92aWRlcnMgaGVyZVxuICBdLFxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKVxuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiR2l0aHViUHJvdmlkZXIiLCJQcmlzbWFBZGFwdGVyIiwicHJpc21hIiwiYXV0aE9wdGlvbnMiLCJhZGFwdGVyIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiR0lUSFVCX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX1NFQ1JFVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].js\n");

/***/ }),

/***/ "(api)/./pages/api/thoughts/index.js":
/*!*************************************!*\
  !*** ./pages/api/thoughts/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/db/client */ \"(api)/./server/db/client.js\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/[...nextauth] */ \"(api)/./pages/api/auth/[...nextauth].js\");\n\n\n\nasync function handler(req, res) {\n    switch(req.method){\n        case \"GET\":\n            const thoughts = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.Thought.findMany();\n            res.status(200).json(thoughts);\n            break;\n        case \"POST\":\n            const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_1__.getServerSession)(req, res, _auth_nextauth___WEBPACK_IMPORTED_MODULE_2__.authOptions);\n            if (!session) {\n                res.status(401).json({\n                    error: \"Unauthorized\"\n                });\n                return;\n            }\n            const prismaUser = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.user.findUnique({\n                where: {\n                    email: session.user.email\n                }\n            });\n            if (!prismaUser) {\n                res.status(401).json({\n                    error: \"Unauthorized\"\n                });\n                return;\n            }\n            const userId = prismaUser.id;\n            const { title , newskeyword , content  } = req.body;\n            if (!title || !newskeyword || !content) {\n                res.status(400).json({\n                    message: \"Missing required fields\"\n                });\n                break;\n            }\n            const newThought = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.Thought.create({\n                data: {\n                    title,\n                    newskeyword,\n                    content,\n                    userId\n                }\n            });\n            res.status(201).json(newThought);\n            break;\n        default:\n            res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGhvdWdodHMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBNEM7QUFDSztBQUNHO0FBRXJDLGVBQWVHLFFBQVFDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQzlDLE9BQVFELElBQUlFLE1BQU07UUFDaEIsS0FBSztZQUNILE1BQU1DLFdBQVcsTUFBTVAsc0VBQXVCO1lBQzlDSyxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDSjtZQUNyQixLQUFNO1FBQ1IsS0FBSztZQUVMLE1BQU1LLFVBQVUsTUFBTVgsZ0VBQWdCQSxDQUFDRyxLQUFLQyxLQUFLSCx3REFBV0E7WUFDNUQsSUFBSSxDQUFDVSxTQUFTO2dCQUNaUCxJQUFJSyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFRSxPQUFPO2dCQUFlO2dCQUM3QztZQUNGLENBQUM7WUFFRCxNQUFNQyxhQUFhLE1BQU1kLHFFQUFzQixDQUFDO2dCQUM5Q2lCLE9BQU87b0JBQUVDLE9BQU9OLFFBQVFHLElBQUksQ0FBQ0csS0FBSztnQkFBQztZQUNyQztZQUVBLElBQUksQ0FBQ0osWUFBWTtnQkFDZlQsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUUsT0FBTztnQkFBZTtnQkFDN0M7WUFDRixDQUFDO1lBRUQsTUFBTU0sU0FBU0wsV0FBV00sRUFBRTtZQUU1QixNQUFNLEVBQUVDLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxRQUFPLEVBQUUsR0FBR25CLElBQUlvQixJQUFJO1lBQ2hELElBQUksQ0FBQ0gsU0FBUyxDQUFDQyxlQUFlLENBQUNDLFNBQVM7Z0JBQ3BDbEIsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRWMsU0FBUztnQkFBMEI7Z0JBQzFELEtBQU07WUFDVixDQUFDO1lBQ0QsTUFBTUMsYUFBYSxNQUFNMUIsb0VBQXFCLENBQUM7Z0JBQzNDNEIsTUFBTTtvQkFBRVA7b0JBQU9DO29CQUFhQztvQkFBU0o7Z0JBQU87WUFDaEQ7WUFDQWQsSUFBSUssTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ2U7WUFDckIsS0FBTTtRQUNOO1lBQ0VyQixJQUFJSyxNQUFNLENBQUMsS0FBS21CLEdBQUc7SUFDdkI7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY29tcC1maW5hbC8uL3BhZ2VzL2FwaS90aG91Z2h0cy9pbmRleC5qcz8yYTQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHByaXNtYSB9IGZyb20gXCJAL3NlcnZlci9kYi9jbGllbnRcIjtcbmltcG9ydCB7IGdldFNlcnZlclNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL25leHRcIlxuaW1wb3J0IHsgYXV0aE9wdGlvbnMgfSBmcm9tIFwiLi4vYXV0aC9bLi4ubmV4dGF1dGhdXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgc3dpdGNoIChyZXEubWV0aG9kKSB7XG4gICAgY2FzZSBcIkdFVFwiOlxuICAgICAgY29uc3QgdGhvdWdodHMgPSBhd2FpdCBwcmlzbWEuVGhvdWdodC5maW5kTWFueSgpO1xuICAgICAgcmVzLnN0YXR1cygyMDApLmpzb24odGhvdWdodHMpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlBPU1RcIjpcblxuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBnZXRTZXJ2ZXJTZXNzaW9uKHJlcSwgcmVzLCBhdXRoT3B0aW9ucylcbiAgICBpZiAoIXNlc3Npb24pIHtcbiAgICAgIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgZXJyb3I6ICdVbmF1dGhvcml6ZWQnIH0pXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBjb25zdCBwcmlzbWFVc2VyID0gYXdhaXQgcHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZTogeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0sXG4gICAgfSlcblxuICAgIGlmICghcHJpc21hVXNlcikge1xuICAgICAgcmVzLnN0YXR1cyg0MDEpLmpzb24oeyBlcnJvcjogJ1VuYXV0aG9yaXplZCcgfSlcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGNvbnN0IHVzZXJJZCA9IHByaXNtYVVzZXIuaWQ7XG5cbiAgICBjb25zdCB7IHRpdGxlLCBuZXdza2V5d29yZCwgY29udGVudCB9ID0gcmVxLmJvZHk7XG4gICAgaWYgKCF0aXRsZSB8fCAhbmV3c2tleXdvcmQgfHwgIWNvbnRlbnQpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfSk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb25zdCBuZXdUaG91Z2h0ID0gYXdhaXQgcHJpc21hLlRob3VnaHQuY3JlYXRlKHtcbiAgICAgICAgZGF0YTogeyB0aXRsZSwgbmV3c2tleXdvcmQsIGNvbnRlbnQsIHVzZXJJZCB9LFxuICAgIH0pO1xuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKG5ld1Rob3VnaHQpO1xuICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXMuc3RhdHVzKDQwNSkuZW5kKCk7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJwcmlzbWEiLCJnZXRTZXJ2ZXJTZXNzaW9uIiwiYXV0aE9wdGlvbnMiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwidGhvdWdodHMiLCJUaG91Z2h0IiwiZmluZE1hbnkiLCJzdGF0dXMiLCJqc29uIiwic2Vzc2lvbiIsImVycm9yIiwicHJpc21hVXNlciIsInVzZXIiLCJmaW5kVW5pcXVlIiwid2hlcmUiLCJlbWFpbCIsInVzZXJJZCIsImlkIiwidGl0bGUiLCJuZXdza2V5d29yZCIsImNvbnRlbnQiLCJib2R5IiwibWVzc2FnZSIsIm5ld1Rob3VnaHQiLCJjcmVhdGUiLCJkYXRhIiwiZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/thoughts/index.js\n");

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
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/thoughts/index.js"));
module.exports = __webpack_exports__;

})();