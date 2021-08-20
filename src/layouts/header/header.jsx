import React from "react";
import { Row, Col, Menu, Select } from "antd";
import { Link } from "react-router-dom";
import { UserOutlined } from "@ant-design/icons";
import { Route, Switch } from "react-router-dom";
import HeaderOfSpravochniklar from "./headerOfSpravochniklar";
import HeaderOfDocuments from "./headerOfDocuments";
import HeaderOfRegistor from "./headerOfRegistr";
import HeaderOfXisobotlar from "./headerXisobotlar";
import HeaderOfSettings from "./headerOfSettings";
import HeaderOfProfil from "./heaerProfil"
const { Option } = Select;
const HeaderBase = () => {

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <>
      <Row>
        <Col span={20} >
          <Switch>
            <Route path="/Documents">
              <HeaderOfDocuments />
            </Route>
            <Route path="/Spravochniklar">
              <HeaderOfSpravochniklar />
            </Route>
            <Route path="/Registrlar">
              <HeaderOfRegistor />
            </Route>
            <Route path="/Xisobotlar">
              <HeaderOfXisobotlar />
            </Route>
            <Route path="/Settings">
              <HeaderOfSettings />
            </Route>
            <Route path="/Profil">
              <HeaderOfProfil />
            </Route>
          </Switch>
        </Col>

        <Col span={4}  >

          <Row>
            <Menu defaultSelectedKeys={[""]} theme="dark" mode="horizontal" style={{width:'100%'}}  >
              <Menu.Item key="til"     >
                <Col span={15} theme="dark" >

                  <Select defaultValue="Uzb" theme="dark" onChange={handleChange}>
                    <Option value="Uzb"> <strong>Uzb</strong> </Option>
                    <Option value="En"><strong>En</strong></Option>
                    <Option value="Ru" > <strong>Ru</strong> </Option>
                  </Select>
                </Col>
              </Menu.Item>
              <Menu.Item key="profil-1">
                <Col span={9} >
                  <Link to="/Profil">  <span style={{
                    border: '1px solid white', 
                    borderRadius: '90%', color: 'white', padding: '30%',
                  }} > <UserOutlined />  </span>   </Link>
                </Col>
              </Menu.Item>
            </Menu>
          </Row>
        </Col>
      </Row>
    </>
  );
};
export default HeaderBase;
