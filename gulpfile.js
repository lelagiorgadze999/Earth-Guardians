const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("assets/styles/scss/global.scss")
    .pipe(sass())
    .pipe(dest("assets/styles/css"));
}

function watchTask() {
  watch(["assets/styles/scss/global.scss"], buildStyles);
}
exports.default = series(buildStyles, watchTask);
