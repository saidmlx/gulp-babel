
var gulp    = require("gulp");
var browserify  = require('browserify');
var sourcemaps  = require('gulp-sourcemaps');
var connect     = require('gulp-connect');
var babelify        = require('babelify');
var source = require("vinyl-source-stream")
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var log = require('gulplog');


gulp.task('js', function () {
  return browserify({entries: './src/js/app.js', debug: true })
  .transform(babelify)
  .bundle()
    .pipe(source('app.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .on('error', log.error)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./dist/js/'));
});


gulp.task('html', function(){
  gulp.src('./src/html/**.html')
  .pipe(gulp.dest('./dist'))
  .pipe(connect.reload());
});


gulp.task('connect', function() {
    connect.server({
    root: './dist',
    livereload: true,
    port:4848,
  })
});


gulp.task('watch', function () {
  //gulp.watch(['./src/scss/**/**.scss'], ['sass','sass-precalif']);
  gulp.watch(['./src/js/**/**.js'], ['js']);
  gulp.watch(['./src/html/**.html'], ['html']);
});

gulp.task('default',['js','html','watch','connect',]);