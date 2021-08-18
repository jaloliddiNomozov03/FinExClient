import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./intervazatsiya.css";
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
const HeaderInter = () => {
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
            title="Извантаризация(создание) "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="96%"
            height="100vh"
          >
            <div className="linktop">
              <Button type="primary">Основное</Button>
              <a href="#">Доходы</a>
              <a href="#">Расходы</a>
              <a href="#">РасчетСРобочими</a>
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
              <Row style={{borderBottom:'1px solid #333'}} >
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
                      label="Организация:"
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
                    <Form.Item
                      name={["document", "Ovalyuta "]}
                      label="Оснавной Валюта:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>{" "}
                    <Form.Item
                      name={["document", "rasxod "]}
                      label="Расход:"
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
                      name={["document", "daromadsumma "]}
                      label="Даромад суммаси:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "jamisumma "]}
                      label="Jami Summa:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Button type='primary'>Submit</Button>
                  </Form>
                </Col>
              </Row  >
              <Row style={{marginTop:'2%'}} >
              <Col span={22} offset={1}>
                  <div Mt></div>
                  <div style={{ width: '100%' }}>
                    <Row>
                      <Col span={3}>
                        <Button type='primary'  >Dabavit</Button>

                      </Col>
                      <Col span={7} offset={12}>
                        <Search
                          placeholder="Search"
                          onSearch={onSearch}
                          enterButton
                        />
                      </Col>
                      <Col span={1} >
                        <Button type='primary' >Еще</Button>
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
    </Row >
  );
};
export default HeaderInter;













