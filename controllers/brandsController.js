const {Router}=require('express')
const mongoose = require('mongoose')
const sunglassesModelsInfo=require('../models/sunglassesModelsInfo')
const brandsFilter=require('../helpers/brandsFilter')

const router=Router()

router.get('/:brand/:gender',async (req,res)=>{
    let data=await sunglassesModelsInfo.find().lean()
    let result=brandsFilter(data,req.params.brand,req.params.gender)
    res.json(result)
})




module.exports = router