const { Command } = require('commander');
const path = require('path');
module.exports = new Command(path.basename(__dirname))
		.name(path.basename(__dirname))
		.description('test 2')
		.version('1.0.0')