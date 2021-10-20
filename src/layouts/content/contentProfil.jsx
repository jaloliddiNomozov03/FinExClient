import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Checkbox, Button, Image, Form, Input, } from 'antd';
import './content.css'


class ContentProfil extends React.Component {

    render() {
        return (
            <div className="Asosiy" >
                <Row >
                    <Col  xs={{span:24}} sm={{span:14}} md={{span:12, offset:1}}  lg={{span:12, offset:1}} xl={{span:8,  offset:4}} xxl={{span:8, ofset:4}} 
                         className="Wrapper"
                    >
                        <Row>
                            <Col span={24}  >
                            </Col>
                        </Row>
                        <Form
                            style={{ padding: '0',margin:'0' }}
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
                                <Col  xs={{span:4}} sm={{span:10, offset:10}} >
                                    <Button type='primary'   >Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                    <Col  xs={{span:24}} sm={{span:10}} md={{span:10}}  lg={{span:10}} xl={{span:8}} xxl={{span:8}}
                        className="WrapperImg"  >
                        <Row >
                            <Col span={24}  >
                                <h1> Rasm</h1>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={{span:15, }} sm={{span:24, offset:0}} md={{span:24, offset:0}} xl={{span:24, offset:0}} xxl={{span:16, offset:4}}>
                                <div className="ImgDiv">
                                    <Image  
                                        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
                                    />
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default ContentProfil;