var compileModules = require('broccoli-es6-module-transpiler'),
    AMDFormatter = require('es6-module-transpiler-amd-formatter');

module.exports = compileModules('lib', {
  formatter: new AMDFormatter()
});
