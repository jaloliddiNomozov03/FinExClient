import React, { useState, useEffect } from "react";
import {Button, Row, Col, Space, Input, Modal, Form, InputNumber, notification, Select, DatePicker} from "antd";
import {saveEnteringCashBox} from "../../../../server/config/document/EnteringCashBoxService";
import {getStaffList} from "../../../../server/config/objects/StaffService";
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
const HeaderKassa = (props) => {

  const [date, setDate] = useState("");
  const [staff, setStaff] = useState([]);
  const [staffId, setStaffId] = useState(null);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
  useEffect(()=>{
    getStaff();
  },[]);
  const getStaff = () => {
    getStaffList().then((value) => {
      if (value && value.data) {
        setStaff(value.data);
      }
    });
  };

  const onFinishCreate = (values) => {
    let enteringCashBox = {
      comment: values.document.comment,
      date: date,
      responsibleId: staffId
    };
    if (enteringCashBox.responsibleId && enteringCashBox.date){
      saveEnteringCashBox(enteringCashBox).then(value => {
        if (value && value.data.success){
          props.getEnteringCashBoxs();
          notification["success"]({
            message: "Data success save!",
          });
        }else {
          notification["error"]({
            message: "Data do not save!",
          });
        }
      })
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

  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };


  return (
    <Row>
      <Col span={4}>
        <Space>
          <Button className="Create" type="primary" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Kassa qoldiqlarini kiritish"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
            className="Modal"
          >
            <Button>Запусать и закрыть</Button>
            <Button>Запусать</Button>
            <Button>Еще</Button>

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
              <Form.Item
                  name={["document", "date"]}
                  label="Time"
              >
                <Space direction="vertical" size={12}>
                  <DatePicker
                      showTime
                      onChange={onChange}
                      onOk={onOk}
                  />
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
              <Form.Item
                  wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
              >
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
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
export default HeaderKassa;
