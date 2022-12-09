import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import StatisticsHeader from './StatisticsHeader'
import vehicle from '../../data/Vehicle.json'
import { useState } from 'react'
import ReactPaginate from "react-paginate";
import car from '../../data/img/vehicle.png'
import { Link, NavLink } from 'react-router-dom'
import Footer from '../../components/Footer'
function Items({ currentItems }) {
  return (
    <>
      {currentItems && currentItems.map(({ id, plate, status }) => (
        <NavLink to={`/statistics/vehicle/${id}`} >
          <div className='flex items-center p-2 cursor-pointer hover:shadow-lg transition ease-in rounded-3xl'>
            <div>
              <img src={car} alt='car' className='mx-auto w-1/2' />
            </div>
            <div className='flex flex-col'>
              <h1 className='font-bold uppercase mt-1'>{plate}</h1>
              <div className='flex gap-9 font-bold'>
                <p className='mt-2'>Status</p>
                <p className={status === 'GOOD' ? "text-green-500 bg-green-100 px-3 py-2 rounded-xl" : "text-red-500 bg-red-100 px-3 py-2 rounded-xl"}>{status}</p>
              </div>
            </div>
          </div>
        </NavLink>
      ))}
    </>
  )
}
export default function Vehicle({ itemsPerPage }) {
  var keyCount = Object.keys(vehicle).length;
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = vehicle.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(keyCount / itemsPerPage);
  const handlePageClick = (e) => {
    const newOffset = (e.selected * itemsPerPage) % keyCount;
    setItemOffset(newOffset);
  };
  return (
    <div>
      <Header />
      <div className='grid grid-cols-5'>
        <Sidebar />
        <div className='col-span-4'>
          <StatisticsHeader />
          <div className='grid grid-cols-2 gap-9 ml-10 mr-10'>
            {<Items currentItems={currentItems} />}
          </div>
          <ReactPaginate
            breakLabel="..."
            nextLabel="Next"
            onPageChange={handlePageClick}
            pageCount={pageCount}
            pageRangeDisplayed={2}
            previousLabel="Previous"
            renderOnZeroPageCount={null}
            className="flex justify-center items-center mt-5 font-medium rounded-md mb-10"
            pageClassName="px-3 py-2 m-3 hover:shadow-md hover:bg-amber-200 transition ease-in border rounded-xl"
            activeClassName="font-bold bg-black text-white"
          />
        </div>
      </div>
      <Footer/>
    </div>
  )
}
