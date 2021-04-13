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


module.exports = {
    register,
}