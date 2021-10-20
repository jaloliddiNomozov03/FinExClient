import React, { useState, useEffect } from "react";
import {
  Button,
  Row,
  Col,
  Space,
  Input,
  Modal,
  Form,
  Select,
  DatePicker,
  notification,
} from "antd";
import "./NaxtPulChiqimi.css";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { saveCashRegisterExpense } from "../../../../server/config/document/CashRegisterExpenseService";
const { Search } = Input;
const { Option } = Select;
const onSearch = (value) => console.log(value);
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const HeaderChiqim = (props) => {
  const [date, setDate] = useState("");
  const [staff, setStaff] = useState([]);
  const [staffId, setStaffId] = useState(null);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };
  useEffect(() => {
    getStaff();
  }, []);
  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };
  const getStaff = () => {
    getStaffList().then((value) => {
      if (value && value.data) {
        setStaff(value.data);
      }
    });
  };
  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };

  const onFinishCreate = (values) => {
    let cashRegisterExpense = {
      comment: values.document.comment,
      date: date,
      responsibleId: staffId,
    };
    if (cashRegisterExpense.responsibleId && cashRegisterExpense.date) {
      saveCashRegisterExpense(cashRegisterExpense).then((value) => {
        if (value && value.data.success) {
          props.getCashRegisterExpenses();
          notification["success"]({
            message: "Data success save!",
          });
        } else {
          notification["error"]({
            message: "Data do not save!",
          });
        }
      });
    }
  };
  function onChangeStaff(value) {
    setStaffId(value);
  }
  function onChange(value, dateString) {
    // console.log('Selected Time: ', value);
    setDate(dateString);
  }

  function onOk(value) {
    console.log("onOk: ", value);
  }
  return (
    <Row>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Naqt pul chiqimi"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
            width="150vh"
          >
            <div className="ModalTop">
              <Button>Основное</Button>
              <p>
                {" "}
                <a href="#">Бонуси</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#"> Взаиморасчеты</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#">ДатаПогашение</a>{" "}
              </p>
              <p>
                {" "}
                <a href="#"> Касса</a>{" "}
              </p>
            </div>
            <Button type="primary">Запусать и закрыть</Button>
            <Button className="Top">Запусать</Button>
            <Button className="Top">Провести</Button>
            <Button className="Yeshyo">Еще</Button>
            <div className="from">
              <Form
                {...layout}
                name="nest-messages"
                onFinish={onFinishCreate}
                // validateMessages={validateMessages}
              >
                <Form.Item
                  name={["document", "responsible"]}
                  label="Staff"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Select
                    // showSearch

                    style={{ width: 300 }}
                    placeholder=" "
                    optionFilterProp="children"
                    onChange={onChangeStaff}
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
                <Form.Item name={["document", "date"]} label="Time">
                  <Space direction="vertical" size={12}>
                    <DatePicker showTime onChange={onChange} onOk={onOk} />
                  </Space>
                </Form.Item>
                <Form.Item
                  name={["document", "comment"]}
                  label="Comment"
                  rules={[
                    {
                      type: "string",
                    },
                  ]}
                >
                  <textarea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </Modal>
        </Space>
      </Col>
      <Col
        xs={{ offset: 7, span: 6 }}
        sm={{ offset: 12, span: 8 }}
        lg={{ offset: 14, span: 8 }}
        className="search"
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
export default HeaderChiqim;
