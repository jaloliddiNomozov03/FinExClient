import { Layout, Menu } from "antd";

import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons";
import { Link, Route, Switch } from "react-router-dom";

const { SubMenu } = Menu;
const { Content, Sider } = Layout;

const AccessContent = () => {
  return (
    <Layout className="site-layout-background" style={{ padding: "24px 0" }}>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <Menu.Item icon={<UserOutlined />}>
            <Link to="/Settings/Access/provedenie">Provedenie</Link>
          </Menu.Item>
          <Menu.Item key="redoktirovat" icon={<LaptopOutlined />}>
            <Link to="/Settings/Access/redoktirovat">Redoktirovat</Link>
          </Menu.Item>
          <Menu.Item key="udalenie" icon={<NotificationOutlined />}>
            <Link to="/Settings/Access/udalenie">Udalenie</Link>
          </Menu.Item>
          <Menu.Item key="superAdmin" icon={<NotificationOutlined />}>
            <Link to="/Settings/Access/superAdmin">SuperAdmin</Link>
          </Menu.Item>
          <Menu.Item key="adminstrator" icon={<NotificationOutlined />}>
            <Link to="/Settings/Access/adminstrator">Adminstrator</Link>
          </Menu.Item>
          <Menu.Item key="manager" icon={<NotificationOutlined />}>
            <Link to="/Settings/Access/manager">Manager</Link>
          </Menu.Item>
          <Menu.Item key="kassir" icon={<NotificationOutlined />}>
            <Link to="/Settings/Access/kassir">Kassir</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{ height: "100%" }}
        >
          <Switch>
            <Route path="/Settings/Access/provedenie">
              <Menu key="provedenie" mode="vertical">
                <Menu.Item key="prv-1">
                  <Link to="/Settings/Access/provedenie/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="prv-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="prv-3">
                  <Link to="/Settings/Access/provedenie/Documents">
                    Documents
                  </Link>
                </Menu.Item>
                <Menu.Item key="prv-4">
                  <Link to="/Settings/Access/provedenie/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/provedenie">
              <Menu.Item key="5">option5</Menu.Item>
              <Menu.Item key="6">option6</Menu.Item>
              <Menu.Item key="7">option7</Menu.Item>
              <Menu.Item key="8">option8</Menu.Item>
            </Route>
            <Route path="/Settings/Access/udalenie">
              <SubMenu key="udalenie" icon={<NotificationOutlined />}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Route>
            <Route path="/Settings/Access/superAdmin">
              <SubMenu key="superAdmin" icon={<NotificationOutlined />}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Route>
            <Route path="/Settings/Access/adminstrator">
              <SubMenu key="adminstrator" icon={<NotificationOutlined />}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Route>
            <Route path="/Settings/Access/manager">
              <SubMenu key="manager" icon={<NotificationOutlined />}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Route>
            <Route path="/Settings/Access/kassir">
              <SubMenu key="kassir" icon={<NotificationOutlined />}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Route>
          </Switch>
        </Menu>
      </Sider>
      <Sider className="site-layout-background" width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          style={{
            height: "70vh",
            padding: "0px",
            overflow: "scroll",
            overflowX: "hidden",
          }}
        >
          <Switch>
            <Route path="/Settings/Access/provedenie/obshie">
              <Menu key="provedenie-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar">
              <Menu key="provedenie-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/provedenie/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/provedenie/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/provedenie/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents">
              <Menu key="provedenie-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/provedenie/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/provedenie/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/provedenie/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents">
              <Menu.Item key="prv-4">Konstantalar</Menu.Item>
            </Route>
          </Switch>
        </Menu>
      </Sider>

      <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
    </Layout>
  );
};
export default AccessContent;
