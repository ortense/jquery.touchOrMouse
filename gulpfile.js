var gulp   = require('gulp'),
	pkg    = require('./package.json'),
	uglify = require('gulp-uglify'),
	jshint = require('gulp-jshint'),
	zip    = require('gulp-zip');
	files  = './source/**/*.js';

gulp.task('default', function(){
	gulp.src(files)
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify({
			outSourceMap: true
		}))
		.pipe(gulp.dest('./dist/'));
});

gulp.task('release', function () {
    gulp.src(['dist/*', 'README.md'])
        .pipe(zip( pkg.name + '.' + pkg.version + '.zip'))
        .pipe(gulp.dest('./release/'));
});