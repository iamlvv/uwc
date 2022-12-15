import React from 'react';
import { NavLink } from 'react-router-dom';
import './TaskManagement.css';


const TaskManagementHeader = () => {
  const activeLink = "decoration-2 font-bold text-purple-500 bg-purple-100  py-2 px-3 rounded-3xl";
  const normalLink = "hover:bg-purple-100 py-2 px-3 transition ease-in rounded-3xl";

  return (
    <div>
      <div className='flex gap-9 mb-3 mt-1 items-center'>
        <NavLink
          to='/taskmanagement/janitortask'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="mx-4">Janitor</div>
        </NavLink>
        <NavLink
          to='/taskmanagement/collectortask'
          className={({ isActive }) => (isActive ? activeLink : normalLink)}
        >
          <div className="mx-4">Collector</div>
        </NavLink>

      </div>
    </div>
  )
}

export default TaskManagementHeader