# gulp-browserify-babel
App template for  gulp, browserify, babel and uglify - with sourcemaps

var gulp = require("gulp");
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var uglify = require('gulp-uglify');
var sourcemaps=require('gulp-sourcemaps');

gulp.task('build', function() { return compile(); });
function compile()
{
    return browserify({entries: './src/main.js', debug: true})
        .transform(babelify, { presets: ["env"] })
        .bundle()
        .pipe(source('app.js'))
        .pipe(buffer())
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify())
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build'));
}
