const gulp = require('gulp');
const postcss = require('gulp-postcss');
const tailwindcss = require('@tailwindcss/postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin'); // Adicione esta linha

function styles() {
    return gulp.src('./src/styles/main.css')
        .pipe(postcss([
            tailwindcss(),
            autoprefixer(),
            cssnano()
        ]))
        .pipe(gulp.dest('./dist/css'));
}

function html() {
    return gulp.src('./src/*.html')
        .pipe(gulp.dest('./dist'));
}

function components() {
    return gulp.src('./src/components/*.html')
        .pipe(gulp.dest('./dist/components'));
}

function scripts() {
    return gulp.src('./src/scripts/**/*.js')
        .pipe(terser())
        .pipe(gulp.dest('./dist/scripts'));
}

function images() {
    return gulp.src('./src/images/**/*')
        .pipe(imagemin()) // Adicione este pipe
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.series(gulp.parallel(styles, html, components, scripts, images));
exports.watch = function watch() {
    gulp.watch('./src/styles/**/*.css', styles);
    gulp.watch('./src/*.html', html);
    gulp.watch('./src/components/*.html', components);
    gulp.watch('./src/scripts/**/*.js', scripts);
    gulp.watch('./src/images/**/*', images);
}