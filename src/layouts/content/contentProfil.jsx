import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Checkbox, Button, Image, Form, Input, } from 'antd';
import './content.css'


class ContentProfil extends React.Component {

    render() {
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }
        return (
            <div style={{ backgroundColor: 'whitesmoke', width: '95%', height: '100%' }} >
                <Row >
                    <Col span={10} offset={4} style={{ borderTop: '  2px solid blue', backgroundColor: 'white', padding: '1%', marginTop:'3%' }} >
                        <Row>
                            <Col span={24}  >
                            </Col>
                        </Row>
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
                            <Form.Item
                                label="Ismi"
                                name="name"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input style={{ backgroundColor: 'whitesmoke' }} />
                            </Form.Item>
                            <Form.Item
                                label="Familiya"
                                name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input style={{ backgroundColor: 'whitesmoke' }} />
                            </Form.Item>
                            <Form.Item
                                label="Login"
                                name="login"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input style={{ backgroundColor: 'whitesmoke' }} />
                            </Form.Item>
                            <Form.Item
                                label="Pasport raqami "
                                name="pasport"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your username!',
                                    },
                                ]}
                            >
                                <Input style={{ backgroundColor: 'whitesmoke' }} />
                            </Form.Item>
                            <Form.Item
                                label="Parilni o'zgartirish"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password style={{ backgroundColor: 'whitesmoke' }} placeholder='password' />
                            </Form.Item>
                            <Form.Item
                                label=" Yangi parol "
                                name="newpassword"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                            >
                                <Input.Password style={{ backgroundColor: 'whitesmoke' }} placeholder='new password' />
                            </Form.Item>
                            <Row>
                                <Col span={14} offset={10} >
                                    <Button type='primary'   >Submit</Button>
                                </Col>
                            </Row>




                        </Form>
                    </Col>
                    <Col span={6} style={{ borderTop: '  2px solid blue', backgroundColor: 'white',marginTop:'3%',padding:'1%'  }}   >

                        <Row >
                            {/* style={{ marginTop: '24%' }}  */}
                            <Col span={24}  >
                                <h1> Rasm</h1>
                            </Col>
                        </Row>
                        <Row className='Mt' >
                            <Col span={24} >
                                <div style={{
                                    border: '1px solid whitesmoke',  height: '80px'
                                    , width: '70%', backgroundColor: 'whitesmoke',margin:'auto'
                                }} >
                                    <Image
                                        
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </div>

                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* </div> */}

            </div>
        );
    }
}
export default ContentProfil;