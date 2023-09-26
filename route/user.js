const express=require('express')
const user=express.Router()
const {signup,createuser,login}=require('../controllers/user')

user.get('/signup',signup)
user.post('/createuser',createuser)
// user.get('/login',login)

module.exports=user