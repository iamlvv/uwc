import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import StatisticsHeader from './StatisticsHeader'
import EmployeeHistory from '../../data/EmployeeHistory.json'
import emp from '../../data/img/employee.png'
import { useState } from 'react'
import Footer from '../../components/Footer'

export default function HistoryDetail() {
    const { employeeId } = useParams();
    const item = EmployeeHistory.find((temp) => temp.id == employeeId);
    const [showMore, setShowMore] = useState(false);
    const tempArray = item.daywork.slice(0, 2);
    const contentpart = (
        tempArray.map((temp4) => (
            <div>
                <fieldset className='bg-gray-100 rounded-xl p-5 mt-5'>
                    <legend className='bg-green-100 text-green-500 font-bold py-1 px-3 rounded-xl'>Date: {temp4.date}</legend>
                    <div>
                        <ul>
                            <li>Collect on A.street (Finished)</li>
                            <li>Collect on B.street (Unfinished)</li>
                            <li>Collect on C.street (Finished)</li>
                            <li>Collect on D.street (Unfinished)</li>
                        </ul>
                    </div>
                </fieldset>
            </div>
        ))
    );
    const fullcontent = (
        item.daywork.map((temp5) => (
            <div>
                <fieldset className='bg-gray-100 rounded-xl p-5 mt-5'>
                    <legend className='bg-green-100 text-green-500 font-bold py-1 px-3 rounded-xl'>Date: {temp5.date}</legend>
                    <div>
                        <ul>
                            <li>Collect on A.street (Finished)</li>
                            <li>Collect on B.street (Unfinished)</li>
                            <li>Collect on C.street (Finished)</li>
                            <li>Collect on D.street (Unfinished)</li>
                        </ul>
                    </div>
                </fieldset>
            </div>
        ))
    )
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
                                <Link to='/statistics/employee'>
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
                                                <img src={emp} alt='emp' className='mx-auto w-1/2' />
                                            </div>
                                            <div className='flex flex-col'>
                                                <h1 className='font-bold uppercase mt-1'>{item.fullname}</h1>
                                                <h1 className='font-bold uppercase text-gray-500 mt-2'>{item.type}</h1>
                                                <div className='flex gap-9 font-bold'>
                                                    <p className='mt-2'>Day work</p>
                                                    <p className='text-green-500 bg-green-100 px-3 py-2 rounded-xl'>{item.work}</p>
                                                    <p className='mt-2'>Day off</p>
                                                    <p className='text-red-500 bg-red-100 px-3 py-2 rounded-xl'>{item.off}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='mt-10'>
                                            <h1 className='font-bold'>Employee history this month</h1>
                                            <fieldset className='bg-gray-100 rounded-xl p-5 mt-5'>
                                                <legend className='bg-red-100 text-red-500 font-bold py-1 px-3 rounded-xl'>Day off</legend>
                                                <div>
                                                    {item.dayoff.map((temp2) => (
                                                        <div>
                                                            <p>{temp2.date}</p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </fieldset>
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
