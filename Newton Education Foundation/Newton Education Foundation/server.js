// Main server file.
var express = require("express");
var bodyParser = require("body-parser");
var api = require("./api/events-api.js");

// Get port from environment variables or set it to 3000.
var port = process.env.port || 3000;

var app = express();
// Set up static files.
app.use(express.static("public"));
// Body parser.
app.use(bodyParser.urlencoded());
// Mount the API.
app.use(api);

// Route the index page.
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Donations
app.post("/donate", function (req, res) {
    // TODO: Handle payments for donations.
});

// Contact
app.post("/contact", function (req, res) { 
    // TODO: Send email.
});

app.listen(port);
