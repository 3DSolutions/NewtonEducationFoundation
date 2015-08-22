// Main server file.
var express = require("express");
var bodyParser = require("body-parser");
var events = require("./api/events-api.js");
// var payments = require("./api/payments.js");

// Get port from environment variables or set it to 3000.
var port = process.env.port || 3000;

var app = express();
// Set up static files.
app.use(express.static("public"));
// Body parser.
app.use(bodyParser.urlencoded());
// Mount the API's.
app.use("/api", events);
app.use("/api", payments);

// Route the index page.
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/public/index.html");
});

// Contact
app.post("/contact", function (req, res) { 
    // TODO: Send email.
});

app.listen(port);
