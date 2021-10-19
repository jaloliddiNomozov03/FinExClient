import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import { Card, Row, Col } from 'antd'
import { Link } from "react-router-dom";
import {
    LeftOutlined, RightOutlined, DatabaseOutlined, FolderOutlined, TableOutlined,
    DollarOutlined, ScissorOutlined, BankOutlined, FieldNumberOutlined, MoneyCollectOutlined,
    CalculatorOutlined, PartitionOutlined, SketchOutlined, UserOutlined, TeamOutlined,
    FormOutlined, UserAddOutlined
} from "@ant-design/icons";
import "./card.css"

const gridStyle = {
    width: '100%',
    textAlign: 'center',
    height: "98%",
};

const MinWidth = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 30;
    return (
        <div style={{ padding: `0 ${chevronWidth}px`,}}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<button className="Button"  ><LeftOutlined /></button>}
                rightChevron={<button className="Button"  ><RightOutlined /></button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ width: "100%", boxSizing: "border-box", marginLeft:'5%' }}>
                    <Card style={{ width: "100%", border:"none" }}>
                        <Row style={{ boxSizing: 'border-box', width:"100%" }} >
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle} >
                                    <Link to="/Spravochniklar/mahsulotTuri" >
                                        <div style={{ margin: "auto" }} >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <TableOutlined style={{ color: "aqua" }} />
                                            </div>
                                            <div className="Titlee">
                                                <h5 style={{fontSize:"14px"}} > Mahsulot Turi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/narxTuri" >
                                        <div  >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <MoneyCollectOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px", textAlign:"center"}} >Narx Turi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle} >
                                    <Link to="/Spravochniklar/nomenklatura" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <DatabaseOutlined style={{ color: "#28362b" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Nomenklatura</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/partiya" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <FolderOutlined style={{ color: "#08ff62" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Partiya</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/ulchovBirligi" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <ScissorOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >O'lchov birligi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>

                        </Row>
                    </Card>
                </div>
                <div style={{ width: "100%", marginLeft:'5%' }}>
                    <Card style={{ border:"none"}} >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle} >
                                    <Link to="/Spravochniklar/bankXisobRaqamlari" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <FieldNumberOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >B.X.R</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/bulimlar" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <DatabaseOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Bo'limlar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/valyutalar" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                < DollarOutlined style={{ color: "#f78c00" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Valyutalar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/kassalar" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <CalculatorOutlined style={{ color: "#2fed62" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Kassalar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/omborlar" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <BankOutlined style={{ color: "#28362b" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Omborlar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width: "100%", marginLeft:'5%' }}>
                    <Card style={{ border:"none"}} >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/filial" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <PartitionOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Filial</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}   >
                                    <Link to="/Spravochniklar/firma" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <SketchOutlined style={{ color: "#08ff62" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Firma</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col style={{ padding: ' 0px  1%' }} xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/kontragent" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <UserOutlined style={{ color: "green" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Kontragent</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/xodim" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <TeamOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Xodimlar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/chiqimTuri" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <FormOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Chiqim turi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>

                        </Row>
                    </Card>
                </div>
                <div style={{ width: "100%", marginLeft:'5%'}} >
                    <Card style={{ border:"none"}} >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}  >
                                    <Link to="/Spravochniklar/bulim" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <DatabaseOutlined style={{ color: "green" }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Bo'lim</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }}>
                                <Card.Grid style={gridStyle}   >
                                    <Link to="/Spravochniklar/foydalanuvchi" >
                                        <div className="CardDiv" >
                                            <div className="Icon" style={{fontSize:"250%"}} >
                                                <UserAddOutlined style={{ color: 'blueviolet' }} />
                                            </div>
                                            <div className="Titlee"  >
                                                <h5 style={{fontSize:"14px"}} >Foydalanuvchi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
            </ItemsCarousel>
        </div>
    )
}
export default MinWidth

