import React, { useEffect, useState } from "react";
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
  DatePicker,
  notification,
} from "antd";
import { Table } from "antd";
import "./raschet.css";
import { dataa, columnss } from "./ModalTable";
import { saveWriteOfGoods } from "../../../../server/config/document/WriteOffOfGoods";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getWarehouseList } from "../../../../server/config/objects/WarehouseService";
import { getSectionsList } from "../../../../server/config/objects/SectionsService";
import { saveSalaryCalculation } from "../../../../server/config/document/SalaryCalculation";

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
const HeaderRaschet = (props) => {
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

  const [date, setDate] = useState("");
  const [branch, setBranch] = useState([]);
  const [staff, setStaff] = useState([]);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    getSections();
    getStaff();
    getBranches();
  }, []);

  const onFinishCreate = (values) => {
    console.log(values);
    console.log(date);
    let rasxod = {
      date: date,
      ...values.document,
    };
    if (rasxod.date && rasxod.responsibleId && rasxod.branchId) {
      saveSalaryCalculation(rasxod).then((value) => {
        if (value && value.data.success) {
          props.getList();
          notification["success"]({
            message: "Data success saved!",
          });
        } else {
          notification["error"]({
            message: "Data not saved!",
          });
        }
      });
    }
  };

  const getStaff = () => {
    getStaffList().then((value) => {
      if (value && value.data) {
        setStaff(value.data);
      }
    });
  };
  const getBranches = () => {
    getBranchesList().then((value) => {
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };

  const getSections = () => {
    getSectionsList().then((value) => {
      if (value && value.data) {
        setSections(value.data);
      }
    });
  };

  function onChange(value, dateString) {
    console.log("Selected Time: ", dateString);
    setDate(dateString);
  }

  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title=" Rasxod "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="100%"
            height="100vh"
          >
            <div className="linktop">
              <Button>Основное</Button>
              <a href="#">Kassa</a>
            </div>
            <div>
              <Row>
                <Col span={3}>
                  <Button type="primary">Запусать и закрыть</Button>
                </Col>
                <Col span={2}>
                  <Button>Запусать</Button>
                </Col>
                <Col span={2}>
                  <Button>Провести</Button>
                </Col>
                <Col span={3} offset={14}>
                  <Button>Еще</Button>
                </Col>
              </Row>
            </div>
            <div className="ModalDiv">
              <Row>
                <Col span={10}>
                  <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinishCreate}
                    // validateMessages={validateMessages}
                  >
                    <Form.Item
                      name={["document", "data"]}
                      label="Data"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Space direction="vertical" size={12}>
                        <DatePicker showTime onChange={onChange} />
                      </Space>
                    </Form.Item>

                    <Form.Item
                      name={["document", "responsibleId"]}
                      label="Otvetstvenniy:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Select
                        style={{ width: 300 }}
                        placeholder=" "
                        optionFilterProp="children"
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(staff)
                          ? staff.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name={["document", "branchId"]}
                      label="Organizatsiya:"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        style={{ width: 300 }}
                        placeholder=" "
                        optionFilterProp="children"
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(branch)
                          ? branch.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name={["document", "sectionsId"]}
                      label="Podrazdleniya:"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      <Select
                        style={{ width: 300 }}
                        placeholder=" "
                        optionFilterProp="children"
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(sections)
                          ? sections.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <div className="Mt">
                      <Form.Item
                        name={["document", "comment"]}
                        label="Izox"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <textarea
                          style={{ minHeight: "10vh", minWidth: "90vh" }}
                        />
                      </Form.Item>
                    </div>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Form>
                </Col>
                <Col span={13} offset={1}>
                  <div style={{ width: "100%" }}>
                    <Row>
                      <Col span={3}>
                        <Button type="primary">Dabavit</Button>
                      </Col>
                      <Col span={7} offset={11}>
                        <Search
                          placeholder="Search"
                          onSearch={onSearch}
                          enterButton
                        />
                      </Col>
                      <Col span={3}>
                        <Button>Еще</Button>
                      </Col>
                    </Row>
                  </div>
                  <div className="Mt ">
                    <Table
                      columns={columnss}
                      scroll={{ x: 700, y: 400 }}
                      dataSource={dataa}
                    />
                  </div>
                </Col>
              </Row>
            </div>
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
export default HeaderRaschet;
