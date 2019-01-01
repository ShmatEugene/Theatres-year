var gulp = require('gulp');
var concatCss = require('gulp-concat-css'),
    order = require('gulp-order'),
    autoprefixer = require('gulp-autoprefixer'),
    cleanCSS = require('gulp-clean-css');



//css
gulp.task('css', function () {
  return gulp.src('css/*.css')
    .pipe(order([
      "reset.css",
      "style.css",
      "*.css",
      "responsive.css"
    ]))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(concatCss("styles/bundle.min.css"))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('app/'))
});

gulp.task('watch', function() {
  gulp.watch("css/*.css", gulp.series('css'))
})
