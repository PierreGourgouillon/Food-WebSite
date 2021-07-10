const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    firstName: { type: String, required: true },
    password: { type: String, required: true },
    otherInformation: {
        address: { type: String, required: false },
        phone: { type: String, required: false  },
    },
    admin: { type: Boolean, default: false }
})

userSchema.plugin(uniqueValidator)
module.exports = mongoose.model('User', userSchema)