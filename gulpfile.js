'use strict';
 
var gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	browserSync = require('browser-sync'),
	reload = browserSync.reload;
	
gulp.task('js', function() {
	gulp.src(['./src/js/**/*.js'])
		.pipe(concat('support-hr2058.min.js'))
		.on('error', function(err) {
			console.log(err);
		})
		.pipe(uglify())
		.on('error', function(err) {
			console.log(err);
		})
		.pipe(gulp.dest('./dist/js'))
		.pipe(reload({stream: true}));
});

gulp.task('watch', function() {
	// Watch for JavaScript Changes
	gulp.watch('./src/js/**/*.js', ['js']);
});

gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: './'
		}
	});
});

gulp.task('default', function() {
	gulp.start('watch','browser-sync');
});

gulp.task('compile', function() {
	// gulp.start('css', 'js-dist', 'js-test');
	gulp.start('js');
});