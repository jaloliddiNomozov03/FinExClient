import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Space,
  Input,
  Modal,
  Form,
  Select,
  InputNumber,
  DatePicker,
  notification,
} from "antd";
import { Table } from "antd";
import "./intervazatsiya.css";
import { dataa } from "./ModalTable";
import { columnss } from "./ModalTable";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getWarehouseList } from "../../../../server/config/objects/WarehouseService";
import { getCurrencyList } from "../../../../server/config/objects/CurrencyService";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { saveInventory } from "../../../../server/config/document/InventoryService";

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
const HeaderInter = (props) => {
  const [date, setDate] = useState("");
  const [staff, setStaff] = useState(null);
  const [branch, setBranch] = useState(null);
  const [warehouse, setWarehouse] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);

  useEffect(() => {
    getStaff();
    getBranch();
    getWarehouses();
    getCurrency();
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
  const getCurrency = () => {
    getCurrencyList().then((value) => {
      if (value && value.data) {
        setCurrency(value.data);
      }
    });
  };
  const getWarehouses = () => {
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
    let inventory = {
      allSum: values.document.allSum,
      branchId: values.document.branchId,
      costs: values.document.costs,
      currencyId: values.document.currencyId,
      date: date,
      enteringSum: values.document.enteringSum,
      staffId: values.document.staffId,
      warehouseId: values.document.warehouseId,
    };
    if (
      inventory.branchId &&
      inventory.currencyId &&
      inventory.staffId &&
      inventory.warehouseId &&
      inventory.allSum &&
      inventory.costs &&
      inventory.enteringSum &&
      inventory.date
    ) {
      saveInventory(inventory).then((value) => {
        if (value && value.data.success) {
          props.getInventory();
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
            title="Извантаризация(создание) "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="96%"
            height="100vh"
          >
            <div className="linktop">
              <Button type="primary">Основное</Button>
              <a href="#">Доходы</a>
              <a href="#">Расходы</a>
              <a href="#">РасчетСРобочими</a>
              <a href="#">ТаварыНаСкладах</a>
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
                  <Button type="primary">Еще</Button>
                </Col>
              </Row>
            </div>
            <div className="ModalDiv">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinishCreate}
                // validateMessages={validateMessages}
              >
                <Row style={{ borderBottom: "1px solid #333" }}>
                  <Col span={4}>
                    {/*staff*/}
                    <Form.Item
                      name={["document", "staffId"]}
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
                        // onChange={onChangeCounterpart}
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
                    {/*warehouse*/}
                    <Form.Item
                      name={["document", "warehouseId"]}
                      label="Ombor"
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
                        // onChange={onChangeCounterpart}
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
                    {/*branch*/}
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
                        // onChange={onChangeCounterpart}
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

                    {/*</Form>*/}
                  </Col>

                  <Col span={4} offset={4}>
                    {/*currency*/}
                    <Form.Item
                      name={["document", "currencyId"]}
                      label="Valyuta"
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
                        // onChange={onChangeCounterpart}
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(currency)
                          ? currency.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name={["document", "costs"]}
                      label="Расход:"
                      rules={[
                        {
                          type: "number",
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      name={["document", "enteringSum"]}
                      label="Даром. Cyм:"
                      rules={[
                        {
                          type: "number",
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>

                  <Col span={4} offset={4}>
                    <Form.Item
                      name={["document", "allSum"]}
                      label="Учет:"
                      rules={[
                        {
                          type: "number",
                          required: true,
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item name={["document", "date"]} label="Time">
                      <Space direction="vertical" size={12}>
                        <DatePicker showTime onChange={onChange} onOk={onOk} />
                      </Space>
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                </Row>
              </Form>

              <Row style={{ marginTop: "2%" }}>
                <Col span={22} offset={1}>
                  <div></div>
                  <div style={{ width: "100%" }}>
                    <Row>
                      <Col span={3}>
                        <Button type="primary">Dabavit</Button>
                      </Col>
                      <Col span={7} offset={12}>
                        <Search
                          placeholder="Search"
                          onSearch={onSearch}
                          enterButton
                        />
                      </Col>
                      <Col span={1}>
                        <Button type="primary">Еще</Button>
                      </Col>
                    </Row>
                    <div className="Mt-1">
                      <Table
                        columns={columnss}
                        scroll={{ x: 1200, y: 400 }}
                        dataSource={dataa}
                      />
                    </div>
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
export default HeaderInter;
