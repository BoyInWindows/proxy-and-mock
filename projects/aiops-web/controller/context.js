const responseData = require("../response-data.js");
const Faker = require('faker/locale/zh_CN');
const Moker = require('mockjs');

// /api/algorithm/model/class/logwarn/id/log.ts-ui-dashboard.ts/log/context
module.exports = {
  method: "post",
  path: "/algorithm/model/class/logwarn/id/:modelId/log/context",
  fn: function(ctx, next) {
    // const result = Moker.mock({
    //   ts_key: new Date().getTime(),
    //   "logs|2": [
    //     {
    //       data_id: "@string(7, 10)",
    //       raw: "@sentence",
    //       template_id: "@string(7, 10)",
    //       timestamp: Faker.date.past().getTime()
    //     }
    //   ]
    // });
    // console.log(result);
    const result = { ts_key: "timestamp" };
    result.logs = [
      {
        "ip":"10.0.0.1",
        "hostname":"ip-172-31-7-3",
        "data_id": "log.ts-ui-dashboard.ts",
        "raw": "[2020-01-17T13:19:59.634Z]\"GET /assets/css/amazeui.min.css HTTP/1.1\"200 - \"-\"\"-\"0 255214 1 0 \"-\"\"Mozilla/5.0 (X11;Linux x86_64)AppleWebKit/537.36 (KHTML,like Gecko)HeadlessChrome/79.0.3945.117 Safari/537.36\"\"7f2d8cb1-870d-9446-98be-211b6488bd77\"\"172.31.7.2:31679\"\"127.0.0.1:8080\"inbound|8080|http|ts-ui-dashboard.de.svc.cluster.local - 172.20.164.156:8080 172.20.181.0:26991 - default",
        "template_id": "eab82d76",
        "timestamp": "2020-01-17 21:19:59.634 +0800"
      },
      {
        "ip":"10.0.0.1",
        "filename":"bj_01",
        "data_id": "log.ts-ui-dashboard.ts",
        "raw": "[2020-01-17T13:19:59.634Z]\"GET /assets/css/app.css HTTP/1.1\"200 - \"-\"\"-\"0 36892 0 0 \"-\"\"Mozilla/5.0 (X11;Linux x86_64)AppleWebKit/537.36 (KHTML,like Gecko)HeadlessChrome/79.0.3945.117 Safari/537.36\"\"dbbe531e-3f90-9ebb-a50c-d8e0bb101926\"\"172.31.7.2:31679\"\"127.0.0.1:8080\"inbound|8080|http|ts-ui-dashboard.de.svc.cluster.local - 172.20.164.156:8080 172.20.181.0:3283 - default",
        "template_id": "eab82d76",
        "timestamp": "2020-01-17 21:19:59.634 +0800"
      },
      {
        "filename":"123000.txt",
        "hostname":"ip-172-31-7-3",
        "relTimestamp": "2020-02-18 23:39:56.188 +0800",
        "data_id": "log.ts-ui-dashboard.ts",
        "raw": "[2020-01-17T13:19:59.634Z]\"GET /assets/css/client.css HTTP/1.1\"200 - \"-\"\"-\"0 1621 0 0 \"-\"\"Mozilla/5.0 (X11;Linux x86_64)AppleWebKit/537.36 (KHTML,like Gecko)HeadlessChrome/79.0.3945.117 Safari/537.36\"\"b3ee8340-070a-922c-b1b4-98a8491c669e\"\"172.31.7.2:31679\"\"127.0.0.1:8080\"inbound|8080|http|ts-ui-dashboard.de.svc.cluster.local - 172.20.164.156:8080 172.20.181.0:3041 - default",
        "template_id": "eab82d76",
        "timestamp": "2020-02-18 23:39:56.188 +0800"
      }
    ];
    ctx.body = responseData.success(result);
    next();
  }
}
