const actions = require('./actions');
const { Command } = require('commander');
const path = require('path');
const program = new Command(path.basename(__dirname));

program
  .description("{{sub_command_description}}")
  .argument('name',"name")
  .requiredOption('-ro, --output <output>', 'output path',".")
  .option('-o, --output <output>', 'output path')
  .action(actions.test);

module.exports = program