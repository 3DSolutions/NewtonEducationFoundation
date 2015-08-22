﻿// CRUD API to handle events.
var express = require("express");
var mongojs = require("mongojs");

var eventsAPI = express();

// Database connection.
var db = {
    connection: mongojs(process.env.db_url),
    events: db.connection.collection("events")
};

db.connection.on("error", function (err) {
    console.log("Error connecting to database");
});

db.connection.on("ready", function () {
    console.log("Successfully connected to database.");
});

// CRUD actions for events.
eventsAPI.get("/events", function (req, res) { 
    // TODO: Query for all events.
    db.events.find(function (err, docs) {
        res.send(docs);
    });
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