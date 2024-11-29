import jwt from "jsonwebtoken"
import User from "../models/user.model.js"

const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies.jwt
        if(!token){
            return res(401).json({error:"Unauthorized -- No token provided"})
        }

        const decode = jwt.verify(token,process.env.JWT_SECRET)

        if(!decode){
            return res(401).json({error:"Unauthorized --Invalid token"})
        }

        const user = await User.findById(decode.userId).select("-password")

        if(!user){
            return res(404).json({error:"User Not Found"})
        }

        req.user = user

        next()

    } 
    catch (error) {
        console.log("Error in protectRoute middleware")
        res.status(500).json({error:"Internal server error"})
    }
}

export default protectRoute