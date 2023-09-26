const path = require('path'); // Import the 'path' module to work with file paths
const user=require('../database/schema')
const signup = (req, res) => {
    const filePath = path.join(__dirname, '../public/signup.html'); // Replace 'path-to-signup.html' with the actual path to your HTML file
    res.sendFile(filePath);
};

const createuser=async(req,res)=>{
    const {firstname,lastname,email,mobile,password}=req.body;
    try{
        await user.create(
            {
                // firstname:firstname,lastname:lastname,email:email,mobile:mobile,password:password}
                firstname,lastname,email,mobile,password}
            
        )
        res.send("user created")
    }
    catch(err)
    {
        console.log(err)
    }
   
}

module.exports = {signup,createuser} // Corrected 'module.exports' statement
