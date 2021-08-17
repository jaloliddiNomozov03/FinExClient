import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";

const HeaderOfSpravochniklar = () => {
  return (
    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
      <Menu.Item key="nav-1">
        <Link to="/Spravochniklar/mahsulotTuri">mahsulotTuri</Link>
      </Menu.Item>
      <Menu.Item key="nav-2">
        <Link to="/Spravochniklar/narxTuri">narxTuri</Link>
      </Menu.Item>
      <Menu.Item key="nav-3">
        <Link to="/Spravochniklar/nomenklatura">nomenklatura</Link>
      </Menu.Item>
      <Menu.Item key="nav-4">
        <Link to="/Spravochniklar/partiya">Partiya</Link>
      </Menu.Item>
      <Menu.Item key="nav-5">
        <Link to="/Spravochniklar/ulchovBirligi">ulchovBirligi</Link>
      </Menu.Item>
      <Menu.Item key="nav-6">
        <Link to="/Spravochniklar/bankXisobRaqamlari">bankXisobRaqamlari</Link>
      </Menu.Item>
      <Menu.Item key="nav-7">
        <Link to="/Spravochniklar/bulimlar">bulimlar</Link>
      </Menu.Item>
      <Menu.Item key="nav-8">
        <Link to="/Spravochniklar/valyutalar">valyutalar</Link>
      </Menu.Item>
      <Menu.Item key="nav-9">
        <Link to="/Spravochniklar/kassalar">kassalar</Link>
      </Menu.Item>
      <Menu.Item key="nav-10">
        <Link to="/Spravochniklar/omborlar">omborlar</Link>
      </Menu.Item>
      <Menu.Item key="nav-11">
        <Link to="/Spravochniklar/filial">filial</Link>
      </Menu.Item>
      <Menu.Item key="nav-12">
        <Link to="/Spravochniklar/firma">firma</Link>
      </Menu.Item>
      <Menu.Item key="nav-13">
        <Link to="/Spravochniklar/chiqimTuri">chiqimTuri</Link>
      </Menu.Item>
      <Menu.Item key="nav-14">
        <Link to="/Spravochniklar/bulim"> Bo'lim</Link>
      </Menu.Item>
      <Menu.Item key="nav-15">
        <Link to="/Spravochniklar/foydalanuvchi"> Foydalanuvchi</Link>
      </Menu.Item>
      <Menu.Item key="nav-16">
        <Link to="/Spravochniklar/kontragent">Kontragent</Link>
      </Menu.Item>
      <Menu.Item key="nav-17">
        <Link to="/Spravochniklar/xodim">Xodimlar</Link>
      </Menu.Item>
    </Menu>
  );
};
export default HeaderOfSpravochniklar;
