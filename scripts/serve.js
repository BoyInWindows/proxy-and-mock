module.exports = function serve (name, cmd) {
  console.log('serve:', name, cmd.port)

  const spawn = require('child_process').spawn
  nodemon = spawn('nodemon', ['babel-node', 'index.js'])

  // 捕获标准输出并将其打印到控制台 
  nodemon.stdout.on('data', function (data) { 
    console.log('nodemon output:\n' + data)
  })

  // 捕获标准错误输出并将其打印到控制台 
  nodemon.stderr.on('data', function (data) { 
    console.log('nodemon error output:\n' + data)
  })

  // 注册子进程关闭事件 
  nodemon.on('exit', function (code, signal) { 
    console.log('nodemon process eixt ,exit:' + code)
  })
}