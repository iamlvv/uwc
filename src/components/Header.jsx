import React from 'react';
import NotificationsIcon from '@mui/icons-material/Notifications';

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
    <div className="h-16 z-10 top-0 w-screen">
        <div className="h-full float-left mx-5">
            <a href="" title="Logo">
                <img
                src="https://www.globalcitizenyear.org/wp-content/uploads/2022/04/UWC-Secondary-RGB_screen.png"
                alt="Restaurant Logo"
                className="h-10 w-auto m-3 mx-20"
                />
            </a>
        </div>
        <div className="h-full border-bottom-black border">
            <ul className="text-right h-full float-right mr-3 flex">
                <li className="w-24 py-2 my-3 text-center">
                    <a href="" className=" hover:text-white hover:bg-black rounded-full p-2 transition ease-in"><NotificationsIcon/></a>
                </li>
                <li className="inline-block font-bold text-black w-28 text-center flex items-center">
                    <img src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/3_avatar-512.png" alt="admin-avatar" className='w-10 h-10' style={styles.avatar}/>
                    <a href="" className=" hover:text-white hover:bg-black rounded-full py-2 mt-1 transition ease-in" style={styles.admin}>Admin</a>
                </li>
                <li className="inline-block font-bold text-black w-24 py-2 my-3 text-center">
                    <a href="" className=" hover:text-white hover:bg-black rounded-full px-3 py-2 transition ease-in">Log out</a>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Header;