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
            {/* Documents */}
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
          </Switch>
        </Menu>
      </Sider>

      <Content style={{ padding: "0 24px", minHeight: 280 }}>Content</Content>
    </Layout>
  );
};
export default AccessContent;
