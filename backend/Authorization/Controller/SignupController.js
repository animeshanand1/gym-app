const User = require('../Schema/userSchema');

const registerUser=async(req,res)=>{
    const {name,email,password}=req.body;
    try {
        const newUser=new User({name,email,password});
        await newUser.save();
        res.status(200).json({message:'User registered successfully',newUser});
    } catch (error) {
        res.status(500).json({message:'Failed to register user',error});
    }
}

module.exports={registerUser}