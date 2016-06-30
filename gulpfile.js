const gulp = require('gulp');
const batch = require('gulp-batch');
const watch = require('gulp-watch');
const jade = require('gulp-jade');
const vulcanize = require('gulp-vulcanize');

gulp.task('jade', function () {
    return gulp.src('./components/*.jade')
        .pipe(jade())
        .pipe(gulp.dest('build/compiled-jade'));
});

gulp.task('vulcanize', ['jade'], function () {
    return gulp.src('/build/compiled-jade/graduando-quest.html')
        .pipe(vulcanize({
            abspath: '.',
        }))
        .on('error', function (err) {
            console.log(err);
        })
        .pipe(gulp.dest('build'));
});

gulp.task('watch', function () {
    watch('./components/*.jade', batch(function (events, done) {
        gulp.start('vulcanize');
    }));
});

gulp.task('default', ['vulcanize']);
