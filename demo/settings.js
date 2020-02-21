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

