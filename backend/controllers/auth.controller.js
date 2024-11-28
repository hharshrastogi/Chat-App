export const login = (req,res) =>{
    res.send("LOGIN PAGE")
    console.log("Login ")
}

export const logout =(req,res) =>{
    res.send("Logout PAGE")
    console.log("Logout ")
}

export const signup = async (req,res) =>{
   try{
    const {}=req.body 
   }
   catch(error){

   }
}