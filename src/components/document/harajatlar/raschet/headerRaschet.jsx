import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./raschet.css";
import { dataa, columnss } from "./ModalTable";

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
const HeaderRaschet = () => {
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
            Create
          </Button>
          <Modal
            title=" Rasxod "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="100%"
            height="100vh"
          >
            <div className="linktop">
              <Button>Основное</Button>
              <a href="#">Kassa</a>
            </div>
            <div>
              <Button className="Btn">Запусать и закрыть</Button>
              <Button className="Btn">Запусать</Button>
              <Button className="Btn">Провести</Button>
              <Button className="Eshyo">Еще</Button>
            </div>

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              // validateMessages={validateMessages}
            >
              <div className="Webber">
                <div className="content">
                  <div className="content1">
                    <Form.Item
                      name={["document", "data"]}
                      label="Data"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      name={["document", "kassa"]}
                      label="Kassa:"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "otvet"]}
                      label="Otvetstvenniy:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "organizatsiya"]}
                      label="Organizatsiya:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "Podrazdeleniya "]}
                      label="Uchyet:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </div>
                  <div className="component2">
                    <Col>
                      <Space className="ModalSpace">
                        <Button type="primary">Dabavit</Button>
                        <Search
                          placeholder="Search"
                          onSearch={onSearch}
                          enterButton
                          className="ModalSearch"
                        />
                        <Button className="EshyoModal">Еще</Button>
                      </Space>
                    </Col>

                    <div className="ModalTable1">
                      <Table
                        className="Jadval"
                        columns={columnss}
                        scroll={{ x: 700, y: 400 }}
                        dataSource={dataa}
                      />
                    </div>
                  </div>
                </div>
                <Form.Item
                  name={["document", "izox"]}
                  label="Izox"
                  rules={[
                    {
                      type: "string",
                    },
                  ]}
                >
                  <textarea
                    className="Textarea"
                    style={{ minHeight: "10vh", minWidth: "70vh" }}
                  />
                </Form.Item>
              </div>
            </Form>
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
          <Button type="primary">More actions</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderRaschet;
