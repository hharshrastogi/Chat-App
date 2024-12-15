import { createContext, useEffect, useState } from "react";
import { useAuthContext } from "./AuthContext";
import io from 'socket.io-client'
import { useContext } from "react";
export const SocketContext = createContext()

export const useSocketContext =() =>  {
    return useContext(SocketContext)
}

export const SocketContextProvider = ({children}) =>{

    const [socket,setSocket] = useState("")
    const [onlineUsers,setOnlineUsers]  = useState([])
    const {authUser} = useAuthContext()
    useEffect(()=>{
        if(authUser){
            const socket = io("http://localhost:5000",{
                query:{
                    userId:authUser._id,
                }
            })


            
            setSocket(socket)

            socket.on("getOnileUsers", (users) =>{
                setOnlineUsers(users)
            })

            return () => socket.close()
        }else{
            if(socket){
                socket.close()
                setSocket(null)
            }
        }

        
    },[authUser])
    return(
        <SocketContext.Provider value={{socket,onlineUsers}}>
            {children }
        </SocketContext.Provider>
    )
}