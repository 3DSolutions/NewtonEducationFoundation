var express = require("express");

// NOTE: Depending on how things work, I may merge 
// some database funcionality to this file.
var db = require("./db/db.js");

var api = express();

// TODO: Build the API and define methods.

// CRUD actions for events.
// GET
app.get("/events", function (req, res) {
    // TODO: Handle GET.
});

// POST
app.post("/events", function (req, res) {
    // TODO: Create new event.
});

// PUT
app.put("/events", function (req, res) {
    // TODO: Update event.
});

// DELETE
app.delete("events", function (req, res) {
    // TODO: Remove event.
});

// CRUD actions for news items.
// GET
app.get("/news", function (req, res) {
    // TODO: Get news item(s).
});

app.post("/news", function (req, res) {
    // TODO: Create news item.
});

app.put("/news", function (req, res) {
    // TODO: Update news item.
});

app.delete("/news", function (req, res) {
    // TODO: Delete news item.
});

module.exports = api;