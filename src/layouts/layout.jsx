import React from "react";
import "./layout.css";
import { Layout } from "antd";
import SiderBase from "./sider/sider";
import ContentBase from "./content/content";
import HeaderBase from "./header/header";
import FooterBase from "./footer/footer";

class LayoutBase extends React.Component {
  render() {
    return (
      <Layout style={{ minHeight: "100vh" }}>
        <SiderBase />
        <Layout className="site-layout">
          <HeaderBase />
          <ContentBase />
          <FooterBase />
        </Layout>
      </Layout>
    );
  }
}
export default LayoutBase;
