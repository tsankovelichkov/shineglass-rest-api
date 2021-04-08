const mongoose=require('mongoose')

const sunglassesmodelsinfo=new mongoose.Schema({
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
    },
    price:{
        type:Number,
        required:true,
    }
})

module.exports=mongoose.model('sunglassesmodelsinfo',sunglassesmodelsinfo)