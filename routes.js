const {Router}=require('express')

const categoryBrandsController=require('./controllers/categoryBrandsController')
const bestsellerProductsController=require('./controllers/bestsellerProductsController')
const brandsController=require('./controllers/brandsController')

const router=Router()

router.use('/categorybrands',categoryBrandsController)
router.use('/bestsellerproducts',bestsellerProductsController)
router.use('/brands',brandsController)

module.exports=router