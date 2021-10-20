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
  notification,
  Select,
  DatePicker,
} from "antd";
import { Table } from "antd";
import "./yukberuvchiQaytarish.css";
import { dataa } from "./modalTablee";
import { dataaa } from "./modalTablee";
import { columnss } from "./modalTablee";
import { columnsss } from "./modalTablee";
import { saveGoodsToTheSupplier } from "../../../../server/config/document/ReturnOfGoodsToTheSupplier";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getWarehouseList } from "../../../../server/config/objects/WarehouseService";
import { getCounterpartList } from "../../../../server/config/objects/CounterpartyService";
import { getCurrencyList } from "../../../../server/config/objects/CurrencyService";
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
const HeaderYukberuvchi = (props) => {
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
  const [counterparty, setCounterparty] = useState([]);
  const [maturity, setMaturity] = useState("");
  const [currency, setCurrency] = useState([]);

  const [warehouse, setWarehouse] = useState([]);

  useEffect(() => {
    getStaff();
    getBranches();
    getWarehouse();
    getCounterParty();
    getCurrency();
  }, []);

  const onFinishCreate = (values) => {
    console.log(values);
    console.log(date);
    let rasxod = {
      ...values.document,
      rate: values.document.rate,
      date: date,
      repaymentDate: maturity,
    };
    if (
      rasxod.date &&
      rasxod.responsibleId &&
      rasxod.branchId &&
      rasxod.comment &&
      rasxod.warehouseId
    ) {
      saveGoodsToTheSupplier(rasxod).then((value) => {
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
  const getCurrency = () => {
    getCurrencyList().then((value) => {
      if (value && value.data) {
        setCurrency(value.data);
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
  const getWarehouse = () => {
    getWarehouseList().then((value) => {
      if (value && value.data) {
        setWarehouse(value.data);
      }
    });
  };

  const getCounterParty = () => {
    getCounterpartList().then((value) => {
      if (value && value.data) {
        setCounterparty(value.data);
      }
    });
  };
  function onChangeMaturity(value, dateString) {
    console.log("Selected Time: ", dateString);
    setMaturity(dateString);
  }

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
            title=" Maxsulotlarni yuk beruvchiga qaytarish "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="100%"
            height="100vh"
          >
            <div className="linktop">
              <Button>Основное</Button>
              <a href="#">Взаиморасчеты</a>
              <a href="#">ДатаПогашение</a>
              <a href="#">ТавариНаСкладах</a>
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

            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              // validateMessages={validateMessages}
            >
              <div className="ModalDiv">
                <Row>
                  <Col span={8} style={{ padding: "1%" }}>
                    <h4 style={{ color: "blue", textAlign: "center" }}>
                      Malumotlar
                    </h4>
                    <Form.Item
                      name={["document", "code"]}
                      label="Nomer:"
                      rules={[
                        {
                          required: false,
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
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
                        {Array.isArray(staff)
                          ? staff.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={["document", "account"]}
                      label="Uchyet:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "warehouseId"]}
                      label="Ombor:"
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
                        {Array.isArray(warehouse)
                          ? warehouse.map((item) => (
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
                      name={["document", "counterpartyId"]}
                      label="Kontragent:"
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
                        {Array.isArray(counterparty)
                          ? counterparty.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={["document", "salesBonusPercentage"]}
                      label="ProtsentBonusPoProdaji:"
                      rules={[
                        {
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <Form.Item
                      name={["document", "rate"]}
                      label="Kurs:"
                      rules={[
                        {
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <h4 style={{ color: "blue", textAlign: "center" }}>
                      Tulov muddati
                    </h4>

                    <Form.Item
                      name={["document", "currencyId"]}
                      label="Valyuta:"
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
                        {Array.isArray(currency)
                          ? currency.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={["document", "sumDocument"]}
                      label="SummaDocument:"
                      rules={[
                        {
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <Form.Item
                      name={["document", "dateRepayment"]}
                      label="TulovMuddati:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Space direction="vertical" size={12}>
                        <DatePicker showTime onChange={onChangeMaturity} />
                      </Space>
                    </Form.Item>
                    <Form.Item
                      name={["document", "totalDebt"]}
                      label="ObshiyDalog:"
                      // style={{padding:"0", margin: '0'}}
                      rules={[
                        {
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                    {/*<div className='Mt' >*/}
                    <Form.Item
                      name={["document", "comment"]}
                      label="Izox"
                      className="Textarea"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <textarea
                        style={{ minHeight: "15vh", minWidth: "100vh" }}
                      />
                    </Form.Item>
                    {/*</div>*/}
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>

                  <Col
                    span={16}
                    style={{ padding: "1%", borderLeft: "1px solid #555" }}
                  >
                    <Row>
                      <Col span={2}>
                        <Button type="primary"> СписанияДолга</Button>
                      </Col>
                      <Col span={7} offset={11} className="search">
                        <Space>
                          <Search
                            placeholder="input search text"
                            onSearch={onSearch}
                            enterButton
                          />
                        </Space>
                      </Col>
                      <Col span={1}>
                        <Button type="primary">More actions</Button>
                      </Col>
                    </Row>
                    <div className="Mt-1">
                      <Row>
                        <Table
                          columns={columnss}
                          scroll={{ x: 1000, y: 400 }}
                          dataSource={dataa}
                        />
                      </Row>
                    </div>
                    <div className="Mt">
                      <Row>
                        <Table
                          columns={columnsss}
                          scroll={{ x: 700, y: 400 }}
                          dataSource={dataaa}
                        />
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
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
export default HeaderYukberuvchi;
