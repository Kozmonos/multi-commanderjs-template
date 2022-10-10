require('module-alias/register')
const globalFunctions = require("@utils/global.functions");
const log = require(`@utils/log`);

module.exports.test=()=>{
	
	log.success(`Documentation ${documentationName} created`)
	log.describe("path",`${globalFunctions.pathToAlias(newDocumentationPath)}`)
}