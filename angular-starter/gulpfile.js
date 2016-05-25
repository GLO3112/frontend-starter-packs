var config = require('./webpack.config.js');
var gulp = require('gulp');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');

gulp.task('ts', function() {
    return gulp.src('src/Index.ts')
        .pipe(webpack(config))
        .pipe(gulp.dest('.'));
});

gulp.task('sass', function() {
    return gulp.src('./scss/app.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(rename('app.css'))
        .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function() {
    gulp.watch(['./**/*.ts', './**/*.tsx'], ['ts']);
    gulp.watch(['./**/*.scss'], ['sass']);
});

gulp.task('default', ['ts', 'sass'], function() {});