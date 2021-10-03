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
import { savePrice } from "../../../../server/config/objects/PriceTypeService";
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
const HeaderNarxTuri = (props) => {
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
    const doc = {
      name: values.document.desc,
    };
    savePrice(doc).then((value) => {
      if (value && value.data.success) {
        props.getPageList();
        notification["success"]({
          message: "Data save!",
          description: `${doc.name} successfully saved!!`,
        });
      } else {
        notification["error"]({
          message: "Data not save!",
          description: `${doc.name} don't save!`,
        });
      }
    });
  };

  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Narx Turi (create)"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
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
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Row>
                <Col offset={19} >
                  <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                      Submit
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </Space>
      </Col>
      <Col span={8} offset={12}>
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
export default HeaderNarxTuri;
