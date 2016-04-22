const gruntTaskLoader = require('load-grunt-tasks');
const eslintConfig = require('./grunt/configs/eslint');
const uglifyConfig = require('./grunt/configs/uglify');
const browserifyConfig = require('./grunt/configs/browserify');
const packageTask = require('./grunt/tasks/package');

module.exports = function (grunt) {
    // Load all the grunt task plugin
    gruntTaskLoader(grunt);

    // Specify our grunt config
    grunt.initConfig({
        eslint: eslintConfig,
        uglify: uglifyConfig,
        browserify: browserifyConfig
    });

    // Setup our tasks
    packageTask(grunt);
};
