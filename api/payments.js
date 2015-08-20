// API for handling payments.
var express = require("express");
var braintree = require("braintree");

var paymentsAPI = express();

// Connect to Braintree.
// Use environment variables
// For security reasons.
var gateway = braintree.connect({
    // TODO: Configure between production and testing environments.
    envrionment: braintree.Environment.Sandbox,
    merchantId: process.env.braintree_merchant_id,
    publicKey: process.env.braintree_public_key,
    privateKey: process.env.braintree_private_key
});

// Generate a token for the client.
paymentsAPI.get("/client-token", function (req, res) {
    gateway.clientToken.generate({}, function (error, response) {
        if (error) {
            res.status(500).send("Unexpected error: " + error.toString());
        } else {
            res.send(response.clientToken);
        }
    });
});

// TODO: Handle rest of transaction.