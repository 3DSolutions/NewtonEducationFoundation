// All Mongoose DB models go here.
var mongoose = require("mongoose");
var schemas = require("./schemas.js");

var models = {};

models.Event = mongoose.model('Event', schemas.event);
models.NewsItem = mongoose.model('NewsItem', schemas.newsItem);

module.exports = models;