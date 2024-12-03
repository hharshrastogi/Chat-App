import React from 'react'
import Messages from './Messages.jsx'
import MessagesInput from './MessagesInput.jsx'
import {TiMessages } from "react-icons/ti"
const MessageContainer = () => {
  const noChatSelected = true;
  return (
    <div className='md:min-w-[450px] flex flex-col border-b border-r border-gray-600'>
     { noChatSelected ? (NoChatSelected() )
                     :
                    ( <>
                     <div className='bg-slate-600 px-4 py-2 mb-2'>
                             <span className='label-text text-gray-950 '>To: </span><span className='text-blue-500 font-bold'>John Doe</span>
                     </div>
                 
                 <Messages />
                 <MessagesInput/>
                 </>)
         }
    </div>
  )
}
export default MessageContainer

const NoChatSelected = () => {
	// const { authUser } = useAuthContext();
	return (
		<div className='flex items-center justify-center w-full h-full'>
			<div className='px-4 text-center sm:text-lg md:text-xl text-blue-500 font-semibold flex flex-col items-center gap-2'>
				<p>Welcome 👋 John Doe ❄</p>
				<p>Select a chat to start messaging</p>
				<TiMessages className='text-3xl md:text-6xl text-center' />
			</div>
		</div>
	);
};

