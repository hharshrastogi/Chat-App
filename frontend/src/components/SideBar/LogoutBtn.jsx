import React from 'react'
import { BiLogOut } from "react-icons/bi"
import useLogout from '../../hooks/useLogout.js'
const LogoutBtn = () => {

  const {loading,logout} = useLogout()
  return (
    <div className='mt-auto'>
			{!loading ? (1 === 1 ? (
				<BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout()} />
			) : console.log("This should not execute")): (
				<span className='loading loading-spinner'></span>
			)}
		</div>
  )
}

export default LogoutBtn