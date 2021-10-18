import React, { useState, useEffect } from "react";
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
  notification,
} from "antd";
import { saveStaff } from "../../../../server/config/objects/StaffService";
import { getSectionsList } from "../../../../server/config/objects/SectionsService";
import { getSectionList } from "../../../../server/config/objects/SectionService";
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
const HeaderFoydalanuvchi = (props) => {
  const [id, setId] = useState([]);
  const [section, setSection] = useState([]);
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
  useEffect(() => {
    getSections();
  }, []);
  const getSections = () => {
    getSectionList().then((value) => {
      if (value && value.data) {
        setSection(value.data);
      }
    });
  };
  const onFinishCreate = (values) => {
    console.log(values);
    let employee = {
      name: values.document.desc,
      info: values.document.info,
      address: values.document.address,
      position: values.document.position,
      sectionId: id,
      phoneNumber: values.document.phoneNumber,
    };
    if (
      employee.name &&
      employee.info &&
      employee.address &&
      employee.position &&
      employee.sectionId &&
      employee.phoneNumber
    ) {
      saveStaff(employee).then((value) => {
        if (value && value.data.success) {
          props.getEmployees();
          notification["success"]({
            message: "Data success save!",
          });
        }
      });
    }
    console.log(employee);
  };
  // Bu pasdagilar Select uchun funksiyalar
  function onChange(value) {
    setId(value);
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
            title="Xodimlar"
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
                label="Ismi"
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
                name={["document", "section"]}
                label="Bo'limlar"
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
                  {Array.isArray(section)
                    ? section.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>
              <Form.Item
                name={["document", "info"]}
                label="Info"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "address"]}
                label="Address"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "position"]}
                label="Lavozim"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "phoneNumber"]}
                label="Tel raqam:"
                rules={[
                  {
                    type: "string",
                  },
                ]}
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
export default HeaderFoydalanuvchi;
