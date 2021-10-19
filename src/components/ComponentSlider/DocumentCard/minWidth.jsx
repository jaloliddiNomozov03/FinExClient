import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./card.css"
import { Card, Row, Col } from 'antd'
import { Link } from "react-router-dom";
import {
    LeftOutlined, RightOutlined, DatabaseOutlined, LoginOutlined, RetweetOutlined,
    CarOutlined, BankOutlined, CalculatorOutlined, BarcodeOutlined,
    SolutionOutlined, DollarOutlined, TeamOutlined, ToolOutlined, ProfileOutlined,
    LogoutOutlined, EuroOutlined, PrinterOutlined, VerticalAlignBottomOutlined,
    VerticalAlignTopOutlined, MenuUnfoldOutlined, DownSquareOutlined, UpSquareOutlined
} from "@ant-design/icons";

const gridStyle = {
    width: '100%',
    textAlign: 'center',
    height: '98%',
};

const MinWidth = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 40;


    return (
        <div style={{ padding: `0 ${chevronWidth}px`, marginRight: `2%` }}>
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
                <div style={{ width: "100%", boxSizing: "border-box",  }}>
                    <Card style={{ width: "100%", border:"none", marginLeft:"5%" }}>
                        <Row style={{ boxSizing: 'border-box', width:"100%" }} >
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle} >
                                    <Link to="/Documents/VseDocument" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <ProfileOutlined style={{ color: "#08ff62" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>VseDocument</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PastupleniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <LoginOutlined style={{ color: "#00caf7", }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5   >PastupleniyaTavar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/SpisaniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <DatabaseOutlined style={{ color: "#08ff62" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>SpisaniyaTavar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/Maxsulotlarnikilentdanqaytarish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <RetweetOutlined style={{ color: 'blueviolet' }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Kilentga qaytarish</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/MahsulotlarniYukBeruvchigaQaytarish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <CarOutlined style={{ color: "green" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>YukBeruvchiga Q</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width:"100%", marginLeft:"5%" }}>
                    <Card style={{border:"none"}}>
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PrixodBank" >
                                        <div className="CardDiv" >
                                            <div className="Icon1">
                                                <LoginOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Prixod bank</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle} style={gridStyle} >
                                    <Link to="/Documents/RasxodBank" >
                                        <div className="CardDiv" >
                                            <div className="Icon1">
                                                <LogoutOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>РасходОтБанк</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/raschet" >
                                        <div className="CardDiv" >
                                            <div className="Icon1">
                                                <EuroOutlined style={{ color: "#f78c00" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Расчет Зарлаты</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/rasxod" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <LogoutOutlined style={{ color: "#00f752" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Расходы</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/IshlabChiqarish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <PrinterOutlined style={{ color: "black" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Ishlab Chiqarish</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width:"100%", marginLeft:"5%" }}>
                    <Card  style={{border:"none"}} >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/bankQoldiqlariniKiritish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <BankOutlined style={{ color: 'blueviolet' }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Bank.Q.K</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/KassaQoldiqlariniKiritish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <CalculatorOutlined style={{ color: "#2fed62" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Kassa.Q.K</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/MaxsulotQoldiqlari" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <BarcodeOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Maxsulot Q</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/QarzdorlikQoldiqlariniKiritish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <SolutionOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Qarzdorlik Q.K</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/savdo" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <DollarOutlined style={{ color: "#f78c00" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Savdo </h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width:"100%", marginLeft:"5%" }}>
                    <Card style={{border:"none"}}  >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/XodimlarQoldigi" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <TeamOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Xodimlar Q</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/servis" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <ToolOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Servis</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/KassagaNaqtPulTyshumi" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <VerticalAlignBottomOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Kassaga N.P.T</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/KassagaNaxtPulChiqimi" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1">
                                                <VerticalAlignTopOutlined style={{ color: "violet" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>Kassadan N.P.CH</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/Intervazatsiya" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1"   >
                                                <MenuUnfoldOutlined style={{ color: "blueviolet" }} />
                                            </div>
                                            <div className="Titlee"   >
                                                <h5>Intervazatsiya</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width:"100%",  }}>
                    <Card style={{border:"none"}}  >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PastupleniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1"   >
                                                <DownSquareOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Titlee"    >
                                                <h5>PastupleniyaTavar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PeremesheniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon1"  >
                                                <UpSquareOutlined style={{ color: "aqua" }} />
                                            </div>
                                            <div className="Titlee"   >
                                                <h5>Peremesheniya Tavar</h5>
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

