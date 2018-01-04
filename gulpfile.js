var gulp = require("gulp");
var babel = require("gulp-babel");
var browserify  = require('gulp-browserify');
var sourcemaps  = require('gulp-sourcemaps');



gulp.task('js',function(){
  gulp.src('./src/js/app.js')
  .pipe(babel())
  //.pipe(browserify())
  .pipe(gulp.dest('./dist/js'))
  //.pipe(connect.reload());
});



gulp.task("js", function () {
  return gulp.src("src/js/app.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(browserify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist"));
});