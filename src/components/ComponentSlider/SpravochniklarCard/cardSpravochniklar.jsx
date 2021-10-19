import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import MinWidth from './minWidth'
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

const Test = () => {

    const [activeItemIndex, setActiveItemIndex] = useState(0);
    const chevronWidth = 80;

    if (window.screen.width > 576) {
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
                    <div style={{ width: "100%", boxSizing: "border-box", height: '96%' }}>
                        <Card style={{ width: "100%" }}>
                            <Row style={{ boxSizing: 'border-box' }} >
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }} xxl={{ span: 6 }} >
                                    <Card.Grid style={gridStyle} >
                                        <Link to="/Spravochniklar/mahsulotTuri" >
                                            <div style={{ margin: "auto" }} >
                                                <div className="Icon" >
                                                    <TableOutlined style={{ color: "aqua" }} />
                                                </div>
                                                <div className="Title">
                                                    <h5> Mahsulot Turi</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/narxTuri" >
                                            <div  >
                                                <div className="Icon" >
                                                    <MoneyCollectOutlined style={{ color: "blue" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Narx Turi</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle} >
                                        <Link to="/Spravochniklar/nomenklatura" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <DatabaseOutlined style={{ color: "#28362b" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Nomenklatura</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
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
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/ulchovBirligi" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <ScissorOutlined style={{ color: "blue" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>O'lchov birligi</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle} >
                                        <Link to="/Spravochniklar/bankXisobRaqamlari" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <FieldNumberOutlined style={{ color: "red" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>B.X.R</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
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
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/valyutalar" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    < DollarOutlined style={{ color: "#f78c00" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Valyutalar</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/kassalar" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <CalculatorOutlined style={{ color: "#2fed62" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Kassalar</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/omborlar" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <BankOutlined style={{ color: "#28362b" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Omborlar</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
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
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}   >
                                        <Link to="/Spravochniklar/firma" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <SketchOutlined style={{ color: "#08ff62" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Firma</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                            </Row>
                        </Card>
                    </div>
                    <div style={{ width: "100%", }}>
                        <Card style={{}}>
                            <Row>
                                <Col style={{ padding: ' 0px  1%' }} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/kontragent" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <UserOutlined style={{ color: "green" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Kontragent</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/xodim" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <TeamOutlined style={{ color: "blue" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Xodimlar</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
                                        <Link to="/Spravochniklar/chiqimTuri" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <FormOutlined style={{ color: "blue" }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Chiqim turi</h5>
                                                </div>
                                            </div>
                                        </Link>
                                    </Card.Grid>
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}  >
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
                                </Col>
                                <Col style={{}} xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 12 }} lg={{ span: 8 }} xl={{ span: 6 }}  >
                                    <Card.Grid style={gridStyle}   >
                                        <Link to="/Spravochniklar/foydalanuvchi" >
                                            <div className="CardDiv" >
                                                <div className="Icon" >
                                                    <UserAddOutlined style={{ color: 'blueviolet' }} />
                                                </div>
                                                <div className="Title"  >
                                                    <h5>Foydalanuvchi</h5>
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
    else
        return (
             <>
                <MinWidth/>
             </>
          );


}
export default Test

