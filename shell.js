/**
* @file 发布运行shell，为了解决gitbook编译后会上传无用文件，修改root会引发其他问题的bug
* @author xiek
*/
'use strict';

const fs = require('fs-extra');
const path = require('path');

const dir = dir => path.join(__dirname, 'docs', dir);

fs.removeSync(dir('package.json'));
fs.removeSync(dir('shell.js'));
fs.removeSync(dir('.gitignore'));
