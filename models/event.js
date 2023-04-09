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

eventSchema.statics.isThisEmailInUse = async function(email) {
    if(!email) throw new Error('Invalid Email')
    try {
        const user =  await this.findOne({email})
        if(user) return false

        return true
    } catch (error) {
        console.log(error)
        return false
    }
    
}

module.exports = mongoose.model('Event', eventSchema)