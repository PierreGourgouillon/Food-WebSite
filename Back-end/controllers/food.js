const Food = require("../models/Food")


exports.create = (req, res, next) => {
    const food = new Food({
        ...req.body
    })

    food.save()
        .then(()=>{
            res.status(201).json({ message: "Food is create" })
        })
        .catch((error) => {
            res.status(400).json({ error })
        })
}

exports.getFoods = (req, res, next) => {

}

exports.getFood = (req, res, next) => {

}

exports.modifFood = (req, res, next) => {

}

exports.delete = (req, res, next) => {

}
