import React from "react";
import { Button, Row, Col, Space, Input } from "antd";

const { Search } = Input;
const onSearch = (value) => console.log(value);
const HeaderOchistit = () => {

    return (
        <Row>

            <Col span={8} offset={16} className="search">
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
