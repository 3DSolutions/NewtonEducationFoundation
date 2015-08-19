var gulp = require("gulp");
var spawn = require("child_process").spawn;

gulp.task("run", function () {
    spawn("node", ["server.js"]);
});

gulp.task("test", function () {
    spawn("mocha", ["./test/tests.js"]);
});

// TODO: Write more tasks.