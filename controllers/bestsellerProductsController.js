const {Router}=require('express')
const mongoose = require('mongoose')
const bestsellerProduct=require('../models/bestsellerProduct')

const router=Router()

router.get('/',async (req,res)=>{
    let data= await bestsellerProduct.find().lean()
    res.json(data)
})




module.exports = router