import React, { useState } from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, notification} from "antd";
import {saveBranch} from "../../../../server/config/objects/BranchService";
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
const HeaderFilial = (props) => {
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
      name:values.document.name
    };
    saveBranch(doc).then(value => {
      if (value && value.data.success){
        props.getBranches();
        notification['success']({
          message:'Data save!',
          description: `${doc.name} successfully saved!!`
        })
      }else {
        notification['error']({
          message:'Data not save!',
          description: `${doc.name} don't save!`
        })
      }
    });
  };

  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Filial (create)"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
            >
              <Form.Item
                name={["document", "name"]}
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
export default HeaderFilial;