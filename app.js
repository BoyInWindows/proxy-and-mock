const Koa = require('koa');
const app = new Koa();

// 允许跨域
const cors = require('koa2-cors');
app.use(cors());

// generators will be removed in v3
// body解析
// const bodyParser = require('koa-bodyparser');
// app.use(bodyParser());

// logger
app.use(async (ctx, next) => {
  console.log('logger start');
  const rt = ctx.response.get('X-Response-Time');
  console.log(`${ctx.method} ${ctx.url} - ${rt}`);
  await next();
  console.log('logger end.\n');
});

// const aiops = require('./projects/aiops-web');
// app.use(aiops.router.routes()).use(aiops.router.allowedMethods());
// app.use(aiops.proxy);

const anomaly = require('./projects/anomaly-web');
app.use(anomaly.router.routes()).use(anomaly.router.allowedMethods());
app.use(anomaly.proxy);


// 192.168.3.3:8008
const port = 8008;
app.listen(port);
console.log(`Servering listen: ${port}`);
console.log('\n\n');
