const mongoose=require('mongoose')

const bestsellerProduct=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    model:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true,
    }
})

module.exports=mongoose.model('bestsellerproduct',bestsellerProduct)