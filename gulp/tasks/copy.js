'use strict';

var config = require('../config');
var changed = require('gulp-changed');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var browserSync = require('browser-sync');

gulp.task('copy-deck-dependencies', function () {
    return gulp.src(config.deck.src)
        .pipe(changed(config.deck.dest))
        .pipe(gulp.dest(config.deck.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));
});

gulp.task('copy-deck-addons', function () {
    return gulp.src(config.deck_addons.src)
        .pipe(changed(config.deck_addons.dest))
        .pipe(gulp.dest(config.deck_addons.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));
});

gulp.task('copy-ct-custom', function () {
    return gulp.src(config.ct.src)
        .pipe(changed(config.ct.dest))
        .pipe(gulp.dest(config.ct.dest))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true, once: true})));
});

gulp.task('copy', ['copy-deck-dependencies', 'copy-deck-addons', 'copy-ct-custom'], function () {
    return gulp;
});
