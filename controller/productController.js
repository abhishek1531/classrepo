const products = [
    { id:1, name:"phone", price:10000 },
    { id:2, name:"laptop", price:50000 },
    { id:3, name:"tablet", price:20000 }
]

const getProducts = (req,res)=>{
    res.json(products)
}

const filterByPrice = (req,res)=>{
    const price = req.params.price
    const result = products.filter(p => p.price <= price)
    res.json(result)
}

module.exports = {
    getProducts,
    filterByPrice
}