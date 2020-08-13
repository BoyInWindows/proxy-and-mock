"use strict";
exports.__esModule = true;
var Router = require("@koa/router");
var router = new Router();
// // 加载routerModule
// function loadRouter(path) {
//   const r = require(path);
//   router[r.method](r.path, r.fn);
// }
router
    .get('/', function (ctx, next) {
    ctx.body = 'Hello World!';
});
exports["default"] = router;
