import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='flex flex-col items_center min-w-96 mx-auto'>
        <div className='w-full p-6 rounded-lg shadow-md bg-yellow-100 bg-clip-padding backdrop-filter backdrop-blur-lg 
        backdrop-opacity-0'>
          <h1 className='text-3xl font-semibold text-center text-gray-500'> Login 
            <span className='text-blue-500'> ChYapp </span>
          </h1>

          <form>
            <div>

                  <label className='label p-2'>
                    <span className='text-base label-text text-blue-500 font-bold'>Username</span>
                  </label>
                  <input
                    type='text'
                    placeholder='Enter username'
                    className='w-full input input-bordered h-10'
						/>
				
            </div>

            <div>

            <label className='label'>
							<span className='text-base label-text text-blue-500 font-bold'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered h-10'
						/>
            </div>

            <Link to='/signup' className='text-sm text-gray-500 font-black hover:underline hover:text-blue-600 mt-2 inline-block'>
              Don't have an account?
					</Link>

          <div>
						<button className='btn btn-block btn-sm mt-2'> Login
						</button>
					</div>
            
          </form>
        </div>
    </div>
  )
}

export default Login