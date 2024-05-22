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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./lib/features/channel/appSlice.js":
/*!******************************************!*\
  !*** ./lib/features/channel/appSlice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   appSlice: () => (/* binding */ appSlice),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   selectChannelId: () => (/* binding */ selectChannelId),\n/* harmony export */   setChannelInfo: () => (/* binding */ setChannelInfo),\n/* harmony export */   setchannelName: () => (/* binding */ setchannelName)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst appSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"app\",\n    initialState: {\n        channelId: \"null\",\n        channelName: null\n    },\n    reducers: {\n        setChannelInfo: (state, action)=>{\n            state.channelId = action.payload.channelId;\n            state.channelName = action.payload.channelName;\n        }\n    }\n});\nconst { setChannelInfo } = appSlice.actions;\nconst selectChannelId = (state)=>state.app.channelId;\nconst setchannelName = (state)=>state.app.channelName;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (appSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmVhdHVyZXMvY2hhbm5lbC9hcHBTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQStDO0FBR3hDLE1BQU1DLFdBQVVELDZEQUFXQSxDQUFDO0lBQy9CRSxNQUFLO0lBQ0xDLGNBQWE7UUFDVEMsV0FBVTtRQUNWQyxhQUFZO0lBQ2hCO0lBQ0FDLFVBQVM7UUFDTEMsZ0JBQWUsQ0FBQ0MsT0FBTUM7WUFDbEJELE1BQU1KLFNBQVMsR0FBRUssT0FBT0MsT0FBTyxDQUFDTixTQUFTO1lBQ3pDSSxNQUFNSCxXQUFXLEdBQUVJLE9BQU9DLE9BQU8sQ0FBQ0wsV0FBVztRQUNqRDtJQUNKO0FBQ0osR0FBRTtBQUNLLE1BQU0sRUFBQ0UsY0FBYyxFQUFDLEdBQUVOLFNBQVNVLE9BQU8sQ0FBQztBQUN6QyxNQUFNQyxrQkFBaUIsQ0FBQ0osUUFBUUEsTUFBTUssR0FBRyxDQUFDVCxTQUFTLENBQUM7QUFDcEQsTUFBTVUsaUJBQWdCLENBQUNOLFFBQVFBLE1BQU1LLEdBQUcsQ0FBQ1IsV0FBVyxDQUFDO0FBRTVELGlFQUFlSixTQUFTYyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydnJfaW5zdGl0dXRlX2FwcC8uL2xpYi9mZWF0dXJlcy9jaGFubmVsL2FwcFNsaWNlLmpzP2ZkZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBhcHBTbGljZSA9Y3JlYXRlU2xpY2Uoe1xyXG4gICAgbmFtZTpcImFwcFwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOntcclxuICAgICAgICBjaGFubmVsSWQ6J251bGwnLFxyXG4gICAgICAgIGNoYW5uZWxOYW1lOm51bGwsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIHNldENoYW5uZWxJbmZvOihzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICAgICAgICAgIHN0YXRlLmNoYW5uZWxJZD0gYWN0aW9uLnBheWxvYWQuY2hhbm5lbElkO1xyXG4gICAgICAgICAgICBzdGF0ZS5jaGFubmVsTmFtZT0gYWN0aW9uLnBheWxvYWQuY2hhbm5lbE5hbWU7XHJcbiAgICAgICAgfSxcclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHtzZXRDaGFubmVsSW5mb309IGFwcFNsaWNlLmFjdGlvbnM7XHJcbmV4cG9ydCBjb25zdCBzZWxlY3RDaGFubmVsSWQgPShzdGF0ZSk9PnN0YXRlLmFwcC5jaGFubmVsSWQ7XHJcbmV4cG9ydCBjb25zdCBzZXRjaGFubmVsTmFtZSA9KHN0YXRlKT0+c3RhdGUuYXBwLmNoYW5uZWxOYW1lO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBwU2xpY2UucmVkdWNlcjsiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhcHBTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJjaGFubmVsSWQiLCJjaGFubmVsTmFtZSIsInJlZHVjZXJzIiwic2V0Q2hhbm5lbEluZm8iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0Q2hhbm5lbElkIiwiYXBwIiwic2V0Y2hhbm5lbE5hbWUiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/features/channel/appSlice.js\n");

/***/ }),

/***/ "./lib/features/input/inputSlice.js":
/*!******************************************!*\
  !*** ./lib/features/input/inputSlice.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getInput: () => (/* binding */ getInput),\n/* harmony export */   inputSlice: () => (/* binding */ inputSlice),\n/* harmony export */   selectInput: () => (/* binding */ selectInput)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst inputSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"input\",\n    initialState: {\n        input: null\n    },\n    reducers: {\n        getInput: (state, action)=>{\n            state.input = action.payload;\n        }\n    }\n});\nconst { getInput } = inputSlice.actions;\nconst selectInput = (state)=>state.input.input;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (inputSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmVhdHVyZXMvaW5wdXQvaW5wdXRTbGljZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBK0M7QUFHeEMsTUFBTUMsYUFBWUQsNkRBQVdBLENBQUM7SUFDakNFLE1BQUs7SUFDTEMsY0FBYTtRQUNUQyxPQUFNO0lBQ1Y7SUFDQUMsVUFBUztRQUNMQyxVQUFTLENBQUNDLE9BQU1DO1lBQ1pELE1BQU1ILEtBQUssR0FBRUksT0FBT0MsT0FBTztRQUMvQjtJQUNKO0FBQ0osR0FBRTtBQUNLLE1BQU0sRUFBQ0gsUUFBUSxFQUFDLEdBQUVMLFdBQVdTLE9BQU8sQ0FBQztBQUNyQyxNQUFNQyxjQUFZLENBQUNKLFFBQVFBLE1BQU1ILEtBQUssQ0FBQ0EsS0FBSyxDQUFDO0FBQ3BELGlFQUFlSCxXQUFXVyxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydnJfaW5zdGl0dXRlX2FwcC8uL2xpYi9mZWF0dXJlcy9pbnB1dC9pbnB1dFNsaWNlLmpzPzRkZGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBpbnB1dFNsaWNlID1jcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwiaW5wdXRcIixcclxuICAgIGluaXRpYWxTdGF0ZTp7XHJcbiAgICAgICAgaW5wdXQ6bnVsbCxcclxuICAgIH0sXHJcbiAgICByZWR1Y2Vyczp7XHJcbiAgICAgICAgZ2V0SW5wdXQ6KHN0YXRlLGFjdGlvbik9PntcclxuICAgICAgICAgICAgc3RhdGUuaW5wdXQ9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSlcclxuZXhwb3J0IGNvbnN0IHtnZXRJbnB1dH09IGlucHV0U2xpY2UuYWN0aW9ucztcclxuZXhwb3J0IGNvbnN0IHNlbGVjdElucHV0PShzdGF0ZSk9PnN0YXRlLmlucHV0LmlucHV0O1xyXG5leHBvcnQgZGVmYXVsdCBpbnB1dFNsaWNlLnJlZHVjZXI7Il0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiaW5wdXRTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJpbnB1dCIsInJlZHVjZXJzIiwiZ2V0SW5wdXQiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJhY3Rpb25zIiwic2VsZWN0SW5wdXQiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/features/input/inputSlice.js\n");

/***/ }),

/***/ "./lib/features/user/userSlice.js":
/*!****************************************!*\
  !*** ./lib/features/user/userSlice.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   login: () => (/* binding */ login),\n/* harmony export */   logout: () => (/* binding */ logout),\n/* harmony export */   selectUser: () => (/* binding */ selectUser),\n/* harmony export */   userSlice: () => (/* binding */ userSlice)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"user\",\n    initialState: {\n        user: null\n    },\n    reducers: {\n        login: (state, action)=>{\n            state.user = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n        }\n    }\n});\nconst { login, logout } = userSlice.actions;\nconst selectUser = (state)=>state.user.user;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZmVhdHVyZXMvdXNlci91c2VyU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUErQztBQUd4QyxNQUFNQyxZQUFXRCw2REFBV0EsQ0FBQztJQUNoQ0UsTUFBSztJQUNMQyxjQUFhO1FBQ1RDLE1BQUs7SUFDVDtJQUNBQyxVQUFTO1FBQ0xDLE9BQU0sQ0FBQ0MsT0FBTUM7WUFDVEQsTUFBTUgsSUFBSSxHQUFFSSxPQUFPQyxPQUFPO1FBQzlCO1FBQ0FDLFFBQU8sQ0FBQ0g7WUFDSkEsTUFBTUgsSUFBSSxHQUFDO1FBQ2Y7SUFDSjtBQUNKLEdBQUU7QUFDSyxNQUFNLEVBQUNFLEtBQUssRUFBQ0ksTUFBTSxFQUFDLEdBQUVULFVBQVVVLE9BQU8sQ0FBQztBQUN4QyxNQUFNQyxhQUFXLENBQUNMLFFBQVFBLE1BQU1ILElBQUksQ0FBQ0EsSUFBSSxDQUFDO0FBQ2pELGlFQUFlSCxVQUFVWSxPQUFPLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ydnJfaW5zdGl0dXRlX2FwcC8uL2xpYi9mZWF0dXJlcy91c2VyL3VzZXJTbGljZS5qcz9mMjZhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdXNlclNsaWNlID1jcmVhdGVTbGljZSh7XHJcbiAgICBuYW1lOlwidXNlclwiLFxyXG4gICAgaW5pdGlhbFN0YXRlOntcclxuICAgICAgICB1c2VyOm51bGwsXHJcbiAgICB9LFxyXG4gICAgcmVkdWNlcnM6e1xyXG4gICAgICAgIGxvZ2luOihzdGF0ZSxhY3Rpb24pPT57XHJcbiAgICAgICAgICAgIHN0YXRlLnVzZXI9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb3V0OihzdGF0ZSk9PntcclxuICAgICAgICAgICAgc3RhdGUudXNlcj1udWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KVxyXG5leHBvcnQgY29uc3Qge2xvZ2luLGxvZ291dH09IHVzZXJTbGljZS5hY3Rpb25zO1xyXG5leHBvcnQgY29uc3Qgc2VsZWN0VXNlcj0oc3RhdGUpPT5zdGF0ZS51c2VyLnVzZXI7XHJcbmV4cG9ydCBkZWZhdWx0IHVzZXJTbGljZS5yZWR1Y2VyOyJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInVzZXJTbGljZSIsIm5hbWUiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwicmVkdWNlcnMiLCJsb2dpbiIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ291dCIsImFjdGlvbnMiLCJzZWxlY3RVc2VyIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/features/user/userSlice.js\n");

/***/ }),

/***/ "./lib/store.js":
/*!**********************!*\
  !*** ./lib/store.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _features_user_userSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/user/userSlice */ \"./lib/features/user/userSlice.js\");\n/* harmony import */ var _features_channel_appSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features/channel/appSlice */ \"./lib/features/channel/appSlice.js\");\n/* harmony import */ var _features_input_inputSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./features/input/inputSlice */ \"./lib/features/input/inputSlice.js\");\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        user: _features_user_userSlice__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n        app: _features_channel_appSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        input: _features_input_inputSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtEO0FBQ0U7QUFDQztBQUNDO0FBRXRELGlFQUFnQkEsZ0VBQWNBLENBQUM7SUFDM0JJLFNBQ0E7UUFDQUMsTUFBTUosZ0VBQVdBO1FBQ2pCSyxLQUFLSixrRUFBVUE7UUFDZkssT0FBTUosa0VBQVlBO0lBQ2xCO0FBQ0osRUFBRSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcnZyX2luc3RpdHV0ZV9hcHAvLi9saWIvc3RvcmUuanM/MDRhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB1c2VyUmVkdWNlciBmcm9tIFwiLi9mZWF0dXJlcy91c2VyL3VzZXJTbGljZVwiO1xyXG5pbXBvcnQgYXBwUmVkdWNlciBmcm9tIFwiLi9mZWF0dXJlcy9jaGFubmVsL2FwcFNsaWNlXCI7XHJcbmltcG9ydCBpbnB1dFJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvaW5wdXQvaW5wdXRTbGljZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCAgY29uZmlndXJlU3RvcmUoe1xyXG4gICAgcmVkdWNlcjpcclxuICAgIHtcclxuICAgIHVzZXI6IHVzZXJSZWR1Y2VyLFxyXG4gICAgYXBwOiBhcHBSZWR1Y2VyLFxyXG4gICAgaW5wdXQ6aW5wdXRSZWR1Y2VyXHJcbiAgICB9LFxyXG59KTtcclxuXHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsInVzZXJSZWR1Y2VyIiwiYXBwUmVkdWNlciIsImlucHV0UmVkdWNlciIsInJlZHVjZXIiLCJ1c2VyIiwiYXBwIiwiaW5wdXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/store.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/lib/store */ \"./lib/store.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_4__.Provider, {\n        store: _lib_store__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_2__.SessionProvider, {\n            session: pageProps.session,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\pages\\\\_app.js\",\n                lineNumber: 10,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\pages\\\\_app.js\",\n            lineNumber: 9,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Code\\\\Next Js\\\\Skillsphere\\\\Skillsphere_Code\\\\pages\\\\_app.js\",\n        lineNumber: 8,\n        columnNumber: 6\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTZCO0FBQ29CO0FBQ2xCO0FBQ087QUFFdkIsU0FBU0csSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNsRCxxQkFDRyw4REFBQ0gsaURBQVFBO1FBQUNELE9BQU9BLGtEQUFLQTtrQkFDckIsNEVBQUNELDREQUFlQTtZQUFDTSxTQUFTRCxVQUFVQyxPQUFPO3NCQUN6Qyw0RUFBQ0Y7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7Ozs7OztBQUloQyIsInNvdXJjZXMiOlsid2VicGFjazovL3J2cl9pbnN0aXR1dGVfYXBwLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQC9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBTZXNzaW9uUHJvdmlkZXIgfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCJcbmltcG9ydCBzdG9yZSBmcm9tICdAL2xpYi9zdG9yZSdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCh7IENvbXBvbmVudCwgcGFnZVByb3BzIH0pIHtcbiAgcmV0dXJuIChcbiAgICAgPFByb3ZpZGVyIHN0b3JlPXtzdG9yZX0+XG4gICAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3BhZ2VQcm9wcy5zZXNzaW9ufT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICAgPC9TZXNzaW9uUHJvdmlkZXI+XG4gICAgIDwvUHJvdmlkZXI+IFxuICApXG59XG4iXSwibmFtZXMiOlsiU2Vzc2lvblByb3ZpZGVyIiwic3RvcmUiLCJQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsInNlc3Npb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();