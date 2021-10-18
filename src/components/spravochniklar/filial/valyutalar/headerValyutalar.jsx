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
import { saveCurrency } from "../../../../server/config/objects/CurrencyService";
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
const HeaderValyutalar = (props) => {
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
    let currency = {
      name: values.document.desc,
      rate: values.document.rate,
    };
    if (currency.name && currency.rate) {
      saveCurrency(currency).then((value) => {
        if (value && value.data.success) {
          props.getCurrency();
          notification["success"]({
            message: "Data save!",
            description: `${currency.name} successfully saved!!`,
          });
        } else {
          notification["error"]({
            message: "Data not save!",
            description: `${currency.name} don't save!`,
          });
        }
      });
    }
  };

  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Valyutalar (create)"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
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
                name={["document", "rate"]}
                label="Rate"
                rules={[
                  {
                    type: "number",
                    required: true,
                  },
                ]}
              >
                <InputNumber />
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
      <Col xs={{ offset: 7, span: 6 }}
        sm={{ offset: 12, span: 8 }}
        lg={{ offset: 14, span: 8}}>
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
export default HeaderValyutalar;
