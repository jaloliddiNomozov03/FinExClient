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
      positioneSider: "static",
    };
  }
  onBreakpoint = (broken) => {
    console.log(broken);
    broken
      ? this.setState({
          positioneSider: "absolute",
        })
      : this.setState({
          positioneSider: "static",
        });
  };

  render() {
    return (
      <Sider
        breakpoint="lg"
        onBreakpoint={this.onBreakpoint}
        collapsedWidth="0"
        style={{
          position: this.state.positioneSider,
          zIndex: 5,
          top: 0,
          left: 0,
          bottom: 0,
        }}
      >
        <div className="logo">
          <img src={logogo} className="logogo" alt="logo" />
        </div>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<HomeOutlined />}>
            Quick menu
          </Menu.Item>
          <Menu.Item key="docs" icon={<FolderOutlined />}>
            <Link to="/Documents">Документы</Link>
          </Menu.Item>
          <Menu.Item key="sub2" icon={<PieChartOutlined />} title="Xisobotlar">
            <Link to="/Xisobotlar">Xisobotlar</Link>
          </Menu.Item>
          <Menu.Item key="reg" icon={<DatabaseOutlined />}>
            <Link to="/Registrlar">
              <span>Registrlar</span>
            </Link>
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
