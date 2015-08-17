var mongoose = require("mongoose");
var models = require("./models.js");


var db = {};
/*
 * Here we get all the connection attributes
 * such as database connection info and such
 * from the environment variables. This way 
 * is much more secure than hard coding the
 * connection properties and makes the 
 * application alot more dynamic.
 */
var dbURL = process.env.DB_URL;

mongoose.connect(dbURL);

db.connection = mongoose.connection;

db.connection.on("error", function () {
    // TODO: Extract and report error.
    console.error("Error connecting to database");
});

db.connection.once("open", function () {
    console.log("Database opened.");
});

module.exports = db;