const express=require('express')
const user=express.Router()
const {signup,createuser,signin}=require('../controllers/user')
const login=require('../controllers/login')
user.get('/signup',signup)
user.post('/createuser',createuser)
user.get('/',signin)
user.post('/login',login)
// user.get('/login',login)

module.exports=user