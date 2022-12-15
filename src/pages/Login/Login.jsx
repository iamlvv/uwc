import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

export default function UserInfo() {
  return (
    <div>
      <Header />
      <div className='grid grid-cols-5'>
        <Sidebar />
        <div className='col-span-4'>
          <div className='flex justify-center items-center h-screen'>
            <form className='max-w-[400px] w-full mx-auto bg-gray-100 rounded-md shadow-md p-4'>
              <h2 className='text-4xl font-bold text-center py-6'>BRAND</h2>
              <div className='flex flex-col py-2'>
                <label>Username</label>
                <input type="text" className='border p-2' />
              </div>

              <div className='flex flex-col py-2'>
                <label>Password</label>
                <input type="password" className='border p-2' />
              </div>

              <button className='border w-full my-5 py-2 bg-indigo-600 hover:bg-indigo-500 text-white'>Sign In</button>

              <div>
                <p>Create an account</p>
              </div>
            </form> 
          </div>
        </div>
      </div>      
      <Footer />
    </div>
  )
}