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

const RoutePlanData = [
    {
        "vehiclePlate": "64F - 5136",
        "routeID": 1,
        "route": "54 Cách Mạng tháng 8 - 74 Thọ Quang - 16 Ngô Quyền..."
    },
    {
        "vehiclePlate": "52A - 2583",
        "routeID": 1,
        "route": "54 Cách Mạng tháng 8 - 74 Thọ Quang - 16 Ngô Quyền..."
    },
    {
        "vehiclePlate": "51F - 7822",
        "routeID": 3,
        "route": "56 Phan Đăng Lưu - 7 Võ Văn Kiệt - 51 Nguyễn Thượng Hiền..."
    },
    {
        "vehiclePlate": "83Y - 1783",
        "routeID": 3,
        "route": "56 Phan Đăng Lưu - 7 Võ Văn Kiệt - 51 Nguyễn Thượng Hiền..."
    },
    {
        "vehiclePlate": "42J - 2653",
        "routeID": 5,
        "route": "222 Cách Mạng tháng 8 - 75 Lương Nhữ Lộc - 36 Mẹ Thứ..."
    },
    {
        "vehiclePlate": "15C - 7256",
        "routeID": 1,
        "route": "54 Cách Mạng tháng 8 - 74 Thọ Quang - 16 Ngô Quyền..."
    },
    {
        "vehiclePlate": "44H - 1783",
        "routeID": 7,
        "route": "72 Đường 2/9 - 62 Thọ Quang - 55 Ngô Quyền..."
    },
    {
        "vehiclePlate": "64F - 7285",
        "routeID": 8,
        "route": "54 Nguyễn Phong Sắc- 22 Trần Cao Vân - 11 Phạm Cự Lượng..."
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

function CollectorTaskManagementBody() {
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [checkedName, setCheckedName] = useState();
    const [checkedRoutePlan, setCheckedRoutePlan] = useState();
    const [checkedList, setCheckedList] = useState();

    const PageOne = () => (
      <div id="table-content" className='mt-10'>
          <table>
              <thead className="border border-solid bg-gray-100 .container">
                  <tr>
                    <th>Collector No</th>
                    <th>Name</th>
                    <th>Vehicle Plate</th>
                    <th>Route ID</th>
                    <th>Route</th>
                    <th>Control</th>
                  </tr>
              </thead> 
      
              <tbody>
                  {TaskList.map((task) => (
                      <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{task.name}</td>
                          <td>{task.vehiclePlate}</td>
                          <td>{zeroPad(task.routeID, 4)}</td>
                          <td>{task.route}</td>
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
                                    RoutePlanData.push({
                                        vehiclePlate: TaskList[indexTask].vehiclePlate,
                                        routeID: TaskList[indexTask].routeID,
                                        route: TaskList[indexTask].route
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

  else {
      return(
          <>
              <div className="main">
                  <div id="heading-content">
                      <h1 className='text-2xl'>Task Management | Add Collector Task</h1>
                      <div className="float-right mt-10 mr-8">
                          <a style={{minWidth: "100px"}} href= "#" onClick= {() => setCurrentPage((currentPage - 1) % 2)} className='add-task-icon rounded-3xl mr-5'>
                              Back
                          </a>
                          {RoutePlanData.length === 0 ? <></> :
                          <a 
                              href= "#" 
                              onClick= {() => 
                                  {
                                      if(!checkedName || !checkedRoutePlan) {
                                          if (!checkedName) {
                                              alert("Please choose Collector")
                                          }
                                          else {
                                              alert("Please choose Route Plan")
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

                  <div className='flex  -space-x-14'>
                    {NameData.length === 0 ? <div className='text-center text-2xl font-bold'>No collector</div> :
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
                                {NameData.map((collector) => (
                                    <tr key={collector.id}>
                                        <td>{collector.id}</td>
                                        <td style={{width: "29vh"}}>{collector.name}</td>
                                        <td>
                                            <input
                                                type="radio"
                                                checked={checkedName === collector.id}
                                                onChange= {() => setCheckedName(collector.id)}
                                            />                  
                                        </td>
                                    </tr>                    
                                ))
                                
                                }
                            </tbody>
                        </table>
                    </div>}

                    {RoutePlanData.length === 0 ? <div className='text-center text-2xl font-bold'>No route plan is available</div> :
                    <div id="table-content" className='mt-10'>
                        <table>
                            <thead className="border border-solid bg-gray-100 .container">
                                <tr>
                                    <th>No</th>
                                    <th>Ve. Plate</th>
                                    <th>Rt. ID</th>
                                    <th>Route</th>
                                    <th>Ctrl</th>
                                </tr>
                            </thead> 
                    
                            <tbody>
                                {RoutePlanData.map((task, index) => {
                                    // task.id = index + 5;
                                    return (

                                    <tr key={index + 1}>
                                        <td>{index + 1}</td>
                                        <td style={{width: "17vh"}}>{task.vehiclePlate}</td>
                                        <td style={{width: "10vh"}}>{zeroPad(task.routeID, 4)}</td>
                                        <td style={{width: "90vh"}}>{task.route}</td>
                                        <td>
                                            <input
                                                type="radio"
                                                checked={checkedRoutePlan === index + 1}
                                                onChange= {() => 
                                                    {
                                                        setCheckedRoutePlan(index + 1)
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
                                          let indexRoutePlan = RoutePlanData.map((routeplan, index) => (index + 1)).indexOf(checkedRoutePlan)
                                          const chosenTask = {}
                                          chosenTask.id = NameData[indexName].id
                                          chosenTask.name = NameData[indexName].name
                                          chosenTask.vehiclePlate = RoutePlanData[indexRoutePlan].vehiclePlate
                                          chosenTask.routeID = RoutePlanData[indexRoutePlan].routeID
                                          chosenTask.route = RoutePlanData[indexRoutePlan].route
                                          TaskList.push(chosenTask)
                                          NameData.splice(indexName, 1) 
                                          RoutePlanData.splice(indexRoutePlan, 1)
                                          setCheckedName(undefined)
                                          setCheckedRoutePlan(undefined)
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

export default function CollectorTaskManagement() {
  return (
    <div>
        <Header />
        <Sidebar />
        <CollectorTaskManagementBody />
        <Footer />
    </div>
  )
}
