module.exports = function (grunt) {
    grunt.registerTask('speak', function () {
        console.log('speak');
    });
    grunt.registerTask('yell', function () {
        console.log('yell');
    });
    grunt.registerTask('default', function () {
        console.log('dafault');
    });
    grunt.registerTask('start', ['concat', 'watch', 'cssmin']);
    // Project configuration.
    grunt.initConfig({
        concat: {
            js: {
                src: ['scripts/app.js', 'scripts/card.controller.js', 'scripts/script.js', 'scripts/**/*.js']
                , dest: 'dist/js/built.js'
            , }
            , css: {
                src: ['stylesheet/style.css']
                , dest: 'dist/css/built.css'
            , }
        }
        , watch: {
            js: {
                files: ['scripts/**/*.js']
                , tasks: ['concat:js']
            , }
            , css: {
                files: ['stylesheet/**/*.css']
                , tasks: ['concat:css', 'cssmin']
            , }
        }
        , cssmin: {
            target: {
                files: [{
                    expand: true
                    , cwd: 'dist/css'
                    , src: ['*.css', '!*.min.css']
                    , dest: 'dist/css'
                    , ext: '.min.css'
    }]
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
}