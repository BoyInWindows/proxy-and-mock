// http-proxy.js

module.exports = function(options) {

  if (typeof options == 'string') {
    options = {
      target: options
    };
  }

  const proxyServer = require('http-proxy').createProxyServer(options);

  return async (ctx, next) => {
    // http代理
    await new Promise(function(resolve, reject) {
      ctx.res.on('finish', function() {
        resolve();
      });
      proxyServer.web(ctx.req, ctx.res);
    });
    await next();
  }

}

