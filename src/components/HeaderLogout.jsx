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

function HeaderLogout(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClickNoti = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  return (
    <div className="h-16 z-10 top-0 shadow-lg">
      <div className="h-full float-left mx-5">
        <NavLink to='/'>
          <img
            src="https://www.globalcitizenyear.org/wp-content/uploads/2022/04/UWC-Secondary-RGB_screen.png"
            alt="Restaurant Logo"
            className="h-10 m-3 mx-20"
          />
        </NavLink>
      </div>

    </div>
  );
}

export default HeaderLogout;