'use strict';

var config = require('../config'),
    gulp = require('gulp'),
    cp = require('child_process'),
    gulpif = require('gulp-if'),
    browserSync = require('browser-sync'),
    changed = require('gulp-changed');

/**
 * Task to build asciidoctor sildes
 */
gulp.task('asciidoc-build', function (cb) {
    var jekyllArgs = ['documents/slides.adoc', '-T', 'asciidoctor-deck.js/templates/haml', '-o','public/index.html'];

    return cp.spawn('asciidoctor', jekyllArgs, {stdio: 'inherit'}).on("close", cb);
});

gulp.task('asciidoc', ['asciidoc-build'], function () {
    return gulp.src('slides.adoc')
        .pipe(changed(config.asciidoc.src))
        .pipe(gulp.dest(config.dist.root))
        .pipe(gulpif(browserSync.active, browserSync.reload({stream: true})));
});
