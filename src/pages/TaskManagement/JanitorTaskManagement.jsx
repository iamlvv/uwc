import React, { useState }from 'react'
import ReactDOM from "react-dom";
import './TaskManagement.css';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'
import TaskManagementHeader from './TaskManagementHeader';

const NameData = [
    {
        "id": 1,
        "name": "Lê Đình Vũ"
    },
    {
        "id": 2,
        "name": "Phạm Minh Duy"
    },
    {
        "id": 3,
        "name": "Nguyễn Tuấn Huy"
    },
    {
        "id": 4,
        "name": "Lương Triệu Vũ"
    },
    {
        "id": 5,
        "name": "Trịnh Minh Pháp"
    },
    {
        "id": 6,
        "name": "Lê Chí Vỹ"
    },
    {
        "id": 7,
        "name": "Phạm Hoàn Hảo"
    },
    {
        "id": 8,
        "name": "Nguyễn Huy Toàn"
    }
]

const MCPData = [
    {
        "MCPid": 1,
        "MCPlocation": "54 Cách mạng tháng tám"
    },
    {
        "MCPid": 2,
        "MCPlocation": "56 Phan Đăng Lưu"
    },
    {
        "MCPid": 3,
        "MCPlocation": "75 Lương Nhữ Lộc"
    },
    {
        "MCPid": 4,
        "MCPlocation": "22 Trần Cao Vân"
    },
    {
        "MCPid": 5,
        "MCPlocation": "51 Nguyễn Thượng Hiền"
    },
    {
        "MCPid": 6,
        "MCPlocation": "62 Thọ Quang"
    },
    {
        "MCPid": 7,
        "MCPlocation": "74 Thọ Quang"
    },
    {
        "MCPid": 8,
        "MCPlocation": "109 Hoàng Diệu"
    }
]

const ShiftData = [
    {
        "id": 1,
        "session": "Morning"
    },
    {
        "id": 2,
        "session": "Afternoon"
    },
    {
        "id": 3,
        "session": "Evening"
    }
]

const TaskList = []
const zeroPad = (num, places) => String(num).padStart(places, '0');

const modalRoot = document.getElementById("root");
const Modal = props => {
  return ReactDOM.createPortal(
    <div>{props.children}</div>,
    modalRoot
  );
};

function JanitorTaskManagementBody() {
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [checkedName, setCheckedName] = useState();
    const [checkedMCP, setCheckedMCP] = useState();
    const [checkedShift, setCheckedShift] = useState();
    const [checkedList, setCheckedList] = useState();

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
    );
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
    );
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
    );

    const PageOne = () => (
      <div id="table-content" className='mt-10'>
          <table>
              <thead className="border border-solid bg-gray-100 .container">
                  <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Shift</th>
                    <th>MCP ID</th>
                    <th>Location</th>
                    <th>Control</th>
                  </tr>
              </thead> 
      
              <tbody>
                  {TaskList.map((task) => (
                      <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.name}</td>
                          <td>{task.shift === 1 ? Shift1 : task.shift === 2 ? Shift2 : Shift3}</td>
                          <td>{zeroPad(task.MCPid, 4)}</td>
                          <td>{task.MCPlocation}</td>
                          <td>                           
                              <button
                                  onClick= { () => {
                                    let indexTask = TaskList.map(taskItem => taskItem.id).indexOf(task.id) 

                                    NameData.push({
                                        id: TaskList[indexTask].id,
                                        name: TaskList[indexTask].name
                                    })
                                    NameData.sort(function(a, b){
                                        return (a.id < b.id)
                                    })
                                    MCPData.push({
                                        MCPid: TaskList[indexTask].MCPid,
                                        MCPlocation: TaskList[indexTask].MCPlocation
                                    })
                                    TaskList.splice(indexTask, 1)
                                        setCheckedList(task.id);
                                    }
                                  }
                              >
                                  Delete
                              </button>
                          </td>
                      </tr>                    
                  ))
                  
                  }
              </tbody>
          </table>
      </div>
    )

    if(currentPage === 0){
      return (
          // <>
              <div className="main">
                  <div id="heading-content">
                      <h1 className='text-2xl'>Task Management</h1>
                      <div className='pb-3'>
                        <TaskManagementHeader />
                        <div className="float-right -mt-11 mr-8">
                            <a style={{minWidth: "100px"}} href= "#" onClick= {() => setCurrentPage((currentPage + 1) % 2)}className='add-task-icon rounded-3xl'>
                                <ControlPointIcon style={{marginRight: "6px"}} ></ControlPointIcon>
                                Create new task
                            </a>
                        </div>
                      </div>
                  </div>
                  {/* (TaskList.length === 0) ? <div className='text-center'>No task is cre=ated</div> : (*/}
                  {TaskList.length === 0 ? <div className='text-center text-2xl font-bold'>No task is created</div> : <PageOne/>}
              </div>

      )
  }
//   else if (currentPage === 1) {
//       return(
//           // (
//               <div className="main">
//                   <div id="heading-content">
//                       <h1 className='text-2xl'>Task Management | Select Collector</h1>
//                       <div className="float-right mt-10 mr-8">
//                           <a href= "#" onClick= {() => setCurrentPage((currentPage - 1) % 3)}className='add-task-icon rounded-3xl mr-5'>
//                               Back
//                           </a>
//                           <a href= "#" onClick= {() => setCurrentPage((currentPage + 1) % 3)}className='add-task-icon rounded-3xl'>
//                               Next
//                           </a>
//                       </div>
//                   </div>
//                   {NameData.length === 0 ? <div className='text-center text-2xl font-bold'>No collector is available</div> :
//                   <div id="table-content" className='mt-10 flex justify-center'>
//                       <table>
//                           <thead className="border border-solid bg-gray-100 .container">
//                               <tr>
//                                   <th>No</th>
//                                   <th>Name</th>
//                                   <th>Control</th>
//                               </tr>
//                           </thead> 
                  
//                           <tbody>
//                               {NameData.map((collector) => (
//                                   <tr key={collector.id}>
//                                       <td>{collector.id}</td>
//                                       <td style={{width: "35vh"}}>{collector.name}</td>
//                                       <td>
//                                         <input
//                                             type="radio"
//                                             checked={checkedName === collector.id}
//                                             onChange= {() => setCheckedName(collector.id)}
//                                         />                  
//                                       </td>
//                                   </tr>                    
//                               ))
                              
//                               }
//                           </tbody>
//                       </table>
//                   </div>}
//               </div>
//           // )
//       ) 
//   }
  else {
      return(
          <>
              <div className="main">
                  <div id="heading-content">
                      <h1 className='text-2xl'>Task Management | Add Janitor Task</h1>
                      <div className="float-right mt-10 mr-8">
                          <a style={{minWidth: "100px"}} href= "#" onClick= {() => setCurrentPage((currentPage - 1) % 2)} className='add-task-icon rounded-3xl mr-5'>
                              Back
                          </a>
                          {MCPData.length === 0 ? <></> :
                          <a 
                              href= "#" 
                              onClick= {() => 
                                  {
                                      if(!checkedName || !checkedMCP) {
                                          if (!checkedName) {
                                              alert("Please choose Janitor")
                                          }
                                          else {
                                              alert("Please choose MCP")
                                          }
                                      
                                      }
                                      else{
                                          setOpen(!open);
                                      }
                                  }
                              } 
                              className='add-task-icon rounded-3xl'>
                              Complete
                          </a>}
                          
                      </div>
                  </div>
                  
                  <div className='ml-7 mb-2 flex justify-start gap-4'>
                    {
                        ShiftData.map(shift => (
                            <div key={shift.id}>
                                <input 
                                    type="radio" 
                                    checked={checkedShift === shift.id}
                                    onChange={() => setCheckedShift(shift.id)}
                                />
                                {shift.session}
                            </div>
                        ))
                    }
                  </div>

                  <div className='flex'>
                    {NameData.length === 0 ? <div className='text-center text-2xl font-bold'>No janitor available</div> :
                    <div id="table-content" className='mt-10'>
                        <table>
                            <thead className="border border-solid bg-gray-100 .container">
                                <tr>
                                    <th>No</th>
                                    <th>Name</th>
                                    <th>Ctrl</th>
                                </tr>
                            </thead> 
                    
                            <tbody>
                                {NameData.map((janitor) => (
                                    <tr key={janitor.id}>
                                        <td>{janitor.id}</td>
                                        <td style={{width: "29vh"}}>{janitor.name}</td>
                                        <td>
                                            <input
                                                type="radio"
                                                checked={checkedName === janitor.id}
                                                onChange= {() => setCheckedName(janitor.id)}
                                            />                  
                                        </td>
                                    </tr>                    
                                ))
                                
                                }
                            </tbody>
                        </table>
                    </div>}

                    {MCPData.length === 0 ? <div className='text-center text-2xl font-bold'>No MCP is available</div> :
                    <div id="table-content" className='mt-10'>
                        <table>
                            <thead className="border border-solid bg-gray-100 .container">
                                <tr>
                                    <th>No</th>
                                    <th>MCP ID</th>
                                    <th>Location</th>
                                    <th>Ctrl</th>
                                </tr>
                            </thead> 
                    
                            <tbody>
                                {MCPData.map((task, index) => {
                                    // task.id = index + 5;
                                    return (

                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td style={{width: "15vh"}}>{zeroPad(task.MCPid, 4)}</td>
                                        <td style={{width: "90vh"}}>{task.MCPlocation}</td>
                                        <td>
                                            <input
                                                type="radio"
                                                checked={checkedMCP === index + 1}
                                                onChange= {() => 
                                                    {
                                                        setCheckedMCP(index + 1)
                                                    }
                                                
                                                }
                                            />                  
                                        </td>
                                    </tr>                    
                                )}
                                )
                                
                                }
                            </tbody>
                        </table>
                    </div>}
                  </div>
              </div>
              {open && (<Modal in={!open}>
                  <div className= "modal">
                      <div className="modal-container" style={{width: "400px", backgroundColor: "#6464ff"}}>
                          <div className="modal-header" >
                              <HelpOutlineIcon style={{fontSize: "120px", color: "#FFFFFF"}}/>
                              <h1>Do you want to save ?</h1>
                          </div>
                          <div className="modal-body">
                              {/* <h2> You successfully generate new route. </h2>} */}
                              <button className='mr-5'
                                  id="modal-btn" 
                                  onClick={() => 
                                      {
                                            setOpen(!open)                                       
                                      }
                                  }
                              >
                                  Back
                              </button>                                
                              <button 
                                  id="modal-btn" 
                                  onClick={() => 
                                      {
                                          let check = NameData.filter(name => name.id === checkedName)
                                          let indexName = NameData.map(name => name.id).indexOf(checkedName)
                                          let indexShift = ShiftData.map(shift => shift.id).indexOf(checkedShift)
                                          let indexMCP = MCPData.map((mcp, index) => (index + 1)).indexOf(checkedMCP)
                                          const chosenTask = {}
                                          chosenTask.id = NameData[indexName].id
                                          chosenTask.name = NameData[indexName].name
                                          chosenTask.shift = ShiftData[indexShift].id
                                          chosenTask.MCPid = MCPData[indexMCP].MCPid
                                          chosenTask.MCPlocation = MCPData[indexMCP].MCPlocation
                                          TaskList.push(chosenTask)
                                          NameData.splice(indexName, 1) 
                                        //   MCPData.splice(indexMCP, 1)
                                          setCheckedName(undefined)
                                          setCheckedMCP(undefined)
                                          setCurrentPage((currentPage + 1) % 2)   
                                          setOpen(!open)                                       
                                      }
                                  }
                              >
                                  Continue
                              </button>
                          </div>
                      </div>
                  </div>            
              </Modal>)}
          </>
          )
  }    
}

const JanitorTaskManagement = () => {
    return (
        <div>
            <Header />
            <Sidebar />
            <JanitorTaskManagementBody />
            <Footer />
        </div>
    )
}

export default JanitorTaskManagement