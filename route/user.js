const express=require('express')
const user=express.Router()
const {signup,createuser,signin}=require('../controllers/user')

user.get('/signup',signup)
user.post('/createuser',createuser)
user.get('/',signin)
// user.get('/login',login)

module.exports=user