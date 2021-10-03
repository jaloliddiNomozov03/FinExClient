import React, { useState, useEffect } from "react";
import {
    Table, Button, Row, Col, Space, Input, Modal, Form,
    Checkbox, Radio, Select, notification, DatePicker, InputNumber
} from "antd";
import './rasxodBank.css';
import { dataa, } from './ModalTable'
import { dataaa, } from './ModalTable'
import { columnss, } from './ModalTable'
import { columnsss, } from './ModalTable'
import { getSectionsList } from "../../../../server/config/objects/SectionsService";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { getCounterpartList } from "../../../../server/config/objects/CounterpartyService";
import { getCurrencyList } from "../../../../server/config/objects/CurrencyService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getBankAccountList } from "../../../../server/config/objects/BankAccountService";
import { getCompanyList } from "../../../../server/config/objects/CompanyService";
import { saveBankExpense } from "../../../../server/config/document/BankExpenseService";
import { getExpenseTypeList } from "../../../../server/config/objects/ExpenditureTypeService";
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
const HeaderRasxod = (props) => {
    const [staffId, setStaffId] = useState(null);
    const [currencyId, setCurrencyId] = useState(null);
    const [currencyCounterparty, setCurrencyCounterpartyId] = useState(null);
    const [branchId, setBranchId] = useState(null);
    const [bankId, setBankId] = useState(null);
    const [companyId, setCompanyId] = useState(null);
    const [counterId, setCounterId] = useState(null);
    const [sectionsId, setSectionsId] = useState(null);
    const [expenseTypeId, setExpenseTypeId] = useState(null);
    const [date, setDate] = useState("");

    const [currency, setCurrency] = useState([]);
    const [branch, setBranches] = useState([]);
    const [bankAccount, setBankAccount] = useState([]);
    const [company, setCompany] = useState([]);
    const [counterparty, setCounterparty] = useState([]);
    const [staff, setStaff] = useState([]);
    const [sections, setSections] = useState([]);
    const [expenseType, setExpenseType] = useState([]);
    const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
    useEffect(() => {
        getCurrencies();
        getBranches();
        getBankAccounts();
        getCompanies();
        getCounterparts();
        getStaff();
        getSections();
        getExpenseTypes();
    }, []);
    const getExpenseTypes = () => {
        getExpenseTypeList().then(value => {
            if (value && value.data) {
                setExpenseType(value.data);
            }
        })
    };
    const getSections = () => {
        getSectionsList().then(value => {
            if (value && value.data) {
                setSections(value.data);
            }
        })
    };
    const getStaff = () => {
        getStaffList().then(value => {
            if (value && value.data) {
                setStaff(value.data);
            }
        })
    };
    const getCounterparts = () => {
        getCounterpartList().then(value => {
            if (value && value.data) {
                setCounterparty(value.data);
            }
        })
    };
    const getCurrencies = () => {
        getCurrencyList().then(value => {
            if (value && value.data) {
                setCurrency(value.data);
            }
        })
    };
    const getBranches = () => {
        getBranchesList().then(value => {
            if (value && value.data) {
                setBranches(value.data);
            }
        })
    };
    const getBankAccounts = () => {
        getBankAccountList().then(value => {
            if (value && value.data) {
                setBankAccount(value.data);
            }
        })
    };
    const getCompanies = () => {
        getCompanyList().then(value => {
            if (value && value.data) {
                setCompany(value.data);
            }
        })
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
        let bankExpense = {
            responsibleId: staffId,
            objectBankAccountId: bankId,
            branchId: branchId,
            currencyId: currencyId,
            objectCompanyId: companyId,
            objectCounterPartyId: counterId,
            expenseTypeId: expenseTypeId,
            currencyCounterpartyId: currencyCounterparty,
            sectionsId: sectionsId,
            retailAmount: values.document.retailAmount,
            sumDP: values.document.sumDP,
            isCounterParty: values.document.isCounterParty ? values.document.isCounterParty.target.checked : false,
            isConstanta: values.document.isConstanta ? values.document.isConstanta.target.checked : false,
            sumEnumeration: values.document.sumEnumeration,
            sumCounterParty: values.document.sumCounterParty,
            percentEnumeration: values.document.percentEnumeration,
            comment: values.document.comment,
            date: date
        };
        if (bankExpense.objectBankAccountId && bankExpense.branchId && bankExpense.branchId && bankExpense.currencyId &&
            bankExpense.sumEnumeration && bankExpense.expenseTypeId && bankExpense.sectionsId && bankExpense.date) {
            console.log(bankExpense);
            saveBankExpense(bankExpense).then(value => {
                if (value && value.data.success) {
                    props.getBankExpenses();
                    notification['success']({
                        message: 'Data success save!'
                    });
                } else {
                    notification['error']({
                        message: 'Data do not save!'
                    });
                }
            })
        }
    };
    // Bu pasdagilar Select uchun funksiyalar
    function onChangeStaff(value) {
        setStaffId(value);
    }
    function onChangeExpenseType(value) {
        setExpenseTypeId(value);
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
    function onChangeCurrencyCounterparty(value) {
        setCurrencyCounterpartyId(value);
    }

    function onBlur() {
        console.log('blur');
    }

    function onFocus() {
        console.log('focus');
    }
    function onChange(value, dateString) {
        console.log('Selected Time: ', dateString);
        setDate(dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }
    return (
        <Row>
            <Col span={4}>
                <Space >
                    <Button className="Create" type="primary" onClick={showCreateModal}>
                        Create
                    </Button>
                    <Modal
                        title=" Prixod Bank "
                        visible={isCreateModalVisble}
                        onOk={handleCreateOk}
                        onCancel={handleCreateCancel}
                        className="Modal"
                        width='100%'
                        height='100vh'
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
                                <Row style={{borderBottom:"1px solid blue"}} >
                                    <Col span={7} style={{ borderRight: "1px solid #555" }} offset={1}  >
                                        <Row>
                                            <Col span={22} >
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
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(staff) ? staff.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                {/*//bankAccount*/}
                                                <Form.Item
                                                    name={["document", "objectBankAccount"]}
                                                    label="BankAccount"
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
                                                        onChange={onChangeBank}
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(bankAccount) ? bankAccount.map((item) => (
                                                                <Option value={item.id}>{item.bank}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                {/*branch*/}
                                                <Form.Item
                                                    name={["document", "branch"]}
                                                    label="Filial"
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
                                                        onChange={onChangeBranch}
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(branch) ? branch.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                {/*currency*/}
                                                <Form.Item
                                                    name={["document", "currency"]}
                                                    label="Valyuta"
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
                                                        onChange={onChangeCurrency}
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(currency) ? currency.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>

                                                {/*sections*/}
                                                <Form.Item
                                                    name={["document", "sections"]}
                                                    label="Bulim"
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
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(sections) ? sections.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                {/*//Сумма перечеслении*/}
                                                <Form.Item
                                                    name={["document", "sumEnumeration"]}
                                                    label="Summa perechisleniye"
                                                    wrapperCol={{ offset: 1 }}
                                                    style={{ width: "96%" }}
                                                    rules={[
                                                        {
                                                            type: "number",
                                                            require: true,
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber style={{ width: "100%" }} />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={7} offset={1} style={{ borderRight: "1px solid #555" }}  >
                                        <Row>
                                            <Col span={22} >
                                                <Row>
                                                    <Col span={12}> <Checkbox > <p>Kontragent</p> </Checkbox>  </Col>
                                                </Row>
                                                <Row>
                                                    <Col span={12}>   <Radio><p>KonstandaDP</p></Radio>  </Col>
                                                    <Col span={7}>   <Radio><p>1</p></Radio>  </Col>
                                                </Row>
                                                <Form.Item
                                                    name={["document", "expenseType"]}
                                                    label="Xarajat turi"
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
                                                        onChange={onChangeExpenseType}
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(expenseType) ? expenseType.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                <Form.Item
                                                    name={["document", "percentEnumeration"]}
                                                    label="Foiz perechisleniye:"
                                                    rules={[
                                                        {
                                                            type: "number",
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber style={{ width: "90%" }} />
                                                </Form.Item>
                                                {/*retailAmount*/}
                                                <Form.Item
                                                    name={["document", "retailAmount"]}
                                                    label="Summa Raznitsi:"
                                                    wrapperCol={{ offset: 0 }}
                                                    rules={[
                                                        {
                                                            type: "number",
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber style={{ width: "90%" }} />
                                                </Form.Item>
                                                {/*counterparty*/}
                                                <Form.Item
                                                    name={["document", "counterparty"]}
                                                    label="Kontragent"
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
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(counterparty) ? counterparty.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
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
                                                    <textarea style={{ width: "90%" }} />
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col span={7}  >
                                        <Row>
                                            <Col span={22} offset={2} >
                                                <Form.Item
                                                    name={["document", "currencyCounterparty"]}
                                                    label="Kontragent Valyutasi"
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
                                                        onChange={onChangeCurrencyCounterparty}
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(currency) ? currency.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                {/*company*/}
                                                <Form.Item
                                                    name={["document", "company"]}
                                                    label="Firma"
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
                                                        onChange={onChangeCompany}
                                                        className='Select'
                                                        onFocus={onFocus}
                                                        onBlur={onBlur}
                                                        onSearch={onSearch}
                                                        filterOption={(input, option) =>
                                                            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                                        }
                                                    >
                                                        {
                                                            Array.isArray(company) ? company.map((item) => (
                                                                <Option value={item.id}>{item.name}</Option>
                                                            )) : ""
                                                        }
                                                    </Select>
                                                </Form.Item>
                                                {/*sumCounterParty*/}
                                                <Form.Item
                                                    name={["document", "sumCounterParty"]}
                                                    label="Summa Kontragenta:"
                                                    rules={[
                                                        {
                                                            type: "number",
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber style={{ width: "90%" }} />
                                                </Form.Item>
                                                {/*sumDP*/}
                                                <Form.Item
                                                    name={["document", "sumDP"]}
                                                    label="SummaDP:"
                                                    rules={[
                                                        {
                                                            type: "number",
                                                        },
                                                    ]}
                                                >
                                                    <InputNumber style={{ width: "90%" }} />
                                                </Form.Item>
                                                <Form.Item
                                                    name={["document", "time"]}
                                                    label="Time"
                                                // rules={[
                                                //     {
                                                //         required: true,
                                                //     },
                                                // ]}
                                                >
                                                    <Space direction="vertical" size={12}>
                                                        <DatePicker showTime onChange={onChange} onOk={onOk} />
                                                    </Space>
                                                </Form.Item>
                                                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                                                    <Button type="primary" htmlType="submit" style={{ width: "90%" }} >
                                                        Submit
                                                    </Button>
                                                </Form.Item>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row  style={{marginTop:"2%", marginBottom:'2%'}} >
                                    <Col span={8} style={{borderRight:"1px solid blue"}} >
                                        <Table 
                                            columns={columnss}
                                            // scroll={{ x: 700, y: 400 }}
                                            dataSource={dataa}
                                        />
                                    </Col>
                                    <Col span={15} offset={1} >
                                        <Table
                                            columns={columnsss}
                                            scroll={{ x: 700, y: 400 }}
                                            dataSource={dataaa}
                                        />
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
export default HeaderRasxod;
