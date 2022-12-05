import React from 'react';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

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
  return (
    <div className='w-72 h-[1000px] shadow-2xl pt-5 float-left' style={styles.sidebar}>

      <div className='flex mb-5'>
        <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="admin-avatar" className='w-20 h-20 my-2 ml-5 mr-2' style={styles.avatar}/>
        <div style={styles.adminText} className='text-gray-500 text-base my-5'>
          <p className='font-bold'>ADMIN</p>
          <p>Banh Mong Che</p>
        </div>
      </div>

      <ul className='h-96'>
        {SidebarData.map((val, key) => {
          return (
            <li
              id = {window.location.pathname == val.link ? "active" : ""}
              key = {key} 
              onClick={() => {
                window.location.pathname = val.link
              }} 
              className='w-full h-16 flex flex-row justify-center items-center hover:bg-black hover:text-white'
            >
              <div className='text-center' style={styles.icon}>{val.icon}</div>
              <div className='font-bold mx-2' style={styles.title}>{val.title}</div>
            </li>
            )
          })}
      </ul>
    </div>
  )
}
