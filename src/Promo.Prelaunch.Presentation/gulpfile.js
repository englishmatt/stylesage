/// <binding BeforeBuild='default' Clean='clean' ProjectOpened='default' />
var gulp = require("gulp"),
    sass = require("gulp-sass"),
    sourcemaps = require("gulp-sourcemaps"),
    del = require("del"),

    // Paths
    basePath = "./wwwroot/",
    scssInput = basePath + "scss/**/*.scss";
    cssOutput = basePath + "css";

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

// General
gulp.task("default", ["css", "scss"]);
gulp.task("clean", ["clean:css"]);