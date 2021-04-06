const mongoose=require('mongoose')

const categoryBrands=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength: 4
    },
    imageUrl:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('categorybrands',categoryBrands)