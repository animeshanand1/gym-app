const User = require('../Schema/userSchema');

const registerUser = async (req, res) => {
    const { email, password } = req.body;
   
    if (!email || !password || password!==req.body.confirmPassword) {
        return res.status(400).json({ message: 'Email and password are required' });
    }
    else {
        try {
            const existingUser = await User.findOne({email});
            if(existingUser){
                return res.status(400).json({ message: 'User already exists' });
            }
            const newUser = new User({ email, password });
            await newUser.save();
            return res.status(200).json({ message: 'User registered successfully', newUser });
        } catch (error) {
            return res.status(500).json({ message: 'Failed to register user', error: error.message });
        }
    }
}

const loginController=async(req,res)=>{
    const {email,password}=req.body;
    try {
        const isUser=await User.findOne({email})
        if(!isUser){
            return res.status(400).json({message:'User does not exist'})
        }
        if(isUser.password!==password){
            return res.status(400).json({message:'Invalid credentials'})
        }
        return res.status(200).json({message:'Login successful'})
    } catch (error) {
        res.status(500).json({message:'Login failed',error:error.message})
    }
}

module.exports = { registerUser,loginController }