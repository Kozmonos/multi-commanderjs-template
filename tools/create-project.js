require('module-alias/register')

const inquirer = require('inquirer');
const glob = require('glob');

const {templateToProjectFolder,validate} = require('./common');

function sortObjectEntries(obj, n){
  return  Object.entries(obj).sort((a,b)=>b[1]-a[1]).map(el=>el[0]).slice(0,n)
}
function search(arrayData,searchData) {
  let isFullEquality=false
  const filtered= arrayData.filter(function (str) { 
    if(searchData==str)
      isFullEquality=true
    return str.indexOf(searchData) !== -1;
   })
  return {
    data:filtered,
    equlaity:isFullEquality
  }
}

inquirer
  .prompt([
    {
			name: 'project',
			message: 'Project name',
      validate: validate.name,
      source:(answerSoFar,input)=>{
        const counter={}
        glob.sync(`${__dirname}/../src/*/!(*.*)`).map((folder) => {
          const commandName=folder.split('/').pop()
          counter[commandName]=counter[commandName]+1||1
        })

        const sort=sortObjectEntries(counter,10)
        const searchInSortedData=search(sort,input)

        const inputData=!searchInSortedData.equlaity
          ? input|| ""
          : ""

        return [...searchInSortedData.data,inputData]
      }
		},
		{
			name: 'project_description',
			message: 'Project description'
		}
  ])
  .then(({project,project_description}) => {

    templateToProjectFolder({
      cacheData:{
        project,
        command:project
      },
      templatePath:"/project",
      targetPath:`/${project}`,
      renderData:{
        command:project,
        description:project_description,
        sub_command:"test",
        sub_description:"test sub command"
      }
    })

  });
