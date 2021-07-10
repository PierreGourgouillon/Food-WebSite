
const User = require("../models/User")

module.exports = (req, res, next) => {
    User.findOne({ _id: req.userId })
        .then((user) => {
            if (!user){
                return res.status(401).json({ error: "Utilisateur non trouvée !"})
            }else if (!user.admin){
                return res.status(401).json({ error: "Unauthorized"})
            }else{
                next()
            }
        })
        .catch( error => res.status(500).json({ error }))
}