//Creating JWT

import jwt from "jsonwebtoken"

const generateTokensAndSetCookies = (userId,res) =>{

    console.log("Generating tokens for user:", userId);
    const token =jwt.sign({userId},process.env.JWT_SECRET,{
        expiresIn: '15d',
    })

    res.cookie("jwt",token,{
        maxAge: 7*24*60*60*1000,
        httpOnly: true, // prevent XSS Attacks
        sameSite:"strict",// CRSF Attacks
        secure: process.env.NODE_ENV !== "development",
    })
}

export default generateTokensAndSetCookies