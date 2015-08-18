var express = require("express");
var api = require("./api/api.js");

var app = express();

// Mount the API.
app.use(api);

// Route the index file.
app.get("/", function (req, res) {
    // TODO: Send the HTML file down.
});

// Donation action.
app.post("/donate", function (req, res) {
    // TODO: Write code to handle donations.
});

// Handle email messaging.
app.post("/message", function (req, res) {
    // TODO: Handle code to email a message.
});

app.get("*", function (req, res) {
    // TODO: Send the 404 page.
    res.send("Sorry, but the required URL " + req.path + " could not be located");
});

app.listen(3000);