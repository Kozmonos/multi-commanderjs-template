const { Command } = require('commander');
const path = require('path');
const actions = require('./actions');
module.exports = new Command(path.basename(__dirname))
		.name(path.basename(__dirname))
		.description('test')
		.version('1.0.0')
		.requiredOption('-o, --output <path>', 'output file path')
		.option('-k, --test <key>', 'test key')
		.action(actions.test)