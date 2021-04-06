const {Router}=require('express')

const categoryBrandsController=require('./controllers/categoryBrandsController')
const bestsellerProductsController=require('./controllers/bestsellerProductsController')

const router=Router()

router.use('/categorybrands',categoryBrandsController)
router.use('/bestsellerproducts',bestsellerProductsController)

module.exports=router