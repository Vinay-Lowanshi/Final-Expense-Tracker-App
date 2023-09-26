const sequelize=require('./database/connect')
const express=require('express')
const app=express()
const user=require('./route/user')
const bodyParser=require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'))
app.use('/user',user)

app.listen(8000,()=>{
    console.log("server is running")
})

sequelize.sync()
