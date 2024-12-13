import React from 'react'

const Conversation = ({conversation , lastIdx,emoji}) => {
  return (
  <>
    <div className='flex gap-2 items-center hover:bg-sky-200 border-gray-500 rounded-full p-2 py-1 cursor-pointer'>
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