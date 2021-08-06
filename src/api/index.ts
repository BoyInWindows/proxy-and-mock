import * as Router from '@koa/router'
const router = new Router()

// // 加载routerModule
// function loadRouter(path) {
//   const r = require(path);
//   router[r.method](r.path, r.fn);
// }

router.get('/', (ctx, next) => {
	ctx.body = 'Hello World!'
})

const userBody = {
	code: 200,
	msg: 'OK',
	data: {
		accessToken:
			'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiRyFBekRKQlcyWkAiLCJ1bmlxdWVfbmFtZSI6ImJveV9pbkAxNjMuY29tIiwidXNlcmlkIjoiMjc5MzkiLCJ0eXBlIjoiQUNDT1VOVCIsImlzcyI6InJlc3RhcGl1c2VyIiwiYXVkIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJleHAiOjE2MTc4ODQ1MDksIm5iZiI6MTYxNzg0MTMwOX0.fLJPC5MfiH9YTpOfoWeI5sxcKc9KMgJcyDLqSnFfV1A',
		ErrorMessage: '???????!',
		type: 'null',
		resultMessage: null,
		userId: 723,
		status: '403',
	},
}

// router.get("/api/service/getUserIdByEmail", (ctx, next) => {
// 	console.log(12341234)
//   ctx.body = "userBody";
// });

// http://localhost:8888/api/service/getMoudelsByEmail?email=caojh35%40chinaunicom.cn&token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiWkFUZ0JSZVNjWTkiLCJ1bmlxdWVfbmFtZSI6ImxpdXJtMjgiLCJ1c2VyaWQiOiIzMzY2NjUiLCJ0eXBlIjoiQUNDT1VOVCIsImlzcyI6InJlc3RhcGl1c2VyIiwiYXVkIjoiMDk4ZjZiY2Q0NjIxZDM3M2NhZGU0ZTgzMjYyN2I0ZjYiLCJleHAiOjE2MTkzNzg1OTAsIm5iZiI6MTYxOTMzNTM5MH0.El9xG95PkxrqwwiCw5SvAfQvm4yz_AriEJET19GLzjc
const emailResult = {
	code: 200,
	msg: 'OK',
	data: {
		list: [
			{
				modelId: 30,
				relaId: 0,
				title: '天眼大数据AIops',
				modelName: '天眼大数据AIops',
				commandTag: -1,
				tenantName: null,
				children: null,
				projectCode: null,
				modelCode: 'TYDSJ',
				tenantId: 3,
				projectDesc: null,
				projectName: null,
				value: 'm30',
				projectId: null,
				key: 'm30',
			},
			{
				modelId: 42,
				relaId: 0,
				title: '运维产品开发',
				modelName: '运维产品开发',
				commandTag: -1,
				tenantName: null,
				children: null,
				projectCode: null,
				modelCode: 'YWCPKF',
				tenantId: 3,
				projectDesc: null,
				projectName: null,
				value: 'm42',
				projectId: null,
				key: 'm42',
			},
		],
	},
}

// router.get('/api/service/getMoudelsByEmail', (ctx) => {
// 	ctx.body = emailResult
// 	// ctx.body = {
// 	// 	code: 200,
// 	// 	msg: 'OK',
// 	// 	data: {
// 	// 		list: [],
// 	// 	},
// 	// }
// })


const pac = {
    "code": 200,
    "msg": "OK",
    "data": [
        {
            "list": [
                {
                    "module_code": "TYDSJ",
                    "tenant_name": "大BSS",
                    "module_name": "天眼大数据AIops",
                    "config": true,
                    "tenant_code": "BBSS"
                }
            ],
            "email": "qiny20@chinaunicom.cn"
        },
        {
            "list": [
                {
                    "module_code": "TYDSJ",
                    "tenant_name": "大BSS",
                    "module_name": "天眼大数据AIops",
                    "config": false,
                    "tenant_code": "BBSS"
                },
                {
                    "module_code": "YWCPKF",
                    "tenant_name": "大BSS",
                    "module_name": "运维产品开发",
                    "config": true,
                    "tenant_code": "BBSS"
                }
            ],
            "email": "caojh35@chinaunicom.cn"
        }
    ]
}

// router.get('/api/service/findPersonAlertConfig', (ctx) => {
// 	ctx.body = pac
// })

export default router
