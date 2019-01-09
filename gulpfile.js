var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// compile scss
gulp.task('sass', function () {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist/css/'));
});

// copyHtml file

gulp.task('copyHtml', function () {
    return gulp.src(['src/*.html', 'src/**/images/*.*'])
        .pipe(gulp.dest('dist/'));

});

gulp.task('default', gulp.series('copyHtml', 'sass'));