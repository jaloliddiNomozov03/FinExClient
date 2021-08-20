import React from "react";
import { Menu } from "antd";
const HeaderOfProfil = () => {
    return ( <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
                             {/* Vse Document */}
                <Menu.Item key="profill-1">
                   Profil...
                </Menu.Item>
                
            </Menu>
    );
};
export default HeaderOfProfil;
