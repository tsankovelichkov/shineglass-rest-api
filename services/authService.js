const bcrypt = require("bcrypt")
const User = require('../models/User')
const config = require('../config/config')
const jwt=require('jsonwebtoken')

const register = async ({email,password,firstName,lastName}) => {
    let salt = await bcrypt.genSalt(config.SALT_ROUNDS)
    let hash = await bcrypt.hash(password, salt)
    const user = new User({ email, password: hash,firstName,lastName })
    return await user.save()
}

const login=async ({email,password})=>{
    let user=await User.findOne({email})
    if(!user) throw console.log('Problem username')

    let isMatch=await bcrypt.compare(password,user.password)
    if(!isMatch) throw console.log('Problem password')

    let token = jwt.sign({
        _id:user._id,
        email:user.email,
        firstName:user.firstName,
        lastName:user.lastName
    },config.SECRET)

    return token
}


module.exports = {
    register,
    login
}