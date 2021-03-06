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
  DatePicker,
  notification,
} from "antd";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getWarehouseList } from "../../../../server/config/objects/WarehouseService";
import { saveEnteringGoods } from "../../../../server/config/document/EnteringGoodsService";
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
const HeaderMaxsulot = (props) => {
  const [date, setDate] = useState("");
  const [staff, setStaff] = useState([]);
  const [branch, setBranch] = useState([]);
  const [warehouse, setWarehouse] = useState([]);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);

  useEffect(() => {
    getStaff();
    getBranch();
    getWarehouse();
  }, []);
  const getStaff = () => {
    getStaffList().then((value) => {
      if (value && value.data) {
        setStaff(value.data);
      }
    });
  };
  const getBranch = () => {
    getBranchesList().then((value) => {
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };
  const getWarehouse = () => {
    getWarehouseList().then((value) => {
      if (value && value.data) {
        setWarehouse(value.data);
      }
    });
  };

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
    let enteringGoods = {
      comment: values.document.comment,
      date: date,
      responsibleId: values.document.responsible,
      isConstanta: values.document.isConstanta
        ? values.document.isConstanta.target.checked
        : false,
      branchId: values.document.branchId,
      warehouseId: values.document.warehouseId,
    };
    if (enteringGoods.responsibleId && enteringGoods.date) {
      console.log(enteringGoods);
      saveEnteringGoods(enteringGoods).then((value) => {
        if (value && value.data.success) {
          props.getEnteringGoods();
          notification["success"]({
            message: "Data success save!",
          });
        } else {
          notification["error"]({
            message: "Data do not save!",
          });
        }
      });
    }
  };
  function onChange(value, dateString) {
    // console.log('Selected Time: ', value);
    setDate(dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }
  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Maxsulot qoldiqlarini kiritish"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
          >
            <div>
              <Row>
                <Col span={3}>
                  <Button type="primary">???????????????? ?? ??????????????</Button>
                </Col>
                <Col span={2}>
                  <Button>????????????????</Button>
                </Col>
                <Col span={2}>
                  <Button>????????????????</Button>
                </Col>
                <Col span={3} offset={14}>
                  <Button type="primary">??????</Button>
                </Col>
              </Row>
            </div>

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              // validateMessages={validateMessages}
            >
              <Form.Item
                name={["document", "responsible"]}
                label="Staff"
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
                  // onChange={onChangeStaff}
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
                  // onChange={onChangeStaff}
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
                name={["document", "warehouseId"]}
                label="Staff"
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
                  // onChange={onChangeStaff}
                  className="Select"
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {Array.isArray(warehouse)
                    ? warehouse.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>
              <Form.Item
                name={["document", "isConstanta"]}
                label="IsConstanta:"
                valuePropName="unchecked"
                // rules={[
                //     {
                //         type: "string",
                //     },
                // ]}
              >
                <Input type="checkbox" />
              </Form.Item>
              <Form.Item name={["document", "date"]} label="Time">
                <Space direction="vertical" size={12}>
                  <DatePicker showTime onChange={onChange} onOk={onOk} />
                </Space>
              </Form.Item>
              <Form.Item
                name={["document", "comment"]}
                label="Izox"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <textarea />
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
export default HeaderMaxsulot;
