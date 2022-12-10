import React from "react";
import MapIcon from '@mui/icons-material/Map';
import RouteIcon from '@mui/icons-material/Route';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const SidebarData = [
    {
        title: "Route Management",
        icon: <MapIcon/>,
        link: "/pages/RouteManagement/RouteManagement.jsx"
    },
    {
        title: "Route Planning",
        icon: <RouteIcon/>,
        link: "/pages/RoutePlanning/RoutePlanning.jsx"
    },
    {
        title: "Task Assignment",
        icon: <AssignmentIcon/>,
        link: "/pages/TaskAssign/TaskAssign.jsx"
    },
    {
        title: "Manage Resources",
        icon: <ManageAccountsIcon/>,
        link: "/statistics"
    },
    {
        title: "Notifications center",
        icon: <NotificationsActiveIcon/>,
        link: ""
    },
]
// Chú ý đường dẫn task assign, chưa có đường dẫn noti, chưa có đường dẫn route management