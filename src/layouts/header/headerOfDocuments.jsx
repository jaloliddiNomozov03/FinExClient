import React from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
const HeaderOfDocuments = () => {
    return ( <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[""]}>
                             {/* Vse Document */}
                <Menu.Item key="nav-1">
                    <Link to="/Documents/VseDocument" >vseDocumenti</Link>
                </Menu.Item>
                <Menu.Item key="nav-2">
                    <Link to="/Documents/OchistitDP" >OchistitDP</Link>
                </Menu.Item>
                             {/* Bnak  */}
                <Menu.Item key="nav-3">
                    <Link to="/Documents/PrixodBank">Prixod Bank</Link>
                </Menu.Item>
                <Menu.Item key="nav-4">
                    <Link to="/Documents/RasxodBank">РасходОтБанк</Link>
                </Menu.Item>
                             {/* Harajatlar  */}
                <Menu.Item key="nav-5">
                    <Link to="/Documents/raschet"> РасчетЗарлаты </Link>
                </Menu.Item>
                <Menu.Item key="nav-6">
                    <Link to="/Documents/rasxod" >Расходы</Link>
                </Menu.Item>
                                    {/* Ishlab chiqarish  */}
                <Menu.Item key="nav-7">
                    <Link to="/Documents/IshlabChiqarish" >Ishlab Chiqarish</Link>
                </Menu.Item>
                                        {/* Kassa  */}
                <Menu.Item key="nav-8">
                    <Link to="/Documents/KassagaNaqtPulTyshumi" >Kassaga naqt pul tushumi</Link>
                </Menu.Item>
                <Menu.Item key="nav-9">
                    <Link to="/Documents/KassagaNaxtPulChiqimi" >Kassadan naqt pul tushumi</Link>
                </Menu.Item>
                                            {/* Ombor  */}
                <Menu.Item key="nav-10">
                    <Link to="/Documents/Intervazatsiya" >Intervazatsiya</Link>
                </Menu.Item>
                <Menu.Item key="nav-11">
                    <Link to="/Documents/PastupleniyaTavar" >PastupleniyaTavar</Link>
                </Menu.Item>
                <Menu.Item key="nav-12">
                    <Link to="/Documents/PeremesheniyaTavar" >PeremesheniyaTavar</Link>
                </Menu.Item>
                <Menu.Item key="nav-13">
                    <Link to="/Documents/SpisaniyaTavar" >SpisaniyaTavar</Link>
                </Menu.Item>
                                            {/* Qaytarish bo'limi  */}
                <Menu.Item key="nav-14">
                    <Link to="/Documents/Maxsulotlarnikilentdanqaytarish" >Maxsulotlarnikilentdanqaytarish</Link>
                </Menu.Item>
                <Menu.Item key="nav-15">
                    <Link to="/Documents/Maxsulotlarniyukberuvchigaqaytarisj" >Maxsulotlarniyukberuvchigaqaytarisj</Link>
                </Menu.Item>
                                        {/* Qoldiqlar kirimi  */}
                <Menu.Item key="nav-16">
                    <Link to="/Documents/bankQoldiqlariniKiritish" >bankQoldiqlariniKiritish</Link>
                </Menu.Item>
                <Menu.Item key="nav-17">
                    <Link to="/Documents/KassaQoldiqlariniKiritish" >KassaQoldiqlariniKiritish</Link>
                </Menu.Item>
                <Menu.Item key="nav-18">
                    <Link to="/Documents/MaxsulotQoldiqlari" >MaxsulotQoldiqlari</Link>
                </Menu.Item>
                <Menu.Item key="nav-19">
                    <Link to="/Documents/QarzdorlikQoldiqlariniKiritish" >QarzdorlikQoldiqlariniKiritish</Link>
                </Menu.Item>
                <Menu.Item key="nav-20">
                    <Link to="/Documents/XodimlarQoldigi" >XodimlarQoldigi</Link>
                </Menu.Item>
                                        {/* Savdo  */}
                <Menu.Item key="nav-21">
                    <Link to="/Documents/savdo" >savdo</Link>
                </Menu.Item>
                <Menu.Item key="nav-22">
                    <Link to="/Documents/servis" >servis</Link>
                </Menu.Item>
            </Menu>
    );
};
export default HeaderOfDocuments;
