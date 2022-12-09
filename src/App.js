import React from 'react';
import Statistics from './pages/Statistics/Statistics';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MCP from './pages/Statistics/MCP';
import Employee from './pages/Statistics/Employee';
import Vehicle from './pages/Statistics/Vehicle';
import HistoryDetail from './pages/Statistics/HistoryDetail';
import VehicleDetail from './pages/Statistics/VehicleDetail';
import Sidebar from './components/Sidebar';
import TaskAssign from './pages/TaskAssign/TaskAssign';
import UserInfo from './pages/UserInfo/UserInfo';
import TaskManagement from './pages/TaskManagement/TaskManagement';
import RoutePlanning from './pages/RoutePlanning/RoutePlanning';
import NotificationCenter from './pages/Notifications/NotificationCenter';
import Header from './components/Header';
import Footer from './components/Footer';
export default function App() {
  return (
    <div className='w-screen h-screen'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<div>
            <Header />
            <Sidebar />
            <Footer />
          </div>} />
          <Route path='/statistics/mcp' element={<MCP itemsPerPage={10} />} />
          <Route path='/statistics/employee' element={<Employee itemsPerPage={8} />} />
          <Route path='/statistics/vehicle' element={<Vehicle itemsPerPage={8} />} />
          <Route path='/statistics/employee/:employeeId' element={<HistoryDetail />} />
          <Route path='/statistics/vehicle/:vehicleId' element={<VehicleDetail />} />
          <Route path='/statistics' element={<Statistics />} />
          <Route path='/taskassign' element={<TaskAssign />} />
          <Route path='/userinfo' element={<UserInfo />} />
          <Route path='/taskmanagement' element={<TaskManagement />} />
          <Route path='/routeplanning' element={<RoutePlanning />} />
          <Route path='/notificationcenter' element={<NotificationCenter />} />
        </Routes>
      </BrowserRouter>


    </div>

  )
}
