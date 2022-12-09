import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Link } from 'react-router-dom';

const styles = {
  avatar: {
    flex: '30%',
  },
  admin: {
    flex: '70%',
  }
};

function Header(props) {
  return (
    <div className="h-16 z-10 top-0">
      <div className="h-full float-left mx-5">
        <a href="" title="Logo">
          <img
            src="https://www.globalcitizenyear.org/wp-content/uploads/2022/04/UWC-Secondary-RGB_screen.png"
            alt="Restaurant Logo"
            className="h-10 m-3 mx-20"
          />
        </a>
      </div>
      <div className="h-full border-bottom-black border">
        <div className="text-right h-full float-right mr-3 flex items-center gap-5">
          <div className="w-24 py-2 my-3 text-center">
            <Link to='/'>
              <div className=" hover:text-white hover:bg-black rounded-full p-2 transition ease-in inline-block">
                <NotificationsIcon />
              </div>
            </Link>
          </div>
          <div className=''>
            <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="admin-avatar" className='w-10 h-10' style={styles.avatar} />
          </div>
          <div className=" font-bold text-black w-28 text-center">
            <Link to='/'>
              <div className=" hover:text-white hover:bg-black rounded-full py-2 transition ease-in" style={styles.admin}>Admin</div>
            </Link>
          </div>
          <div className="inline-block font-bold text-black w-24 py-2 text-center">
            <Link>
              <div className=" hover:text-white hover:bg-black rounded-full px-3 py-2 transition ease-in">Log out</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;