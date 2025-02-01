module.exports = function(grunt) {
    // Project configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Task for minifying JavaScript files
        uglify: {
            options: {
                mangle: false // Prevents variable name mangling
            },
            my_target: {
                files: {
                    'dist/output.min.js': ['src/**/*.js'] // Source files to minify
                }
            }
        },

        // Task for minifying CSS files
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: 'src/css', // Source directory
                    src: ['*.css', '!*.min.css'], // Source files to minify
                    dest: 'dist/css', // Destination directory
                    ext: '.min.css' // Extension for minified files
                }]
            }
        },

        // Task for watching file changes
        watch: {
            scripts: {
                files: ['src/**/*.js'], // Files to watch
                tasks: ['uglify'], // Tasks to run on change
                options: {
                    spawn: false,
                },
            },
            css: {
                files: ['src/css/*.css'], // Files to watch
                tasks: ['cssmin'], // Tasks to run on change
                options: {
                    spawn: false,
                },
            },
        }
    });

    // Load the plugins
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s)
    grunt.registerTask('default', ['uglify', 'cssmin']);
};
