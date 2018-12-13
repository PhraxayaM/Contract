const mongoose = require('mongoose');

const Charity = mongoose.model('Charity', {
    user: String,
    donation: String,
    date: { type: Date, default: Date.now }
})

module.exports = Charity

// // create charity models
