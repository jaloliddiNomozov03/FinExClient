import React, { useState } from "react";
import { Button, Row, Col, Space, Input, Modal, Form, InputNumber, } from "antd";
import { Table } from "antd";
import "./spisaniya.css";
import { dataa } from "./ModalTable";
import { columnss } from "./ModalTable";
import TextArea from "antd/lib/input/TextArea";

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
const HeaderSpisaniya = () => {
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

  const onFinishCreate = (values) => {
    console.log(values);
  };

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
                      name={["document", "data"]}
                      label="Data"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <InputNumber />
                    </Form.Item>

                    <Form.Item
                      name={["document", "ombor "]}
                      label="Ombor:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "organizatsiya "]}
                      label="Организация:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item
                      name={["document", "otvetstvenniy "]}
                      label="Ответственный:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Button type='primary' >Submit</Button>
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
                    <Form.Item
                      name={["document", "izox "]}
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