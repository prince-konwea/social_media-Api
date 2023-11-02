import User from "../model/user.js";


export const getAllUsers = async (req, res) => {
    let users;
    try{
   users = await User.find();

    }catch(err){
       return  console.log(err);
    }
    if(!users){
        return res.status(404).json({message: "no user found!"})
    }
    return res.status(200).json({users})
    
}

export const signup = async (req, res) => {
    const { name, email, password} = req.body;
    let existingUser;
    try{
        existingUser = await User.findOne({email})
    }catch(err){
       return  console.log(err)
    }
    if(existingUser){
        return res.status(400).json({message: "User already exists"})
    }
    const user = new User({
        name,
        email,
        password,
    })
    try{
        await user.save()
        return res.status(201).json({user})
    }catch(err){
      return console.log(err)
    }
}