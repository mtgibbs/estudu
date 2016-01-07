var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsd = require('gulp-tsd');

gulp.task('build', function () {
    return gulp.src('js/**/*.ts').pipe(ts());
});

gulp.task('tsd', function (done) {
    tsd({
        command: 'reinstall',
        config: './tsd.json'
    }, done);
});

