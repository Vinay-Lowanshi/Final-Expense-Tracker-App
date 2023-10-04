const user=require('../database/schema')
const bcrypt=require('bcrypt')
const login=async(req,res)=>{
    const data=await user.findOne({
        where: {
            email:req.body.email
        }
    })

        if(data)
        {
            bcrypt.compare(req.body.password,data.password,(err,resp)=>{
                if(resp)
                // if(req.body.password==data.password)
                {
                   return res.send("User Login Successfully")
                }
                else{
                    return    res.status(401).json({message:"user not authorized"})
                    }
            })
           
            
        }
        else
        {
         return   res.status(404).json({message:"user not found"})
        }


}


module.exports=login


