import * as httpProxy from 'http-proxy'

export default function(options) {

  if (typeof options === 'string') {
    options = {
      target: options
    }
  }

  const proxyServer = httpProxy.createProxyServer(options)

  return async function (ctx, next) {
    // http代理
    await new Promise (function (resolve, reject) {
      ctx.res.on('finish', function () {
        console.log('proxy finish');
        resolve()
      })
      proxyServer.web(ctx.req, ctx.res)

    //   var option = {
    //     ...options,
    //     selfHandleResponse : true
    //   };
    //   proxyServer.on('proxyRes', function (proxyRes, req, res) {
    //     var body = [];
    //     proxyRes.on('data', function (chunk) {
    //       body.push(chunk);
    //     });
    //     proxyRes.on('end', function () {
    //       body = Buffer.concat(body).toString();
    //       console.log("res from proxied server:", body);
    //       res.end(body);
    //     });
    //   });
    //   proxyServer.web(ctx.req, ctx.res, option);

    })
    await next()
  }

}