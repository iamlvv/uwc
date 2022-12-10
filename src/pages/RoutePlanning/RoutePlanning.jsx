import React, { useState, useEffect }from 'react'
import './RoutePlanning.css';
import MCPdata from "./RoutePlanningData.json";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

export default function RoutePlanning() {
  return (
    <div className='w-screen h-screen'>
        <Header />
        <Sidebar />
        <Footer />
    </div>
  )
}
