'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function (cb) {
    cb = cb || function () {
        };
    var buildTasks = ['asciidoc', 'images', 'copy'];
    runSequence(buildTasks, cb);
});
