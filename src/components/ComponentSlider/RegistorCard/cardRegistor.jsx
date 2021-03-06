import React, { useState } from 'react';
import MinWidth from './minWidth';
import ItemsCarousel from 'react-items-carousel';
import { Card, Row, Col } from 'antd'
import { Link } from "react-router-dom";
import "./card.css"
import {
    DesktopOutlined, HomeOutlined, DatabaseOutlined,LeftOutlined,
    PieChartOutlined, FolderOutlined, RightOutlined,
    SendOutlined, SettingOutlined, WindowsOutlined, AppleOutlined
} from "@ant-design/icons";
const gridStyle = {
    width: '100%',
    textAlign: 'center',
    height: '98%',
};

const CardRegistor = () => {
    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;
    if(window.screen.width>576){
    return (
        <div style={{ padding: `0 ${chevronWidth}px` }}>
            <ItemsCarousel
                requestToChangeActive={setActiveItemIndex}
                activeItemIndex={activeItemIndex}
                numberOfCards={1}
                gutter={20}
                leftChevron={<button className="Button" ><LeftOutlined /></button>}
                rightChevron={<button className="Button" ><RightOutlined /></button>}
                outsideChevron
                chevronWidth={chevronWidth}
            >
                <div  style={{width: "100%",}} >
                    <Card style={{ width: "100%" }} >
                        <Row>
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}    >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >

                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle}   >
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
                        </Row>
                    </Card>
                </div>
                <div>
                    <Card>
                        <Row>
                            <Col  xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                <Card.Grid style={gridStyle} >
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
    )}
    else{
        return(
            <>
                <MinWidth/>
            </>
        )
    }
}
export default CardRegistor;