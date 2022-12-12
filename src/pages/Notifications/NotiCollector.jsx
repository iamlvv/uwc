import React from 'react'
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import NotiHeader from './NotiHeader'
import Noti_Collector from '../../data/Noti_Collector.json'
import ReactPaginate from "react-paginate";
import { useState } from 'react'
import { HiOutlineMail } from 'react-icons/hi'
import Footer from '../../components/Footer'
import {Widget, addResponseMessage, addLinkSnippet, addUserMessage, setQuickButtons} from 'react-chat-widget';
import { useEffect } from 'react'
import 'react-chat-widget/lib/styles.css';
// function Items({ currentItems }) {
    
//     const handleClick = () => {

//     }
//     return (
//         <>
//             {currentItems && currentItems.map((temp) => {
//                 return (
//                     <tr className=''>
//                         <td className='border-b border-gray-300 p-5 w-full'>{temp.id}</td>
//                         <td className='border-b border-gray-300 p-5'>{temp.fullname}</td>
//                         <td className='border-b border-gray-300 p-5'>{temp.mcp_id}</td>
//                         <td className='border-b border-gray-300 p-5'>{temp.shift === 1 ? Shift1 : temp.shift === 2 ? Shift2 : Shift3}</td>
//                         <td className='border-b border-gray-300 p-5'>{temp.mcp_location}</td>
//                         <td className='border-b border-gray-300 p-5'>
//                             <HiOutlineMail className='text-2xl text-blue-500 hover:text-blue-700 transition ease-in cursor-pointer' onClick = {handleClick}/>
//                         </td>
//                     </tr>
//                 )
//             })}
//         </>
//     )
// }
export default function NotiJanitor({ itemsPerPage }) {
    //Create Pagination
    var keyCount = Object.keys(Noti_Collector).length;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = Noti_Collector.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(keyCount / itemsPerPage);
    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % keyCount;
        setItemOffset(newOffset);
    };
    //const buttons = [{label: 'first', value: '1'}, {label: 'second', value: '2'}];
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }


    useEffect(() => {
        //addResponseMessage('Welcome to this **awesome** chat!');
        //setQuickButtons(buttons);
        //window.location.reload();
      }, []);

    const handleNewUserMessage = (newMessage) => {
        //console.log(`New message incoming! ${newMessage}`);
        //addResponseMessage(newMessage);
        //setShow(!show);
    }
    // const handleQuickButtonClicked = data => {
    //     console.log(data);
    //     setQuickButtons(buttons.filter(button => button.value !== data));
    //   };
    const Shift1 = (
        <div className='flex gap-5'>
            <div className='border rounded-xl py-1 px-3 bg-purple-500 text-white'>
                Morning
            </div>
            <div className='border rounded-xl py-1 px-3'>
                Afternoon
            </div>
            <div className='border rounded-xl py-1 px-3'>
                Evening
            </div>
        </div>
    )
    const Shift2 = (
        <div className='flex gap-5'>
            <div className='border rounded-xl py-1 px-3 '>
                Morning
            </div>
            <div className='border rounded-xl py-1 px-3 bg-purple-500 text-white'>
                Afternoon
            </div>
            <div className='border rounded-xl py-1 px-3'>
                Evening
            </div>
        </div>
    )
    const Shift3 = (
        <div className='flex gap-5'>
            <div className='border rounded-xl py-1 px-3 '>
                Morning
            </div>
            <div className='border rounded-xl py-1 px-3 '>
                Afternoon
            </div>
            <div className='border rounded-xl py-1 px-3 bg-purple-500 text-white'>
                Evening
            </div>
        </div>
    )
    
    return (
        <div>
            <Header />
            <div className='grid grid-cols-5'>
                <Sidebar />
                <div className='col-span-4'>
                    <NotiHeader />
                    <div className='text-center ml-10 mr-10'>
                        <table>
                            <thead className='bg-gray-100'>
                                <tr className=''>
                                    <th className='border-b border-gray-300 p-5'>No.</th>
                                    <th className='border-b border-gray-300 p-5 px-20'>Name</th>
                                    <th className='border-b border-gray-300 p-5 px-20 whitespace-nowrap'>MCP ID</th>
                                    <th className='border-b border-gray-300 p-5'>Shift</th>
                                    <th className='border-b border-gray-300 p-5 px-20 whitespace-nowrap'>MCP Location</th>
                                    <th className='border-b border-gray-300 p-5'></th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* <Items currentItems={currentItems} /> */}
                                {currentItems && currentItems.map((temp) => {
                return (
                    <tr className=''>
                        <td className='border-b border-gray-300 p-5 w-full'>{temp.id}</td>
                        <td className='border-b border-gray-300 p-5'>{temp.fullname}</td>
                        <td className='border-b border-gray-300 p-5'>{temp.mcp_id}</td>
                        <td className='border-b border-gray-300 p-5'>{temp.shift === 1 ? Shift1 : temp.shift === 2 ? Shift2 : Shift3}</td>
                        <td className='border-b border-gray-300 p-5'>{temp.mcp_location}</td>
                        <td className='border-b border-gray-300 p-5'>
                            <HiOutlineMail className='text-2xl text-blue-500 hover:text-blue-700 transition ease-in cursor-pointer' onClick = {handleClick}/>
                        </td>
                    </tr>
                )
            })}
                            </tbody>
                        </table>
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
                    <div>
                        {/* {show && <Widget
                            handleNewUserMessage={handleNewUserMessage}
                            //profileAvatar={logo}
                            //handleQuickButtonClicked={handleQuickButtonClicked}
                            title="My new awesome title"
                            subtitle="And my cool subtitle"
                            className="text-center"
                            key = {show}
                        />} */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
