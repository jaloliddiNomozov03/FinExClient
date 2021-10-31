import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const HeaderOfXisobotlar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
      <Menu.Item key="nav-xis-1">
        <Link to="/Xisobotlar/AktSverka">AktSverka</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-2">
        <Link to="/Xisobotlar/Bank">Bank</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-3">
        <Link to="/Xisobotlar/Daxodi">Daxodi</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-4">
        <Link to="/Xisobotlar/Kassa">Kassa</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-5">
        <Link to="/Xisobotlar/KireditOborot">KireditOborot</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-6">
        <Link to="/Xisobotlar/KriditTori">KriditTori</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-7">
        <Link to="/Xisobotlar/Servis">Servis</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-8">
        <Link to="/Xisobotlar/Tavar">Tavar</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-9">
        <Link to="/Xisobotlar/TavarBoyichaXisobod">TavarBoyichaXisobod</Link>
      </Menu.Item>
      <Menu.Item key="nav-xis-10">
        <Link to="/Xisobotlar/Xarajatlar">Xarajatlar</Link>
      </Menu.Item>
    </Menu>
  );
};
export default HeaderOfXisobotlar;
