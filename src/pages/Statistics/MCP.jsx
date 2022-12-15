import React, { useState } from 'react'
import { LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import WeightMCP from '../../data/WeightMCP.json'
import ReactPaginate from "react-paginate";
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import StatisticsHeader from './StatisticsHeader';
const data = [
    {
        name: "Mon",
        weight: 548
    },
    {
        name: "Tue",
        weight: 407
    },
    {
        name: "Wed",
        weight: 418
    },
    {
        name: "Thu",
        weight: 878
    },
    {
        name: "Fri",
        weight: 381
    },
    {
        name: "Sat",
        weight: 539
    },
    {
        name: "Sun",
        weight: 738
    }
]
function Items({ currentItems }) {
    return (
        <>
            {currentItems && currentItems.map((item) => {
                if (item.volume >= 80) {
                    return (
                        <div className='shadow-lg rounded-3xl h-36 pt-5 pl-5 pr-5'>
                            <div className='flex justify-between'>
                                <p className='font-bold mt-2'>MCP No.{item.id}</p>
                                <p className='bg-green-100 rounded-3xl py-2 px-3 text-green-500 font-bold'>{Math.round(item.volume / 100.0 * 100)} %</p>
                            </div>
                            <p className='text-center text-2xl mt-5'>{item.volume} KG</p>
                        </div>
                    )
                }
                else if (item.volume >= 50) {
                    return (
                        <div className='shadow-lg rounded-3xl h-36 pt-5 pl-5 pr-5'>
                            <div className='flex justify-between'>
                                <p className='font-bold mt-2'>MCP No.{item.id}</p>
                                <p className='bg-yellow-100 rounded-3xl py-2 px-3 text-yellow-500 font-bold'>{Math.round(item.volume / 100.0 * 100)} %</p>
                            </div>
                            <p className='text-center text-2xl mt-5'>{item.volume} KG</p>
                        </div>
                    )
                }
                else {
                    return (
                        <div className='shadow-lg rounded-3xl h-36 pt-5 pl-5 pr-5'>
                            <div className='flex justify-between'>
                                <p className='font-bold mt-2'>MCP No.{item.id}</p>
                                <p className='bg-red-100 rounded-3xl py-2 px-3 text-red-500 font-bold'>{Math.round(item.volume / 100.0 * 100)} %</p>
                            </div>
                            <p className='text-center text-2xl mt-5'>{item.volume} KG</p>
                        </div>
                    )
                }

            }
            )}
        </>

    )
}
export default function MCP({ itemsPerPage }) {
    //Create pagination
    var keyCount = Object.keys(WeightMCP).length;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = WeightMCP.slice(itemOffset, endOffset);
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
                    <StatisticsHeader/>
                    <h1 className='font-bold'>Weight of trash collected this week</h1>
                    <div className='mx-auto w-1/2 mt-10'>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            className=""
                        >
                            {/* <CartesianGrid strokeDasharray="3 3" /> */}
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="weight" stroke="#8884d8" activeDot={{ r: 8 }} animationEasing='ease' />
                        </LineChart>
                    </div>
                    <div className='flex'>
                        <h1 className='font-bold mr-5'>Weight of trash in each MCP</h1>
                        <p className='text-gray-500 italic'>Updated 5 minutes ago</p>
                    </div>
                    <div className='grid grid-cols-5 gap-9 ml-10 mr-10'>
                        <Items currentItems={currentItems} />
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
            <Footer />
        </div>
    )
}
