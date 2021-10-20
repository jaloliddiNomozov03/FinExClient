import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import { Table } from "antd";
import "./pastupleniya.css";
import { dataa } from "./ModalTable";
import { columnss } from "./ModalTable";
import TextArea from "antd/lib/input/TextArea";

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
const HeaderPastypleniya = () => {
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
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Postupleniya "
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
                <Col span={3}>
                  <Button type="primary">Запусать и закрыть</Button>
                </Col>
                <Col span={2}>
                  <Button>Запусать</Button>
                </Col>
                <Col span={2}>
                  <Button>Провести</Button>
                </Col>
                <Col span={3}>
                  {" "}
                  <Button type="primary">Kontragent tarixi</Button>{" "}
                </Col>
                <Col span={3} offset={11}>
                  <Button type="primary">Еще</Button>
                </Col>
              </Row>
            </div>

            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
              <div className="ModalDiv">
                <Row style={{ borderBottom: "1px solid #333" }}>
                  <Col span={7} offset={1}>
                    <Form.Item
                      name={["document", "numer"]}
                      label="Numer"
                      rules={[
                        {
                          type: "string",
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
                      <Input />
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
                    <Button type="primary">Submit</Button>
                  </Col>

                  <Col span={7} offset={1}>
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
                      name={["document", "kontragent "]}
                      label="Kontragent:"
                      className="InputFrom"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
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
                  </Col>
                  <Col span={7} offset={1}>
                    <Form.Item
                      name={["document", "valyuta "]}
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
                      name={["document", "summadocument "]}
                      label="Summa Dacument:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "tulovmuddati "]}
                      label="Tulov Muddati:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "obshiydolg "]}
                      label="ОбщийДолг:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                  </Col>
                </Row>
                <Row style={{ marginTop: "4%" }}>
                  <div className="Mt"></div>
                  <div style={{ width: "100%" }}>
                    <Row>
                      <Col span={3}>
                        {" "}
                        <Button type="primary">СписанияДолга </Button>{" "}
                      </Col>
                      <Col span={5} offset={14}>
                        <Search
                          placeholder="Search"
                          onSearch={onSearch}
                          enterButton
                        />
                      </Col>
                      <Col span={2}>
                        <Button type="primary">Еще</Button>
                      </Col>
                    </Row>
                    <div className="Mt-1">
                      <Table
                        columns={columnss}
                        scroll={{ x: 1600, y: 400 }}
                        dataSource={dataa}
                      />
                    </div>
                  </div>
                </Row>
                <Row style={{ marginBottom: "3%" }}>
                  <Col span={20} offset={4}>
                    <Form.Item
                      name={["document", "izox "]}
                      label="Izox:"
                      className="Textarea"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <TextArea />
                    </Form.Item>
                  </Col>
                </Row>
              </div>
            </Form>
          </Modal>
        </Space>
      </Col>
      <Col
        xs={{ offset: 7, span: 6 }}
        sm={{ offset: 12, span: 8 }}
        lg={{ offset: 14, span: 8 }}
        className="search"
      >
        <Space>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            allowClear
          />
          <Button type="primary">More actions</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderPastypleniya;
