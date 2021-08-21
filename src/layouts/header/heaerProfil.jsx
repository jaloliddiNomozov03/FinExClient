import React from "react";
import { Menu, Row, Col } from "antd";
const HeaderOfProfil = () => {
    return (
       
                <Menu style={{ width: '100%' }} theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
                    <Menu.Item key="profill-1">
                        <span style={{ color: 'black' }} >  .</span>
                    </Menu.Item>
                </Menu>
           
    );
};
export default HeaderOfProfil;
