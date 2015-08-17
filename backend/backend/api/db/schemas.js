// All Mongoose Schemas go here.
var mongoose = require("mongoose");

var applicationSchemas = {};

// Schema for events.
applicationSchemas.event = mongoose.Schema({
    title: String,
    date: Date,
    details: String
});

// Schema for news items.
applicationSchemas.newsItem = mongoose.Schema({
    title: String,
    date: Date,
    content: String
});

module.exports = applicationSchemas;