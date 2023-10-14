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
                    
                   res.render('userpage',{username:'data.username'})
                }
                else{
                    res.render('signin',{message:"user not authorized"})
                    }
            })
           
            
        }
        else
        {
         return   res.render('signin',{message:"user not found"})
        }


}


module.exports=login


