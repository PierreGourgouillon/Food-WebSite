const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")

const foodSchema = mongoose.Schema({
    name: { type: String, required: true },
    restaurant: { type: String, required: true },
    categories: [{ type: String, required: true }],
    image: { type: String, required: true },
    stars: Number,
    description: { type: String, required: true },
    price: { type: Number, required: true },
    hidden: { type: Boolean, default: false },
    isSold: { type: Boolean, default: false },
    sold: {
        newPrice: { type: Number },
    }
})
foodSchema.plugin(uniqueValidator)
module.exports = mongoose.model('Food', foodSchema)