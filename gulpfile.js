const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

function styles() {
    return gulp.src('./src/styles/main.css')
        .pipe(postcss([
            tailwindcss(),
            autoprefixer(),
            cssnano()
        ]))
        .pipe(gulp.dest('./dist/css'));
}

exports.default = gulp.series(styles);
exports.watch = function watch() {
    gulp.watch(['./src/styles/main.css'], styles);
}