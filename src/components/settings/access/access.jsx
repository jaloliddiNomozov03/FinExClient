import { Layout, Menu } from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { SubMenu } = Menu;
const {  Content,  Sider } = Layout;

const AccessContent = () => {
  const TitleProvedenie = <Link to="/Settings/Access/provedenie">Provedenie</Link>
  const TitleRedaktirovat = <Link to="/Settings/Access/redoktirovat">Redoktirovat</Link>
  const TitleUdalenie = <Link to="/Settings/Access/udalenie">Udalenie</Link>
  const TitleSuperAdmin = <Link to="/Settings/Access/superAdmin">SuperAdmin</Link>
  const TitleAdminstrator = <Link to="/Settings/Access/adminstrator">Adminstrator</Link>
  const TitleManager = <Link to="/Settings/Access/manager">Manager</Link>
  const TitleKassir = <Link to="/Settings/Access/kassir">Kassir</Link>
  return (
  <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        style={{ height: "100%" }}
      >
        <SubMenu icon={<UserOutlined />} title={TitleProvedenie}>
        <Menu key="provedenie" mode="vertical" >
          <Menu.Item key="prv-1">Obshie</Menu.Item>
          <SubMenu key="prv-2" title="Spravochniklar">
            <Menu.Item key="sprav-1">BankHisobRaqamlari</Menu.Item>
            <Menu.Item key="sprav-2">Bulimlar</Menu.Item>
            <Menu.Item key="sprav-3">ChiqimTuri</Menu.Item>
            <Menu.Item key="sprav-4">Filial</Menu.Item>
            <Menu.Item key="sprav-5">Firma</Menu.Item>
            <Menu.Item key="sprav-6">Kassalar</Menu.Item>
            <Menu.Item key="sprav-7">Omborlar</Menu.Item>
            <Menu.Item key="sprav-8">Valyutalar</Menu.Item>
            <Menu.Item key="sprav-9">MahsulotTuri</Menu.Item>
            <Menu.Item key="sprav-10">NarxTuri</Menu.Item>
            <Menu.Item key="sprav-11">Nomenklatura</Menu.Item>
            <Menu.Item key="sprav-12">Partiya</Menu.Item>
            <Menu.Item key="sprav-13">UlchovBirligi</Menu.Item>
            <Menu.Item key="sprav-14">Bulim</Menu.Item>
            <Menu.Item key="sprav-15">Foydalanuvchi</Menu.Item>
            <Menu.Item key="sprav-16">Kontragent</Menu.Item>
            <Menu.Item key="sprav-17">Xodim</Menu.Item>
          </SubMenu>
          <SubMenu key="prv-3" title="Documents">
             <Menu.Item key="doc-1">PrixodBank</Menu.Item> 
             <Menu.Item key="doc-2">RasxodBank</Menu.Item> 
             <Menu.Item key="doc-3">OchistitDp</Menu.Item> 
             <Menu.Item key="doc-4">VseDocument</Menu.Item> 
             <Menu.Item key="doc-5">Raschet</Menu.Item> 
             <Menu.Item key="doc-6">Rasxod</Menu.Item> 
             <Menu.Item key="doc-8">IshlabChiqarish</Menu.Item> 
             <Menu.Item key="doc-9">KassagaNaqdPulTushumi</Menu.Item> 
             <Menu.Item key="doc-10">KassagaNaqdPulChiqimi</Menu.Item> 
             <Menu.Item key="doc-11">Intervizatsiya</Menu.Item> 
             <Menu.Item key="doc-12">PastupleniyaTovara</Menu.Item> 
             <Menu.Item key="doc-13">PeremesheniyaTovara</Menu.Item> 
             <Menu.Item key="doc-14">SpisaniyaTovara</Menu.Item> 
             <Menu.Item key="doc-15">MahsulotlarniKlientdanQaytarish</Menu.Item> 
             <Menu.Item key="doc-16">MahsulotlarniYukBeruvchigaQaytarish</Menu.Item> 
             <Menu.Item key="doc-17">BankQoldiqlariniKiritish</Menu.Item> 
             <Menu.Item key="doc-18">KassaQoldiqlariniKiritish</Menu.Item> 
             <Menu.Item key="doc-19">MahsulotQoldiqlariniKiritish</Menu.Item> 
             <Menu.Item key="doc-20">QarzdorlikQoldiqlariniKiritish</Menu.Item> 
             <Menu.Item key="doc-21">XodimlarQoldigi</Menu.Item> 
             <Menu.Item key="doc-22">Savdo</Menu.Item> 
             <Menu.Item key="doc-23">Servis</Menu.Item> 
          </SubMenu>
          <Menu.Item key="prv-4">Konstantalar</Menu.Item>
        </Menu>
        </SubMenu>
        <SubMenu key="redoktirovat" icon={<LaptopOutlined />} title={TitleRedaktirovat}>
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="udalenie" icon={<NotificationOutlined />} title={TitleUdalenie}>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <SubMenu key="superAdmin" icon={<NotificationOutlined />} title={TitleSuperAdmin}>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <SubMenu key="adminstrator" icon={<NotificationOutlined />} title={TitleAdminstrator}>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <SubMenu key="manager" icon={<NotificationOutlined />} title={TitleManager}>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <SubMenu key="kassir" icon={<NotificationOutlined />} title={TitleKassir}>
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
    <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
  </Layout>
)}
export default AccessContent;
