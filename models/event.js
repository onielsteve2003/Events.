const mongoose = require('mongoose')

const eventSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    request: {
        type: String,
        required: true
    },
    phoneNum: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    }
}, { timestamps: true })

module.exports = mongoose.model('Event', eventSchema)