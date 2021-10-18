import React, { useState } from "react";
import {
  Button,
  Row,
  Col,
  Space,
  Input,
  Modal,
  Form,
  InputNumber,
  notification,
} from "antd";
import { saveBankAccount } from "../../../../server/config/objects/BankAccountService";
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
const HeaderBankXisobRaqamlari = (props) => {
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
    let account = {
      accountNumber: values.document.accountNumber,
      address: values.document.address,
      bank: values.document.desc,
      director: values.document.director,
      mfi: values.document.mfi,
      oked: values.document.oked,
      stir: values.document.stir,
    };
    console.log(account);
    if (
      account.accountNumber &&
      account.address &&
      account.bank &&
      account.director &&
      account.mfi &&
      account.oked &&
      account.stir
    ) {
      saveBankAccount(account).then((value) => {
        console.log("Ishladi");
        if (value && value.data.success) {
          props.getBankAccounts();
          notification["success"]({
            message: "Data success save!",
          });
        } else {
          notification["error"]({
            message: "Data don't save!",
          });
        }
      });
    }
  };

  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Bank Xisob Raqamlari Modal"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              size="small"
              // validateMessages={validateMessages}
            >
              <Form.Item
                name={["document", "desc"]}
                label="Description"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "code"]}
                label="Code"
                rules={[
                  {
                    type: "integer",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "accountNumber"]}
                label="AccountNumber"
                rules={[
                  {
                    type: "string",
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "address"]}
                label="Address"
                rules={[{ type: "string", required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "director"]}
                label="Director"
                rules={[{ type: "string", required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "mfi"]}
                label="MFI"
                rules={[{ type: "string", required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "oked"]}
                label="OKED"
                rules={[{ type: "string", required: true }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "stir"]}
                label="STIR"
                rules={[{ type: "string", required: true }]}
              >
                <Input />
              </Form.Item>

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
        </Space>
      </Col>
      <Col
        xs={{ offset: 7, span: 6 }}
        sm={{ offset: 12, span: 8 }}
        lg={{ offset: 14, span: 8 }}
      >
        <Space>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            allowClear
          />
          <Button type="primary">More actions</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderBankXisobRaqamlari;
