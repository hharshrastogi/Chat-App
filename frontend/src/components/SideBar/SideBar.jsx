import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutBtn from './LogoutBtn.jsx'

const SideBar = () => {
  return (
    <div  className='border-r border-b border border-slate-800 p-4 flex flex-col'>
        <SearchInput/>

        <div className='divider px-3'></div>

        <Conversations/>

        <LogoutBtn/>  
    </div>
  )
}

export default SideBar