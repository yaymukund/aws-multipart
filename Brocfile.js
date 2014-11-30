/* jshint node: true */
var compileModules = require('broccoli-es6-module-transpiler'),
    pickFiles = require('broccoli-static-compiler'),
    mergeTrees = require('broccoli-merge-trees'),
    AMDFormatter = require('es6-module-transpiler-amd-formatter'),
    concat = require('broccoli-concat'),
    bower, app, concatenatedApp, sourceMaps;

bower = pickFiles('bower_components', {
  srcDir: '/',
  destDir: '/bower'
});

app = mergeTrees([
  bower,
  'lib'
]);

app = compileModules(app, {
  formatter: new AMDFormatter()
});

concatenatedApp = concat(app, {
  inputFiles: ['**/*.js'],
  outputFile: '/aws-multipart.js',
  wrapInEval: true
  // header: commit sha.
});

sourceMaps = pickFiles(app, {
  srcDir: '/',
  files: ['**/*.map'],
  destDir: '/'
});

module.exports = mergeTrees([concatenatedApp, sourceMaps]);
