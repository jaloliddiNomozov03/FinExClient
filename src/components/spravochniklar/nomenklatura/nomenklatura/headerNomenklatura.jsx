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
const HeaderNomenklatura = () => {
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
  const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] =
    useState(false);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };
  const showCreateGroupModal = () => {
    setIsCreateGroupModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };
  const handleCreateGroupOk = () => {
    setIsCreateGroupModalVisible(false);
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };
  const handleCreateGroupCancel = () => {
    setIsCreateGroupModalVisible(false);
  };

  const onFinishCreate = (values) => {
    console.log(values);
  };
  const onFinishCreateGroup = (values) => {
    console.log(values);
  };

  return (
    <Row>
      <Col span={6}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Basic Modal"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
            {/* <Button type="primary" >
              Запусать и закрыть
            </Button>
            <Button className='Top'>
              Запусать
            </Button>
            <Button className='Yew' >
              Еще
            </Button> */}
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              size="small"
            // validateMessages={validateMessages}

            >
              <Form.Item
                name={["document", "desc"]}
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "code"]}
                label="Code"
                rules={[
                  {
                    type: "integer",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "edinitsa"]}
                label="Edinitsa"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "shtrc"]}
                label="ShtrixCode"
                rules={[{ type: "string" }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "TipTovara"]}
                label="TipTovara"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "seriyka"]}
                label="Seriyka"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "EdinIzm"]}
                label="EdinitsaIzmereniya"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "koeffitsient"]}
                label="Koeffitsient"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "valyuta"]}
                label="Valyuta"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "sirye"]}
                label="Sirye"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "mahsulot"]}
                label="Mahsulot"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "mahsulotM"]}
                label="MahsulotMiqdori"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "description"]}
                label="Description"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Button type="primary" onClick={showCreateGroupModal}>
            Create group
          </Button>
          <Modal
            title="Basic Modal"
            visible={isCreateGroupModalVisible}
            onOk={handleCreateGroupOk}
            onCancel={handleCreateGroupCancel}
          >
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreateGroup}
            // validateMessages={validateMessages}
            >
              <Form.Item
                name={["document", "desc"]}
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "code"]}
                label="Code"
                rules={[
                  {
                    type: "integer",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "description"]}
                label="Description"
                rules={[{ type: "string" }]}
              >
                <Input />
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
      <Col span={8} offset={10}>
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
export default HeaderNomenklatura;
