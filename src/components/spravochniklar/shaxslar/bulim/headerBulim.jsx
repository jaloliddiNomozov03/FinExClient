import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber, notification } from "antd";
import { saveSection } from "../../../../server/config/objects/SectionService";
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
const HeaderBulim = (props) => {
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
    const section = {
      name: values.document.desc,
    };
    saveSection(section).then((value) => {
      if (value && value.data.success) {
        props.getSection();
        notification["success"]({
          message: "Data save!",
          description: `${section.name} successfully saved!!`,
        });
      } else {
        notification["error"]({
          message: "Data not save!",
          description: `${section.name} don't save!`,
        });
      }
    });
  };

  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Bulim"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
          >
            <Row style={{ marginBottom: "3%" }} >
              <Col span={10}>
                <Button type='primary'>Запусать и закрыть</Button>
              </Col>
              <Col span={2}>
                <Button>Запусать</Button>
              </Col>
              <Col span={3} offset={9}>
                <Button type='primary'>Еще</Button>
              </Col>
            </Row>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              marginTop="2%"
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
                <InputNumber style={{ width: "100%" }} />
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
export default HeaderBulim;
