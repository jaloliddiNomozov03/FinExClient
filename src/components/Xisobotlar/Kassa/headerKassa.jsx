import React, { useState } from 'react'
import { Row, Col, Input, Form, Button, Modal, Select, DatePicker, Space } from 'antd'
import { DownOutlined } from '@ant-design/icons'
const { Option } = Select;
const { RangePicker } = DatePicker;




const HeaderKassa = () => {
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
    function onChange(value, dateString) {
        console.log('Selected Time: ', value);
        console.log('Formatted Selected Time: ', dateString);
    }

    function onOk(value) {
        console.log('onOk: ', value);
    }

    return (
        <Form
            style={{ padding: '0' }}
            name="basic"
            labelCol={{
                span: 10,
            }}
            wrapperCol={{
                span: 20,
            }}
            initialValues={{
                remember: true,
            }}
        >
            <Row >
                <Col span={5} >
                    <Form.Item
                        label="ДатаНачало:"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Space direction="vertical" size={12}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Space>
                    </Form.Item>
                </Col>
                <Col span={5} >
                    <Form.Item
                        label="ДатаКонец:"
                        name="датаКонец"
                        rules={[
                            {
                                required: true,
                                message: 'Please input your username!',
                            },
                        ]}
                    >
                        <Space direction="vertical" size={12}>
                            <DatePicker showTime onChange={onChange} onOk={onOk} />
                        </Space>
                    </Form.Item>
                </Col>
                <Col span={4}  >
                    <Row  >
                        <Col span={23} >
                            <Form.Item
                                label="Валюта:"
                                name="валюта"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input  />
                            </Form.Item>
                        </Col>
                        <Col span={1}>
                            <Button onClick={showCreateModal} >
                                < DownOutlined  style={{fontSize:'10px'}} />
                            </Button>
                            <Modal
                                title="Валюта  "
                                visible={isCreateModalVisble}
                                onOk={handleCreateOk}
                                onCancel={handleCreateCancel}
                                width="40%"
                                height="50vh"
                            >
                                <Select
                                    showSearch
                                    style={{ width: '80%' }}
                                    placeholder="Search "
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    {/* <Option value="1">Not Identified</Option> */}

                                </Select>,

                            </Modal>

                        </Col>
                    </Row>
                </Col>
                <Col span={5} offset={1} >
                    <Row>
                        <Col span={23} >
                            <Form.Item
                                label="Касса:"
                                name="контрагент"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input  />
                            </Form.Item>
                        </Col>
                        <Col span={1} >
                            <Button onClick={showCreateModal}  >
                                < DownOutlined  style={{fontSize:'10px'}} />
                            </Button>
                            <Modal
                                title="Касса  "
                                visible={isCreateModalVisble}
                                onOk={handleCreateOk}
                                onCancel={handleCreateCancel}
                                width="40%"
                                height="50vh"
                            >
                                <Select
                                    showSearch
                                    style={{ width: '80%' }}
                                    placeholder="Search "
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    filterSort={(optionA, optionB) =>
                                        optionA.children.toLowerCase().localeCompare(optionB.children.toLowerCase())
                                    }
                                >
                                    {/* <Option value="1">Not Identified</Option> */}

                                </Select>,
                            </Modal>
                        </Col>
                    </Row>
                </Col>
                <Col span={3} offset={1} >
                    <Button type='primary' >Софармировать</Button>
                </Col>
            </Row>
        </Form>
    );
}
export default HeaderKassa;
