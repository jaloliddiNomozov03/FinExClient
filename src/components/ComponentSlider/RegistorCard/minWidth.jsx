import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import "./card.css"
import { Card, Row, Col } from 'antd'
import { Link } from "react-router-dom";
import {
    LeftOutlined, RightOutlined,  DesktopOutlined, HomeOutlined, DatabaseOutlined,
    PieChartOutlined, FolderOutlined, 
    SendOutlined, SettingOutlined, WindowsOutlined, AppleOutlined
} from "@ant-design/icons";

const gridStyle = {
    width: '100%',
    textAlign: 'center',
    height: '98%',
};

const MinWidth = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 45;


    return (
        <div style={{ padding: `0 ${chevronWidth}px`, marginRight: `3%` }}>
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
                <div style={{ width: "100%", boxSizing: "border-box", }}>
                    <Card style={{ width: "100%", border: "none", marginLeft:"5%" }}>
                        <Row style={{ boxSizing: 'border-box', width: "100%" }} >
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle} >
                                    <Link to="/Registrlar/Bank" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <WindowsOutlined style={{ color: "aqua" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Bank</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/SenaNamenKlatura" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <HomeOutlined style={{ color: "aquamarine" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>SenaNamenKlatura</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Bonus" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <AppleOutlined style={{ color: "darkkhaki" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Bonus</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/DataPogasheniya" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <DatabaseOutlined style={{ color: "green" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>DataPogasheniya</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Daxodi" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <FolderOutlined style={{ color: "red" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Daxodi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width: "100%", }}>
                    <Card style={{ border: "none", marginLeft:"5%" }}>
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Kassa" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <SettingOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Kassa</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle} style={gridStyle} >
                                    <Link to="/Registrlar/KursValyuta" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <DatabaseOutlined style={{ color: "aqua" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>KursValyuta</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Prodaji" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <DesktopOutlined style={{ color: "aqua" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Prodaji</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/RaschetCRabochi" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <HomeOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>RaschetCRabochi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Rasxodi" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <PieChartOutlined style={{ color: "violet" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Rasxodi</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                        </Row>
                    </Card>
                </div>
                <div style={{ width: "100%", }}>
                    <Card style={{ border: "none", marginLeft:"5%" }} >
                        <Row>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/TavarNaSklad" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <SettingOutlined style={{ color: "blue" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>TavarNaSklad</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Test" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <SendOutlined style={{ color: "darkkhaki" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Test</h5>
                                            </div>
                                        </div>
                                    </Link>
                                </Card.Grid>
                            </Col>
                            <Col xs={{ span: 24 }} sm={{ span: 12 }} xl={{ span: 6 }} >
                                <Card.Grid style={gridStyle}>
                                    <Link to="/Registrlar/Vzoimorascheti" >
                                        <div className="CardDiv" >
                                            <div className="Icon" >
                                                <DatabaseOutlined style={{ color: "green" }} />
                                            </div>
                                            <div className="Title"  >
                                                <h5>Vzoimorascheti</h5>
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

