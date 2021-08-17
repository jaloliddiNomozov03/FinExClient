import React from "react";
import logogo from "../../logo.svg";
import { Link } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    DesktopOutlined,
    HomeOutlined,
    DatabaseOutlined,
    PieChartOutlined,
    FolderOutlined,
    FileDoneOutlined,
    SendOutlined,
    SettingOutlined,
} from "@ant-design/icons";


const { Sider } = Layout;

class SiderBase extends React.Component {
  constructor() {
    super();
    this.state = {
      collapsed: false,
    };
  }
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    const { collapsed } = this.state;
    return (
      <Sider collapsible collapsed={collapsed} onCollapse={this.onCollapse}>
        <div className="logo">
          <img src={logogo} className="logogo" alt="logo" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Quick menu
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
            Option 2
          </Menu.Item>
          <Menu.Item key="docs" icon={<FolderOutlined />} >
            <Link to="/Documents">Документы</Link>
          </Menu.Item>
          <Menu.Item key="sub2" icon={<PieChartOutlined />} title="Xisobotlar">
            <Link to="/Xisobotlar">Xisobotlar</Link>
          </Menu.Item>
          <Menu.Item key="reg"   icon={<DatabaseOutlined  />}>
            <Link to='/Registrlar' > <span  >Registrlar</span> </Link>
          </Menu.Item>
          <Menu.Item key="spr" icon={<FileDoneOutlined />}>
           <Link to="/Spravochniklar">Spravochniklar</Link>
          </Menu.Item>
          <Menu.Item key="set" icon={<SettingOutlined />}>
           <Link to="/Settings">Settings</Link>
          </Menu.Item>
          <Menu.Item key="tgb" icon={<SendOutlined />}>
            Telegram bot
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
export default SiderBase;
