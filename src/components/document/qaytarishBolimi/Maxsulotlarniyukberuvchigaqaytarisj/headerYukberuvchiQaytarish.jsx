import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./yukberuvchiQaytarish.css";
import { dataa } from "./modalTablee";
import { dataaa } from "./modalTablee";
import { columnss } from "./modalTablee";
import { columnsss } from "./modalTablee";

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
const HeaderYukberuvchi = () => {
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
            title=" Maxsulotlarni yuk beruvchiga qaytarish "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="100%"
            height="100vh"
          >
            <div className="linktop">
              <Button>Основное</Button>
              <a href="#">Взаиморасчеты</a>
              <a href="#">ДатаПогашение</a>
              <a href="#">ТавариНаСкладах</a>
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

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              // validateMessages={validateMessages}
            >
              <div className="ModalDiv">
                <Row>
                  <Col span={8} style={{ padding: '1%' }} >
                    <h4 style={{ color: "blue", textAlign: "center" }}>
                      Malumotlar
                    </h4>
                    <Form.Item
                      name={["document", "number"]}
                      label="Nomer:"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "data"]}
                      label="Data"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <InputNumber style={{ width: '39vh' }} />
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
                      name={["document", "uchyet"]}
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
                      name={["document", "ombor"]}
                      label="Ombor:"
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
                      name={["document", "kontragent"]}
                      label="Kontragent:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "bonus"]}
                      label="ProtsentBonusPoProdaji:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "kurs"]}
                      label="Kurs:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <h4 style={{ color: "blue", textAlign: "center" }}>
                      Tulov muddati
                    </h4>

                    <Form.Item
                      name={["document", "valyuta"]}
                      label="Valyuta:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "summadoc"]}
                      label="SummaDocument:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "tulov"]}
                      label="TulovMuddati:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "obshiydalog"]}
                      label="ObshiyDalog:"
                      // style={{padding:"0", margin: '0'}}
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                  </Col>

                  <Col span={16} style={{ padding: '1%', borderLeft:'1px solid #555' }} >
                    <Row>
                      <Col span={2} >
                        <Button type="primary"> СписанияДолга</Button>
                      </Col>
                      <Col span={7} offset={11} className="search">
                        <Space>
                          <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                          />
                        </Space>
                      </Col>
                      <Col span={1} >
                        <Button type="primary">More actions</Button>
                      </Col>
                    </Row>
                    <div className='Mt-1' >
                      <Row  >
                        <Table
                          columns={columnss}
                          scroll={{ x: 1000, y: 400 }}
                          dataSource={dataa}
                        />
                      </Row>
                    </div>
                    <div className='Mt' >
                      <Row  >
                        <Table
                          columns={columnsss}
                          scroll={{ x: 700, y: 400 }}
                          dataSource={dataaa}
                        />
                      </Row>
                    </div>
                    <div className='Mt' >
                      <Form.Item
                        name={["document", "izox"]}
                        label="Izox"
                        className="Textarea"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <textarea style={{ minHeight: "15vh", minWidth: "100vh" }} />
                      </Form.Item>
                    </div>
                  </Col>
                </Row>
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
export default HeaderYukberuvchi;
