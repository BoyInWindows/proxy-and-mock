/*
router.get('/settings', (ctx, next) => {
  console.log('get1');
  // console.log(ctx.request);
  // ctx.status = 200;
  let r = '{"code":200,"msg":"OK","data":{ "ano": "af" }}';
  const body = r;
  ctx.res.writeHead(200, {
      //设置允许跨域的域名，*代表允许任意域名跨域
      "Access-Control-Allow-Origin": "*",
      //允许的header类型
      "Access-Control-Allow-Headers": "content-type",
      //跨域允许的请求方式
      "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
      "Content-Type": "application/json;charset=utf-8",
      'Content-Length': Buffer.byteLength(body),
    })
  ctx.res.end(body);
  // ctx.body = r;
  next();
  console.log('get2');
});
*/


/*

// router
const Router = require('@koa/router');
const router = new Router({ prefix: '/api' });

// http://192.168.3.3:8008/api/algorithm/model/class/logwarn/id/5204a9e6410a5cad/variables/stats?time=1580886960000,1580890620000&template_id=7c49f722
// return request.get(`/algorithm/model/class/logwarn/id/${modelId}/variables/stats?time=${time}&template_id=${templateId}`)
// {"code":200,"msg":"OK","data":[{"field":"hostname","name":"hostname","stats":[{"key":"ip-172-31-7-4","count":6}],"type":"string","total":1}]}
router.get('/algorithm/model/class/logwarn/id/:modelId/variables/stats', (ctx, next) => {
  //?time=${time}&template_id=${templateId}
  console.log('mock:');
  console.log(ctx.params);
  console.log(ctx.query);
  console.log(ctx);
  const obj = {
    "code":200,
    "msg":"OK",
    "data":[
      {
        "field":"hostname",
        "name":"hostname",
        "stats":[
          {"key":"ip-172-31-7-4","count":6},
        ],
        "type":"string",
        "total":1
      },
      {
        "field":"hostname",
        "name":"hostname",
        "stats":[
          {"key":"ip-172-31-7-4","count":5},
          {"key":"ip-172-3","count":3},
          {"key":"ip-172-31-7-1","count":2}
        ],
        "type":"string",
        "total":3
      },
      {
        "field":"hostnum",
        "name":"hostnum",
        "stats":[
          {"key":"1723174","count":6}
        ],
        "type":"number",
        "total":1
      },
      {
        "field":"hostnum",
        "name":"hostnum",
        "stats":[
          {"key":"172174","count":2},
          {"key":"123174","count":8},
          {"key":"173174","count":2},
          {"key":"172374","count":9},
          {"key":"172314","count":4},
          {"key":"172317","count":7},
          {"key":"3174","count":3},
          {"key":"1774","count":6},
          {"key":"1723173","count":3}
        ],
        "type":"number",
        "total":2
      },
      {
        "field":"hostnum",
        "name":"hostnum",
        "stats":[],
        "type":"number",
        "total":0
      },
      {
        "field":"hostname",
        "name":"hostname",
        "stats":[
          {"key":"ip-172-31-7-4","count":6},
          {"key":"ip-172-31-7-3","count":3},
          {"key":"ip-172-31-7-5","count":5},
          {"key":"ip-172-31-7-6","count":6},
          {"key":"ip-172-31-7-1","count":1}
        ],
        "type":"string",
        "total":5
      },
      {
        "field":"hostname",
        "name":"hostname",
        "stats":[
          {"key":"ip-172-31-7-4","count":6},
          {"key":"ip-172-31-7-3","count":3},
          {"key":"ip-172-31-7-5","count":5},
          {"key":"ip-172-31-7-6","count":6},
          {"key":"ip-172-31-7-1","count":1}
        ],
        "type":"string",
        "total":5
      },
      {
        "field":"hostname",
        "name":"hostname",
        "stats":[
          {"key":"ip-172-31-7-4","count":6},
          {"key":"ip-172-31-7-3","count":3},
          {"key":"ip-172-31-7-5","count":5},
          {"key":"ip-172-31-7-6","count":6},
          {"key":"ip-172-31-7-1","count":1}
        ],
        "type":"string",
        "total":5
      },
    ]
  };
  const body = JSON.stringify(obj);
  ctx.res.writeHead(200, {
      //设置允许跨域的域名，*代表允许任意域名跨域
      "Access-Control-Allow-Origin": "*",
      //允许的header类型
      "Access-Control-Allow-Headers": "content-type",
      //跨域允许的请求方式
      "Access-Control-Allow-Methods":"PUT,POST,GET,DELETE,OPTIONS",
      "Content-Type": "application/json;charset=utf-8",
      'Content-Length': Buffer.byteLength(body),
    })
  ctx.res.end(body);
  next();
});
app.use(router.routes());
app.use(router.allowedMethods());

*/

