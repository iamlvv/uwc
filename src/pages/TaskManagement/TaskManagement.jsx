import React from 'react'
import { useState, useEffect } from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import TaskManagementHeader from './TaskManagementHeader'

const TaskManagement = () => {
  return (
    // <div className='w-screen h-screen'>
    //     <Header />
    //     <Sidebar />
    //     <Footer />
    // </div>

    <div>
      <Header />
      <Sidebar />
      <div className='main'>
        <div id="heading-content">
        <h1 className='text-2xl'>Task Management</h1>
          <div className='pb-3'> <TaskManagementHeader /> </div>
          
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default TaskManagement
