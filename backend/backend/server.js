var express = require("express");
var api = require("./api/api.js");

var app = express();

// Mount the API.
app.use(api);

// Route the index file.
app.get("/", function (req, res) {
    // TODO: Send the HTML file down.
});

app.get("*", function (req, res) {
    // TODO: Send the 404 page.
    res.send("Sorry, but the required URL " + req.path + " could not be located");
});

app.listen(3000);