const express=require('express')
const user=express.Router()
const {signup,createuser}=require('../controllers/user')
const login=require('../controllers/login')
const loggedin=require('../controllers/loggedin')
user.get('/signup',signup)
user.post('/createuser',createuser)
user.get('/',(req,res)=>{
    res.render('signin')
})
user.post('/login',login)
user.get('/userpage',loggedin)
// user.get('/login',login)

module.exports=user