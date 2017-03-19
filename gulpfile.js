'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var include = require('gulp-include');
var concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('sass', function(){
  return gulp.src('./resources/sass/*.scss')
    .pipe(sass({
      trace: true,
      verbose: true,
      outputStyle: 'compressed'
    }))
    .pipe(gulp.dest('./public/assets/css'));
});

gulp.task('javascript', function(){
  return gulp.src('./resources/javascript/*.js')
    .pipe(include())
    .pipe(minify())
    .pipe(gulp.dest('./public/assets/javascript'));
});

gulp.task('sass:watch', function(){
  gulp.watch('./resources/sass/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'javascript'], function(){
  console.log('Building project...');
});
