import React, { useState}from 'react'
import ReactDOM from "react-dom";
import ReactPaginate from "react-paginate";

import './RouteManagement.css';
import MCPdata from "./RouteManagementData.json";
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

export default function RouteManagement() {
  const [MCPs, setMCPs] = useState(MCPdata);
  const zeroPad = (num, places) => String(num).padStart(places, '0')
  const [currentPage, setCurrentPage] = useState(1);//
  const [infosPerPage, setInfosPerPage] = useState(10);//
  const [open, setOpen] = React.useState(false);
  
  const indexOfLastPost = currentPage * infosPerPage;
  const indexOfFirstPost = indexOfLastPost - infosPerPage;
  const currentPosts = MCPs.slice(indexOfFirstPost, indexOfLastPost);//
  const pageNumbers = [];
  const paginate = pageNumber => setCurrentPage(pageNumber);

  for (let i = 1; i <= Math.ceil(MCPs.length / infosPerPage); i++){
      pageNumbers.push(i);
  }

  const modalRoot = document.getElementById("root");
  const Modal = props => {
    return ReactDOM.createPortal(
      <div>{props.children}</div>,
      modalRoot
    );
  };

  return (
    <div className='w-screen h-screen'>
        <Header />
        <Sidebar />
        <div className="main">
            <div id="heading-content">
                <h3>Quản lý tuyến đường</h3>
                <div className="float-right mt-10 mr-8">
                    <a href='#' onClick={() => setOpen(!open)} className='add-task-icon rounded-3xl'>
                        <ControlPointIcon style={{marginRight: "6px"}} ></ControlPointIcon>
                        Generate
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

        {open && (
          <Modal in={!open}>
              <div className= "modal">
                  <div className="modal-container">
                      <div className="modal-header">
                          <CheckCircleOutlineIcon style={{fontSize: "120px", color: "#009100"}}/>
                          <h1>Success!</h1>
                      </div>
                      <div className="modal-body">
                          <h2>You successfully generate new route.</h2>
                          <button id="modal-btn" onClick={() => setOpen(!open)}>Continue</button>
                      </div>
                  </div>
              </div>            
          </Modal>
        )}
        <Footer />
    </div>
  )
}
