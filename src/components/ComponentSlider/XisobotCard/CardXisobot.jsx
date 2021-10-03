import React from "react";
import { Card } from 'antd'
import { Link } from "react-router-dom";
import "./card.css"
import {
    DesktopOutlined, HomeOutlined, DatabaseOutlined,
    PieChartOutlined, FolderOutlined, FileDoneOutlined,
    SendOutlined, SettingOutlined, WindowsOutlined, AppleOutlined
} from "@ant-design/icons";

const CardXisobod = () => {
    return (
        <div>
            <Card style={{ width: "100%" }} >
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/AktSverka" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <WindowsOutlined style={{ color: "aqua" }} />
                            </div>
                            <div className="Title"  >
                                <h5>AktSverka</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/Bank" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <AppleOutlined style={{ color: "darkkhaki" }} />
                            </div>
                            <div className="Title"  >
                                <h5>Bank</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid"   >
                    <Link to="/Xisobotlar/Daxodi" >
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
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/Kassa" >
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
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/KriditTori" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <DesktopOutlined style={{ color: "aqua" }} />
                            </div>
                            <div className="Title"  >
                                <h5>KriditTori</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/Servis" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <HomeOutlined style={{ color: "blue" }} />
                            </div>
                            <div className="Title"  >
                                <h5>Servis</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/Tavar" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <HomeOutlined style={{ color: "aquamarine" }} />
                            </div>
                            <div className="Title"  >
                                <h5>Tavar</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/TavarBoyichaXisobod" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <SettingOutlined style={{ color: "blue" }} />
                            </div>
                            <div className="Title"  >
                                <h5>Tavar B.X</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid" style={{marginBottom:"3%"}}   >
                    <Link to="/Xisobotlar/Xarajatlar" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <FolderOutlined style={{ color: "red" }} />
                            </div>
                            <div className="Title"  >
                                <h5>Xarajatlar</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
                <Card.Grid className="CardGrid" >
                    <Link to="/Xisobotlar/KireditOborot" >
                        <div className="CardDiv" >
                            <div className="Icon" >
                                <SettingOutlined style={{ color: "blue" }} />
                            </div>
                            <div className="Title"  >
                                <h5>KireditOborot</h5>
                            </div>
                        </div>
                    </Link>
                </Card.Grid>
            </Card>
        </div>
    );
}
export default CardXisobod;