var gulp = require("gulp");
var jshint = require("gulp-jshint");

gulp.task("jshint", function(){
    gulp.src(["./gulp/**/*.js", "./Content/Js/App/**/*.js", "gulpfile.js"])
        .pipe(jshint())
        .pipe(jshint.reporter("jshint-stylish"));
});