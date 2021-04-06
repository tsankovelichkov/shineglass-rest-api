const {Router}=require('express')
const mongoose = require('mongoose')
const categoryBrands=require('../models/categoryBrands')

const router=Router()

router.get('/',async (req,res)=>{
    let data= await categoryBrands.find().lean()
    res.json(data)
})


module.exports = router
