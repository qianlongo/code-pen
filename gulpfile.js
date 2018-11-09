var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Static server
gulp.task('default', function() {
    var files = [
    '**/*.html',
    'build/**/*.css'
    ];

    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});
