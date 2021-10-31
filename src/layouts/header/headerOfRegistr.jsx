import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const HeaderOfRegistor = () => {
    return (
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
                <Menu.Item key="nav-1">
                    <Link to="/Registrlar/Bank">Bank</Link>
                </Menu.Item>
                <Menu.Item key="nav-2">
                    <Link to="/Registrlar/Bonus">Bonus</Link>
                </Menu.Item>
                <Menu.Item key="nav-3">
                    <Link to="/Registrlar/DataPogasheniya">DataPogasheniya</Link>
                </Menu.Item>
                <Menu.Item key="nav-4">
                    <Link to="/Registrlar/Daxodi" >Daxodi</Link>
                </Menu.Item>
                <Menu.Item key="nav-5">
                    <Link to="/Registrlar/Kassa">Kassa</Link>
                </Menu.Item>
                <Menu.Item key="nav-6">
                    <Link to="/Registrlar/KursValyuta">
                        KursValyuta
                    </Link>
                </Menu.Item>
                <Menu.Item key="nav-7">
                    <Link to="/Registrlar/Prodaji">Prodaji</Link>
                </Menu.Item>
                <Menu.Item key="nav-8">
                    <Link to="/Registrlar/RaschetCRabochi">RaschetCRabochi</Link>
                </Menu.Item>
                <Menu.Item key="nav-9">
                    <Link to="/Registrlar/Rasxodi">Rasxodi</Link>
                </Menu.Item>
                <Menu.Item key="nav-10">
                    <Link to="/Registrlar/SenaNamenKlatura">SenaNamenKlatura</Link>
                </Menu.Item>
                <Menu.Item key="nav-11">
                    <Link to="/Registrlar/TavarNaSklad">TavarNaSklad</Link>
                </Menu.Item>
                <Menu.Item key="nav-12">
                    <Link to="/Registrlar/Test">Test</Link>
                </Menu.Item>
                <Menu.Item key="nav-13">
                    <Link to="/Registrlar/Vzoimorascheti">Vzoimorascheti</Link>
                </Menu.Item>
            </Menu>
    );
};
export default HeaderOfRegistor;
