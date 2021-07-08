const express = require("express")
const router = express.Router()
const authentificationCtrl = require("../controllers/authentificationUser")

router.post("/login", authentificationCtrl.login)
router.post("/signup",  authentificationCtrl.signup)

module.exports = router