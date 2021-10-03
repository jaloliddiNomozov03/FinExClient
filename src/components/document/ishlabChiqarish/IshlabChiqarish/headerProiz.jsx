import React, {useState, useEffect} from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, DatePicker, Select, notification} from "antd";
import {Table} from "antd";
import "./proizvadstve.css";
import {dataa, columnss} from "./ModalTable";
import {getStaffList} from "../../../../server/config/objects/StaffService";
import {getBranchesList} from "../../../../server/config/objects/BranchService";
import {getWarehouseList} from "../../../../server/config/objects/WarehouseService";
import {getNomenclatureList} from "../../../../server/config/objects/NomenklaturaService";
import {getUnitList} from "../../../../server/config/objects/UnitService";
import {getCurrencyList} from "../../../../server/config/objects/CurrencyService";
import {saveProduction} from "../../../../server/config/document/ProductionService";

const {Option} = Select;
const {Search} = Input;
const onSearch = (value) => console.log(value);
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const HeaderProiz = (props) => {
    const [staff, setStaff] = useState(null);
    const [date, setDate] = useState(null);
    const [branch, setBranch] = useState(null);
    const [currency, setCurrency] = useState(null);
    const [counterparty, setCounterparty] = useState(null);
    const [warehouse, setWarehouse] = useState(null);
    const [nomenclature, setNomenclature] = useState(null);
    const [units, setUnits] = useState(null);

    const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
    useEffect(() => {
        getBranch();
        getStaff();
        getWarehouse();
        getCurrency();
        // getCounterparty();
        getNomenclature();
        getUnits();
    }, []);
    const getUnits = () => {
        getUnitList().then((res) => {
            if (res && res.data) {
                setUnits(res.data);
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
    const getStaff = () => {
        getStaffList().then((value) => {
            if (value && value.data) {
                setStaff(value.data);
            }
        });
    };
    const getWarehouse = () => {
        getWarehouseList().then((res) => {
            if (res && res.data) {
                setWarehouse(res.data);
            }
        });
    };
    const getCurrency = () => {
        getCurrencyList().then((res) => {
            if (res && res.data) {
                setCurrency(res.data);
            }
        });
    };
    // const getCounterparty = () => {
    //     getWarehouseList().then((res) => {
    //         if (res && res.data) {
    //             setCounterparty(res.data);
    //         }
    //     });
    // };
    const getNomenclature = () => {
        getNomenclatureList().then((res) => {
            if (res && res.data) {
                setNomenclature(res.data);
            }
        });
    };
    const showCreateModal = () => {
        setIsCreateModalVisible(true);
    };

    const handleCreateOk = () => {
        setIsCreateModalVisible(false);
    };

    function onChange(value, dateString) {
        // console.log('Selected Time: ', value);
        setDate(dateString);
    }


    function onOk(value) {
        console.log("onOk: ", value);
    }

    const handleCreateCancel = () => {
        setIsCreateModalVisible(false);
    };

    const onFinishCreate = (values) => {
        let production = {
            "branchId": values.document.branchId,
            "comment": values.document.comment,
            count: values.document.count,
            course: values.document.course,
            "currencyId": values.document.currencyId,
            "date": date,
            enteringSum:  values.document.enteringSum,
            "nomenclatureId": values.document.nomenclatureId,
            "responsibleId": values.document.staffId,
            "status": values.document.status,
            "sumCost": values.document.sumCost,
            sumProduct: values.document.sumProduct,
            "type": values.document.type,
            "unitId": values.document.unitId,
            "warehouseId": values.document.warehouseId,
        };
        if (production.branchId&&production.count&&production.currencyId&&production.nomenclatureId&&production.responsibleId&&
        production.enteringSum&&production.status&&production.unitId&&production.warehouseId){
            console.log(production);
            saveProduction(production).then(value => {
                if (value && value.data.success){
                    props.getProduction();
                    notification["success"]({
                        message: "Data success save!",
                    });
                }else {
                    notification["error"]({
                        message: "Data do not save!",
                    });
                }
            })
        }
    };

    return (
        <Row>
            <Col span={4}>
                <Space>
                    <Button className="Create" type="primary" onClick={showCreateModal}>
                        Create
                    </Button>
                    <Modal
                        title=" Ishlab chiqarish "
                        visible={isCreateModalVisble}
                        onOk={handleCreateOk}
                        onCancel={handleCreateCancel}
                        className="Modal"
                        width="100%"
                        height="100vh"
                    >
                        <div className="linktop">
                            <Button type="primary">Основное</Button>
                            <a href="#">Взаиморасчети</a>
                            <a href="#">ТаварыНаСкладах</a>
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
                        <div className='ModalDiv'>
                            <Form
                                {...layout}
                                name="nest-messages"
                                onFinish={onFinishCreate}
                                // validateMessages={validateMessages}
                            >
                                <Row>
                                    <Col span={7} offset={1}>

                                        {/*time date */}
                                        <Form.Item
                                            name={["document", "date"]}
                                            label="Time"
                                        >
                                            <Space direction="vertical" size={12}>
                                                <DatePicker
                                                    showTime
                                                    onChange={onChange}
                                                    onOk={onOk}
                                                />
                                            </Space>
                                        </Form.Item>
                                        {/* warehouse */}
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
                                                // showSearch

                                                style={{width: 300}}
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
                                        {/*branchId*/}
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
                                                // showSearch

                                                style={{width: 300}}
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
                                        {/* recipientWarehouseId */}
                                        <Form.Item
                                            name={["document", "recipientWarehouseId"]}
                                            label="СкладПолучател:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                        {/* staff */}
                                        <Form.Item
                                            name={["document", "staffId"]}
                                            label="Ответственный:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                        <Form.Item
                                            name={["document", "nomenclatureId"]}
                                            label="Namenklatura:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                                {Array.isArray(nomenclature)
                                                    ? nomenclature.map((item) => (
                                                        <Option value={item.id}>{item.name}</Option>
                                                    ))
                                                    : ""}
                                            </Select>
                                        </Form.Item>

                                    </Col>
                                    <Col span={7} offset={1}>
                                        {/*nomenclatureId*/}

                                        {/*unit*/}
                                        <Form.Item
                                            name={["document", "unitId"]}
                                            label="Unit:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                                {Array.isArray(units)
                                                    ? units.map((item) => (
                                                        <Option value={item.id}>{item.name}</Option>
                                                    ))
                                                    : ""}
                                            </Select>
                                        </Form.Item>
                                        {/*currencyId*/}
                                        <Form.Item
                                            name={["document", "currencyId"]}
                                            label="Currency:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                            name={["document", "course"]}
                                            label="Kurs:"
                                            rules={[
                                                {
                                                    type: "number",
                                                },
                                            ]}
                                        >
                                            <InputNumber/>
                                        </Form.Item>
                                        <Form.Item
                                            name={["document", "count"]}
                                            label="Soni:"
                                            rules={[
                                                {
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            name={["document", "type"]}
                                            label="ТипУчетСписаниетовар:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                                <Option value="FIFO">FIFO</Option>
                                                <Option value="LIFO">LIFO</Option>
                                                <Option value="PARTY//TERM">PARTY//TERM</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item
                                            name={["document", "newParty"]}
                                            label="Янги партия:"
                                            rules={[
                                                {
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                    </Col>
                                    <Col span={7} offset={1}>


                                        <Form.Item
                                            name={["document", "sumProduct"]}
                                            label="Сумма Тавари:"
                                            rules={[
                                                {
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            name={["document", "sumCost"]}
                                            label="Сумма Расходи:"
                                            rules={[
                                                {
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            name={["document", "enteringSum"]}
                                            label="Приход Цена:"
                                            rules={[
                                                {
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <Input/>
                                        </Form.Item>
                                        <Form.Item
                                            name={["document", "status"]}
                                            label="Status:"
                                            rules={[
                                                {
                                                    required: true,
                                                },
                                            ]}
                                        >
                                            <Select
                                                // showSearch

                                                style={{width: 300}}
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
                                                <Option value="CREATE">CREATE</Option>
                                                <Option value="PROCESS">PROCESS</Option>
                                                <Option value="FINISH">FINISH</Option>
                                            </Select>
                                        </Form.Item>
                                        <Form.Item wrapperCol={{...layout.wrapperCol, offset: 8}}>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Row>
                            </Form>
                            <Row>
                                <Col span={22} offset={1}>
                                    <p></p>
                                    <div style={{width: '100%'}}>
                                        <Row>
                                            <Col span={3}>


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
                                        <div className='Mt-1'>
                                            <Table
                                                columns={columnss}
                                                scroll={{x: 1200, y: 400}}
                                                dataSource={dataa}
                                            />
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={18} offset={1}>
                                    <div className='Mt-1'>
                                        <Form.Item
                                            name={["document", "izox"]}
                                            label={<strong> Izox </strong>}
                                            rules={[
                                                {
                                                    type: "string",
                                                },
                                            ]}
                                        >
                                            <textarea style={{minHeight: "10vh", width: "100vh"}}/>
                                        </Form.Item>
                                    </div>
                                </Col>
                            </Row>
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
export default HeaderProiz;



















