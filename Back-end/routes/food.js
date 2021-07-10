const express = require("express")
const router = express.Router()

const auth = require("../middleware/auth")
const checkerAdmin = require("../middleware/checkerAdmin")
const foodCtrl = require("../controllers/food")

router.post("/", auth, checkerAdmin, foodCtrl.create)
router.get("/", foodCtrl.getFoods)
router.get("/:id", foodCtrl.getFood)
router.put("/:id", foodCtrl.modifFood)
router.delete("/:id", foodCtrl.delete)

module.exports = router