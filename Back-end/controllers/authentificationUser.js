const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const User = require("../models/User")

exports.login = (req, res, next) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user){
                return res.status(401).json({ error: "Utilisateur non trouvée !"})
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid){
                        return res.status(401).json({error :"Mot de passe incorrect"})
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            "RAMDOM_SECRET_TOKEN",
                            { expiresIn: "24h" }
                        )
                    });
                })
                .catch( error => res.status(500).json({ error}))
        })
        .catch( error => res.status(500).json({ error }))
}

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then( hash => {
            const user = new User({
                email: req.body.email,
                name: req.body.name,
                firstName: req.body.firstName,
                password: hash
            });

            user.save()
                .then(() => res.status(201).json({ message: "DONE"}))
                .catch( error => res.status(400).json({ error }))
        })
        .catch( error => res.status(500).json({ error }))
}