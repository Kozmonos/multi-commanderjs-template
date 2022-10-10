const fs = require('fs-extra');
const glob = require('glob');

module.exports.capitalizeFirstLetter=(string)=> 
   string.charAt(0).toUpperCase() + string.slice(1)

module.exports.toKebabCase = str =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(x => x.toLowerCase())
    .join('-');

//--------------------------------------------

module.exports.pathToAlias=(path) => {
  if(path.startsWith("@")){
    const packageJson = require('../package.json');
    const pathParts = path.split('/');
    const alias=packageJson._moduleAliases[pathParts[0]]
    return `${alias}/${pathParts.slice(1).join('/')}`;
  }else{
    return path
  }
}

module.exports.file={
  read: (path) => 
    fs.readFileSync(this.pathToAlias(path),"utf-8").toString(),

  create: ({path,content,cb}) => {
    const getDirName = require('path').dirname
    const aliasPath=this.pathToAlias(path)
  
    fs.mkdir(getDirName(aliasPath), {recursive: true}, function (err) {
      if (err) return cb(err);
  
      fs.writeFileSync(aliasPath, content, cb);
    });
  },

  copy: (selectedPath,targetPath)=>  fs.copySync(this.pathToAlias(selectedPath), this.pathToAlias(targetPath)),

  exists: (path) => fs.existsSync(this.pathToAlias(path)),

  glob:(path)=>  glob.sync(this.pathToAlias(path)),

  stat:(path)=>  fs.lstatSync(this.pathToAlias(path)),

  rename:(selectedPath,targetPath)=>  fs.renameSync(this.pathToAlias(selectedPath), this.pathToAlias(targetPath)),
}

module.exports.basePath = require('path').resolve(__dirname, '..')

//--------------------------------------------

module.exports.cache={
 create:(cacheName,cacheData)=>{
    const CACHE_PATH=`@cache/${cacheName}.js`
    const cacheTools = require(CACHE_PATH);
    
    const cacheToolsData={
      ...cacheData,
      ...cacheTools
    }

    this.file.create({
      path:CACHE_PATH,
      content:`module.exports=${JSON.stringify(cacheToolsData)}`
    })
  },
  read:(cacheName,key=null)=>{
    const CACHE_PATH=`@cache/${cacheName}.js`
    const cacheTools = require(CACHE_PATH);
    return key
      ? cacheTools[key]
      : cacheTools
  }
}