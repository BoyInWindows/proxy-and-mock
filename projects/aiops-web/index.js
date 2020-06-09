const config = require("./config.js");
const responseData = require("./response-data.js");

const Router = require('@koa/router');
const router = new Router({ prefix: '/api' });
// 加载routerModule
function loadRouter(path) {
  const r = require(path);
  router[r.method](r.path, r.fn);
}


// 原始日志上下文
// loadRouter('./controller/context.js');

// 变量分布
// loadRouter('./controller/variableStatus.js');


// const target_site = "http://192.168.115.13:8080"; // 民生内部
// const target_site = "http://10.161.55.11:18080"; // 联通测试
// const target_site = "http://172.31.8.2:8080"; // aiops主分支
const target_site = "http://172.31.1.16:8080/";
// const target_site = "http://10.123.64.21:8080"; // 刘冰
// const target_site = "http://10.123.64.34:8080"; // 刘冰
const httpProxy = require('../../middlewares/http-proxy.js');
const proxy = httpProxy({
  target: target_site
});

module.exports = {
  router,
  proxy
}
