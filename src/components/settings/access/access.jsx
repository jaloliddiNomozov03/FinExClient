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
