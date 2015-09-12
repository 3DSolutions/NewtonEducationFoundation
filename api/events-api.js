// CRUD API to handle events.
var express = require("express");
var mongojs = require("mongojs");

var eventsAPI = express();

// Database connection properties.
var host = process.env.db_host || "localhost";
var port = process.env.db_port || "27017";
var user = process.env.db_user || "admin";
var password = process.env.db_pass || "admin";

// Lets put it together.
var connectionString = "mongodb://" + user + ":" + password + "@" + host + ":" + port + "/events";

// Database object.
var db = mongojs(connectionString, ["events"]);

db.on("error", function (err) {
    console.log("Error connecting to database");
});

db.on("ready", function () {
    console.log("Successfully connected to database.");
});

// CRUD actions for events.
eventsAPI.get("/events", function (req, res) {
    /*db.events.find(function (err, docs) {
        if(!err) {
            res.send(docs);
        } else {
            res.send(err);
        }
    });*/
   
    // We need a temporary response. 
    var tempRes = {
        events: [
        ]
    };
    
    res.send(JSON.stringify(tempRes));
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

// If you want to do this differently you can.
// Flat file storage for this is okay for now.
eventsAPI.get("/bio", function(req, res){
	res.sendFile(__dirname + "/data/bio.json");
});

module.exports = eventsAPI;
