import React from 'react'
import useConversation from "../../zustand/useConversation";
const Conversation = ({conversation , lastIdx,emoji}) => {

    const { selectedConversation, setSelectedConversation } = useConversation();

	const isSelected = selectedConversation?._id === conversation._id;
  return (
  <>
    <div className={`flex gap-2 items-center border-l border-b  hover:bg-sky-500 rounded p-2  cursor-pointer
				${isSelected ? "bg-gray-500" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
                >
        <div className='avatar online'>
            <div className='w-12 rounded-full'>
                <img src={conversation.profilepic}
                 alt='user avatar'/>
            </div>
        </div>
    
    <div>
        <div className='flex flex-col felx-1'>
            <div className='felx gap-3 justify-between'>
                <p className='font-bold text-blue-500'>{conversation.fullName}</p>
                    <span className='text-xl'>{emoji}</span>
                
            </div>
        </div>
    </div>
    </div>

   { !lastIdx && <div className='divider divider-accent my-0 py-1 h-1'/>}
  </>
  )
}

export default Conversation