import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber } from "antd";
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
const HeaderMaxsulot = () => {
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
            title="Maxsulot qoldiqlarini kiritish"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
          >
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
              <Form.Item
                name={["document", "data"]}
                label="Data"
                rules={[
                  {
                    required: true,
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
                name={["document", "izox"]}
                label="Izox"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <textarea />
              </Form.Item>
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
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
export default HeaderMaxsulot;
