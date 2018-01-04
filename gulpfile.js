var gulp    = require("gulp");
var babel   = require("gulp-babel");
var browserify  = require('gulp-browserify');
var sourcemaps  = require('gulp-sourcemaps');
var connect     = require('gulp-connect');




gulp.task('connect', function() {
    connect.server({
    root: './dist',
    livereload: true,
    port:4848,
  })
});

gulp.task('js', function () {
  return gulp.src("src/js/app.js")
    .pipe(sourcemaps.init())
    .pipe(babel())
    //.pipe(browserify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("./dist/js"))
    .pipe(connect.reload());
});

gulp.task('html', function(){
  gulp.src('./src/html/**.html')
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});


gulp.task('watch', function () {
  //gulp.watch(['./src/scss/**/**.scss'], ['sass','sass-precalif']);
  gulp.watch(['./src/js/**/**.js'], ['js']);
  gulp.watch(['./src/html/**.html'], ['html']);
});

gulp.task('default',['js','html','watch','connect',]);