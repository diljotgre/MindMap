
//so the services folder is working directly with the database
const userModel = require("../models/user")

class UserService{
    static async registerUser(email,password){
        try{
            const createUser = new userModel({email,password});
            return await createUser.save();

        }catch(err){
            throw err;
        }
    }

}
module.exports = UserService;