require('module-alias/register')

const { Command,program } = require('commander');
const glob = require('glob');
const { file } = require('./utils/global.functions');

function createCommand() {
	program
		.description('Kozmonos developer cli tool')
		.version('1.0.0');

	return program
}


module.exports.returnProgram = () => program

const scanSubFolder = (path, program) => {
	file
	.glob(`${path}/*`)
	.map((folderPath)=>{
		if(file.stat(folderPath).isFile())
			return

		 const targetName=folderPath.replace(`${path}/`,'').split('/')[0]

			if(file.exists(`${folderPath}/index.js`))
				program.addCommand(require(`${folderPath}/index.js`))
			else{
				const subProgram = new Command(targetName);
				scanSubFolder(folderPath,subProgram)
				program.addCommand(subProgram)
			}
	})
}


module.exports.getCommands=() => {
	let program=createCommand()
	file
		.glob("@app/*")
		.map(commandFolder=>{
			const projectName=commandFolder.replace(`${__dirname}/src/`,'').split('/')[0]
			const projectApp=require(`${commandFolder}/index.js`)
			scanSubFolder(commandFolder,projectApp)
			program.addCommand(projectApp)
		})
	return program

}

module.exports.commander=() =>this.getCommands().parse()
