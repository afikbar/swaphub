const mongoose = require('mongoose')
const config = require('../config')

// connect to our database
mongoose.connect(config.mLabURL, { useNewUrlParser: true});

module.exports = { mongoose }