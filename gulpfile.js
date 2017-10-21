'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');

gulp.task('styles', function () {
    return gulp.src('./src/components/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./src'));
});

gulp.task('default', ['styles']);