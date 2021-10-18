import React, { useState, useEffect } from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, Select, notification} from "antd";
import {saveSections} from "../../../../server/config/objects/SectionsService";
const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const HeaderBulimlar = (props) => {
  const [id, setId] = useState([]);
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
    let sections = {
      name: values.document.desc,
      branchId: id,
    };
    if (sections.name && sections.branchId){
      saveSections(sections).then(value => {
        if (value&&value.data.success){
            props.getSections();
            notification['success']({
              message:'Data success save!'
            });
        }
      })
    }
  };
// Bu pasdagilar Select uchun funksiyalar
  function onChange(value) {
    setId(value);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }
  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Bulimlar Modal"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
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
                  name={["document", "koeffitsient"]}
                  label="Filial"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
              >

                <Select
                    // showSearch

                    style={{ width: 300 }}
                    placeholder=" "
                    optionFilterProp="children"
                    onChange={onChange}
                    className='Select'
                    onFocus={onFocus}
                    onBlur={onBlur}
                    onSearch={onSearch}
                    filterOption={(input, option) =>
                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                    }
                >
                  {
                    Array.isArray(props.branch)?props.branch.map((item)=>(
                        <Option value={item.id}>{item.name}</Option>
                    )):""
                  }
                </Select>
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
export default HeaderBulimlar;
