const mongoose = require("mongoose")

// set your own URI OR set localhost db URI
const DB_URI = "mongodb+srv://admin:admin@cluster0.coaj6kc.mongodb.net/assignment3b?retryWrites=true&w=majority"

module.exports = mongoose.connect(DB_URI)  // exporting promise