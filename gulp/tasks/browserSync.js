'use strict';

var config = require('../config');
var browserSync = require('browser-sync');
var gulp = require('gulp');

gulp.task('browserSync', function () {
    browserSync.init({
        server: config.dist.root
    });
    gulp.watch(config.dist.deploy).on('change', browserSync.reload);
});
