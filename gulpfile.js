var gulp = require('gulp'),
    sass = require('gulp-sass');

var loc = {
  scss: './app/scss/**/*.scss',
  dist: './dist'
}

gulp.task('sass', function(){
  return gulp.src(loc.scss)
          .pipe(sass().on('error', sass.logError))
          .pipe(gulp.dest(loc.dist));
});

gulp.task('watch', function(){
  gulp.watch(loc.scss, ['sass']);
})

gulp.task('default', ['watch']);
