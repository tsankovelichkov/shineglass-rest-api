const mongoose=require('mongoose')
const config=require('./config')

module.exports=(app)=>{
    mongoose.connect(config.DB_CONNECTION,{useNewUrlParser: true,useUnifiedTopology:true})

    const db=mongoose.connection

    db.on('error',console.error.bind(console,'conncetion error:'))
    db.once('open',console.log.bind(console,'Connect Db'))

    mongoose.set('useNewUrlParser',true)
    mongoose.set('useFindAndModify',false)
    mongoose.set('useCreateIndex',true)
}