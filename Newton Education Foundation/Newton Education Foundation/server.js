// Main serve file.
var express = require("express");
var api = require("./api/events-api.js");

// Get port from environment variables or set it to 3000.
var port = process.env.port || 3000;

var app = express();
// Mount the API.
app.use(api);

// Route the index page.
app.get("/", function (req, res) {
    // res.send("./public/index.html");
    // Testing the gulpfile.
    res.send("hi");
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
