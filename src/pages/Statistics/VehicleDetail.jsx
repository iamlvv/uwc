import React from 'react'
import { useState } from 'react';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import StatisticsHeader from './StatisticsHeader'
import { Link, useParams } from 'react-router-dom'
import vehicle from '../../data/Vehicle.json'
import data from '../../data/VehicleHistory'
import car from '../../data/img/vehicle.png'
import Footer from '../../components/Footer';

export default function VehicleDetail() {
    const { vehicleId } = useParams();
    const item = vehicle.find((temp) => temp.id == vehicleId);
    const tempArray = data.slice(0, 2);
    const contentpart = (
        tempArray.map((temp4) => (
            <div>
                <fieldset className='bg-gray-100 rounded-xl p-5 mt-5'>
                    <legend className='bg-green-100 text-green-500 font-bold py-1 px-3 rounded-xl'>Date: {temp4.date}</legend>
                    <div>
                        <h2>Collector: Alice</h2>
                        <ul>
                            <li>MCP1, MCP2, MCP3, MCP5, MCP7</li>
                            <li>Route: Street A - Street B - Street C - Street D...</li>
                        </ul>
                    </div>
                </fieldset>
            </div>
        ))
    )
    const fullcontent = (
        data.map((temp5) => (
            <div>
                <fieldset className='bg-gray-100 rounded-xl p-5 mt-5'>
                    <legend className='bg-green-100 text-green-500 font-bold py-1 px-3 rounded-xl'>Date: {temp5.date}</legend>
                    <div>
                        <h2>Collector: Alice</h2>
                        <ul>
                            <li>MCP1, MCP2, MCP3, MCP5, MCP7</li>
                            <li>Route: Street A - Street B - Street C - Street D...</li>
                        </ul>
                    </div>
                </fieldset>
            </div>
        ))
    )

    const [showMore, setShowMore] = useState(false);
    return (
        <div>
            <Header />
            <div className='grid grid-cols-5'>
                <Sidebar />
                <div className='col-span-4'>
                    <StatisticsHeader />
                    <div >
                        <div className=''>
                            <div className='relative w-4/5 bg-white rounded-3xl overflow-auto opacity-100 mx-auto p-5'
                            >
                                <Link to='/statistics/vehicle'>
                                    <div className='text-center'>
                                        <button className='rounded-3xl bg-green-100 text-green-500 font-bold py-2 px-3 transition ease-in cursor-pointer'>
                                            Come back
                                        </button>
                                    </div>

                                </Link>

                                <div className='mt-10'>
                                    <div>
                                        <div className='flex items-center'>
                                            <div>
                                                <img src={car} alt='car' className='mx-auto w-1/2' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <h1 className='font-bold uppercase mt-1'>{item.plate}</h1>
                                                <div className='flex gap-9 font-bold'>
                                                    <p className='mt-2'>Status</p>
                                                    <p className={item.status === 'GOOD' ? "text-green-500 bg-green-100 px-3 py-2 rounded-xl" : "text-red-500 bg-red-100 px-3 py-2 rounded-xl"}>{item.status}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-10'>
                                            <h1 className='font-bold'>Vehicle history this month</h1>
                                            <div>
                                                {showMore ? fullcontent : contentpart}
                                            </div>
                                            <div className='text-center'>
                                                <input type='button' value={showMore ? "Show less" : "Show more"}
                                                    onClick={() => setShowMore(!showMore)}
                                                    className='font-bold text-center mt-5 bg-yellow-100 text-yellow-500 px-3 py-2 rounded-3xl hover:bg-yellow-500 hover:text-white transition ease-in cursor-pointer'
                                                />
                                            </div>

                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
