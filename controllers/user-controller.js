import User from "../model/user.js";


export const getAllUsers = async (req, res) => {
    let users;
    try{
   users = await User.find();

    }catch(err){
       console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "no user found!"})
    }
    return res.status(200).json({users})
    
}