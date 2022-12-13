import React, { useState }from 'react'
import ReactDOM from "react-dom";
import './RoutePlanning.css';
import ControlPointIcon from '@mui/icons-material/ControlPoint';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import Header from '../../components/Header'
import Sidebar from '../../components/Sidebar'
import Footer from '../../components/Footer'

const RouteData = [
  {
      "id": 1,
      "RouteId": 1,
      "Route": [
          "Cách Mạng Tháng Tám",
          "Thọ Quang ",
          "Hoàng Diệu ",
          "Lê Văn Chí "
      ]
  },
  {
      "id": 2,
      "RouteId": 2,
      "Route": [
          "Phạm Văn Đồng",
          "Phù Đồng",
          "Lương Thế Vinh",
          "Tôn Thất Tùng"
      ]
  },
  {
      "id": 3,
      "RouteId": 3,
      "Route": [
          "Kim Đồng",
          "Thọ Quang",
          "Tô Vĩnh Diện",
          "Hoàng Diệu"
      ]
  },
  {
      "id": 4,
      "RouteId": 4,
      "Route": [
          "Lương Định Của",
          "Nguyễn Viết Xuân",
          "Xô Viết Nghệ Tĩnh",
          "Lê Văn Chí"
      ]
  },
  {
      "id": 5,
      "RouteId": 5,
      "Route": [
          "Đinh Tiên Hoàng",
          "Điện Biên Phủ",
          "Võ Thị Sáu",
          "Cách Mạng Tháng Tám"
      ]
  },
  {
      "id": 6,
      "RouteId": 6,
      "Route": [
          "Phù Đổng",
          "Võ Văn Ngân",
          "Nguyễn Thượng Hiền",
          "Lương Nhữ Lộc"
      ]
  },
  {
      "id": 7,
      "RouteId": 7,
      "Route": [
          "Phan Đăng Lưu",
          "Phan Bội Châu",
          "Trần Hưng Đạo",
          "Nguyễn Huệ"
      ]
  },
  {
      "id": 8,
      "RouteId": 8,
      "Route": [
          "Tôn Đức Thắng",
          "Phú Xuân",
          "Trần Cao Vân",
          "Mai Chí Thọ"
      ]
  },
  {
      "id": 9,
      "RouteId": 9,
      "Route": [
          "Phan Đình Giót",
          "Quang Trung",
          "Lý Thái Tổ",
          "Nguyễn Công Trứ"
      ]
  },
  {
      "id": 10,
      "RouteId": 10,
      "Route": [
          "Nguyễn Tất Thành",
          "Đồng Nai",
          "Hoàng Diệu 2",
          "Tô Vĩnh Diện"
      ]
  }
]

const VehicleData = [
    {
      "LicensePlate": "37H - 135.09"
    },
    {
      "LicensePlate": "51H - 246.81"
    },    
    {
      "LicensePlate": "59A - 112.45"
    },
    {
      "LicensePlate": "50A - 135.11"
    },
    {
      "LicensePlate": "59A - 862.72"
    },
    {
      "LicensePlate": "50H - 373.73"
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

function RoutePlanningBody() {
    const [open, setOpen] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [checkedRoute, setCheckedRoute] = useState();
    const [checkedVehicle, setCheckedVehicle] = useState();
    const [checkedList, setCheckedList] = useState();

    const PageOne = () => (
      <div id="table-content" className='mt-10'>
          <table>
              <thead className="border border-solid bg-gray-100 .container">
                  <tr>
                      <th>TaskNo</th>
                      <th>Route ID</th>
                      <th>License Plate</th>
                      <th>Route</th>
                      <th>Control</th>
                  </tr>
              </thead> 
      
              <tbody>
                  {TaskList.map((task) => (
                      <tr key={task.id}>
                          <td>{task.id}</td>
                          <td>{zeroPad(task.RouteId, 4)}</td>
                          <td>{task.LicensePlate}</td>
                          <td>{task.Route.join(' - ')}</td>
                          <td>                           
                              <button
                                  onClick= { () => {
                                      let indexTask = TaskList.map(taskItem => taskItem.id).indexOf(task.id) 
                                      RouteData.push({
                                          id: TaskList[indexTask].id,
                                          RouteId: TaskList[indexTask].RouteId,
                                          Route: TaskList[indexTask].Route
                                      })
                                      RouteData.sort(function(a, b){
                                          return (a.id < b.id)
                                      }
                                      
                                      )
                                      VehicleData.push({LicensePlate: TaskList[indexTask].LicensePlate})
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
                      <h1 className='text-2xl'>Route Planning</h1>
                      <div className="float-right mt-10 mr-8">
                          <a style={{minWidth: "100px"}} href= "#" onClick= {() => setCurrentPage((currentPage + 1) % 3)}className='add-task-icon rounded-3xl'>
                              <ControlPointIcon style={{marginRight: "6px"}} ></ControlPointIcon>
                              Create new task
                          </a>
                      </div>
                  </div>
                  {/* (TaskList.length === 0) ? <div className='text-center'>No task is cre=ated</div> : (*/}
                  {TaskList.length === 0 ? <div className='text-center text-2xl font-bold'>No task is created</div> : <PageOne/>}
              </div>

      )
  }
  else if (currentPage === 1) {
      return(
          // (
              <div className="main">
                  <div id="heading-content">
                      <h1 className='text-2xl'>Route Planning | Select Route</h1>
                      <div className="float-right mt-10 mr-8">
                          <a href= "#" onClick= {() => setCurrentPage((currentPage - 1) % 3)}className='add-task-icon rounded-3xl mr-5'>
                              Back
                          </a>
                          <a href= "#" onClick= {() => setCurrentPage((currentPage + 1) % 3)}className='add-task-icon rounded-3xl'>
                              Next
                          </a>
                      </div>
                  </div>
                  {RouteData.length === 0 ? <div className='text-center text-2xl font-bold'>No route is available</div> :
                  <div id="table-content" className='mt-10'>
                      <table>
                          <thead className="border border-solid bg-gray-100 .container">
                              <tr>
                                  <th>No</th>
                                  <th>Route ID</th>
                                  <th>Route</th>
                                  <th>Control</th>
                              </tr>
                          </thead> 
                  
                          <tbody>
                              {RouteData.map((task) => (
                                  <tr key={task.id}>
                                      <td>{task.id}</td>
                                      <td>{zeroPad(task.RouteId, 4)}</td>
                                      <td>{task.Route.join(' - ')}</td>
                                      <td>
                                        <input
                                            type="radio"
                                            checked={checkedRoute === task.id}
                                            onChange= {() => setCheckedRoute(task.id)}
                                        />                  
                                      </td>
                                  </tr>                    
                              ))
                              
                              }
                          </tbody>
                      </table>
                  </div>}
              </div>
          // )
      ) 
  }
  else {
      return(
          <>
              <div className="main">
                  <div id="heading-content">
                      <h1 className='text-2xl'>Route Planning | Select Vehicle</h1>
                      <div className="float-right mt-10 mr-8">
                          <a style={{minWidth: "100px"}} href= "#" onClick= {() => setCurrentPage((currentPage - 1) % 3)} className='add-task-icon rounded-3xl mr-5'>
                              Back
                          </a>
                          {VehicleData.length === 0 ? <></> :
                          <a 
                              href= "#" 
                              onClick= {() => 
                                  {
                                      if(!checkedVehicle || !checkedRoute) {
                                          if (!checkedVehicle) {
                                              alert("Please choose Vehicle")
                                          }
                                          else {
                                              alert("Please choose Route")
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
                  {VehicleData.length === 0 ? <div className='text-center text-2xl font-bold'>No vehicle is available</div> :
                  <div id="table-content" className='mt-10'>
                      <table>
                          <thead className="border border-solid bg-gray-100 .container">
                              <tr>
                                  <th>No</th>
                                  <th>License Plate</th>
                                  <th>Control</th>
                              </tr>
                          </thead> 
                  
                          <tbody>
                              {VehicleData.map((task, index) => {
                                // task.id = index + 5;
                                return (

                                  <tr key={index + 1}>
                                      <td>{index + 1}</td>
                                      <td>{task.LicensePlate}</td>
                                      <td>
                                        <input
                                            type="radio"
                                            checked={checkedVehicle === index + 1}
                                            onChange= {() => 
                                                {
                                                    setCheckedVehicle(index + 1)
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
                                          let check = RouteData.filter(route => route.id === checkedRoute)
                                          let indexRoute = RouteData.map(route => route.id).indexOf(checkedRoute)
                                          let indexVehicle = VehicleData.map((vehicle,index) => (index + 1)).indexOf(checkedVehicle)
                                          const chosenTask = {}
                                          chosenTask.id = RouteData[indexRoute].id
                                          chosenTask.RouteId = RouteData[indexRoute].RouteId
                                          chosenTask.LicensePlate = VehicleData[indexVehicle].LicensePlate
                                          chosenTask.Route = RouteData[indexRoute].Route
                                          TaskList.push(chosenTask)
                                          RouteData.splice(indexRoute, 1) 
                                          VehicleData.splice(indexVehicle, 1)
                                          setCheckedRoute(undefined)
                                          setCheckedVehicle(undefined)
                                          setCurrentPage((currentPage + 1) % 3)   
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

export default function RoutePlanning() {
  return (
    <div className='w-screen h-screen'>
        <Header />
        <Sidebar />
        <RoutePlanningBody />
        <Footer />
    </div>
  )
}
