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
import "./kursValyuta.css";

const { Option } = Select;
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
const HeaderKurs = () => {
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
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="КурсыВалюта  "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            width="40%"
            height="30vh"
          >
            <div className="ButtonTop">
              <Button className="Btn" type="primary">
                Записать и закрыть
              </Button>
              <Button className="Btn">Записать</Button>
            </div>

            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
              <Form.Item
                name={["document", "period "]}
                label="Период:"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "valyuta "]}
                label="Валюта:"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
                <Select
                  style={{ width: 300 }}
                  placeholder="Valyuta"
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
                name={["document", "kurs "]}
                label="Курс:"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
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
export default HeaderKurs;
