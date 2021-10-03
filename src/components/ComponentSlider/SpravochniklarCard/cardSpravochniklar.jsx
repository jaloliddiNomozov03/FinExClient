import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./card.css"
import { Card } from 'antd'
import { Link } from "react-router-dom";
import {
    LeftOutlined, RightOutlined, DatabaseOutlined,FolderOutlined,TableOutlined,
    DollarOutlined,ScissorOutlined,BankOutlined,FieldNumberOutlined, MoneyCollectOutlined ,
    CalculatorOutlined ,PartitionOutlined, SketchOutlined,UserOutlined,TeamOutlined,
    FormOutlined,UserAddOutlined 
} from "@ant-design/icons";

const gridStyle = {
    width: '22%',
    textAlign: 'center',
    height: "33%"
};

const Test = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;


    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<button style={{ fontSize: '300%', backgroundColor: "white", border: "none", color: "blue", width: "20%" }} ><LeftOutlined /></button>}
                rightChevron={<button style={{ fontSize: '300%', backgroundColor: "white", border: "none", color: "blue", width: "20%" }}><RightOutlined /></button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ height: "100%", }}>
                    <Card style={{ paddingBottom: "2%" }}>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/mahsulotTuri" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <TableOutlined  style={{ color: "aqua" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5> Mahsulot Turi</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/narxTuri" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <MoneyCollectOutlined  style={{ color: "blue" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Narx Turi</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/nomenklatura" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <DatabaseOutlined style={{ color:"#28362b" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Nomenklatura</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle} style={gridStyle} >
                            <Link to="/Spravochniklar/partiya" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <FolderOutlined style={{ color: "#08ff62" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Partiya</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/ulchovBirligi" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <ScissorOutlined  style={{ color: "blue" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>O'lchov birligi</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/bankXisobRaqamlari" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <FieldNumberOutlined  style={{ color: "red" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>BankXisobRaqamlari</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/bulimlar" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <DatabaseOutlined style={{ color: "blue" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Bo'limlar</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/valyutalar" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        < DollarOutlined  style={{ color: "#f78c00" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Valyutalar</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/kassalar" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <CalculatorOutlined  style={{ color:"#2fed62" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Kassalar</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/omborlar" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <BankOutlined  style={{ color: "#28362b" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Omborlar</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/filial" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <PartitionOutlined style={{ color: "blue" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Filial</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle} >
                            <Link to="/Spravochniklar/firma" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <SketchOutlined  style={{ color: "#08ff62" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Firma</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                    </Card>
                </div>
                <div style={{ height: "100%", }}>
                    <Card style={{ paddingBottom: "2%" }}>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/kontragent" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <UserOutlined  style={{ color: "green" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Kontragent</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/xodim" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <TeamOutlined  style={{ color: "blue" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Xodimlar</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/chiqimTuri" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <FormOutlined  style={{ color: "blue" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Chiqim turi</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle}>
                            <Link to="/Spravochniklar/bulim" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <DatabaseOutlined style={{ color: "green" }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Bo'lim</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                        <Card.Grid className="CardGrid" style={gridStyle} >
                            <Link to="/Spravochniklar/foydalanuvchi" >
                                <div className="CardDiv" >
                                    <div className="Icon" >
                                        <UserAddOutlined  style={{ color: 'blueviolet' }} />
                                    </div>
                                    <div className="Title"  >
                                        <h5>Foydalanuvchi</h5>
                                    </div>
                                </div>
                            </Link>
                        </Card.Grid>
                    </Card>
                </div>
            </ItemsCarousel>
        </div>
    )
}
export default Test

