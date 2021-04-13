const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    purchases: [
        {
            type: mongoose.Types.ObjectId,
        }
    ]

})

module.exports = mongoose.model('User', userSchema)