var gulp = require('gulp'),
    sass = require('gulp-sass');

gulp.task('sass', function(){
  return gulp.src('./app/scss/styles.scss')
          .pipe(sass())
          .pipe(gulp.dest('app/dest'));
});

gulp.task('watch', function(){
  gulp.watch('./app/scss/**/*.scss', ['sass']);
})

gulp.task('default', ['watch']);
