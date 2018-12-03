const mongoose = require('mongoose')

// connect to our database
mongoose.connect('***REMOVED***', { useNewUrlParser: true});

module.exports = { mongoose }