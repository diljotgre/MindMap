const UserService=require("../services/user.services");

exports.register = async(req,res,next)=>{
    try{
        const {email,password}= req.body; //getting data from the server and then passing it to services for the data to be entered into the db

        const  successRes = await UserService.registerUser(email,password);

        res.json({status:true,success:"User registered successfully" });
    }catch(error){
        throw error
    }
}