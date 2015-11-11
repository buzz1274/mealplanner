module.exports = function(grunt) {
    require('jit-grunt')(grunt);

    grunt.loadNpmTasks('grunt-webpack');

    var webpack = require("webpack");
    var webpackConfig = require("./webpack.config.babel.js");

    grunt.initConfig({
        webpack: {
            options: webpackConfig,
            build: {
                plugins: webpackConfig.plugins.concat(
                    new webpack.optimize.DedupePlugin(),
                    new webpack.optimize.UglifyJsPlugin()
                )
            },
            build_dev: {
                debug: true
            }
        },
        watch: {
            app: {
                files: ["app/**/*{.js,.css,.handlebars,.jsx}"],
                tasks: ["webpack:build_dev"],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask("dev", ["webpack:build_dev", "watch:app"]);
    grunt.registerTask("build", ["webpack:build"]);

};