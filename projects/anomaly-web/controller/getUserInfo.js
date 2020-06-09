
module.exports = {
  method: "get",
  path: "/casauth/getAuthInfo",
  fn: function(ctx, next) {
    let data = `{
      "menuInfo":[
        [{"path":"/#/dashboard","sys_id":6,"children":[],"parent_id":0,"menu_name":"仪表盘","menu_id":258,"is_show":"1"}],[],
        [{"path":"/#/event","sys_id":6,"children":[],"parent_id":0,"menu_name":"业务监控-全部告警","menu_id":259,"is_show":"1"}],[],
        [{"path":"/#/service/overview","sys_id":6,"children":[],"parent_id":0,"menu_name":"业务监控-业务监控详情","menu_id":260,"is_show":"1"}],[],
        [{"path":"/#/kpi","sys_id":6,
            "children":[
              {"path":"/perf","sys_id":6,
                "children":[{"path":"/info","sys_id":6,"children":[],"parent_id":262,"menu_name":"系统性能指标-查看","menu_id":263,"is_show":"1"}],
                "parent_id":261,"menu_name":"系统性能指标","menu_id":262,"is_show":"1"},
              {"path":"/node","sys_id":6,"children":[],"parent_id":261,"menu_name":"机器监控指标","menu_id":264,"is_show":"1"},
              {"path":"/module","sys_id":6,"children":[],"parent_id":261,"menu_name":"系统模块","menu_id":265,"is_show":"1"},
              {"path":"/task","sys_id":6,"children":[],"parent_id":261,"menu_name":"任务模块","menu_id":268,"is_show":"1"},
              {"path":"/configgroup","sys_id":6,"children":[],"parent_id":261,"menu_name":"配置组","menu_id":269,"is_show":"1"}
            ],
            "parent_id":0,"menu_name":"数据总览","menu_id":261,"is_show":"1"
        }],
        [{"path":"/perf","sys_id":6,
            "children":[
              {"path":"/info","sys_id":6,"children":[],"parent_id":262,"menu_name":"系统性能指标-查看","menu_id":263,"is_show":"1"}
            ],
            "parent_id":261,"menu_name":"系统性能指标","menu_id":262,"is_show":"1"
         },
          {"path":"/node","sys_id":6,"children":[],"parent_id":261,"menu_name":"机器监控指标","menu_id":264,"is_show":"1"},
          {"path":"/module","sys_id":6,"children":[],"parent_id":261,"menu_name":"系统模块","menu_id":265,"is_show":"1"},
          {"path":"/task","sys_id":6,"children":[],"parent_id":261,"menu_name":"任务模块","menu_id":268,"is_show":"1"},
          {"path":"/configgroup","sys_id":6,"children":[],"parent_id":261,"menu_name":"配置组","menu_id":269,"is_show":"1"}
        ],
        [{"path":"/#/monitor","sys_id":6,"children":[],"parent_id":0,"menu_name":"总览","menu_id":270,"is_show":"0"}],[]
      ],
      "user_id":437,
      "user_name":"宝音",
      "tenantInfo":[{"tenantName":"tianyan","id":1}],
      "orgInfo":[],
      "buttonInfo":[
        {"sys_id":6,"button_name":"addDashboard","button_id":302,"menu_id":258},{"sys_id":6,"button_name":"dashBoardEdit","button_id":303,"menu_id":258},{"sys_id":6,"button_name":"dashBoardDelete","button_id":304,"menu_id":258},{"sys_id":6,"button_name":"deleteAlarm","button_id":305,"menu_id":259},{"sys_id":6,"button_name":"addService","button_id":306,"menu_id":260},{"sys_id":6,"button_name":"addChildService","button_id":307,"menu_id":260},{"sys_id":6,"button_name":"deleteService","button_id":308,"menu_id":260},{"sys_id":6,"button_name":"deleteChildService","button_id":309,"menu_id":260},{"sys_id":6,"button_name":"addAlarm","button_id":310,"menu_id":260},{"sys_id":6,"button_name":"configService","button_id":311,"menu_id":260},{"sys_id":6,"button_name":"kpiRename","button_id":312,"menu_id":262},{"sys_id":6,"button_name":"kpiTrain","button_id":313,"menu_id":262},{"sys_id":6,"button_name":"kpiStop","button_id":314,"menu_id":262},{"sys_id":6,"button_name":"kpiDelete","button_id":315,"menu_id":262},{"sys_id":6,"button_name":"setChangePoint","button_id":316,"menu_id":263},{"sys_id":6,"button_name":"trainParam","button_id":317,"menu_id":263},{"sys_id":6,"button_name":"adjust","button_id":318,"menu_id":263},{"sys_id":6,"button_name":"runBatch","button_id":319,"menu_id":263},{"sys_id":6,"button_name":"tolerantAdjust","button_id":320,"menu_id":263},{"sys_id":6,"button_name":"nodeRename","button_id":321,"menu_id":264},{"sys_id":6,"button_name":"nodeDelete","button_id":322,"menu_id":264},{"sys_id":6,"button_name":"addSysModule","button_id":323,"menu_id":265},{"sys_id":6,"button_name":"editSysModule","button_id":324,"menu_id":265},{"sys_id":6,"button_name":"copySysModule","button_id":325,"menu_id":265},{"sys_id":6,"button_name":"deleteSysModule","button_id":326,"menu_id":265},{"sys_id":6,"button_name":"addTask","button_id":329,"menu_id":268},{"sys_id":6,"button_name":"editTask","button_id":330,"menu_id":268},{"sys_id":6,"button_name":"runTask","button_id":331,"menu_id":268},{"sys_id":6,"button_name":"deleteTask","button_id":332,"menu_id":268},{"sys_id":6,"button_name":"newConfigGroup","button_id":333,"menu_id":269},{"sys_id":6,"button_name":"editConfigGroup","button_id":334,"menu_id":269},{"sys_id":6,"button_name":"bindConfigGroup","button_id":335,"menu_id":269},{"sys_id":6,"button_name":"stopConfigGroup","button_id":336,"menu_id":269},{"sys_id":6,"button_name":"deleteConfigGroup","button_id":337,"menu_id":269}],
        "isAdmin":"1"
    }`;

    let result = {
      code: 200,
      msg: 'OK',
      data: JSON.parse(data)
    }
    ctx.body = result;
    next();
  }
}
