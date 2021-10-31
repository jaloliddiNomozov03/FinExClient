import React, {useEffect, useState} from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, notification, DatePicker, Select} from "antd";
import { Table } from "antd";
import "./spisaniya.css";
import { dataa } from "./ModalTable";
import { columnss } from "./ModalTable";
import TextArea from "antd/lib/input/TextArea";
import {saveWriteOfGoods} from "../../../../server/config/document/WriteOffOfGoods";
import {getStaffList} from "../../../../server/config/objects/StaffService";
import {getBranchesList} from "../../../../server/config/objects/BranchService";
import {getWarehouseList} from "../../../../server/config/objects/WarehouseService";

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
const HeaderSpisaniya = (props) => {
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
  const [branch, setBranch]=useState([]);
  const [staff, setStaff]=useState([]);
  const [warehouse, setWarehouse]=useState([]);

  useEffect(()=>{

    getStaff();
    getBranches();
    getWarehouse();
  },[]);

  const onFinishCreate = (values) => {
    console.log(values);
    console.log(date)
    let rasxod = {
      date: date,
      responsibleId: values.document.responsible,
      branchId: values.document.branch,
      warehouseId: values.document.warehouse,
      comment: values.document.comment,
    };
    if (rasxod.date && rasxod.responsibleId&&rasxod.branchId&&rasxod.comment&&rasxod.warehouseId){
      saveWriteOfGoods(rasxod).then(value => {
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

  function onChange(value, dateString) {
    console.log('Selected Time: ', dateString);
    setDate(dateString);
  } 
  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="СписанияТаваров(Создание) "
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="96%"
            height="100vh"
          >
            <div className="linktop">
              <Button type="primary">Основное</Button>
              <a href="#">ТаварыНаСкладах</a>
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
              <div className='ModalDiv'>
                <Row>
                  <Col span={7} style={{ borderRight: '1px solid #333', padding: '1%' }} >
                    <Form.Item
                        name={["document", "time"]}
                        label="Time"
                    >
                      <Space direction="vertical" size={12}>
                        <DatePicker showTime onChange={onChange} />
                      </Space>
                    </Form.Item>

                    <Form.Item
                      name={["document", "warehouse"]}
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
                        name={["document", "branch"]}
                        label="Organizatsiya"
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
                        name={["document", "responsible"]}
                        label="Responsible"
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
                        name={["document", "comment"]}
                        label="Izox:"
                        className="Textarea"
                        rules={[
                          {
                            type: "string",
                          },
                        ]}
                    >
                      <TextArea  style={{height:'10vh', width:'100vh' }} />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col span={16} style={{ padding: '1%' }} >
                    <Row>
                      <Button type="primary"> Добавить</Button>

                      <Col span={9} offset={12} className="search">
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
                    <Table
                      className="Table"
                      columns={columnss}
                      scroll={{ x: 1000, y: 400 }}
                      dataSource={dataa}
                    />



                  </Col>
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
export default HeaderSpisaniya;







// <Row>
//                       <Button type="primary"> Добавить</Button>

//                       <Col span={8} offset={13} className="search">
//                         <Space>
//                           <Search
//                             placeholder="input search text"
//                             onSearch={onSearch}
//                             enterButton
//                           />
//                           <Button type="primary">More actions</Button>
//                         </Space>
//                       </Col>
//                     </Row>
//                     <Table
//                      
//                     />
//                   </Col>



// <Form.Item
//                     name={["document", "izox "]}
//                     label="Izox:"
//                     className="Textarea"
//                     rules={[
//                       {
//                         type: "string",
//                       },
//                     ]}
//                   >
//                     <TextArea className="Text" />
//                   </Form.Item>