import React from "react";
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Row, Col, Checkbox,Button } from 'antd';
import './content.css'


class ContentProfil extends React.Component {

    render() {
        function onChange(e) {
            console.log(`checked = ${e.target.checked}`);
        }
        return (
            <div style={{ backgroundColor: 'whitesmoke', width: '100%', height: '100%' }} >
                {/* <div> */}
                    <Row >
                        <Col  span={7} offset={6} style={{ borderTop:'  2px solid blue',backgroundColor: 'white' }} className='Mt' >
                            <Row>
                                <Col span={24} className='Pad' >
                                    <h1> Mening Profilim</h1>
                                </Col>
                            </Row>
                            <Row  >
                                <Col span={24} className='Pad' >
                                    <h1>Ismi:</h1>
                                    <input type="text" className='Input' />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Pad' >
                                    <h1>Familiya</h1>
                                    <input type="text" className='Input' />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Pad' >
                                    <h1>Login</h1>
                                    <input type="text" className='Input' />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Pad' >
                                    <h1>Pasport raqami</h1>
                                    <input type="text" className='Input' />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Pad' >
                                    <h1> <Checkbox onChange={onChange}>Parolni o'zgartirish</Checkbox> </h1>
                                    <input type="text" className='Input' placeholder='Yangi parol' />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Pad' >
                                    <h1> Parol tasdig'i</h1>
                                    <input type="text" className='Input' placeholder='Parol tasdig`i' />
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24} className='Pad Mt' >
                                    <Button  type={"primary"}  > Qo'shish </Button>
                                </Col>
                            </Row>
                        </Col>
                        <Col    span={3} style={{borderTop:'  2px solid blue', backgroundColor: 'white' }} className='Mt'  >
                           
                            <Row style={{marginTop:'24%'}} >
                                <Col span={24} className='Pad' >
                                    <h1> Rasm</h1>
                                </Col>
                            </Row>
                            <Row className='Mt' >
                                <Col span={24} className='Pad' >
                                    <div style={{border:'1px solid whitesmoke', height:'120px'
                                    ,width:'90%', backgroundColor:'whitesmoke'  }} >
                                        <img src=" https://www.picsum.photos/400" alt="rasm" className='img' />
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