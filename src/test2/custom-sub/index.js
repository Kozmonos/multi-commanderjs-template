const actions = require('./actions');
const { Command } = require('commander');
const path = require('path');
const program = new Command(path.basename(__dirname));

program
  .description("test sub")
  .requiredOption('-o, --output <path>', 'output file path')
  .option('-k, --test <key>', 'test key')
  .action(actions.test);

module.exports = program