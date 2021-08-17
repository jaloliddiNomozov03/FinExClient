import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form } from "antd";
import "./NaxtPulChiqimi.css";
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
const HeaderChiqim = () => {
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
            title="Naqt pul chiqimi"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="150vh"
          >
            <div className="ModalTop">
              <Button>Основное</Button>
              <p>
                {" "}
                <a href="#">Бонуси</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#"> Взаиморасчеты</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#">ДатаПогашение</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#"> Касса</a>{" "}
              </p>
            </div>
            <Button type="primary">Запусать и закрыть</Button>
            <Button className="Top">Запусать</Button>
            <Button className="Top">Провести</Button>
            <Button className="Yeshyo">Еще</Button>
            <div className="from">
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
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  name={["document", "otvet"]}
                  label="Otvetstvenniy"
                  rules={[
                    {
                      type: "integer",
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
                      type: "integer",
                    },
                  ]}
                >
                  <textarea className="Textarea" />
                </Form.Item>
              </Form>
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
export default HeaderChiqim;
