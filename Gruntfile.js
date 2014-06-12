
// The "wrapper" function
module.exports = function(grunt) {
    // Do grunt-related things in here
    // Project configuration.
    grunt.initConfig({
        // imports the JSON metadata stored in package.json
        pkg: grunt.file.readJSON('package.json'),
        // compiles LESS file to minified CSS
        jekyll: {
            build: {
                options: {
                    dest: './_site'
                }
            }
        },
        less: {
            minifiedLongbow: {
                options: {
                    paths: ["./css/less"],
                    cleancss: true
                },
                files: {
                    "./css/main.css": "./css/less/main.less"
                }
            }
        },
        watch: {
            jekyll: {
                files: ['./_includes', './_layouts', './_posts'],
                tasks: ['jekyll']
            },
            less: {
                files: ["./css/less/*"],
                tasks: ['less']
            }
        }
    });
    grunt.loadNpmTasks('grunt-jekyll');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('makeJekyll', [
        // 'uglify'
        'jekyll'
    ]);

    grunt.registerTask('default', [
        'jekyll',
        'less',
        'watch'
    ]);
};