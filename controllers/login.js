const user=require('../database/schema')

const login=async(req,res)=>{
    const data=await user.findOne({
        where: {
            email:req.body.email
        }
    })

        if(data)
        {
            if(data.password==req.body.password)
            {
                res.send("User Login Successfully")
            }
            else{
                res.status(401).json({message:"user not authorized"})
            }
        }
        else{
            res.status(404).json({message:"user not found"})
        }


}


module.exports=login


