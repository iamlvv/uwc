import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link, NavLink } from 'react-router-dom';
import notibadgedata from '../data/Notibadge'
import { Badge } from '@mui/material';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import logo from '../data/img/logonoti.png'
const styles = {
  avatar: {
    flex: '30%',
  },
  admin: {
    flex: '70%',
  }
};

function Header(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickNoti = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const contentNoti = (
    // <div>
    //   <div className='flex gap-5'>
    //     <div className='flex gap-1'>
    //       <div className='pt-2'>
    //         All
    //       </div>
    //       <p className='bg-red-500 px-3 py-2 text-white rounded-xl h-10'>{notibadgedata.length}</p>
    //     </div>
    //     <div className='flex gap-1'>
    //       <div className='pt-2'>
    //         Janitor
    //       </div>
    //       <p className='bg-red-500 px-3 py-2 text-white rounded-xl h-10'>{notibadgedata.length}</p>
    //     </div>
    //     <div className='flex gap-1'>
    //       <div className='pt-2'>
    //         Collector
    //       </div>
    //       <p className='bg-red-500 px-3 py-2 text-white rounded-xl h-10'>{notibadgedata.length}</p>
    //     </div>
    //     <div className='flex gap-1'>
    //       <div className='pt-2'>
    //         Vehicle
    //       </div>
    //       <p className='bg-red-500 px-3 py-2 text-white rounded-xl h-10'>{notibadgedata.length}</p>
    //     </div>
    //   </div>
    //   <div>

    //   </div>
    // </div>
    <div className='flex flex-col'>
      {notibadgedata.map((notibadge) => (
        <div className='flex gap-5 mt-5'>
        <div>
          <img src={logo} alt="logo" className='mx-auto'/>
        </div>
        <div className='mt-2 text-purple-500 font-bold'>
          {notibadge.type}
        </div>
        <div className='mt-2 text-gray-500'>
          {notibadge.content}
        </div>
        </div>
        ))}
    </div>
  )
  const open = Boolean(anchorEl);
  return (
    <div className="h-16 z-10 top-0">
      <div className="h-full float-left mx-5">
        <NavLink to='/'>
          <img
            src="https://www.globalcitizenyear.org/wp-content/uploads/2022/04/UWC-Secondary-RGB_screen.png"
            alt="Restaurant Logo"
            className="h-10 m-3 mx-20"
          />
        </NavLink>
      </div>
      <div className="h-full border-bottom-black shadow-lg ">
        <div className="text-right h-full float-right gap-5 flex items-center">
          <div className="py-2 my-3 text-center">
            
              <div className=" hover:text-white hover:bg-black rounded-full p-2 transition ease-in inline-block cursor-pointer" >
                <Badge badgeContent={notibadgedata.length} color="primary" >
                  <NotificationsIcon onClick = {handleClickNoti}/>
                  <Popover
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                      vertical: 'bottom',
                      horizontal: 'left',
                    }}
                  >
                    <Typography sx={{ p: 2 }}>{contentNoti}</Typography>
                  </Popover>
                </Badge>

              </div>
           
          </div>
          <div className=''>
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="admin-avatar" className='w-10 h-10' style={styles.avatar} />
          </div>
          <div className=" font-bold text-black text-center">
            <Link to='/UserInfo'>
              <div className=" hover:text-white hover:bg-black rounded-full py-2 px-3 transition ease-in" style={styles.admin}>Admin</div>
            </Link>
          </div>
          <div className="font-bold text-black py-2 text-center">
            <Link to='/Login'>
              <div className=" hover:text-white hover:bg-black rounded-full  py-2 px-3 transition ease-in">Log out</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;