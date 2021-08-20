import React from "react";
import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import ContentDocument from "./contentDocument";
import ContentSpravochniklar from "./contentSpravochnik";
import ContentRegistorlar from "./RegistorContent";
import ContentXisobotlar from "./contentXisobotlar";
import ContentSettings from "./contentSettings";
import ContentProfil from './contentProfil';
const { Content } = Layout;
class ContentBase extends React.Component {
  render() {
    return (
      <Content style={{ margin: "0 16px" }}>
        <div
          className="site-layout-background  content-Slider-use"
          id="site-layout-background"
          style={{ padding: 24, minHeight: 360 }}
        >
          <Switch>
            <Route path="/Documents">
              <ContentDocument />
            </Route>
            <Route path="/Spravochniklar">
              <ContentSpravochniklar />
            </Route>
            <Route path="/Registrlar">
              <ContentRegistorlar />
            </Route>
            <Route path="/Xisobotlar">
              <ContentXisobotlar />
            </Route>
            <Route path="/Settings">
              <ContentSettings />
            </Route>
            <Route path="/Profil">
              <ContentProfil />
            </Route>
          </Switch>
        </div>
      </Content>
    );
  }
}
export default ContentBase;
