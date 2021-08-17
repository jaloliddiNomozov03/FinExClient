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
              <a href="#">Бонусы</a>
              <a href="#">Взаиморасчеты</a>
              <a href="#">ДатаПогашение</a>
              <a href="#">Продажи</a>
              <a href="#">ТавариНаСкладах</a>
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
              <div className="content">
                <div className="content1">
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
                    <InputNumber />
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
                    name={["document", "narxturi"]}
                    label="Narx turi:"
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
                    <textarea style={{ minHeight: "10vh", minWidth: "70vh" }} />
                  </Form.Item>
                </div>
                <div className="component2">
                  <Col>
                    <Space className="ModalSpace">
                      <Button type="primary">СписанияДолга</Button>
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
                  <div className="ModalTable2">
                    <Table
                      className="Jadval"
                      columns={columnsss}
                      scroll={{ x: 700, y: 400 }}
                      dataSource={dataaa}
                      height="2%"
                    />
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
export default HeaderYukberuvchi;
