import React from 'react'
import {useAuthContext} from '../../context/AuthContext'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extracttime'
const Message = ({message}) => {

  const {authUser} = useAuthContext()
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const formatTime = extractTime(message.createdAt)
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const profilePic = fromMe ? authUser.profilepic: selectedConversation.profilepic
  const bubbleBgColour = fromMe ? 'bg-blue-300' : ""

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
           <div className='w-10 rounded-full'>
           <img
                alt='Tailwind CSS property'
                src={profilePic}
            />  
           </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColour}`}>{message.message}</div>
        <div className={`chat-footer opacity-50 text-blue-900 text-xs flex gap-1 items-center`}>
          {formatTime}
        </div>
    </div>
  )
}

export default Message