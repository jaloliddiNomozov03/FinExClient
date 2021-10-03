import React, { useState } from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, notification} from "antd";
import {saveCompany} from "../../../../server/config/objects/CompanyService";
import {saveExpenditureType} from "../../../../server/config/objects/ExpenditureTypeService";
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
const HeaderChiqimTuri = (props) => {
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
    let getExpenditureType = {
      name: values.document.desc
    };
    saveExpenditureType(getExpenditureType).then(value => {
      if (value&&value.data.success){
        props.getExpenditureTypes();
        notification['success']({
          message:'Data success save!'
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
            title="Chiqim Turi (create)"
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
                <InputNumber style={{width:"100%"}} />
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
export default HeaderChiqimTuri;