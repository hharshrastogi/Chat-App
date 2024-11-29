
import Conversation from "../models/conversation.model.js"
import Message from "../models/message.model.js"
export const sendMessage = async (req,res)=>{
    try {
        const {message} = req.body
        const {id: recieverId} = req.params
        const senderId = req.user._id
        console.log("A")
       let conversation= await Conversation.findOne({
            participants : {$all: [senderId,recieverId]},

        })
        console.log("B")
        if(!conversation){
            conversation = await Conversation.create({
                participants : [senderId,recieverId],
            })

        }
        console.log("C")
        const newMessage = Message({
            senderId,
            recieverId,
            message
        })
        console.log("D")

        if(newMessage){
            conversation.messages.push(newMessage._id)
        }


        await conversation.save()
        await newMessage.save()
        res.status(201).json(newMessage)
    } catch (error) {
        console.log("Error in Message controllers")
        res.status(500).json({error:"Internal server error"})
    }
}