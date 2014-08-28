#!/usr/bin/env node

var program = require('commander'),
	config=require('./config')

program
  .version('0.0.1')

program
  .option('-t, --test [int]', 'test')
  
program
   .command('test')
   .description('run remote setup commands')
   .action(function(){
     console.log('it is a test');
   });

program.parse(process.argv);
