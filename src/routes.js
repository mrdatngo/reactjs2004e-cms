import React from "react";
// import AddStudent from './views/components/AddStudent'
// import ListStudent from './views/components/ListStudent'
import {
    DesktopOutlined,
    UserOutlined,
    FileOutlined,
    TeamOutlined,
} from "@ant-design/icons";

const AddStudent = React.lazy((comp) =>
    // new Promise(resolve => {
    //     setTimeout(() => {
            // resolve(import("./views/components/AddStudent"))
    //     }, 5000)
    // })
    import("./views/components/AddStudent")
);
const ListStudent = React.lazy(() => import("./views/components/ListStudent"));
const ComponentStyle = React.lazy(() => import("./views/styles/ComponentStyle"));
const ComponentStyle2 = React.lazy(() => import("./views/styles/ComponentStyle2"));

const routes = [
    {
        path: "/test",
        name: "Test",
        icon: <DesktopOutlined />,
        component: <div>Test</div>,
    },
    {
        path: "/style-component",
        name: "Style Component",
        icon: <DesktopOutlined />,
        children: [
            {
                path: "/style-component1",
                name: "Style 1",
                icon: <FileOutlined />,
                component: <ComponentStyle />,
            },
            {
                path: "/style-component2",
                name: "Style 2",
                icon: <TeamOutlined />,
                component: <ComponentStyle2 />,
            },
        ],
    },
    {
        path: "/student", // not use if have children
        name: "Student",
        icon: <UserOutlined />,
        children: [
            {
                path: "/add-student",
                name: "Add Student",
                icon: <FileOutlined />,
                component: <AddStudent />,
            },
            {
                path: "/students",
                name: "Students",
                icon: <TeamOutlined />,
                component: <ListStudent />,
            },
        ],
    },
];

export default routes;
