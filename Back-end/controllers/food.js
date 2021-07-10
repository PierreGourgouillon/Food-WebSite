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
    Food.find({})
        .then((foods) => {
            if (!foods){
                return res.status(401).json({ error: "Foods not found"})
            }
            res.status(201).json({ data: foods })
        })
        .catch( error => res.status(500).json({ error }))
}

exports.getFood = (req, res, next) => {
    Food.findById(req.params.id)
        .then((food) => {
            if (!food){
                return res.status(401).json({ error: "Food not found" })
            }
            res.status(201).json({ data: food })
        })
        .catch( error => res.status(500).json({ error }))
}

exports.modifFood = (req, res, next) => {
    Food.findOneAndUpdate(req.params.id, req.body, { new: true, useFindAndModify: false })
        .then((food)=> {
            if (!food){
                return res.status(401).json({ error: "Food not update" })
            }

            res.status(201).json({ data: food })
        })
        .catch( error => res.status(500).json({ error }))
}

exports.delete = (req, res, next) => {

}
