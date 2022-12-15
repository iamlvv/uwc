import React from 'react'
import { NavLink} from 'react-router-dom'
export default function StatisticsHeader() {
    const activeLink = "decoration-2 font-bold text-purple-500 bg-purple-100  py-2 px-3 rounded-3xl";
    const normalLink = "hover:bg-purple-100 py-2 px-3 transition ease-in rounded-3xl";
  return (
    <div>
    <h1 className='font-bold text-2xl mt-5'>Manage resources</h1>
    <div className='flex gap-9 mb-10 mt-10 items-center'>
    <NavLink
      to="/statistics/mcp"
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <div className="mx-4">MCP</div>
    </NavLink>
    <NavLink
      to="/statistics/employee"
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <div className="mx-4">Employee</div>
    </NavLink>
    <NavLink
      to="/statistics/vehicle"
      className={({ isActive }) => (isActive ? activeLink : normalLink)}
    >
      <div className="mx-4">Vehicle</div>
    </NavLink>
</div></div>
  )
}
