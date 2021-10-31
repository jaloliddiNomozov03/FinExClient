import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const HeaderOfSettings = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
                <Menu.Item key="set-1">
                    <Link to="/Settings/Access">Access</Link>
                </Menu.Item>
                <Menu.Item key="set-2">
                    <Link to="/Settings/mainSettings">main Settings</Link>
                </Menu.Item>
                <Menu.Item key="set-3">
                    <Link to="/Settings/konstantalar">Konstantalar</Link>
                </Menu.Item>
                <Menu.Item key="set-4">
                    <Link to="/Settings/other" >Another</Link>
                </Menu.Item>
            </Menu>
    );
};
export default HeaderOfSettings;
