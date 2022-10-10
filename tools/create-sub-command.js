require('module-alias/register')
const inquirer = require('inquirer');
const glob = require('glob');
const clc = require("cli-color")

const {cache} = require('@utils/global.functions');
const {templateToProjectFolder,validate} = require('./common');
const { file } = require('../utils/global.functions');

const cacheProject=cache.read("tools","project")

inquirer
  .prompt([
    {
      name: 'cache_project',
      type: "confirm",
      message: `Do you want to use the ${clc.bold.green.underline(cacheProject)} project?`,
      default:cacheProject
    },
    {
      type: 'list',
      name: 'project',
      message: 'Which project do you want to work on?',
      choices: file.glob("@app/*").map((folder) => folder.split('/').pop()),
      default: cache.read("tools","project"),
      when: (answers) => answers.cache_project === false
    },
    {
      type:"list",
			name: 'command',
			message: 'Command name',
      default: cache.read("tools","command"),
      validate: validate.name,
      choices: (data)=>{
        let targetProject;
        if(data.cache_project){
          targetProject=cacheProject
        }

        if(data.project){
          targetProject=data.project
        }

        if(!targetProject)
          throw "project not found"

        return file.glob(`@app/${targetProject}/!(*.*)`).map(path=>path.split("/").pop())
      },
		},
		{
			name: 'sub_command',
			message: 'Sub command name',
      validate: validate.name,
      default: cache.read("tools","command")
		},
		{
			name: 'sub_command_description',
			message: 'Sub command description',
		}
  ])
  .then(({cache_project,project,command,sub_command,sub_command_description}) => {

    if(cache_project)
      project=cacheProject

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
