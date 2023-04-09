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
exports.id = "pages/api/thoughts/[thoughtid]";
exports.ids = ["pages/api/thoughts/[thoughtid]"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./pages/api/thoughts/[thoughtid]/index.js":
/*!*************************************************!*\
  !*** ./pages/api/thoughts/[thoughtid]/index.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _server_db_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/server/db/client */ \"(api)/./server/db/client.js\");\n\nasync function handler(req, res) {\n    const { thoughtId  } = req.query;\n    switch(req.method){\n        case \"GET\":\n            // Get a single thought by id\n            const thought = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.thought.findUnique({\n                where: {\n                    id: Number(thoughtId)\n                }\n            });\n            if (!thought) {\n                res.status(404).json({\n                    message: \"Thought not found\"\n                });\n                break;\n            }\n            res.status(200).json(thought);\n            break;\n        case \"PUT\":\n            // Update a thought by id\n            const { title , newskeyword , startDate , endDate  } = req.body;\n            if (!title) {\n                res.status(400).json({\n                    message: \"Missing thought Title\"\n                });\n                break;\n            }\n            const updatedThought = await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.thought.update({\n                where: {\n                    id: Number(thoughtId)\n                },\n                data: {\n                    title,\n                    newskeyword,\n                    startDate,\n                    endDate\n                }\n            });\n            if (!updatedThought) {\n                res.status(404).json({\n                    message: \"Thought not found\"\n                });\n                break;\n            }\n            res.status(200).json(updatedThought);\n            break;\n        case \"DELETE\":\n            // Delete a thought by id\n            await _server_db_client__WEBPACK_IMPORTED_MODULE_0__.prisma.thought[\"delete\"]({\n                where: {\n                    id: Number(thoughtId)\n                }\n            });\n            res.status(204).end();\n            break;\n        default:\n            res.status(405).end();\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdGhvdWdodHMvW3Rob3VnaHRpZF0vaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBNEM7QUFFN0IsZUFBZUMsUUFBUUMsR0FBRyxFQUFFQyxHQUFHLEVBQUU7SUFDOUMsTUFBTSxFQUFFQyxVQUFTLEVBQUUsR0FBR0YsSUFBSUcsS0FBSztJQUUvQixPQUFRSCxJQUFJSSxNQUFNO1FBQ2hCLEtBQUs7WUFDSCw2QkFBNkI7WUFDN0IsTUFBTUMsVUFBVSxNQUFNUCx3RUFBeUIsQ0FBQztnQkFDOUNTLE9BQU87b0JBQUVDLElBQUlDLE9BQU9QO2dCQUFXO1lBQ2pDO1lBQ0EsSUFBSSxDQUFDRyxTQUFTO2dCQUNaSixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUFvQjtnQkFDcEQsS0FBTTtZQUNSLENBQUM7WUFDRFgsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ047WUFDckIsS0FBTTtRQUVSLEtBQUs7WUFDSCx5QkFBeUI7WUFDekIsTUFBTSxFQUFFUSxNQUFLLEVBQUVDLFlBQVcsRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUUsR0FBR2hCLElBQUlpQixJQUFJO1lBQzNELElBQUksQ0FBQ0osT0FBTztnQkFDVlosSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztvQkFBRUMsU0FBUztnQkFBd0I7Z0JBQ3hELEtBQU07WUFDUixDQUFDO1lBQ0QsTUFBTU0saUJBQWlCLE1BQU1wQixvRUFBcUIsQ0FBQztnQkFDakRTLE9BQU87b0JBQUVDLElBQUlDLE9BQU9QO2dCQUFXO2dCQUMvQmtCLE1BQU07b0JBQ0pQO29CQUNBQztvQkFDQUM7b0JBQ0FDO2dCQUNGO1lBQ0Y7WUFDQSxJQUFJLENBQUNFLGdCQUFnQjtnQkFDbkJqQixJQUFJUyxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO29CQUFFQyxTQUFTO2dCQUFvQjtnQkFDcEQsS0FBTTtZQUNSLENBQUM7WUFDRFgsSUFBSVMsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQ087WUFDckIsS0FBTTtRQUVSLEtBQUs7WUFDSCx5QkFBeUI7WUFDekIsTUFBTXBCLHVFQUFxQixDQUFDO2dCQUFFUyxPQUFPO29CQUFFQyxJQUFJQyxPQUFPUDtnQkFBVztZQUFFO1lBQy9ERCxJQUFJUyxNQUFNLENBQUMsS0FBS1ksR0FBRztZQUNuQixLQUFNO1FBRVI7WUFDRXJCLElBQUlTLE1BQU0sQ0FBQyxLQUFLWSxHQUFHO0lBQ3ZCO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2NvbXAtZmluYWwvLi9wYWdlcy9hcGkvdGhvdWdodHMvW3Rob3VnaHRpZF0vaW5kZXguanM/OWQ5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwcmlzbWEgfSBmcm9tIFwiQC9zZXJ2ZXIvZGIvY2xpZW50XCI7XG5cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgY29uc3QgeyB0aG91Z2h0SWQgfSA9IHJlcS5xdWVyeTtcblxuICBzd2l0Y2ggKHJlcS5tZXRob2QpIHtcbiAgICBjYXNlIFwiR0VUXCI6XG4gICAgICAvLyBHZXQgYSBzaW5nbGUgdGhvdWdodCBieSBpZFxuICAgICAgY29uc3QgdGhvdWdodCA9IGF3YWl0IHByaXNtYS50aG91Z2h0LmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZDogTnVtYmVyKHRob3VnaHRJZCkgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCF0aG91Z2h0KSB7XG4gICAgICAgIHJlcy5zdGF0dXMoNDA0KS5qc29uKHsgbWVzc2FnZTogXCJUaG91Z2h0IG5vdCBmb3VuZFwiIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHRob3VnaHQpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIFwiUFVUXCI6XG4gICAgICAvLyBVcGRhdGUgYSB0aG91Z2h0IGJ5IGlkXG4gICAgICBjb25zdCB7IHRpdGxlLCBuZXdza2V5d29yZCwgc3RhcnREYXRlLCBlbmREYXRlIH0gPSByZXEuYm9keTtcbiAgICAgIGlmICghdGl0bGUpIHtcbiAgICAgICAgcmVzLnN0YXR1cyg0MDApLmpzb24oeyBtZXNzYWdlOiBcIk1pc3NpbmcgdGhvdWdodCBUaXRsZVwiIH0pO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNvbnN0IHVwZGF0ZWRUaG91Z2h0ID0gYXdhaXQgcHJpc21hLnRob3VnaHQudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHsgaWQ6IE51bWJlcih0aG91Z2h0SWQpIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBuZXdza2V5d29yZCxcbiAgICAgICAgICBzdGFydERhdGUsXG4gICAgICAgICAgZW5kRGF0ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCF1cGRhdGVkVGhvdWdodCkge1xuICAgICAgICByZXMuc3RhdHVzKDQwNCkuanNvbih7IG1lc3NhZ2U6IFwiVGhvdWdodCBub3QgZm91bmRcIiB9KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1cGRhdGVkVGhvdWdodCk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgXCJERUxFVEVcIjpcbiAgICAgIC8vIERlbGV0ZSBhIHRob3VnaHQgYnkgaWRcbiAgICAgIGF3YWl0IHByaXNtYS50aG91Z2h0LmRlbGV0ZSh7IHdoZXJlOiB7IGlkOiBOdW1iZXIodGhvdWdodElkKSB9IH0pO1xuICAgICAgcmVzLnN0YXR1cygyMDQpLmVuZCgpO1xuICAgICAgYnJlYWs7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmVzLnN0YXR1cyg0MDUpLmVuZCgpO1xuICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsInRob3VnaHRJZCIsInF1ZXJ5IiwibWV0aG9kIiwidGhvdWdodCIsImZpbmRVbmlxdWUiLCJ3aGVyZSIsImlkIiwiTnVtYmVyIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJ0aXRsZSIsIm5ld3NrZXl3b3JkIiwic3RhcnREYXRlIiwiZW5kRGF0ZSIsImJvZHkiLCJ1cGRhdGVkVGhvdWdodCIsInVwZGF0ZSIsImRhdGEiLCJkZWxldGUiLCJlbmQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/thoughts/[thoughtid]/index.js\n");

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
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/thoughts/[thoughtid]/index.js"));
module.exports = __webpack_exports__;

})();