import React, { useState, useEffect } from "react";
import {
  Table, Button, Row, Col, Space, Input, Modal, Form,
  Checkbox, Radio, Select, notification, DatePicker
} from "antd";
import "./prixodBank.css";
import { dataa } from "./ModalTable";
import { dataaa } from "./ModalTable";
import { columnss } from "./ModalTable";
import { columnsss } from "./ModalTable";
import { getCurrencyList } from "../../../../server/config/objects/CurrencyService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getBankAccountList } from "../../../../server/config/objects/BankAccountService";
import { getCompanyList } from "../../../../server/config/objects/CompanyService";
import { getCounterpartList } from "../../../../server/config/objects/CounterpartyService";
import { getSectionsList } from "../../../../server/config/objects/SectionsService";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { saveBankArrival } from "../../../../server/config/document/BankArrivalService";
const { Option } = Select;
const { TextArea } = Input;

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
const HeaderBank = (props) => {
  const [staffId, setStaffId] = useState(null);
  const [currencyId, setCurrencyId] = useState(null);
  const [branchId, setBranchId] = useState(null);
  const [bankId, setBankId] = useState(null);
  const [companyId, setCompanyId] = useState(null);
  const [counterId, setCounterId] = useState(null);
  const [sectionsId, setSectionsId] = useState(null);
  const [date, setDate] = useState("");

  const [currency, setCurrency] = useState([]);
  const [branch, setBranches] = useState([]);
  const [bankAccount, setBankAccount] = useState([]);
  const [company, setCompany] = useState([]);
  const [counterparty, setCounterparty] = useState([]);
  const [staff, setStaff] = useState([]);
  const [sections, setSections] = useState([]);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
  useEffect(() => {
    getCurrencies();
    getBranches();
    getBankAccounts();
    getCompanies();
    getCounterparts();
    getStaff();
    getSections();
  }, []);
  const getSections = () => {
    getSectionsList().then((value) => {
      if (value && value.data) {
        setSections(value.data);
      }
    });
  };
  const getStaff = () => {
    getStaffList().then((value) => {
      if (value && value.data) {
        setStaff(value.data);
      }
    });
  };
  const getCounterparts = () => {
    getCounterpartList().then((value) => {
      if (value && value.data) {
        setCounterparty(value.data);
      }
    });
  };
  const getCurrencies = () => {
    getCurrencyList().then((value) => {
      if (value && value.data) {
        setCurrency(value.data);
      }
    });
  };
  const getBranches = () => {
    getBranchesList().then((value) => {
      if (value && value.data) {
        setBranches(value.data);
      }
    });
  };
  const getBankAccounts = () => {
    getBankAccountList().then((value) => {
      if (value && value.data) {
        setBankAccount(value.data);
      }
    });
  };
  const getCompanies = () => {
    getCompanyList().then((value) => {
      if (value && value.data) {
        setCompany(value.data);
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
    let bankArrival = {
      responsibleId: staffId,
      currencyId: currencyId,
      branchId: branchId,
      objectBankAccountId: bankId,
      objectCompanyId: companyId,
      objectCounterPartyId: counterId,
      sectionsId: sectionsId,
      retailAmount: values.document.retailAmount,
      sumDP: values.document.sumDP,
      isCounterParty: values.document.isCounterParty
        ? values.document.isCounterParty.target.checked
        : false,
      isConstanta: values.document.isConstanta
        ? values.document.isConstanta.target.checked
        : false,
      sumEnumeration: values.document.sumEnumeration,
      sumCounterParty: values.document.sumCounterParty,
      percentEnumeration: values.document.percentEnumeration,
      comment: values.document.comment,
      date: date,
    };

    if (
      bankArrival.responsibleId &&
      bankArrival.currencyId &&
      bankArrival.branchId &&
      bankArrival.objectBankAccountId &&
      bankArrival.objectCompanyId &&
      bankArrival.objectCounterPartyId &&
      bankArrival.sectionsId &&
      bankArrival.retailAmount &&
      bankArrival.sumDP
    ) {
      console.log("Ishladi");
      saveBankArrival(bankArrival).then((value) => {
        if (value && value.data.success) {
          props.getBankArrivals();
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
    console.log(bankArrival);
  };

  function onChange(value, dateString) {
    // console.log('Selected Time: ', value);
    setDate(dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
    // setDate(new Date(dateString));
    // console.log(date);
  }
  // Bu pasdagilar Select uchun funksiyalar
  function onChangeStaff(value) {
    setStaffId(value);
  }
  function onChangeCurrency(value) {
    setCurrencyId(value);
  }
  function onChangeBranch(value) {
    setBranchId(value);
  }
  function onChangeBank(value) {
    setBankId(value);
  }
  function onChangeCompany(value) {
    setCompanyId(value);
  }
  function onChangeCounter(value) {
    setCounterId(value);
  }
  function onChangeSections(value) {
    setSectionsId(value);
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
            title=" Prixod Bank "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="100%"
            height="100vh"
          >
            <div className="linktop">
              <Button type="primary">Основное</Button>
              <a href="#">Банк</a>
              <a href="#">Взаиморасчети</a>
              <a href="#">ДатаПогашение</a>
              <a href="#">Доходы</a>
              <a href="#">Расходы</a>
            </div>
            <div>
              <Row>
                <Col span={3}>
                  <Button type='primary'>Запусать и закрыть</Button>
                </Col>
                <Col span={2}>
                  <Button>Запусать</Button>
                </Col>
                <Col span={2}>
                  <Button>Провести</Button>
                </Col>
                <Col span={3} offset={14}>
                  <Button type='primary'>Еще</Button>
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
                <Row>
                  <Col span={7} style={{ borderRight: "1px solid #555" }} offset={1}   >
                    <Row>
                      <Col span={22}   >
                        <Form.Item
                          name={["document", "retailAmount"]}
                          wrapperCol={{ offset: 1 }}
                          style={{ width: "96%" }}
                          label="RetailAmount:"
                          rules={[
                            {
                              type: "string",
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name={["document", "time"]}
                          wrapperCol={{ offset: 0 }}
                          label="Time"
                          style={{ width: "100%" }}
                        >
                          <Space direction="vertical" size={10}>
                            <DatePicker
                              showTime
                              onChange={onChange}
                              onOk={onOk}
                            />
                          </Space>
                        </Form.Item>

                        <Form.Item
                          name={["document", "bankAccount"]}
                          label="BankAccount"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            // showSearch

                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeBank}
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
                            {Array.isArray(bankAccount)
                              ? bankAccount.map((item) => (
                                <Option value={item.id}>{item.bank}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name={["document", "branch"]}
                          label="Branch"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            // showSearch

                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeBranch}
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
                            {Array.isArray(branch)
                              ? branch.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>
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
                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeStaff}
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
                            {Array.isArray(staff)
                              ? staff.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>

                        <Form.Item
                          wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
                        >
                          <Button type="primary" htmlType="submit" style={{ width: "90%" }}>
                            Submit
                          </Button>
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                  <Col span={7} offset={1} style={{ borderRight: "1px solid #555" }}  >
                    <Row>
                      <Col span={22}>

                        <Form.Item
                          name={["document", "sections"]}
                          label="Sections"

                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeSections}
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
                            {Array.isArray(sections)
                              ? sections.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          name={["document", "sumEnumeration"]}
                          label="SumEnumeration:"
                          wrapperCol={{ offset: 1 }}
                          style={{ width: "97%" }}
                          rules={[
                            {
                              type: "string",
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Row>
                          <Col span={24} >
                            <Form.Item
                              name={["document", "Kontragent"]}
                              label="Kontragent:"
                              valuePropName="unchecked"
                            >
                              <Input type="checkbox" />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24}  >
                            <Form.Item
                              name={["document", "isCounterParty"]}
                              label="IsCounterParty:"
                              valuePropName="unchecked"
                            >
                              <Input type="checkbox" />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={24} >
                            <Form.Item
                              name={["document", "isConstanta"]}
                              label="IsConstanta:"
                              valuePropName="unchecked"
                            >
                              <Input type="checkbox" />
                            </Form.Item>
                          </Col>
                        </Row>
                        <Row>
                          <Col span={10} offset={1} >
                            <Radio> <p>KonstandaDP</p></Radio>
                          </Col >
                          <Col span={5} offset={4}  >
                            <Radio>
                              <p>1</p>
                            </Radio>
                          </Col>
                        </Row>
                        <Row  >
                          <Col span={24} >
                            <Form.Item
                              name={["document", "comment"]}
                              label="Comment"
                              rules={[
                                {
                                  type: "string",
                                },
                              ]}
                            >
                              <TextArea rows={2} style={{ fontSize: "12px" }} />
                            </Form.Item>
                          </Col>
                        </Row>

                      </Col>
                    </Row>
                  </Col>
                  <Col span={7} >
                    <Row>
                      <Col span={22} offset={2} >

                        <Form.Item
                          name={["document", "sumCounterParty"]}
                          label="SumCounterParty:"
                          wrapperCol={{ offset: 1 }}
                          style={{ width: "96%" }}
                          rules={[
                            {
                              type: "string",
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name={["document", "percentEnumeration"]}
                          label="PercentEnumeration:"
                          wrapperCol={{ offset: 1 }}
                          style={{ width: "96%" }}
                          rules={[
                            {
                              type: "string",
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          name={["document", "counter"]}
                          label="Counterparty"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeCounter}
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
                            {Array.isArray(counterparty)
                              ? counterparty.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          name={["document", "company"]}
                          label="Company"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            // showSearch

                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeCompany}
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
                            {Array.isArray(company)
                              ? company.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>
                        <Form.Item
                          name={["document", "currency"]}
                          label="Currency"
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Select
                            // showSearch

                            style={{ width: "90%" }}
                            placeholder=" "
                            optionFilterProp="children"
                            onChange={onChangeCurrency}
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
                            {Array.isArray(currency)
                              ? currency.map((item) => (
                                <Option value={item.id}>{item.name}</Option>
                              ))
                              : ""}
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name={["document", "sumDP"]}
                          label="SumDP:"
                          wrapperCol={{ offset: 1 }}
                          style={{ width: "96%" }}
                          rules={[
                            {
                              type: "string",
                              required: true,
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </div>
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
export default HeaderBank;
