import React, {useEffect, useState} from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, Select, notification, DatePicker} from "antd";
import "./savdoDocument.css";
import {saveWholasale} from "../../../server/config/document/Wholesale";
import {getStaffList} from "../../../server/config/objects/StaffService";
import {getBranchesList} from "../../../server/config/objects/BranchService";
import {getWarehouseList} from "../../../server/config/objects/WarehouseService";
import {getPricesList} from "../../../server/config/objects/PriceTypeService";
import {getSectionsList} from "../../../server/config/objects/SectionsService";
import {getCounterpartList} from "../../../server/config/objects/CounterpartyService";
import {getExpenseTypeList} from "../../../server/config/objects/ExpenditureTypeService";

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
const HeaderSavdo = (props) => {
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
  const [maturity, setMaturity] = useState("");
  const [branch, setBranch]=useState([]);
  const [staff, setStaff]=useState([]);
  const [warehouse, setWarehouse]=useState([]);
  const [counterparty, setCounterparty]=useState([]);
  const [priceType, setPriceType]=useState([]);
  const [expenditureType, setExpenditureType]=useState([]);
  const [sections, setSections]=useState([]);

  useEffect(()=>{

    getStaff();
    getBranches();
    getWarehouse();
    getSections();
    getPriceType();
    getExpenditureType();
    getCounterParty();
  },[]);

  const onFinishCreate = (values) => {
    console.log(values);
    console.log(date)
    let rasxod = {

      ...values.document,
      date: date,
      maturityDate: maturity,
      sale: values.document.sale
    };
    console.log(rasxod);
    if (rasxod.date && rasxod.responsibleId&&rasxod.branchId&&rasxod.comment&&rasxod.warehouseId){
      saveWholasale(rasxod).then(value => {
        if (value && value.data.success){
          props.getList();
          notification['success']({
            message:'Data success saved!',
          });
        }else {
          notification['error']({
            message:'Data not saved!',
          });
        }
      })
    }
  };

  const getStaff = ()=>{
    getStaffList().then(value => {
      if (value && value.data){
        setStaff(value.data);
      }
    })
  };
  const getBranches = ()=>{
    getBranchesList().then(value => {
      if (value && value.data){
        setBranch(value.data);
      }
    })
  };
  const getWarehouse = ()=>{
    getWarehouseList().then(value => {
      if (value && value.data){
        setWarehouse(value.data);
      }
    })
  };
  const getCounterParty = ()=>{
    getCounterpartList().then(value => {
      if (value && value.data){
        setCounterparty(value.data);
      }
    })
  };
  const getPriceType = ()=>{
    getPricesList().then(value => {
      if (value && value.data){
        setPriceType(value.data);
      }
    })
  };
  const getExpenditureType = ()=>{
    getExpenseTypeList().then(value => {
      if (value && value.data){
        setExpenditureType(value.data);
      }
    })
  };
  const getSections = ()=>{
    getSectionsList().then(value => {
      if (value && value.data){
        setSections(value.data);
      }
    })
  };

  function onChange(value, dateString) {
    console.log('Selected Time: ', dateString);
    setDate(dateString);
  }
  function onChangeMaturity(value, dateString) {
    console.log('Selected Time: ', dateString);
    setMaturity(dateString);
  }


  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title=" Savdo "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="100%"
            height="100vh"
          >
            <div className="linktop">
              <Button>Основное</Button>
              <a href="#">Бонусы</a>
              <a href="#">Взаиморасчеты</a>
              <a href="#">ДатаПогашение</a>
              <a href="#">Продажи</a>
              <a href="#">ТавариНаСкладах</a>
            </div>
            <div>
              <Row>
                <Col span={3} >
                  <Button type='primary' >Запусать и закрыть</Button>
                </Col>
                <Col span={2}>
                  <Button >Запусать</Button>
                </Col >
                <Col span={2}>
                  <Button >Провести</Button>
                </Col>
                <Col span={3} offset={14} >
                  <Button type='primary' >Еще</Button>
                </Col>
              </Row>
            </div>

            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
              <div className="ModalDiv">
                <Row>
                  <Col span={11} >
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
                      name={["document", "warehouseId"]}
                      label="Ombor:"
                      rules={[
                        {
                          required: true
                        },
                      ]}
                    >
                      <Select
                          style={{ width: 300 }}
                          placeholder=" "
                          optionFilterProp="children"
                          className='Select'
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                      >
                        {
                          Array.isArray(warehouse)?warehouse.map((item)=>(
                              <Option value={item.id}>{item.name}</Option>
                          )):""
                        }
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

                          className='Select'
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

                          className='Select'
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
                    <Form.Item
                      name={["document", "sectionsId"]}
                      label="Podrazdeleniye:"
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
                          className='Select'
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
                    <Form.Item
                      name={["document", "course"]}
                      label="Kurs:"
                      rules={[
                        {
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                  </Col>
                  <Col span={11} offset={1} >
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
                          className='Select'
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
                    <Form.Item
                      name={["document", "maturity"]}
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
                      name={["document", "sale"]}
                      label="Prodaji:"
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
                          className='Select'
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                      >
                        {
                          Array.isArray(["NOMENCLATURE","CURRENCY"])?["NOMENCLATURE","CURRENCY"].map((item)=>(
                              <Option value={item}>{item}</Option>
                          )):""
                        }
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name={["document", "percentBonus"]}
                      label="ProSenaBonusPoProdaji:"
                      rules={[
                        {
                          type: "number",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>
                    <Form.Item
                      name={["document", "priceTypeId"]}
                      label="Tulovturi:"
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
                          className='Select'
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                      >
                        {
                          Array.isArray(priceType)?priceType.map((item)=>(
                              <Option value={item.id}>{item.name}</Option>
                          )):""
                        }
                      </Select>
                    </Form.Item>

                    <Form.Item
                      name={["document", "expenditureTypeId"]}
                      label="HarajatTuri:"
                      // style={{padding:"0", margin: '0'}}
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
                          className='Select'
                          onSearch={onSearch}
                          filterOption={(input, option) =>
                              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                          }
                      >
                        {
                          Array.isArray(expenditureType)?expenditureType.map((item)=>(
                              <Option value={item.id}>{item.name}</Option>
                          )):""
                        }
                      </Select>
                    </Form.Item>
                  </Col>
                  <Row  >
                    <Col span={20} >
                      <Form.Item
                        name={["document", "comment"]}
                        label="Izox"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                      >
                        <textarea style={{width:'100vh', height:'10vh'}} />
                      </Form.Item>
                      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                          Submit
                        </Button>
                      </Form.Item>
                    </Col>
                  </Row>
                </Row>
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
export default HeaderSavdo;
