import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./rasxod.css";
import { dataa, dataaa, columnss, columnsss } from "./ModalTable";

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
const HeaderRasxod = () => {
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
              <a href="#">Rasxod</a>
              <a href="#">RaschedCRabochimi</a>
            </div>
            <div>
              <Row>
                <Col span={3} >
                  <Button type='primary' >Запусать и закрыть</Button>
                </Col>
                <Col span={2}>
                  <Button >Запусать</Button>
                </Col >
                <Col span={2}>
                  <Button >Провести</Button>
                </Col>
                <Col span={3} offset={14} >
                  <Button type='primary' >Еще</Button>
                </Col>
              </Row>
            </div>
            <div className='ModalDiv'>
              <Row>
                <Col span={10}>
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinishCreate}
                  // validateMessages={validateMessages}
                  >
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
                        style={{ minHeight: "10vh", width: "53vh" }}
                      />
                    </Form.Item>
                    <Button type='primary' >Submit</Button>
                  </Form>
                </Col>
                <Col span={13} offset={1} >
                  <div style={{ width: '100%' }}>
                    <Row>
                      <Col span={3}>
                        <Button type="primary">Dabavit</Button>
                      </Col>
                      <Col span={7} offset={11}>
                        <Search
                          placeholder="Search"
                          onSearch={onSearch}
                          enterButton
                        />
                      </Col>
                      <Col span={3} >
                        <Button >Еще</Button>
                      </Col>
                    </Row>
                    <div className='Mt' >



                      <Table

                        columns={columnss}
                        scroll={{ x: 800, y: 400 }}
                        dataSource={dataa}
                      />
                    </div>
                    <div>
                      <Table

                        columns={columnsss}
                        scroll={{ x: 500, y: 400 }}
                        dataSource={dataaa}
                        height="2%"
                      />
                    </div>
                  </div>
                </Col>


              </Row>
            </div>

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
export default HeaderRasxod;
