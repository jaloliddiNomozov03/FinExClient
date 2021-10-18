import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Space,
  Input,
  Modal,
  Form,
  InputNumber,
  notification,
} from "antd";
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
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
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
            <Button type="primary">Запусать и закрыть</Button>
            <Button className="Top">Запусать</Button>
            <Button className="Yew">Еще</Button>

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
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
              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
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
export default HeaderBulim;
