import React, { useState } from 'react'
import './Navbar.css'
import { Menu, Button } from 'antd'
import { AppstoreOutlined, RightSquareOutlined, LeftSquareOutlined } from '@ant-design/icons'

const Navbar = () => {

    const [collapsed, setCollapsed] = useState(true);
    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    };

    function getItem(key, icon, title, link) {
        return (
            <Menu.Item key={key} icon={icon}>
                <a href={link}>{title}</a>
            </Menu.Item>
        )
    }

    const items = [
        <Button type="default" onClick={toggleCollapsed} style={{ margin: "20px" }}>
            {collapsed ? <RightSquareOutlined /> : <LeftSquareOutlined />}
        </Button>,
        getItem("home", <AppstoreOutlined />, "Dashboard", "/"),
    ]

    return (
        <div className="menu">

            <Menu mode='inline' theme='dark' inlineCollapsed={collapsed} style={{
                maxWidth: "30%",
                minHeight: "100vh",
                overflow: "hidden",
                zIndex: "1000",
                position: "fixed",

            }}>
                {items}
            </Menu>

        </div>
    )
}

export default Navbar