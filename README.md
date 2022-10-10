
# 🚀 CommanderJS Nested Routes

### Structure

```
src
 ┣ test
 ┃ ┣ actions.js
 ┃ ┗ index.js
 ┗ test2
 ┃ ┣ custom-sub
 ┃ ┃ ┣ actions.js
 ┃ ┃ ┗ index.js
 ┃ ┗ index.js
```

```sh
<bin-command> test <arguments> [options]
<bin-command> test2 custom-sub <arguments> [options]
```
## Commands

### Create new project

```sh
npm run create-project

? Project name: name
? Project description: description
```

output:

```
src
 ┣ +name
 ┃ ┣ +command
 ┃ ┃ ┣ +actions.js
 ┃ ┃ ┗ +index.js
 ┃ ┗ +index.js
 ```

 
### Create new command

```sh
npm run create-command

? Which project do you want to work on?: name
? Command name: custom-command
? Sub command name: sub-custom-command
? Sub command description: sub custom command description
```

output:

```
src
 ┣ name
 ┃ ┣ +custom-command
 ┃ ┃ ┗ +sub-custom-command
 ┃ ┃ ┃ ┣ +actions.js
 ┃ ┃ ┃ ┗ +index.js
 ┃ ┗ index.js
 ```

### Create new sub command

```sh
npm run create-sub-command

? Do you want to use the _cache_name_ project?(cache): No
? Which project do you want to work on?: name
? Command name: custom-command
? Sub command name: new-sub-command
? Sub command description: new sub command description
```

output:

```
src
 ┣ name
 ┃ ┣ custom-command
 ┃ ┃ ┗ +new-sub-command
 ┃ ┃ ┃ ┣ +actions.js
 ┃ ┃ ┃ ┗ +index.js
 ┃ ┗ index.js
 ```

## comander2documetation Plugin

[![Github](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://www.github.com/kozmonos/comander2documetation)
[![NPM](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)](https://www.npmjs.com/package/@kozmonos/commander2documentation)

[Open Created Documentation <svg style="width:10px;fill:white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M288 32c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9L306.7 128 169.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L352 173.3l41.4 41.4c9.2 9.2 22.9 11.9 34.9 6.9s19.8-16.6 19.8-29.6V64c0-17.7-14.3-32-32-32H288zM80 64C35.8 64 0 99.8 0 144V400c0 44.2 35.8 80 80 80H336c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v80c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V144c0-8.8 7.2-16 16-16h80c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>](https://kozmonos.github.io/multi-commanderjs-template/test2/custom-sub/)

(created with commander2documentation)


## Authors

- [@onuraycicek](https://www.github.com/onuraycicek)


## Support Us

[![Patreon](https://img.shields.io/badge/Patreon-F96854?style=for-the-badge&logo=patreon&logoColor=white)](https://www.patreon.com/kozmonos)
[![Buy Me A Coffe](https://img.shields.io/badge/Buy_Me_A_Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black)](https://www.buymeacoffee.com/kozmonos)
[![Kofi](https://img.shields.io/badge/Ko--fi-F16061?style=for-the-badge&logo=ko-fi&logoColor=white)](https://ko-fi.com/kozmonos)
[![Liberapay](https://img.shields.io/badge/Liberapay-F6C915?style=for-the-badge&logo=liberapay&logoColor=black)](https://liberapay.com/kozmonos/donate)
[![Github Sponsor](https://img.shields.io/badge/sponsor-30363D?style=for-the-badge&logo=GitHub-Sponsors&logoColor=#white)](https://github.com/sponsors/Kozmonos)
![Open Collective](https://img.shields.io/badge/OpenCollective-1F87FF?style=for-the-badge&logo=OpenCollective&logoColor=white)

## Communicate

[![Telegram](https://img.shields.io/badge/Telegram-2CA5E0?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/kozmonos)
[![Mail](https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white)](mailto:opensource@kozmonos.com)