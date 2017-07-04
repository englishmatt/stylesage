"use strict";

/// <binding BeforeBuild='default' Clean='clean' ProjectOpened='default' />
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    svgmin = require("gulp-svgmin"),
    del = require("del"),

    // Paths
    basePath = "./wwwroot/",
    scssInput = basePath + "scss/**/*.scss",
    cssOutput = basePath + "css",
    svgInput = basePath + "assets/**/*.svg",
    imagesOutput = basePath + "images";

// CSS
gulp.task("css", function () {

    var cssInput = ["./node_modules/normalize.css/normalize.css"];

    return gulp.src(cssInput).pipe(gulp.dest(cssOutput));
});

gulp.task("clean:css", function () {
    del(cssOutput);
});

// SCSS
gulp.task("scss", function () {

    return gulp.src(scssInput)
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest(cssOutput));
});

// Images
gulp.task("clean:images", function () {
    del(imagesOutput);
});

// SVG
gulp.task("svg", function () {

    return gulp.src(svgInput)
        .pipe(svgmin())
        .pipe(gulp.dest(imagesOutput));
})

// General
gulp.task("default", ["css", "scss", "svg"]);
gulp.task("clean", ["clean:css", "clean:images"]);
