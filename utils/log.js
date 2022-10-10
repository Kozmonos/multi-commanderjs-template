const clc = require("cli-color")

//------------------

module.exports.info = (message) => console.log(clc.yellow(message))
module.exports.success = (message) =>	console.log(clc.green(message))
module.exports.describe = (name,text) => console.log(`${name}:`,clc.green(text))
module.exports.describePath = (name,text) => console.log(`${name}:`,clc.blue.underline(text))

//helper
module.exports.line=()=> console.log(clc.white("---------------------"))

module.exports.newBlankLine=()=> console.log("\n")