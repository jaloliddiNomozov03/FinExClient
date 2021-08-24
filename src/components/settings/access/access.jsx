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
            <Route path="/Settings/Access/redoktirovat">
              <Menu key="redoktirovat" mode="vertical">
                <Menu.Item key="red-1">
                  <Link to="/Settings/Access/redoktirovat/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="red-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="red-3">
                  <Link to="/Settings/Access/redoktirovat/Documents">
                    Documents
                  </Link>
                </Menu.Item>
                <Menu.Item key="red-4">
                  <Link to="/Settings/Access/redoktirovat/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie">
              <Menu key="udalenie" mode="vertical">
                <Menu.Item key="udal-1">
                  <Link to="/Settings/Access/udalenie/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="udal-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="udal-3">
                  <Link to="/Settings/Access/udalenie/Documents">
                    Documents
                  </Link>
                </Menu.Item>
                <Menu.Item key="udal-4">
                  <Link to="/Settings/Access/udalenie/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin">
              <Menu key="superAdmin" mode="vertical">
                <Menu.Item key="supAd-1">
                  <Link to="/Settings/Access/superAdmin/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="supAd-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="supAd-3">
                  <Link to="/Settings/Access/superAdmin/Documents">
                    Documents
                  </Link>
                </Menu.Item>
                <Menu.Item key="supAd-4">
                  <Link to="/Settings/Access/superAdmin/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator">
              <Menu key="adminstrator" mode="vertical">
                <Menu.Item key="adm-1">
                  <Link to="/Settings/Access/adminstrator/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="adm-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="adm-3">
                  <Link to="/Settings/Access/adminstrator/Documents">
                    Documents
                  </Link>
                </Menu.Item>
                <Menu.Item key="adm-4">
                  <Link to="/Settings/Access/adminstrator/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager">
              <Menu key="manager" mode="vertical">
                <Menu.Item key="mng-1">
                  <Link to="/Settings/Access/manager/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="mng-2">
                  <Link to="/Settings/Access/manager/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="mng-3">
                  <Link to="/Settings/Access/manager/Documents">Documents</Link>
                </Menu.Item>
                <Menu.Item key="mng-4">
                  <Link to="/Settings/Access/manager/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir">
              <Menu key="kassir" mode="vertical">
                <Menu.Item key="ksr-1">
                  <Link to="/Settings/Access/kassir/obshie">Obshie</Link>
                </Menu.Item>
                <Menu.Item key="ksr-2">
                  <Link to="/Settings/Access/kassir/spravochniklar">
                    Spravochniklar
                  </Link>
                </Menu.Item>
                <Menu.Item key="ksr-3">
                  <Link to="/Settings/Access/kassir/Documents">Documents</Link>
                </Menu.Item>
                <Menu.Item key="ksr-4">
                  <Link to="/Settings/Access/kassir/konstantalar">
                    Konstantalar
                  </Link>
                </Menu.Item>
              </Menu>
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
            {/* --------provedenie------ */}
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
            {/* -------redaktirovat-----*/}
            <Route path="/Settings/Access/redoktirovat/obshie">
              <Menu key="redoktirovat-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar">
              <Menu key="redoktirovat-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents">
              <Menu key="redoktirovat-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/redoktirovat/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents">
              <Menu.Item key="kons-4">Konstantalar</Menu.Item>
            </Route>
            {/* --------udalenie--------*/}
            <Route path="/Settings/Access/udalenie/obshie">
              <Menu key="udalenie-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar">
              <Menu key="udalenie-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/udalenie/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/udalenie/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/udalenie/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents">
              <Menu key="udalenie-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/udalenie/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/udalenie/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/udalenie/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents">
              <Menu.Item key="kons-4">Konstantalar</Menu.Item>
            </Route>
            {/* ---------superAdmin--------- */}
            <Route path="/Settings/Access/superAdmin/obshie">
              <Menu key="superAdmin-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar">
              <Menu key="superAdmin-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents">
              <Menu key="superAdmin-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/superAdmin/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/superAdmin/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/superAdmin/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents">
              <Menu.Item key="kons-4">Konstantalar</Menu.Item>
            </Route>
            {/* -------adminstrator-------- */}
            <Route path="/Settings/Access/adminstrator/obshie">
              <Menu key="adminstrator-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar">
              <Menu key="adminstrator-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents">
              <Menu key="adminstrator-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/adminstrator/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/adminstrator/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/adminstrator/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents">
              <Menu.Item key="kons-4">Konstantalar</Menu.Item>
            </Route>
            {/* --------manager-------- */}
            <Route path="/Settings/Access/manager/obshie">
              <Menu key="manager-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar">
              <Menu key="manager-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/manager/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/manager/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/manager/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/manager/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/manager/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/manager/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/manager/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/manager/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/manager/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents">
              <Menu key="manager-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/manager/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/manager/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/manager/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/manager/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/manager/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/manager/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents">
              <Menu.Item key="kons-4">Konstantalar</Menu.Item>
            </Route>
            {/* ------------kassir--------- */}
            <Route path="/Settings/Access/kassir/obshie">
              <Menu key="kassir-opt" mode="vertical">
                <Menu.Item key="obsh-1">Option</Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar">
              <Menu key="kassir-spr" mode="vertical">
                <Menu.Item key="sprav-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari">
                    BankHisobRaqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulimlar">
                    Bulimlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/ChiqimTuri">
                    ChiqimTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-5">
                  <Link to="/Settings/Access/kassir/spravochniklar/Firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-6">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kassalar">
                    Kassalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-7">
                  <Link to="/Settings/Access/kassir/spravochniklar/Omborlar">
                    Omborlar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-8">
                  <Link to="/Settings/Access/kassir/spravochniklar/Valyutalar">
                    Valyutalar
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-9">
                  <Link to="/Settings/Access/kassir/spravochniklar/MahsulotTuri">
                    MahsulotTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-10">
                  <Link to="/Settings/Access/kassir/spravochniklar/NarxTuri">
                    NarxTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-11">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura">
                    Nomenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-12">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya">
                    Partiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-13">
                  <Link to="/Settings/Access/kassir/spravochniklar/UlchovBirligi">
                    UlchovBirligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-14">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-15">
                  <Link to="/Settings/Access/kassir/spravochniklar/Foydalanuvchi">
                    Foydalanuvchi
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-16">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="sprav-17">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim">
                    Xodim
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents">
              <Menu key="kassir-docs" mode="vertical">
                <Menu.Item key="doc-1">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank">
                    PrixodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-2">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank">
                    RasxodBank
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-3">
                  <Link to="/Settings/Access/kassir/Documents/OchistitDp">
                    OchistitDp
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-4">
                  <Link to="/Settings/Access/kassir/Documents/VseDocument">
                    VseDocument
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-5">
                  <Link to="/Settings/Access/kassir/Documents/Raschet">
                    Raschet
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-6">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod">
                    Rasxod
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-8">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish">
                    IshlabChiqarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-9">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi">
                    KassagaNaqdPulTushumi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-10">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi">
                    KassagaNaqdPulChiqimi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-11">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya">
                    Intervizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-12">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara">
                    PastupleniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-13">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara">
                    PeremesheniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-14">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara">
                    SpisaniyaTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-15">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish">
                    MahsulotlarniKlientdanQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-16">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish">
                    MahsulotlarniYukBeruvchigaQaytarish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-17">
                  <Link to="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish">
                    BankQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-18">
                  <Link to="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish">
                    KassaQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-19">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish">
                    MahsulotQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-20">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish">
                    QarzdorlikQoldiqlariniKiritish
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-21">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi">
                    XodimlarQoldigi
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-22">
                  <Link to="/Settings/Access/kassir/Documents/Savdo">
                    Savdo
                  </Link>
                </Menu.Item>
                <Menu.Item key="doc-23">
                  <Link to="/Settings/Access/kassir/Documents/Servis">
                    Servis
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents">
              <Menu.Item key="kons-4">Konstantalar</Menu.Item>
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
            {/* -----------provedenie-spravochniklar----------- */}
            <Route path="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari">
              <Menu key="provedenie-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/provedenie/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Bulimlar">
              <Menu key="provedenie-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/ChiqimTuri">
              <Menu key="provedenie-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Filial">
              <Menu key="provedenie-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Firma">
              <Menu key="provedenie-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Kassalar">
              <Menu key="provedenie-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Omborlar">
              <Menu key="provedenie-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Valyutalar">
              <Menu key="provedenie-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/MahsulotTuri">
              <Menu key="provedenie-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/NarxTuri">
              <Menu key="provedenie-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Nomenklatura">
              <Menu key="provedenie-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Partiya">
              <Menu key="provedenie-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/UlchovBirligi">
              <Menu key="provedenie-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Bulim">
              <Menu key="provedenie-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Foydalanuvchi">
              <Menu key="provedenie-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Kontragent">
              <Menu key="provedenie-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/spravochniklar/Xodim">
              <Menu key="provedenie-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/provedenie/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------provedenie-Documents---------- */}
            <Route path="/Settings/Access/provedenie/Documents/PrixodBank">
              <Menu key="provedenie-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/provedenie/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/RasxodBank">
              <Menu key="provedenie-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/provedenie/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/OchistitDP">
              <Menu key="provedenie-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/provedenie/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/provedenie/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/provedenie/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/VseDocument">
              <Menu key="provedenie-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/provedenie/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/provedenie/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/provedenie/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/provedenie/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/provedenie/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/Raschet">
              <Menu key="provedenie-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/provedenie/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/Rasxod">
              <Menu key="provedenie-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/provedenie/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/IshlabChiqarish">
              <Menu key="provedenie-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/provedenie/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi">
              <Menu key="provedenie-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi">
              <Menu key="provedenie-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/provedenie/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/Intervizatsiya">
              <Menu key="provedenie-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/provedenie/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/PostupleniyaTovara">
              <Menu key="provedenie-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/provedenie/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/PeremesheniyaTovara">
              <Menu key="provedenie-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/provedenie/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/SpisaniyaTovara">
              <Menu key="provedenie-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/provedenie/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="provedenie-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="provedenie-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish">
              <Menu key="provedenie-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/provedenie/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish">
              <Menu key="provedenie-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/provedenie/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="provedenie-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/provedenie/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="provedenie-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/provedenie/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/XodimlarQoldigi">
              <Menu key="provedenie-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/provedenie/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/Savdo">
              <Menu key="provedenie-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/provedenie/Documents/Servis">
              <Menu key="provedenie-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/provedenie/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* -----------redoktirovat-spravochniklar----------- */}
            <Route path="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari">
              <Menu key="redoktirovat-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Bulimlar">
              <Menu key="redoktirovat-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/ChiqimTuri">
              <Menu key="redoktirovat-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Filial">
              <Menu key="redoktirovat-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Firma">
              <Menu key="redoktirovat-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Kassalar">
              <Menu key="redoktirovat-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Omborlar">
              <Menu key="redoktirovat-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Valyutalar">
              <Menu key="redoktirovat-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/MahsulotTuri">
              <Menu key="redoktirovat-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/NarxTuri">
              <Menu key="redoktirovat-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura">
              <Menu key="redoktirovat-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Partiya">
              <Menu key="redoktirovat-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/UlchovBirligi">
              <Menu key="redoktirovat-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Bulim">
              <Menu key="redoktirovat-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Foydalanuvchi">
              <Menu key="redoktirovat-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Kontragent">
              <Menu key="redoktirovat-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/spravochniklar/Xodim">
              <Menu key="redoktirovat-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/redoktirovat/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------redoktirovat-Documents---------- */}
            <Route path="/Settings/Access/redoktirovat/Documents/PrixodBank">
              <Menu key="redoktirovat-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/redoktirovat/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/RasxodBank">
              <Menu key="redoktirovat-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/redoktirovat/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/OchistitDP">
              <Menu key="redoktirovat-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/VseDocument">
              <Menu key="redoktirovat-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/Raschet">
              <Menu key="redoktirovat-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/Rasxod">
              <Menu key="redoktirovat-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/IshlabChiqarish">
              <Menu key="redoktirovat-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi">
              <Menu key="redoktirovat-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi">
              <Menu key="redoktirovat-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/Intervizatsiya">
              <Menu key="redoktirovat-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara">
              <Menu key="redoktirovat-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/redoktirovat/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara">
              <Menu key="redoktirovat-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara">
              <Menu key="redoktirovat-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="redoktirovat-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="redoktirovat-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish">
              <Menu key="redoktirovat-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish">
              <Menu key="redoktirovat-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="redoktirovat-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="redoktirovat-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi">
              <Menu key="redoktirovat-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/Savdo">
              <Menu key="redoktirovat-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/redoktirovat/Documents/Servis">
              <Menu key="redoktirovat-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/redoktirovat/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>

            {/* -----------superAdmin-spravochniklar----------- */}
            <Route path="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari">
              <Menu key="superAdmin-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Bulimlar">
              <Menu key="superAdmin-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/ChiqimTuri">
              <Menu key="superAdmin-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Filial">
              <Menu key="superAdmin-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Firma">
              <Menu key="superAdmin-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Kassalar">
              <Menu key="superAdmin-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Omborlar">
              <Menu key="superAdmin-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Valyutalar">
              <Menu key="superAdmin-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/MahsulotTuri">
              <Menu key="superAdmin-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/NarxTuri">
              <Menu key="superAdmin-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Nomenklatura">
              <Menu key="superAdmin-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Partiya">
              <Menu key="superAdmin-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/UlchovBirligi">
              <Menu key="superAdmin-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Bulim">
              <Menu key="superAdmin-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Foydalanuvchi">
              <Menu key="superAdmin-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Kontragent">
              <Menu key="superAdmin-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/spravochniklar/Xodim">
              <Menu key="superAdmin-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/superAdmin/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------superAdmin-Documents---------- */}
            <Route path="/Settings/Access/superAdmin/Documents/PrixodBank">
              <Menu key="superAdmin-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/superAdmin/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/RasxodBank">
              <Menu key="superAdmin-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/superAdmin/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/OchistitDP">
              <Menu key="superAdmin-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/superAdmin/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/superAdmin/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/superAdmin/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/VseDocument">
              <Menu key="superAdmin-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/superAdmin/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/superAdmin/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/superAdmin/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/superAdmin/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/superAdmin/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/Raschet">
              <Menu key="superAdmin-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/superAdmin/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/Rasxod">
              <Menu key="superAdmin-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/superAdmin/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/IshlabChiqarish">
              <Menu key="superAdmin-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/superAdmin/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi">
              <Menu key="superAdmin-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi">
              <Menu key="superAdmin-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/superAdmin/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/Intervizatsiya">
              <Menu key="superAdmin-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/superAdmin/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/PostupleniyaTovara">
              <Menu key="superAdmin-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/superAdmin/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara">
              <Menu key="superAdmin-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/superAdmin/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/SpisaniyaTovara">
              <Menu key="superAdmin-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/superAdmin/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="superAdmin-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="superAdmin-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish">
              <Menu key="superAdmin-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/superAdmin/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish">
              <Menu key="superAdmin-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/superAdmin/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="superAdmin-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/superAdmin/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="superAdmin-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/superAdmin/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/XodimlarQoldigi">
              <Menu key="superAdmin-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/superAdmin/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/Savdo">
              <Menu key="superAdmin-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/superAdmin/Documents/Servis">
              <Menu key="superAdmin-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/superAdmin/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>

            {/* -----------udalenie-spravochniklar----------- */}
            <Route path="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari">
              <Menu key="udalenie-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/udalenie/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Bulimlar">
              <Menu key="udalenie-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/ChiqimTuri">
              <Menu key="udalenie-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Filial">
              <Menu key="udalenie-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Firma">
              <Menu key="udalenie-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Kassalar">
              <Menu key="udalenie-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Omborlar">
              <Menu key="udalenie-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Valyutalar">
              <Menu key="udalenie-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/MahsulotTuri">
              <Menu key="udalenie-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/NarxTuri">
              <Menu key="udalenie-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Nomenklatura">
              <Menu key="udalenie-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Partiya">
              <Menu key="udalenie-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/UlchovBirligi">
              <Menu key="udalenie-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Bulim">
              <Menu key="udalenie-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Foydalanuvchi">
              <Menu key="udalenie-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Kontragent">
              <Menu key="udalenie-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/spravochniklar/Xodim">
              <Menu key="udalenie-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/udalenie/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------udalenie-Documents---------- */}
            <Route path="/Settings/Access/udalenie/Documents/PrixodBank">
              <Menu key="udalenie-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/udalenie/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/RasxodBank">
              <Menu key="udalenie-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/udalenie/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/OchistitDP">
              <Menu key="udalenie-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/udalenie/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/udalenie/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/udalenie/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/VseDocument">
              <Menu key="udalenie-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/udalenie/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/udalenie/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/udalenie/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/udalenie/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/udalenie/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/Raschet">
              <Menu key="udalenie-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/udalenie/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/Rasxod">
              <Menu key="udalenie-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/udalenie/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/IshlabChiqarish">
              <Menu key="udalenie-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/udalenie/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi">
              <Menu key="udalenie-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi">
              <Menu key="udalenie-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/udalenie/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/Intervizatsiya">
              <Menu key="udalenie-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/udalenie/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/PostupleniyaTovara">
              <Menu key="udalenie-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/udalenie/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/PeremesheniyaTovara">
              <Menu key="udalenie-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/udalenie/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/SpisaniyaTovara">
              <Menu key="udalenie-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/udalenie/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="udalenie-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="udalenie-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish">
              <Menu key="udalenie-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/udalenie/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish">
              <Menu key="udalenie-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/udalenie/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="udalenie-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/udalenie/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="udalenie-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/udalenie/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/XodimlarQoldigi">
              <Menu key="udalenie-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/udalenie/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/Savdo">
              <Menu key="udalenie-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/udalenie/Documents/Servis">
              <Menu key="udalenie-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/udalenie/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* -----------adminstrator-spravochniklar----------- */}
            <Route path="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari">
              <Menu key="adminstrator-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Bulimlar">
              <Menu key="adminstrator-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/ChiqimTuri">
              <Menu key="adminstrator-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Filial">
              <Menu key="adminstrator-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Firma">
              <Menu key="adminstrator-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Kassalar">
              <Menu key="adminstrator-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Omborlar">
              <Menu key="adminstrator-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Valyutalar">
              <Menu key="adminstrator-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/MahsulotTuri">
              <Menu key="adminstrator-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/NarxTuri">
              <Menu key="adminstrator-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Nomenklatura">
              <Menu key="adminstrator-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Partiya">
              <Menu key="adminstrator-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/UlchovBirligi">
              <Menu key="adminstrator-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Bulim">
              <Menu key="adminstrator-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Foydalanuvchi">
              <Menu key="adminstrator-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Kontragent">
              <Menu key="adminstrator-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/spravochniklar/Xodim">
              <Menu key="adminstrator-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/adminstrator/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------adminstrator-Documents---------- */}
            <Route path="/Settings/Access/adminstrator/Documents/PrixodBank">
              <Menu key="adminstrator-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/adminstrator/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/RasxodBank">
              <Menu key="adminstrator-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/adminstrator/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/OchistitDP">
              <Menu key="adminstrator-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/adminstrator/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/adminstrator/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/adminstrator/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/VseDocument">
              <Menu key="adminstrator-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/adminstrator/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/adminstrator/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/adminstrator/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/adminstrator/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/adminstrator/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/Raschet">
              <Menu key="adminstrator-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/adminstrator/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/Rasxod">
              <Menu key="adminstrator-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/adminstrator/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/IshlabChiqarish">
              <Menu key="adminstrator-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/adminstrator/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi">
              <Menu key="adminstrator-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi">
              <Menu key="adminstrator-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/adminstrator/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/Intervizatsiya">
              <Menu key="adminstrator-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/adminstrator/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/PostupleniyaTovara">
              <Menu key="adminstrator-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/adminstrator/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara">
              <Menu key="adminstrator-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/adminstrator/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/SpisaniyaTovara">
              <Menu key="adminstrator-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/adminstrator/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="adminstrator-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="adminstrator-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish">
              <Menu key="adminstrator-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/adminstrator/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish">
              <Menu key="adminstrator-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/adminstrator/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="adminstrator-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/adminstrator/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="adminstrator-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/adminstrator/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/XodimlarQoldigi">
              <Menu key="adminstrator-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/adminstrator/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/Savdo">
              <Menu key="adminstrator-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/adminstrator/Documents/Servis">
              <Menu key="adminstrator-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/adminstrator/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* -----------manager-spravochniklar----------- */}
            <Route path="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari">
              <Menu key="manager-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/manager/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Bulimlar">
              <Menu key="manager-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/ChiqimTuri">
              <Menu key="manager-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/manager/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/manager/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/manager/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Filial">
              <Menu key="manager-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Firma">
              <Menu key="manager-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Kassalar">
              <Menu key="manager-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Omborlar">
              <Menu key="manager-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Valyutalar">
              <Menu key="manager-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/MahsulotTuri">
              <Menu key="manager-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/manager/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/manager/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/manager/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/NarxTuri">
              <Menu key="manager-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/manager/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/manager/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/manager/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Nomenklatura">
              <Menu key="manager-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/manager/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Partiya">
              <Menu key="manager-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/manager/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/UlchovBirligi">
              <Menu key="manager-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/manager/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/manager/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/manager/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Bulim">
              <Menu key="manager-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Foydalanuvchi">
              <Menu key="manager-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Kontragent">
              <Menu key="manager-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/manager/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/spravochniklar/Xodim">
              <Menu key="manager-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/manager/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------manager-Documents---------- */}
            <Route path="/Settings/Access/manager/Documents/PrixodBank">
              <Menu key="manager-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/manager/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/RasxodBank">
              <Menu key="manager-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/manager/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/OchistitDP">
              <Menu key="manager-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/manager/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/manager/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/manager/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/VseDocument">
              <Menu key="manager-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/manager/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/manager/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/manager/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/manager/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/manager/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/Raschet">
              <Menu key="manager-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/manager/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/manager/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/manager/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/manager/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/manager/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/manager/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/manager/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/manager/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/Rasxod">
              <Menu key="manager-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/manager/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/IshlabChiqarish">
              <Menu key="manager-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/manager/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi">
              <Menu key="manager-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi">
              <Menu key="manager-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/manager/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/Intervizatsiya">
              <Menu key="manager-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/manager/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/PostupleniyaTovara">
              <Menu key="manager-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/manager/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/PeremesheniyaTovara">
              <Menu key="manager-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/manager/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/SpisaniyaTovara">
              <Menu key="manager-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/manager/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="manager-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="manager-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/manager/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish">
              <Menu key="manager-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/manager/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish">
              <Menu key="manager-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/manager/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="manager-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/manager/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="manager-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/manager/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/XodimlarQoldigi">
              <Menu key="manager-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/manager/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/Savdo">
              <Menu key="manager-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/manager/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/manager/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/manager/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/manager/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/manager/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/manager/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/manager/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/manager/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/manager/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/manager/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/manager/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/manager/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/manager/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/manager/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/manager/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/manager/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/manager/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/manager/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/manager/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/manager/Documents/Servis">
              <Menu key="manager-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/manager/Documents/Savdo/n">N</Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/manager/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/manager/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/manager/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/manager/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/manager/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/manager/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/manager/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/manager/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/manager/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/manager/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* -----------kassir-spravochniklar----------- */}
            <Route path="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari">
              <Menu key="kassir-spr-BHR" mode="vertical">
                <Menu.Item key="BHR-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/Code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/accountNumber">
                    AccountNumber
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/address">
                    Address
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-5">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/direktor">
                    Direktor
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-6">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/mfi">
                    mfi
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-7">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/oked">
                    OKED
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-8">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/stir">
                    STIR
                  </Link>
                </Menu.Item>
                <Menu.Item key="BHR-9">
                  <Link to="/Settings/Access/kassir/spravochniklar/BankHisobRaqamlari/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Bulimlar">
              <Menu key="kassir-spr-bulim" mode="vertical">
                <Menu.Item key="bul-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulimlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulimlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulimlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="bul-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulimlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/ChiqimTuri">
              <Menu key="kassir-spr-chiqimTuri" mode="vertical">
                <Menu.Item key="chT-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/ChiqimTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/ChiqimTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="chT-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/ChiqimTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Filial">
              <Menu key="kassir-spr-filial" mode="vertical">
                <Menu.Item key="fil-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Filial/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Filial/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="fil-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Filial/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Firma">
              <Menu key="kassir-spr-firma" mode="vertical">
                <Menu.Item key="firm-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Firma/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Firma/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="firm-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Firma/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Kassalar">
              <Menu key="kassir-spr-kassa" mode="vertical">
                <Menu.Item key="kas-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kassalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kassalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kassalar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="kas-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kassalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Omborlar">
              <Menu key="kassir-spr-ombor" mode="vertical">
                <Menu.Item key="omb-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Omborlar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Omborlar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Omborlar/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="omb-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Omborlar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Valyutalar">
              <Menu key="kassir-spr-valyuta" mode="vertical">
                <Menu.Item key="val-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Valyutalar/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Valyutalar/rate">
                    Rate
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Valyutalar/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="val-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Valyutalar/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/MahsulotTuri">
              <Menu key="kassir-spr-mTuri" mode="vertical">
                <Menu.Item key="mTur-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/MahsulotTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/MahsulotTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="mTur-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/MahsulotTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/NarxTuri">
              <Menu key="kassir-spr-nTuri" mode="vertical">
                <Menu.Item key="nTur-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/NarxTuri/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/NarxTuri/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nTur-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/NarxTuri/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Nomenklatura">
              <Menu key="kassir-spr-nmkl" mode="vertical">
                <Menu.Item key="nmkl-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/edinitsaIzmereniya">
                    EdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/shtrixCode">
                    ShtrixCode
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-5">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/tipTovara">
                    TipTovara
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-6">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/seriyka">
                    Seriyka
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-7">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/mnogoEdinitsaIzmereniya">
                    MnogoEdinitsaIzmereniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-8">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/koeffitsient">
                    Koeffitsient
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-9">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-10">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/sirye">
                    Sirye
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/tayyorMahsulot">
                    TayyorMahsulot
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-12">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/mahsulotMiqdori">
                    MahsulotMiqdori
                  </Link>
                </Menu.Item>
                <Menu.Item key="nmkl-11">
                  <Link to="/Settings/Access/kassir/spravochniklar/Nomenklatura/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Partiya">
              <Menu key="kassir-spr-part" mode="vertical">
                <Menu.Item key="part-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/owner">
                    Owner
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/prixodData">
                    PrixodData
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-5">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/document">
                    Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-6">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/kirimNarxi">
                    Kirim narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-7">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/sotibOlishNarxi">
                    Sotib olish narxi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-8">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-9">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/branch">
                    Branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-10">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-11">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/srokgodnosti">
                    Srokgodnosti
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-12">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/olchovBirligi">
                    O'lchov birligi
                  </Link>
                </Menu.Item>
                <Menu.Item key="part-13">
                  <Link to="/Settings/Access/kassir/spravochniklar/Partiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/UlchovBirligi">
              <Menu key="kassir-spr-ulBir" mode="vertical">
                <Menu.Item key="ulBir-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/UlchovBirligi/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/UlchovBirligi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="ulBir-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/UlchovBirligi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Bulim">
              <Menu key="kassir-spr-bulim" mode="vertical">
                <Menu.Item key="bulim-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulim/description">
                    Description
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bulim-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Bulim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Foydalanuvchi">
              <Menu key="kassir-spr-foyd" mode="vertical">
                <Menu.Item key="foyd-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Foydalanuvchi/nomi">
                    Nomi
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Foydalanuvchi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="foyd-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Foydalanuvchi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Kontragent">
              <Menu key="kassir-spr-kontr" mode="vertical">
                <Menu.Item key="kontr-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent/manzil">
                    Manzil
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-5">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent/info">
                    Info
                  </Link>
                </Menu.Item>
                <Menu.Item key="kontr-6">
                  <Link to="/Settings/Access/kassir/spravochniklar/Kontragent/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/spravochniklar/Xodim">
              <Menu key="kassir-spr-xodim" mode="vertical">
                <Menu.Item key="xodim-1">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim/ismi">
                    Ismi
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-2">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-3">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim/bulim">
                    Bo'lim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-4">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim/lavozim">
                    Lavozim
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-5">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim/telRaqam">
                    Tel Raqam
                  </Link>
                </Menu.Item>
                <Menu.Item key="xodim-6">
                  <Link to="/Settings/Access/kassir/spravochniklar/Xodim/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            {/* ----------------kassir-Documents---------- */}
            <Route path="/Settings/Access/kassir/Documents/PrixodBank">
              <Menu key="kassir-docs-prixodBank" mode="vertical">
                <Menu.Item key="pBank-1">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-2">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-3">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/retailAmount">
                    Retail Amount
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-4">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/bankXisobRaqamlari">
                    Bank Xisob Raqamlari
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-5">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/sumDP">
                    sumDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-6">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/isCounterParty">
                    isCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-7">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/isConstanta">
                    isConstanta
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-8">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/sumEnumeration">
                    SumEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-9">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/sumCounterParty">
                    SumCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-10">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/percentEnumeration">
                    PercentEnumeration
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-11">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-12">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-13">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/objectCounterParty">
                    objectCounterParty
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-14">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/currency">
                    currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-15">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/branch">
                    branch
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-16">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/comment">
                    comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-17">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="pBank-18">
                  <Link to="/Settings/Access/kassir/Documents/PrixodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/RasxodBank">
              <Menu key="kassir-docs-prixodBank" mode="vertical">
                <Menu.Item key="rBank-1">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-2">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/bankXisobRaqami">
                    BankXisobRaqami
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-3">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-4">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-5">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/firma">
                    Firma
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-6">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/transfercurrency">
                    Transfer currency
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-7">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/summaPerechisleniye">
                    Summa Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-8">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/foizPerechisleniye">
                    Foiz Perechisleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-9">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/summaRaznitsi">
                    Summa Raznitsi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-10">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/summaKontragenta">
                    Summa Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-11">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/kontragentValyutasi">
                    Kontragent Valyutasi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-12">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/kursPerechisleniyesi">
                    Kurs Perechisleniyesi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-13">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/kursKontragenta">
                    Kurs Kontragenta
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-14">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-15">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/summaDP">
                    SummaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-16">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-17">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/podrazdelyeniya">
                    Podrazdelyeniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-18">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/tipRasxodi">
                    TipRasxodi
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-19">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/Izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-20">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="rBank-21">
                  <Link to="/Settings/Access/kassir/Documents/RasxodBank/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/OchistitDP">
              <Menu key="kassir-docs-ochDP" mode="vertical">
                <Menu.Item key="data-1">
                  <Link to="/Settings/Access/kassir/Documents/OchistitDP/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-2">
                  <Link to="/Settings/Access/kassir/Documents/OchistitDP/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="data-3">
                  <Link to="/Settings/Access/kassir/Documents/OchistitDP/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/VseDocument">
              <Menu key="kassir-docs-vDocs" mode="vertical">
                <Menu.Item key="vDocs-1">
                  <Link to="/Settings/Access/kassir/Documents/VseDocument/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-2">
                  <Link to="/Settings/Access/kassir/Documents/VseDocument/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-3">
                  <Link to="/Settings/Access/kassir/Documents/VseDocument/documentTuri">
                    Document Turi
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-4">
                  <Link to="/Settings/Access/kassir/Documents/VseDocument/grafa">
                    Grafa
                  </Link>
                </Menu.Item>
                <Menu.Item key="vDocs-5">
                  <Link to="/Settings/Access/kassir/Documents/VseDocument/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/Raschet">
              <Menu key="kassir-docs-raschet" mode="vertical">
                <Menu.Item key="raschet-1">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/n">
                    N
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-2">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-3">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-4">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-5">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-6">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/podrazdeleniya">
                    Podrazdeleniya
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-7">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="raschet-8">
                  <Link to="/Settings/Access/kassir/Documents/Raschet/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/Rasxod">
              <Menu key="kassir-docs-rasxod" mode="vertical">
                <Menu.Item key="rasxod-1">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/n">N</Link>
                </Menu.Item>
                <Menu.Item key="rasxod-2">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/sotrudnik">
                    Sotrudnik
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-3">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/kassa">
                    Kassa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-4">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/filial">
                    Filial
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-5">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/bulim">
                    Bulim
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-6">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/summa">
                    Summa
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-7">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="rasxod-8">
                  <Link to="/Settings/Access/kassir/Documents/Rasxod/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/IshlabChiqarish">
              <Menu key="kassir-docs-ishCh" mode="vertical">
                <Menu.Item key="ishCh-1">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-2">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-3">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/status">
                    Status
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-4">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/namenklatura">
                    Namenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-5">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/soni">
                    Soni
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-6">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-7">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/skladPoluchatel">
                    СкладПолучател
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-8">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/PrixodSena">
                    ПриходЦена
                  </Link>
                </Menu.Item>
                <Menu.Item key="ishCh-9">
                  <Link to="/Settings/Access/kassir/Documents/IshlabChiqarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi">
              <Menu key="kassir-docs-kasNPT" mode="vertical">
                <Menu.Item key="kasNPT-1">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-2">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-3">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-4">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/dPsprisaniyaPoPartiya">
                    DPsprisaniyaPoPartiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-5">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/kostantaDP">
                    KostantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-6">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPT-7">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulTushumi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi">
              <Menu key="kassir-docs-kasNPCH" mode="vertical">
                <Menu.Item key="kasNPCH-1">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-2">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-3">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-4">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="kasNPCH-5">
                  <Link to="/Settings/Access/kassir/Documents/KassagaNaqdPulChiqimi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/Intervizatsiya">
              <Menu key="kassir-docs-inter" mode="vertical">
                <Menu.Item key="inter-1">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-2">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-3">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-4">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-5">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-6">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-7">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/daromadSummasi">
                    Даромад суммаси
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-8">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/rasxod">
                    Расход
                  </Link>
                </Menu.Item>
                <Menu.Item key="inter-9">
                  <Link to="/Settings/Access/kassir/Documents/Intervizatsiya/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/PostupleniyaTovara">
              <Menu key="kassir-docs-posTT" mode="vertical">
                <Menu.Item key="posTT-1">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-2">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-3">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-4">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-5">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/otvetsvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-6">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-7">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/summaDocument">
                    Summa Document
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-8">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/summaDopRos">
                    SummaDopRos
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-9">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-10">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-11">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-12">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/ustanavitSenaNamenklatura">
                    UstanavitSenaNamenklatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-13">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/tipUchetSpisaniyeTavar">
                    TipUchetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-14">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-15">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-16">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-17">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/obshiyDolg">
                    ОбщийДолг
                  </Link>
                </Menu.Item>
                <Menu.Item key="posTT-18">
                  <Link to="/Settings/Access/kassir/Documents/PostupleniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/PeremesheniyaTovara">
              <Menu key="kassir-docs-perT" mode="vertical">
                <Menu.Item key="perT-1">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-2">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-3">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/skladOtpravetelya">
                    СкладОтправителя
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-4">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/skladPoluchatel">
                    СкладПолучатель
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-5">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-6">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-7">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-8">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-9">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="perT-10">
                  <Link to="/Settings/Access/kassir/Documents/PeremesheniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/SpisaniyaTovara">
              <Menu key="kassir-docs-spis" mode="vertical">
                <Menu.Item key="spis-1">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-2">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-3">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-4">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/organizatsiya">
                    Организация
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-5">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/otvetstvenniy">
                    Ответственный
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-6">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/uchet">
                    Учет
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-7">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/tipUchetSpisaniyaTavar">
                    TipUchetSpisaniyaTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-8">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="spis-9">
                  <Link to="/Settings/Access/kassir/Documents/SpisaniyaTovara/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish">
              <Menu key="kassir-docs-mKQ" mode="vertical">
                <Menu.Item key="mKQ-1">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-2">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/numer">
                    Numer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-3">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-4">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-5">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-6">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-7">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-8">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-9">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-10">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-11">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-12">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-13">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-14">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mKQ-15">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniKlientdanQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish">
              <Menu key="kassir-docs-mYQ" mode="vertical">
                <Menu.Item key="mYQ-1">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-2">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-3">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-4">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-5">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-6">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-7">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-8">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-9">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/tulovMuddati">
                    Tulov muddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-10">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/summaDakument">
                    SummaDakument
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-11">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/obshiyDolg">
                    ObshiyDolg
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-12">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/protsentBonusPoProdaji">
                    ProtsentBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-13">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-14">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-15">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mYQ-16">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotlarniYukBeruvchigaQaytarish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish">
              <Menu key="kassir-docs-bQK" mode="vertical">
                <Menu.Item key="bQK-1">
                  <Link to="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-2">
                  <Link to="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-3">
                  <Link to="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-4">
                  <Link to="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="bQK-5">
                  <Link to="/Settings/Access/kassir/Documents/BankQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish">
              <Menu key="kassir-docs-kQK" mode="vertical">
                <Menu.Item key="kQK-1">
                  <Link to="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-2">
                  <Link to="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-3">
                  <Link to="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish/responsible">
                    Responsible
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-4">
                  <Link to="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="kQK-5">
                  <Link to="/Settings/Access/kassir/Documents/KassaQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish">
              <Menu key="kassir-docs-mQK" mode="vertical">
                <Menu.Item key="mQK-1">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-2">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-3">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-4">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-5">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/otvetstvenniy">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-6">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/summaDapRas">
                    SummaDapRas
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-7">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-8">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/ustanavitSenaNom">
                    UstanavitSenaNom
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-9">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/tipuchyetSpisan">
                    TipuchyetSpisan
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-10">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="mQK-11">
                  <Link to="/Settings/Access/kassir/Documents/MahsulotQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish">
              <Menu key="kassir-docs-qQK" mode="vertical">
                <Menu.Item key="qQK-1">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-2">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-3">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-4">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-5">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="qQK-6">
                  <Link to="/Settings/Access/kassir/Documents/QarzdorlikQoldiqlariniKiritish/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/XodimlarQoldigi">
              <Menu key="kassir-docs-xQ" mode="vertical">
                <Menu.Item key="xQ-1">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi/code">
                    Code
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-2">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi/date">
                    Date
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-3">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi/responsibleName">
                    ResponsibleName
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-4">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-5">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi/comment">
                    Comment
                  </Link>
                </Menu.Item>
                <Menu.Item key="xQ-6">
                  <Link to="/Settings/Access/kassir/Documents/XodimlarQoldigi/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/Savdo">
              <Menu key="kassir-docs-savdo" mode="vertical">
                <Menu.Item key="savdo-1">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/data">
                    Data
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-2">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/nomer">
                    Nomer
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-3">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/ombor">
                    Ombor
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-4">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/kontragent">
                    Kontragent
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-5">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/organizatsiya">
                    Organizatsiya
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-6">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/otvetstvenniy	">
                    Otvetstvenniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-7">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/uchyet">
                    Uchyet
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-8">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/tolovTuri">
                    TolovTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-9">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/kurs">
                    Kurs
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-10">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/tipProdaji">
                    TipProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-11">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-12">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/izox">
                    Izox
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-13">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/harajatTuri">
                    HarajatTuri
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-14">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/podrazdeleniye">
                    Podrazdeleniye
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-15">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/tipUchyetSpisaniyeTavar">
                    TipUchyetSpisaniyeTavar
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-16">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/tulovMuddati">
                    TulovMuddati
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-17">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/konstantaDP">
                    KonstantaDP
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-18">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/proSenaBonusPoProdaji">
                    ProSenaBonusPoProdaji
                  </Link>
                </Menu.Item>
                <Menu.Item key="savdo-19">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
            <Route path="/Settings/Access/kassir/Documents/Servis">
              <Menu key="kassir-docs-servis" mode="vertical">
                <Menu.Item key="servis-1">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/n">N</Link>
                </Menu.Item>
                <Menu.Item key="servis-2">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/nomenklavyatura">
                    Nomenklavyatura
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-3">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/ednIzm">
                    EdnIzm
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-4">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/valyuta">
                    Valyuta
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-5">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/ostatka">
                    Ostatka
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-6">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/summaPosledniy">
                    SummaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-7">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/summaSredniy">
                    SummaSredniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-8">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/summaMax">
                    SummaMax
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-9">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/senaPosledniy">
                    SenaPosledniy
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-10">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/sena">
                    Sena
                  </Link>
                </Menu.Item>
                <Menu.Item key="servis-11">
                  <Link to="/Settings/Access/kassir/Documents/Savdo/action">
                    Action
                  </Link>
                </Menu.Item>
              </Menu>
            </Route>
          </Switch>
        </Menu>
      </Sider>

      <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
    </Layout>
  );
};
export default AccessContent;
