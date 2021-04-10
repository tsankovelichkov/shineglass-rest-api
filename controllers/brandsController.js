const {Router}=require('express')
const mongoose = require('mongoose')
const SunglassesModelsInfo=require('../models/sunglassesModelsInfo')
const brandsFilter=require('../helpers/brandsFilter')

const router=Router()

router.get("/details/:id",async (req,res)=>{
    let data=await SunglassesModelsInfo.findById(req.params.id).lean()
    res.json(data)
})


router.get('/:brand/:gender',async (req,res)=>{
    let data=await SunglassesModelsInfo.find().lean()
    let result=brandsFilter(data,req.params.brand,req.params.gender)
    res.json(result)
})






module.exports = router