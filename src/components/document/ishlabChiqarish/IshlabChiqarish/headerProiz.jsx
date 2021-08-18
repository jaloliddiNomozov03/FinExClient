import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./proizvadstve.css";
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
const HeaderProiz = () => {
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
            title=" Ishlab chiqarish "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="96%"
            height="100vh"
          >
            <div className="linktop">
              <Button type="primary">Основное</Button>
              <a href="#">Взаиморасчети</a>
              <a href="#">ТаварыНаСкладах</a>
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
                <Col span={7} offset={1}>
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
                      name={["document", "ombor"]}
                      label="Ombor :"
                      rules={[
                        {
                          required: true,
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
                      name={["document", "omborpoluchatel"]}
                      label="СкладПолучател :"
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
                  </Form>
                </Col>
                <Col span={7} offset={1}>
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinishCreate}
                  // validateMessages={validateMessages}
                  >

                    <Form.Item
                      name={["document", "namenklatura "]}
                      label="Namenklatura:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "ulchovbirligi "]}
                      label="Улчов бирлиги:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>{" "}
                    <Form.Item
                      name={["document", "valyuta "]}
                      label="Vlayuta:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>{" "}
                    <Form.Item
                      name={["document", "kurs "]}
                      label="Kurs:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "soni "]}
                      label="Soni:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={7} offset={1}>
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinishCreate}
                  // validateMessages={validateMessages}
                  >
                    <Form.Item
                      name={["document", "tiptavar "]}
                      label="ТипУчетСписаниетовар:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "yabgipartiya "]}
                      label="Янги партия:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "summatavari "]}
                      label="Сумма Тавари:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "summarasxod "]}
                      label="Сумма Расходи:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "prixodsena "]}
                      label="Приход Цена:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Form>
                </Col>
              </Row>
              <Row>
                <Col span={22} offset={1}>
                  <div Mt></div>
                  <div style={{ width: '100%' }}>
                    <Row>
                      <Col span={3}>
                        <Button type='primary'  >Submit</Button>

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
                    <div className='Mt-1' >
                      <Table
                        columns={columnss}
                        scroll={{ x: 1200, y: 400 }}
                        dataSource={dataa}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
              <Row>
                <Col span={18} offset={1} >
                  <div className='Mt-1'>
                    <Form.Item
                      name={["document", "izox"]}
                      label={<strong> Izox </strong>}
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <textarea style={{ minHeight: "10vh", width: "100vh" }} />
                    </Form.Item>
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
export default HeaderProiz;



















