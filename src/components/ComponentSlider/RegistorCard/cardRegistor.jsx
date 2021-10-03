import React from "react";
import { Card } from 'antd'
import { Link } from "react-router-dom";
import "./card.css"
import {
    DesktopOutlined, HomeOutlined, DatabaseOutlined,
    PieChartOutlined, FolderOutlined, FileDoneOutlined,
    SendOutlined, SettingOutlined, WindowsOutlined, AppleOutlined
} from "@ant-design/icons";

const CardRegistor = () => {
    return (
        <div>
            <Card style={{ width: "100%" }} >
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"    >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"   >
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
                <Card.Grid className="CardGrid"  style={{marginBottom:"2%"}} >
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
            </Card>
        </div>
    );
}
export default CardRegistor;