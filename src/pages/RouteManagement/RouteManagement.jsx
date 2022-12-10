import React, { useState, useEffect }from 'react'
import './RouteManagement.css';
import MCPdata from "./RouteManagementData.json";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

export default function RouteManagement() {
  const [MCPs, setMCPs] = useState(MCPdata);
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  const [currentPage, setCurrentPage] = useState(1);
  const [infosPerPage, setInfosPerPage] = useState(12);
  
  const indexOfLastPost = currentPage * infosPerPage;
  const indexOfFirstPost = indexOfLastPost - infosPerPage;
  const currentPosts = MCPs.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = [];
  const paginate = pageNumber => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(MCPs.length / infosPerPage); i++){
      pageNumbers.push(i);
  }

  return (
    <div className='w-screen h-screen'>
        <Header />
        <Sidebar />
        <div className="main">
            <div id="heading-content">
                <h3>Quản lý tuyến đường</h3>
                <div className="float-right mt-10 mr-8">
                    <a href="#" className='add-task-icon rounded-3xl'>
                        <ControlPointIcon style={{marginRight: "6px"}} ></ControlPointIcon>
                        Tạo mới
                    </a>
                </div>
            </div>
            
            <div id="table-content">
                <table>
                    <thead className="border border-solid bg-gray-100">
                        <tr>
                            <th>No</th>
                            <th>MCP ID</th>
                            <th>MCP Location</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {currentPosts.map((MCP) => (
                            <tr key={MCP.id}>
                                <td style={{width: "10vh"}}>{MCP.id}</td>
                                <td style={{width: "50vh"}}>{zeroPad(MCP.MCPId, 4)}</td>
                                <td style={{width: "70vh"}}>{MCP.MCPLocation}</td>
                            </tr>                      
                        ))}
                    </tbody>
                </table>
            </div>

            <div id="pagination">
                <ul>
                    {pageNumbers.map(number => (
                        <li key={number}>
                            <a onClick={() => paginate(number)} href='#table-content'>
                                {number}
                            </a>
                        </li>
                    ))}              
                </ul>
            </div>
        </div>
        <Footer />
    </div>
  )
}
