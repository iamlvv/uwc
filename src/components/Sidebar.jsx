import React from 'react';
import './Sidebar.css';
import { NavLink } from 'react-router-dom';
import MapIcon from '@mui/icons-material/Map';
import RouteIcon from '@mui/icons-material/Route';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
const styles = {
  icon: {
    flex: '30%',
  },
  title: {
    flex: '70%',
  },
  avatar: {
    flex: '30%',
  },
  adminText: {
    flex: '70%',
  },
}

export default function Sidebar() {
  const activeLink = "font-bold text-white bg-black";
  const normalLink = "hover:bg-black hover:text-white transition ease-in bg-white text-black";
  return (
    <div className='w-72 h-[1100px] shadow-2xl pt-5 float-left rounded-xl' style={styles.sidebar}>

      <div className='flex mb-5'>
        <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="admin-avatar" className='w-20 h-20 my-2 ml-5 mr-2' style={styles.avatar} />
        <div style={styles.adminText} className='text-gray-500 text-base my-5'>
          <p className='font-bold'>ADMIN</p>
          <p>Banh Mong Che</p>
        </div>
      </div>

      <div className='h-96 flex flex-col'>
        <NavLink
          to='/routemanagement'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className='flex my-5'>
            <div className='text-center' style={styles.icon}><MapIcon /></div>
            <div className='font-bold mx-2' style={styles.title}>Route Management</div>
          </div>
        </NavLink>
        <NavLink
          to='/routeplanning'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className='flex my-5'>
            <div className='text-center' style={styles.icon}><RouteIcon /></div>
            <div className='font-bold mx-2' style={styles.title}>Route Planning</div>
          </div>
        </NavLink>
        <NavLink
          to='/taskmanagement'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className='flex my-5'>
            <div className='text-center' style={styles.icon}><AssignmentIcon /></div>
            <div className='font-bold mx-2' style={styles.title}>Task Management</div>
          </div>

        </NavLink>
        <NavLink
          to='/statistics'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className='flex my-5'>
            <div className='text-center' style={styles.icon}><ManageAccountsIcon /></div>
            <div className='font-bold mx-2' style={styles.title}>Manage Resources</div>
          </div>

        </NavLink>
        <NavLink
          to='/notificationcenter'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className='flex my-5'>
            <div className='text-center' style={styles.icon}><NotificationsActiveIcon /></div>
            <div className='font-bold mx-2' style={styles.title}>Notifications center</div>
          </div>

        </NavLink>

      </div>
    </div>
  )
}
