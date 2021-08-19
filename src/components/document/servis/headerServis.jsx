import React, { useState } from "react";
import ServisInput from "./servisInput";

import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
const { Search } = Input;
const onSearch = (value) => console.log(value);
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const HeaderServis = () => {
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };

  const onFinishCreate = (values) => {
    console.log(values);
  };

  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Sformirovat
          </Button>
          <Button type="primary">UstanavitSena</Button>
          <Modal
            title="Servis"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width='100vh'
          >
            <Row>
              <Col span={7}>
                <Button type='primary' >Запусать и закрыть</Button>
              </Col>
              <Col spna={3}>
                <Button>Запусать</Button>
              </Col>
              <Col  span={3} offset={10} >
                <Button type='primary'>Еще</Button>
              </Col>
            </Row>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
            // validateMessages={validateMessages}
            ></Form>
          </Modal>
        </Space>
      </Col>
      <Col span={8} offset={12} className="search">
        <Space>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
          <Button>Еще </Button>
        </Space>
      </Col>
      <ServisInput />
    </Row>
  );
};
export default HeaderServis;
