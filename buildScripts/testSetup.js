require('babel-register')();//to transpile the js code before any mocha test run

require.extensions['css'] = function() {



}//disable webpack features that mocha dosent understand    