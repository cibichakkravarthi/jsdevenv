/*var express = require('express');

var path = require('path');

var port = 5000;*/

import express from 'express';

import path from 'path';

import open from 'open';

import webpack from 'webpack';

import config from '../webpack.config.dev';
/*eslint-disable no-console*/

const port = 5000;

//const open = require('open');

const application = express();

const compiler = webpack(config);
console.log("public path-->"+config.output.publicPath);
console.log("save test");
application.use(require('webpack-dev-middleware')(compiler,{
noInfo:true,
publicPath:config.output.publicPath


}));


application.get('/',function(req,res){
console.log("dirnameis-->"+__dirname);
res.sendFile(path.join(__dirname,'../src/index.html'));

})

application.listen(port,function(error){
if(error) {

    console.log(error);
}
else{
    open('http://localhost:5000');
}

});

