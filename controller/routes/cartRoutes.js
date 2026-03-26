const express = require("express")
const router = express.Router()

const cartController = require("../cartController")

router.get("/cart", cartController.getCart)
router.post("/cart", cartController.addToCart)

module.exports = router