
import User from "../models/user.model.js"
import bcrypt from "bcryptjs"

export const signup = async (req,res) =>{
    try{
        const { fullName, username, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ username });

		if (user) {
			return res.status(400).json({ error: "Username already exists" });
		}

		// HASH PASSWORD HERE
		const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt)

		// https://avatar-placeholder.iran.liara.run/

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

		const newUser = new User({
			fullName,
			username,
			password:hashedPassword,
			gender,
			profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
		});

     

     if(newUser){
        await newUser.save()

        res.status(201).json({
            _id:newUser._id,
            userName:newUser.userName,
            password:newUser.password,
            fullName:newUser.fullName,
            gender:newUser.gender,
            profilepic:newUser.profilepic,
         })
     }
     else{
        res.status(400).json({error:"Invalid user data"})
     }
    }
    catch(error){
        console.log("Error in signup controller ",error.message)
        res.status(500).json({error:"Internal Server error"})
        
    }
 }
export const login = (req,res) =>{
    res.send("LOGIN PAGE")
    console.log("Login ")
}

export const logout =(req,res) =>{
    res.send("Logout PAGE")
    console.log("Logout ")
}

