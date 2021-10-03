import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber, Select } from "antd";
import './partiya.css'
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
const HeaderPartiya = () => {
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
  // Bu pasdagilar Select uchun funksiyalar  
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log('blur');
  }

  function onFocus() {
    console.log('focus');
  }

  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Partiya"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="60%"
          >
            <Row>
              <Col span={6}>
                <Button type='primary'>Запусать и закрыть</Button>
              </Col>
              <Col span={2}>
                <Button>Запусать</Button>
              </Col>
              <Col span={3} offset={13}>
                <Button type='primary'>Еще</Button>
              </Col>
            </Row>

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
            // validateMessages={validateMessages}
            >
              <Row style={{ marginTop: "2%" }} >
                <Col span={11} offset={1} >
                  <Form.Item
                    name={["document", "code"]}
                    label="Code"
                    rules={[
                      {
                        required: true,
                      },
                    ]}
                  >
                    <InputNumber style={{ width:"100%" }} />
                  </Form.Item>
                  <Form.Item
                    name={["document", "desc"]}
                    label="Наименование:"
                    rules={[
                      {
                        type: "integer",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["document", "edinitsa"]}
                    label="Owner"
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
                    label="PrixodData"
                    rules={[{ type: "string" }]}
                  >
                    <InputNumber style={{ width:"100%" }} />
                  </Form.Item>
                  <Form.Item
                    name={["document", "TipTovara"]}
                    label="Document"
                    rules={[{ type: "string" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["document", "seriyka"]}
                    label="Kirim narxi"
                    rules={[{ type: "string" }]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col span={11} offset={1}  >
                  <Form.Item
                    name={["document", "EdinIzm"]}
                    label="Sotib olish narxi"
                    rules={[{ type: "string" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["document", "koeffitsient"]}
                    label="Valyuta"
                  >

                    <Select
                      // showSearch

                      style={{ width:"100%" }}
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
                      <Option value="jack">UZS</Option>
                      <Option value="lucy">USD</Option>
                      <Option value="tom">RU</Option>
                    </Select>
                  </Form.Item>


                  <Form.Item
                    name={["document", "sirye"]}
                    label=" Organizatsiya"
                    rules={[{ type: "string" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["document", "mahsulot"]}
                    label="Srokgodnosti"
                    rules={[{ type: "string" }]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name={["document", "mahsulotM"]}
                    label="O'lchov birligi"
                    rules={[{ type: "string" }]}
                  >
                    <Input />
                  </Form.Item>

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
export default HeaderPartiya;
