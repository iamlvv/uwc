import React from "react";
import MapIcon from '@mui/icons-material/Map';
import RouteIcon from '@mui/icons-material/Route';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';

export const SidebarData = [
    {
        title: "Quản lý tuyến đường",
        icon: <MapIcon/>,
        link: "/pages/"
    },
    {
        title: "Tuyến đường phân công",
        icon: <RouteIcon/>,
        link: "/pages/RoutePlanning/RoutePlanning.jsx"
    },
    {
        title: "Quản lý phân công",
        icon: <AssignmentIcon/>,
        link: "/pages/TaskAssign/TaskAssign.jsx"
    },
    {
        title: "Quản lý tài nguyên",
        icon: <ManageAccountsIcon/>,
        link: "/pages/Statistics/Statistics.jsx"
    },
    {
        title: "Quản lý thông báo",
        icon: <NotificationsActiveIcon/>,
        link: ""
    },
]
// Chú ý đường dẫn task assign, chưa có đường dẫn noti, chưa có đường dẫn route management