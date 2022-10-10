const {cache,file} = require('@utils/global.functions');
const mustache = require('mustache');
const glob = require('glob');


function changeAndSaveFile(filePath,renderData) {
	const content=file.read(filePath);
	const newContent=mustache.render(content,renderData)
	file.create({
		path:filePath,
		content:newContent
	})
}

module.exports.validate={
	name:(name)=>{
		if(!name)
			throw "name is required"

			if(name.indexOf(" ")!==-1){
				return "Name must not contain spaces"
			}
			return true
	}
}

module.exports.templateToProjectFolder=async ({templatePath,targetPath,renderData,cacheData})=>{
	cache.create("tools",cacheData)

	const PROJECT_TEMPLATE_PATH=`@templates${templatePath}`
	const TARGET_PATH=`@app${targetPath}`

	await file.copy(PROJECT_TEMPLATE_PATH, TARGET_PATH);

	if(await file.stat(TARGET_PATH).isFile())
		changeAndSaveFile(TARGET_PATH,renderData)
	else
	await file.glob(`${TARGET_PATH}/**/*.js`)
		.forEach((filePath)=>	
			changeAndSaveFile(filePath,renderData)
		)

}