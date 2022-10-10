require('module-alias/register')
const inquirer = require('inquirer');
const glob = require('glob');
const {cache} = require('@utils/global.functions');

const {templateToProjectFolder,validate} = require('./common');

inquirer
  .prompt([
    {
      type: 'list',
      name: 'project',
      message: 'Which project do you want to work on?',
      choices: glob.sync(`${__dirname}/../src/*`).map((folder) => folder.split('/').pop()),
      default: cache.read("tools","project")
    },
		{
			name: 'command',
			message: 'Command name',
      validate: validate.name,
      default: cache.read("tools","command")
		},
		{
			name: 'sub_command',
      validate: validate.name,
			message: 'Sub command name'
		},
		{
			name: 'sub_command_description',
			message: 'Sub command description',
		}
  ])
  .then(({project,command,sub_command,sub_command_description}) => {

    templateToProjectFolder({
      cacheData:{
        project,
        command
      },
      templatePath:"/project/command",
      targetPath:`/${project}/${command}/${sub_command}`,
      renderData:{
        sub_command,
        sub_command_description
      }
    })

  });
