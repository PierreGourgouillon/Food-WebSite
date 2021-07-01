const express = require("express")
const router = express.Router()
const authentificationCtrl = require("../controllers/authentificationUser")
const auth = require("../middleware/auth")

router.post("/login", auth, authentificationCtrl.login)
router.post("/signup", auth, authentificationCtrl.signup)

module.exports = router