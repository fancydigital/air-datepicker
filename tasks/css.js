var gulp = require('gulp'),
    rename = require('gulp-rename'),
    less = require('gulp-less'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer')({ browsers: ['last 2 versions'] }),
    clone = require('gulp-clone'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat');

module.exports = function () {
    var stream = gulp.src('src/less/*.scss')
        .pipe(concat('datepicker.scss'))
        .pipe(less())
        .pipe(postcss([autoprefixer]));

    stream.pipe(clone())
        .pipe(minify())
        .pipe(rename('datepicker.min.css'))
        .pipe(gulp.dest('dist/css'));

    stream.pipe(clone())
        .pipe(rename('datepicker.css'))
        .pipe(gulp.dest('dist/css'))
};