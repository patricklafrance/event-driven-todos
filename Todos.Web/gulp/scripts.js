"use strict";

var gulp = require("gulp");
var browserify = require("browserify");
var remapify = require("remapify");
var source = require("vinyl-source-stream");

gulp.task("scripts", ["clean"], function() {
	browserify({
		entries: ["./Content/Js/App/application.js"],
		extensions: [".js"],
		debug: true
	})
    .plugin(remapify, [{
        src: "./**/*.js",
        expose: "",
        cwd: "./Content/Js/App"
    }])
	.bundle()
	.pipe(source("scripts.js"))
	.pipe(gulp.dest("./Content/Js"));
});