const {Router}=require('express')

const categoryBrandsController=require('./controllers/categoryBrandsController')
const bestsellerProductsController=require('./controllers/bestsellerProductsController')
const brandsController=require('./controllers/brandsController')
const authController=require('./controllers/authController')


const router=Router()

router.use('/categorybrands',categoryBrandsController)
router.use('/bestsellerproducts',bestsellerProductsController)
router.use('/brands',brandsController)
router.use('/auth',authController)


module.exports=router