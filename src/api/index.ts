import * as Router from '@koa/router'
const router = new Router()

// // 加载routerModule
// function loadRouter(path) {
//   const r = require(path);
//   router[r.method](r.path, r.fn);
// }

router
  .get('/', (ctx, next) => {
    ctx.body = 'Hello World!';
  })

export default router