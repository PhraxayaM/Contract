const mongoose = require('mongoose');

const Donation = mongoose.model('Donation', {
    user: String,
    donation: String,
    charity: String,
    date: { type: Date, default: Date.now }
})

module.exports = Donation

// create charity models
