const index = require('@kozmonos/commander2documentation');

const program=require("../command").getCommands().commands

const app=new index(program)
const response=app.build({
	bin: Object.keys(require('../package.json').bin)[0],
	output: "./dist"
})