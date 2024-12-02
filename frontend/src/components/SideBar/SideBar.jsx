import React from 'react'
import SearchInput from './SearchInput.jsx'
import Conversations from './Conversations.jsx'

const SideBar = () => {
  return (
    <div>
        <SearchInput/>

        <div className='divider px-3'></div>

        <Conversations/>

        {/* <LogoutBtn/> */}
    </div>
  )
}

export default SideBar