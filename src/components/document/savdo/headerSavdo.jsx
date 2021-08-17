import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
import "./savdoDocument.css";

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
const HeaderSavdo = () => {
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
            title=" Savdo "
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

            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
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
                      name={["document", "podrazdeleniye"]}
                      label="Podrazdeleniye:"
                      rules={[
                        {
                          required: true,
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
                  </div>
                  <div className="content2">
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
                      name={["document", "tulovmuddati"]}
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
                      name={["document", "prodaji"]}
                      label="Prodaji:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "bonuspro"]}
                      label="ProSenaBonusPoProdaji:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "tulovturi"]}
                      label="Tulovturi:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "harajatturi"]}
                      label="HarajatTuri:"
                      // style={{padding:"0", margin: '0'}}
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

                <Form.Item
                  name={["document", "izox"]}
                  label="Izox"
                  rules={[
                    {
                      type: "string",
                    },
                  ]}
                >
                  <textarea className="Textarea" />
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
export default HeaderSavdo;
