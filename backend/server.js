import express from "express"
import dotenv from "dotenv"
import authRoutes from "./routes/auth.routes.js"
import connectToMongoDb from "./DB/connectToMongoDb.js"
const app = express()
const PORT = process.env.PORT || 5000;

dotenv.config()


app.use(express.json()) // tp parse incoming requests with JSON payloads (from req.body)
app.use("/api/auth",authRoutes)

// app.get('/',(req,res)=>{
//     res.send("server is ready")
// })

app.listen(PORT,()=>{
    connectToMongoDb()
    console.log(`server is running  on ${PORT}`)
})

