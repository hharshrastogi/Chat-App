import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDb from "./DB/connectToMongoDb.js"
import { app, server } from "./socket/socket.js"

const PORT = process.env.PORT || 5000;

dotenv.config()


app.use(express.json()) // tp parse incoming requests with JSON payloads (from req.body)
app.use(cookieParser())
app.use("/api/auth",authRoutes)
app.use("/api/messages",messageRoutes)
app.use("/api/users",userRoutes)


// app.get('/',(req,res)=>{
//     res.send("server is ready")
// })

server.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server is running  on ${PORT}`)
})

