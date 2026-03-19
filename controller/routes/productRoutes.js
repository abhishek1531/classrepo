const express = require("express")
const router = express.Router()

const productController = require("../productController")

router.get("/products", productController.getProducts)
router.get("/products/price/:price", productController.filterByPrice)

module.exports = router