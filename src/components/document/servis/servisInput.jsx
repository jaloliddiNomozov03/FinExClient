import React from "react";
import { Input, Form, Row, Col } from "antd";
import "./servis.css";

const ServisInput = () => {
  return (
    <div>
      <Form className="InputServis" name="nest-messages">
        <Row style={{padding:'1%' }} >
          <Col span={6} >
            <Form.Item
              name={["document", "period"]}
              label="Period "
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["document", "otvet"]}
              label="Otvetstvenniy"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item
              name={["document", "tulovturi"]}
              label="TulovTuri"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["document", "kurs"]}
              label="Kurs"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item
              name={["document", "namenklavyatura"]}
              label="Namenklavyatura"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["document", "TavarTuri"]}
              label="tavarturi"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={6} >
            <Form.Item
              name={["document", "foiz"]}
              label="Foiz"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item
              name={["document", "foizturi"]}
              label="FoizTuri"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>

        </Row  >
      </Form>
    </div>
  );
};
export default ServisInput;




