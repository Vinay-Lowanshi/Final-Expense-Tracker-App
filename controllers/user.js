const path = require('path'); // Import the 'path' module to work with file paths
const user=require('../database/schema')
const bcrypt=require('bcrypt')
const signup = (req, res) => {
    const filePath = path.join(__dirname, '../public/signup.html'); 
    res.sendFile(filePath);
};

const createuser=async(req,res)=>{
    const {firstname,lastname,email,mobile,password}=req.body;
    try{
        const user1= await user.findOne({where:{
            email:email
        }})
        console.log(user1)
        if(user1)
        {
            
            return  res.status(409).json("User already exist")
         
        }
        else{
            //         Hashing password using Bcrypt and storing it in database
            bcrypt.hash(password,10,async(err,hash)=>{
                await user.create(
                    {
                        // firstname:firstname,lastname:lastname,email:email,mobile:mobile,password:password}
                        firstname,lastname,email,mobile,password:hash}
                    
                )
                res.send("user created")
            })
            
           
        }
        }
        
    catch(err)
    {
        console.log(err)
    }
   
}

const signin=(req,res)=>{
    const filePath = path.join(__dirname, '../public/signin.html'); 
    res.sendFile(filePath);
}
module.exports = {signin,signup,createuser} // Corrected 'module.exports' statement
