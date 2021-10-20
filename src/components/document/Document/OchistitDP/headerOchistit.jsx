import React from "react";
import { Button, Row, Col, Space, Input } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const HeaderOchistit = () => {
  return (
    <Row>
      <Col
        xs={{ offset: 2, span: 22 }}
        sm={{ offset: 6, span: 18 }}
        lg={{ offset: 14, span: 8 }}
        className="search"
      >
        <Space>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          <Button type="primary">More actions</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderOchistit;
