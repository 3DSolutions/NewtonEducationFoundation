var rek = {}
rek.plebs = function() {
  console.log("rekt");
}

var crasher = function() {
  while (true) {
    rek.plebs();
  }
}

// no no no! use objects and prototypes
var rek = function() {}

rek.prototype.plebs = function () {
  console.log("rekt");
}

var crasher = function () {
  while (true) {
    new rek.plebs();
  }
}

// ok now update the legit frontend.
