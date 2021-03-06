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
  Select,
} from "antd";
import "./partiya.css";
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
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
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
                name={["document", "code"]}
                label="Code"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <InputNumber />
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
                <InputNumber />
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
              <Form.Item
                name={["document", "EdinIzm"]}
                label="Sotib olish narxi"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              {/*<Form.Item*/}
              {/*  name={["document", "koeffitsient"]}*/}
              {/*  label="Valyuta"*/}
              {/*  rules={[{ type: "string" }]}*/}
              {/*>*/}
              {/*  <Input />*/}
              {/*</Form.Item>*/}
              <Form.Item name={["document", "koeffitsient"]} label="Valyuta">
                <Select
                  // showSearch

                  style={{ width: 300 }}
                  placeholder=" "
                  optionFilterProp="children"
                  onChange={onChange}
                  className="Select"
                  onFocus={onFocus}
                  onBlur={onBlur}
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
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
export default HeaderPartiya;
