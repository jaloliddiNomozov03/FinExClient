import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./peremisheniya.css";
import { dataa } from "./ModalTable";
import { columnss } from "./ModalTable";

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
const HeaderPeremisheniya = () => {
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
            title="Peremisheniya Tavar  "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="96%"
            height="100vh"
          >
            <div className="linktop">
              <Button type="primary">Основное</Button>
              <a href="#">ТаварыНаСкладах</a>
            </div>
            <div className="ButtonTop">
              <Button className="Btn" type="primary">
                Провести и закрыть
              </Button>
              <Button className="Btn">Записать</Button>
              <Button className="Btn">Провести</Button>
              <Button className="Eshyo" type="primary">
                Еще
              </Button>
            </div>

            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
              <div className="Webber">
                <div className="content">
                  <div className="content1">
                    <div className="contetnTable1">
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
                        name={["document", "otpravleniya "]}
                        label="СкладОтправителя:"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </div>

                    <div className="contetnTable2">
                      <Form.Item
                        name={["document", "organizatsiya "]}
                        label="Организация:"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                      <Form.Item
                        name={["document", "otvetstvenniy "]}
                        label="Ответственный:"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </div>
                    <div className="contetnTable3">
                      <Form.Item
                        name={["document", "skladpoluchatel "]}
                        label="СкладПолучатель:"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <Input />
                      </Form.Item>
                    </div>
                  </div>
                  <div className="component2">
                    <div className="ModalTable1">
                      <Row>
                        <Button type="primary"> Добавить</Button>

                        <Col span={8} offset={13} className="search">
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
                      <Table
                        className="Table"
                        columns={columnss}
                        scroll={{ x: 1600, y: 400 }}
                        dataSource={dataa}
                      />
                    </div>
                  </div>
                </div>
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
export default HeaderPeremisheniya;
