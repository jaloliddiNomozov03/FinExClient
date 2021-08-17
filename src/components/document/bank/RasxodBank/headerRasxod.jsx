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
    Checkbox,
    Radio,
    notification,
    Select,
    DatePicker
} from "antd";
import { Table } from "antd";
import './rasxodBank.css';
import { dataa, } from './ModalTable'
import { dataaa, } from './ModalTable'
import { columnss, } from './ModalTable'
import { columnsss, } from './ModalTable'
import {getSectionsList} from "../../../../server/config/objects/SectionsService";
import {getStaffList} from "../../../../server/config/objects/StaffService";
import {getCounterpartList} from "../../../../server/config/objects/CounterpartyService";
import {getCurrencyList} from "../../../../server/config/objects/CurrencyService";
import {getBranchesList} from "../../../../server/config/objects/BranchService";
import {getBankAccountList} from "../../../../server/config/objects/BankAccountService";
import {getCompanyList} from "../../../../server/config/objects/CompanyService";
import {saveBankExpense} from "../../../../server/config/document/BankExpenseService";
import {getExpenseTypeList} from "../../../../server/config/objects/ExpenditureTypeService";
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
    useEffect(()=>{
        getCurrencies();
        getBranches();
        getBankAccounts();
        getCompanies();
        getCounterparts();
        getStaff();
        getSections();
        getExpenseTypes();
    },[]);
    const getExpenseTypes=()=>{
        getExpenseTypeList().then(value => {
            if (value && value.data){
                setExpenseType(value.data);
            }
        })
    };
    const getSections=()=>{
        getSectionsList().then(value => {
            if (value && value.data){
                setSections(value.data);
            }
        })
    };
    const getStaff=()=>{
        getStaffList().then(value => {
            if (value && value.data){
                setStaff(value.data);
            }
        })
    };
    const getCounterparts=()=>{
        getCounterpartList().then(value => {
            if (value && value.data){
                setCounterparty(value.data);
            }
        })
    };
    const getCurrencies=()=>{
        getCurrencyList().then(value => {
            if (value && value.data){
                setCurrency(value.data);
            }
        })
    };
    const getBranches=()=>{
        getBranchesList().then(value => {
            if (value && value.data){
                setBranches(value.data);
            }
        })
    };
    const getBankAccounts=()=>{
        getBankAccountList().then(value => {
            if (value && value.data){
                setBankAccount(value.data);
            }
        })
    };
    const getCompanies=()=>{
        getCompanyList().then(value => {
            if (value && value.data){
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
            isCounterParty: values.document.isCounterParty?values.document.isCounterParty.target.checked:false,
            isConstanta: values.document.isConstanta?values.document.isConstanta.target.checked:false,
            sumEnumeration: values.document.sumEnumeration,
            sumCounterParty: values.document.sumCounterParty,
            percentEnumeration: values.document.percentEnumeration,
            comment: values.document.comment,
            date: date
        };
        if (bankExpense.objectBankAccountId&&bankExpense.branchId&&bankExpense.branchId&&bankExpense.currencyId&&
            bankExpense.sumEnumeration&&bankExpense.expenseTypeId&&bankExpense.sectionsId&&bankExpense.date){
            console.log(bankExpense);
            saveBankExpense(bankExpense).then(value => {
                if (value && value.data.success){
                    props.getBankExpenses();
                    notification['success']({
                        message:'Data success save!'
                    });
                }else {
                    notification['error']({
                        message:'Data do not save!'
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
                        {/*<div className="linktop">*/}
                        {/*    <Button type='primary' >*/}
                        {/*        Основное*/}
                        {/*    </Button>*/}
                        {/*    <a href="#" >Банк</a>*/}
                        {/*    <a href="#">Взаиморасчети</a>*/}
                        {/*    <a href="#">ДатаПогашение</a>*/}
                        {/*    <a href="#">Даходы</a>*/}
                        {/*    <a href="#">Расходы</a>*/}
                        {/*</div>*/}
                        {/*<div className='ButtonTop'>*/}
                        {/*    <Button className="Btn" type='primary' >*/}
                        {/*        Провести и закрыть*/}
                        {/*    </Button>*/}
                        {/*    <Button className="Btn" >*/}
                        {/*        Записать*/}
                        {/*    </Button>*/}
                        {/*    <Button className="Btn" >*/}
                        {/*        Провести*/}
                        {/*    </Button>*/}
                        {/*    <Button className="Eshyo" >*/}
                        {/*        Еще*/}
                        {/*    </Button>*/}
                        {/*</div>*/}

                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinishCreate}
                        // validateMessages={validateMessages}
                        >
                            <div className='Webber'>
                                <div className="content">
                                    <div className="content1">
                                        <div className='contetnTable1' >
                                        <Checkbox > <strong>Kontragent</strong> </Checkbox>
                                            <br/>
                                            {/*// staff*/}
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(staff)?staff.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(bankAccount)?bankAccount.map((item)=>(
                                                            <Option value={item.id}>{item.bank}</Option>
                                                        )):""
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(branch)?branch.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(currency)?currency.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
                                                    }
                                                </Select>
                                            </Form.Item>

                                            {/*<Form.Item*/}
                                            {/*    name={["document", "kursperechisleniye"]}*/}
                                            {/*    label="Kurs Perechisleniyesi:"*/}
                                            {/*    rules={[*/}
                                            {/*        {*/}
                                            {/*            type: "number",*/}
                                            {/*        },*/}
                                            {/*    ]}*/}
                                            {/*>*/}
                                            {/*    <Input />*/}
                                            {/*</Form.Item>*/}

                                            {/*<Form.Item*/}
                                            {/*    name={["document", "podrazdelyeniya "]}*/}
                                            {/*    label="Podrazdelyeniya:"*/}
                                            {/*    rules={[*/}
                                            {/*        {*/}
                                            {/*            type: "string",*/}
                                            {/*        },*/}
                                            {/*    ]}*/}
                                            {/*>*/}
                                            {/*    <Input />*/}
                                            {/*</Form.Item>*/}

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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(sections)?sections.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
                                                    }
                                                </Select>
                                            </Form.Item>
                                            {/*//Сумма перечеслении*/}
                                            <Form.Item
                                                name={["document", "sumEnumeration"]}
                                                label="Summa perechisleniye"
                                                rules={[
                                                    {
                                                        type: "number",
                                                        require: true,
                                                    },
                                                ]}
                                            >
                                                <InputNumber />
                                            </Form.Item>
                                            {/*expenseType*/}
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(expenseType)?expenseType.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
                                                    }
                                                </Select>
                                            </Form.Item>
                                            {/*comment*/}
                                            <Form.Item
                                                name={["document", "comment"]}
                                                label="Izox"

                                                rules={[
                                                    {
                                                        type: "string",
                                                    },
                                                ]}
                                            >
                                                <textarea  />

                                            </Form.Item>
                                        </div>
                                        <div className='contetnTable2'>
                                        <Radio><strong>KonstandaDP</strong></Radio>
                                        <Radio><strong>1</strong></Radio>   <br/>
                                            {/*percentEnumeration*/}
                                            <Form.Item
                                                name={["document", "percentEnumeration"]}
                                                label="Foiz perechisleniye:"
                                                rules={[
                                                    {
                                                        type: "number",
                                                    },
                                                ]}
                                            >
                                                <InputNumber />
                                            </Form.Item>
                                            {/*retailAmount*/}
                                            <Form.Item
                                                name={["document", "retailAmount"]}
                                                label="Summa Raznitsi:"
                                                rules={[
                                                    {
                                                        type: "number",
                                                    },
                                                ]}
                                            >
                                                <InputNumber />
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(counterparty)?counterparty.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
                                                    }
                                                </Select>
                                            </Form.Item>
                                            {/*currencyCounterparty*/}
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(currency)?currency.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
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
                                                    style={{ width: 300 }}
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
                                                        Array.isArray(company)?company.map((item)=>(
                                                            <Option value={item.id}>{item.name}</Option>
                                                        )):""
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
                                                <InputNumber />
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
                                                <InputNumber />
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
                                                <Button type="primary" htmlType="submit">
                                                    Submit
                                                </Button>
                                            </Form.Item>
                                        </div>

                                    </div>
                                    {/*<div className="component2">*/}
                                    {/*    <Col>*/}
                                    {/*        <Space className='ModalSpace'>*/}
                                    {/*            */}
                                    {/*           */}
                                    {/*            /!* <Button className='EshyoModal' >Еще</Button> *!/*/}
                                    {/*        </Space>*/}
                                    {/*    </Col>*/}

                                    {/*    <div className='ModalTable1'>*/}

                                    {/*        <Table className='Jadval'*/}
                                    {/*            columns={columnss}*/}
                                    {/*            // scroll={{ x: 700, y: 400 }}*/}
                                    {/*            dataSource={dataa}*/}
                                    {/*        // height='2%'*/}

                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*    <div className='ModalTable2' >*/}
                                    {/*        <Table className='Jadval'*/}
                                    {/*            columns={columnsss}*/}
                                    {/*            scroll={{ x: 700, y: 400 }}*/}
                                    {/*            dataSource={dataaa}*/}
                                    {/*            height='2%'*/}

                                    {/*        />*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}

                                </div>


                            </div>
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
export default HeaderRasxod;
