#!/usr/bin/env node

const program = require('commander')
const scripts = require('../scripts')

program
  .version('0.0.1', '-v, --version')
  .option(
    '-n, --name <items1> [items2]',
    'name description',
    'default value'
  )

program
  .command('api <api-name>')
  .description('controll api options')
  .option('-s, --size <size>', 'Pizza size')
  .action(function (name, otherArguments, cmd) {
    console.log('name:', name, 'otherArguments:', otherArguments)
    console.log(cmd.size)
  })

program
  .command('serve <api-name>')
  .description('api dir')
  .option('-p, --port <port>', 'Port', 8080)
  .action(function (name, cmd) {
    scripts.serve(name, cmd)
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}