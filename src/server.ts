import * as Koa from 'koa'
import * as cors from '@koa/cors'
import proxy from './proxy'

import api from './api'

export default class Server {
  private server: Koa

  constructor (port: number) {
    this.server = new Koa()
    this.server
      // 允许跨域
      .use(cors({
        origin (ctx) {
          return ctx.req.headers.origin
        },
        exposeHeaders: ['WWW-Authenticate', 'Server-Authorization'],
        maxAge: 5,
        credentials: true,
        allowMethods: ["PUT", "POST", "GET", "DELETE", "OPTIONS"],
        allowHeaders: ['Content-Type', 'Authorization', 'Accept'],
      }))
      // loggers
      .use(async (ctx, next) => {
        console.log('logger start')
        const rt = ctx.response.get('X-Response-Time')
        console.log(`${ctx.method} ${ctx.url} - ${rt}`)
        await next()
        console.log('logger end.\n')
      })
      // 自定义接口
      .use(api.routes())
      .use(api.allowedMethods())
      // http代理
      .use(proxy({
        target: "http://10.161.55.11:18080" // 联通测试
        , ws: true
        , changeOrigin: true
        , followRedirects: true
      }))
    this.start(port)
  }

  private start (port:number) {
    this.server.listen(port, () => {
      console.log(`Servering listen: ${port}`)
      console.log('\n')
    })
  }
}
