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
import CollectorTaskManagement from './pages/TaskManagement/CollectorTaskManagement';
import JanitorTaskManagement from './pages/TaskManagement/JanitorTaskManagement';
import RouteManagement from './pages/RouteManagement/RouteManagement';
import RoutePlanning from './pages/RoutePlanning/RoutePlanning';
import NotificationCenter from './pages/Notifications/NotificationCenter';
import Login from './pages/Login/Login'
import Header from './components/Header';
import Footer from './components/Footer';
import NotiJanitor from './pages/Notifications/NotiJanitor';
import NotiCollector from './pages/Notifications/NotiCollector';
export default function App() {
  return (
    <div className='App'>
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
          <Route path='login' element={<Login />}/>
          <Route path='/taskmanagement' element={<TaskManagement />} />
          <Route path='/taskmanagement/collectortask' element={<CollectorTaskManagement />} />
          <Route path='/taskmanagement/janitortask' element={<JanitorTaskManagement />} />
          <Route path='/routemanagement' element={<RouteManagement />} />
          <Route path='/routeplanning' element={<RoutePlanning />} />
          <Route path='/notificationcenter' element={<NotificationCenter />} />
          <Route path='/notificationcenter/janitor' element = {<NotiJanitor itemsPerPage={8}/>} />
          <Route path='/notificationcenter/collector' element = {<NotiCollector itemsPerPage={8} />}/>
        </Routes>
      </BrowserRouter>


    </div>

  )
}
