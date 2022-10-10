const { Command } = require('commander');
const path = require('path');
const actions = require('./actions');
module.exports = new Command(path.basename(__dirname))
.name(path.basename(__dirname))
.description('{{description}}')
		.version('1.0.0')