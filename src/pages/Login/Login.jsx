import React from 'react'
import HeaderLogout from '../../components/HeaderLogout'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import  { NavLink }  from 'react-router-dom'

export default function Login() {
  return (
    <div>
      <HeaderLogout />
      <div className='h-screen w-full'>
          <div className='flex justify-center mt-20 flex-col'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-100 rounded-md shadow-md p-4'>
              <h2 className='text-4xl font-bold text-center py-6'>UWC</h2>
              <div className='flex flex-col py-2'>
                <label>Username</label>
                <input type="text" className='border p-2' />
              </div>

              <div className='flex flex-col py-2'>
                <label>Password</label>
                <input type="password" className='border p-2' />
              </div>

              <button className='border w-full my-5 py-2 bg-gray-600 hover:bg-gray-500 text-white'>
                <NavLink
                  to="/"
                >
                  <div>Sign in</div>
                </NavLink>
              </button>

              <div>
                <p>Create an account</p>
              </div>
            </form> 
          </div>
      </div>      
      <Footer />
    </div>
  )
}