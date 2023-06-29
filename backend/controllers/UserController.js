const UserRegister=async(req,res)=>{
    if(!req.body.email){
       res.status(400)
       throw new Error("Please add an email")
    }
}

module.exports={
    UserRegister
}