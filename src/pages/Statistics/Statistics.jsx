import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import StatisticsHeader from './StatisticsHeader'
import Footer from '../../components/Footer'
export default function Statistics() {
  
  return (
    <div>
      <Header />
      <div className='grid grid-cols-5'>
        <Sidebar />
        <div className='col-span-4'>
          
          <StatisticsHeader />
          {/* <MCP itemsPerPage={10}/> */}
        </div>
      </div>
      <Footer/>
    </div>
  )
}
