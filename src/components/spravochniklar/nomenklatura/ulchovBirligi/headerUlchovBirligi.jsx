import React, { useState } from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, notification} from "antd";
import {saveUnit} from "../../../../server/config/objects/UnitService";
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
const HeaderUlchovBirligi = (props) => {
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
    let doc = {
      name: values.document.desc
    };
    saveUnit(doc).then(value => {
      if (value && value.data.success){
        props.getUnits();
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
    })
  };

  return (
      <Row>
        <Col span={4}>
          <Space>
            <Button type="primary" onClick={showCreateModal}>
              Create
            </Button>
            <Modal
                title="Ulchov Birligi"
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
                    width="100%"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                >
                  <Input/>
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
export default HeaderUlchovBirligi;
