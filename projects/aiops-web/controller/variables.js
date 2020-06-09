const responseData = require("../response-data.js");
const Moker = require('mockjs');

// /algorithm/model/class/logpecker/id/log.ts-ui-dashboard.ts/variables/all
module.exports = {
  method: "get",
  path: "/algorithm/model/class/logpecker/id/:modelId/variables/all",
  fn: function(ctx, next) {
    const result = Moker.mock({
      "extern_variable_fields|3-7": [
        {
          name: "@string(7, 10)",
          // 变量名，作为es的key
          type: "@string(7, 10)",
          // 变量类型
          field: "@string(7, 10)",
          // 变量唯一识别符，无实际意义
          description: "@string(7, 10)",
          // 变量描述
          is_focus: "@boolean"
          // 是否关注变量
        }
      ]
    });
    ctx.body = responseData.success(result);
    next();
  }
}
