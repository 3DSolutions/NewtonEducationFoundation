// CRUD API to handle events.
var express = require("express");
var db = require("../db/db.js");

var eventsAPI = express();

// CRUD actions for events.
eventsAPI.get("/events", function (req, res) { 
    // TODO: Query for events.
});

eventsAPI.post("/events", function (req, res) {
    // TODO: Create new event.
});

eventsAPI.put("/events", function (req, res) {
    // TODO: Update event.
});

eventsAPI.delete("/events", function (req, res) {
    // TODO: Remove event.
});

module.exports = eventsAPI;