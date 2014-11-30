/* jshint node: true */
var compileModules = require('broccoli-es6-module-transpiler'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    AMDFormatter = require('es6-module-transpiler-amd-formatter');

var bower = pickFiles('bower_components', {
  srcDir: '/',
  destDir: '/bower'
});

var app = mergeTrees([
  bower,
  'lib'
]);

module.exports = compileModules(app, {
  formatter: new AMDFormatter()
});
