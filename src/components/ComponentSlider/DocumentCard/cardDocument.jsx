import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import MinWidth from './minWidth';
import "./card.css"
import { Card, Row, Col } from 'antd'
import { Link } from "react-router-dom";
import {
    LeftOutlined, RightOutlined, DatabaseOutlined, LoginOutlined, RetweetOutlined,
    CarOutlined, BankOutlined, CalculatorOutlined, BarcodeOutlined,
    SolutionOutlined, DollarOutlined, TeamOutlined, ToolOutlined, ProfileOutlined,
    QuestionCircleOutlined, LogoutOutlined, EuroOutlined, PrinterOutlined, VerticalAlignBottomOutlined,
    VerticalAlignTopOutlined, MenuUnfoldOutlined, DownSquareOutlined, UpSquareOutlined
} from "@ant-design/icons";

const gridStyle = {
    width: '100%',
    textAlign: 'center',
    height: '98%',
};

const Test = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;

    if(window.screen.width > 576){
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<button className="Button" ><LeftOutlined /></button>}
                rightChevron={<button className="Button"><RightOutlined /></button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div style={{ height: "100%", }}>
                    <Card >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/VseDocument" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <ProfileOutlined style={{ color: "#08ff62" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>VseDocument</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PastupleniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <LoginOutlined style={{ color: "#00caf7", }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5   >PastupleniyaTavar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/SpisaniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <DatabaseOutlined style={{ color: "#08ff62" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>SpisaniyaTavar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/Maxsulotlarnikilentdanqaytarish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <RetweetOutlined style={{ color: 'blueviolet' }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Kilentga qaytarish</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/MahsulotlarniYukBeruvchigaQaytarish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <CarOutlined style={{ color: "green" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>YukBeruvchiga Q</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/bankQoldiqlariniKiritish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <BankOutlined style={{ color: 'blueviolet' }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Bank.Q.K</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/KassaQoldiqlariniKiritish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <CalculatorOutlined style={{ color: "#2fed62" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Kassa.Q.K</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/MaxsulotQoldiqlari" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <BarcodeOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Maxsulot Q</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/QarzdorlikQoldiqlariniKiritish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <SolutionOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Qarzdorlik Q.K</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/savdo" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <DollarOutlined style={{ color: "#f78c00" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Savdo </h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/XodimlarQoldigi" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <TeamOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Xodimlar Q</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/servis" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <ToolOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Servis</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ height: "100%", }}>
                    <Card style={{}}>
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PrixodBank" >
                                        <div className="CardDiv" >
                                            <div className="Icon">
                                                <LoginOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Prixod bank</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle} style={gridStyle} >
                                    <Link to="/Documents/RasxodBank" >
                                        <div className="CardDiv" >
                                            <div className="Icon">
                                                <LogoutOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>????????????????????????</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/raschet" >
                                        <div className="CardDiv" >
                                            <div className="Icon">
                                                <EuroOutlined style={{ color: "#f78c00" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>???????????? ??????????????</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/rasxod" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <LogoutOutlined style={{ color: "#00f752" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>??????????????</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/IshlabChiqarish" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <PrinterOutlined style={{ color: "black" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Ishlab Chiqarish</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/KassagaNaqtPulTyshumi" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <VerticalAlignBottomOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Kassaga N.P.T</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/KassagaNaxtPulChiqimi" >
                                        <div className="CardDiv"  >
                                            <div className="Icon">
                                                <VerticalAlignTopOutlined style={{ color: "violet" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>Kassadan N.P.CH</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/Intervazatsiya" >
                                        <div className="CardDiv"  >
                                            <div className="Icon"   >
                                                <MenuUnfoldOutlined style={{ color: "blueviolet" }} />
                                            </div>
                                            <div className="Title"   >
                                                <h5>Intervazatsiya</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PastupleniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon"   >
                                                <DownSquareOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"    >
                                                <h5>PastupleniyaTavar</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Documents/PeremesheniyaTavar" >
                                        <div className="CardDiv"  >
                                            <div className="Icon"  >
                                                <UpSquareOutlined style={{ color: "aqua" }} />
                                            </div>
                                            <div className="Title"   >
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
    )}
    else{
        return(
            <>
                <MinWidth/>
            </>
        )
    }
}
export default Test

