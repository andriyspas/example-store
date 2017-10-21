'use strict';

let gulp = require('gulp');
let sass = require('gulp-sass');
let svgSprite = require("gulp-svg-sprites");


gulp.task('styles', function () {
    return gulp.src('./src/components/index.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public'));
});

gulp.task('styles-watch', function () {
    gulp.watch('./src/**/*.scss', ['styles']);
});

gulp.task('sprites', function () {
    return gulp.src('./src/assets/svg/*.svg')
        .pipe(svgSprite({
            preview: false,
            selector: "icon-%f",
            baseSize: 16,
            cssFile: "sprite.css",
        }))
        .pipe(gulp.dest("./public"));
});

gulp.task('default', ['styles', 'sprites', 'styles-watch']);