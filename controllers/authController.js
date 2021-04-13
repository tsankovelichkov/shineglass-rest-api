const {Router}=require('express')
const authService=require('../services/authService')

const router=Router()

router.post("/register",(req,res)=>{
    let {email,password,firstName,lastName}=req.body
    console.log(lastName)
     authService.register({email,password,firstName,lastName})
        .then(user=>res.json(user))
})








module.exports = router