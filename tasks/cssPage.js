var gulp = require('gulp'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer')({ browsers: ['last 2 versions'] }),
    clone = require('gulp-clone'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat');

module.exports = function () {
    gulp.src('docs/less/init.scss')
        .pipe(concat('style.css'))
        .pipe(less())
        .pipe(postcss([autoprefixer]))
        .pipe(minify())
        .pipe(gulp.dest('docs/css'))
};