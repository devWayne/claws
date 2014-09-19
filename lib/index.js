#!/usr/bin/env node

var program = require('commander'),
  config = require('../config'),
  pkg = require('../package.json'),
  app = require('../app/app');

program
  .version(pkg.version)

program
  .option('-t, --test [int]', 'test')

program
  .command('test')
  .description('run remote setup commands')
  .action(function() {
    console.log('it is a test');
  });

program
  .command('start')
  .description('start webapp server')
  .action(function() {
    app.listen();
  });

program.parse(process.argv);


