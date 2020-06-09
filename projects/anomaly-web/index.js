const Router = require('@koa/router');
const router = new Router({ prefix: '/api' });

// 加载routerModule
function loadRouter(path) {
  const r = require(path);
  router[r.method](r.path, r.fn);
}

// 获取用户信息
loadRouter('./controller/getUserInfo.js');


const target_site = "http://10.161.55.11:18080"; // 联通测试
// const target_site = "http://192.168.10.202:8088"; // 
// const target_site = "http://192.168.115.13:8080"; // 

const httpProxy = require('../../middlewares/http-proxy.js');
const proxy = httpProxy({
  target: target_site
});

module.exports = {
  router,
  proxy
}
