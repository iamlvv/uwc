import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import NotiHeader from './NotiHeader'
import Footer from '../../components/Footer'
export default function NotificationCenter() {
  return (
    <div >
      <Header />
      <div className='grid grid-cols-5'>
        <Sidebar />
        <div className='col-span-4'>
          <div>
            <NotiHeader />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
