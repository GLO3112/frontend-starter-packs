var gulp = require('gulp');
var webpack = require('webpack-stream');
var config = require('./webpack.config.js');

gulp.task('ts', function() {
    return gulp.src('src/Index.tsx')
        .pipe(webpack(config))
        .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['ts'], function() {});