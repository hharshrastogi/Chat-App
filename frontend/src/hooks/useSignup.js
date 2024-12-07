import React, { useState } from 'react'
import toast from 'react-hot-toast'

const useSignup = () => {
  const [loading,setLoading] = useState(false)

  const signup = async({fullName , username, password, confirmPasssword, gender}) =>{
   const success = handleInputErrors({fullName , username, password, confirmPasssword, gender})
    if(!success) return

    setLoading(true)
    try {
            const res = await fetch("http://localhost:5000/api/auth/signup",
                {
                    method: "POST",
                    headers:{"Content-Type":"application/json"},
                    body: JSON.stringify({fullName , username, password, confirmPasssword, gender})
                }
            )

            const data = await res.json();
            console.log(data)
    } catch (error) {
        toast.error(error.message)
    }finally{
        setLoading(false)
    }

    return {loading,signup}
}
}

export default useSignup

function handleInputErrors({fullName , username, password, confirmPasssword, gender}){
    if(!username || !fullName || !password || !confirmPasssword || !gender){
        toast.error("Please fill all the fields")
        return false
    }

    if(password !== confirmPasssword){
         toast.error("Passwords do not match")
         return false
    }
    
    if(password.length < 6){
        toast.error("passwords must be of lentgh 6")
        return false
    }

    return true
}