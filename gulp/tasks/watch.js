'use strict';

var config = require('../config');
var gulp = require('gulp');

gulp.task('watch', ['browserSync'], function () {
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.asciidoc.src, ['asciidoc']);
    gulp.watch([config.deck.src, config.ct.src], ['copy']);
});
