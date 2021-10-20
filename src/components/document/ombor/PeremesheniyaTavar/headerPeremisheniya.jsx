import React, { useEffect, useState } from "react";
import {
  Button,
  Row,
  Col,
  Space,
  Input,
  Modal,
  Form,
  InputNumber,
  Select,
  DatePicker,
  notification,
} from "antd";
import { Table } from "antd";
import "./peremisheniya.css";
import { dataa } from "./ModalTable";
import { columnss } from "./ModalTable";
import { getStaffList } from "../../../../server/config/objects/StaffService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { getWarehouseList } from "../../../../server/config/objects/WarehouseService";
import { saveMovingGoods } from "../../../../server/config/document/MovingGoodsService";
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
const HeaderPeremisheniya = (props) => {
  const [date, setDate] = useState("");
  const [staff, setStaff] = useState(null);
  const [branch, setBranch] = useState(null);
  const [warehouse, setWarehouse] = useState(null);

  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);

  useEffect(() => {
    getStaff();
    getBranch();
    getWarehouses();
  }, []);

  const getStaff = () => {
    getStaffList().then((value) => {
      if (value && value.data) {
        setStaff(value.data);
      }
    });
  };
  const getBranch = () => {
    getBranchesList().then((value) => {
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };
  const getWarehouses = () => {
    getWarehouseList().then((value) => {
      if (value && value.data) {
        setWarehouse(value.data);
      }
    });
  };

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
    let movingGood = {
      accounting: values.document.accounting,
      branchId: values.document.branchId,
      date: date,
      recipientWarehouseId: values.document.recipientWarehouseId,
      senderWarehouseId: values.document.senderWarehouseId,
      staffId: values.document.staffId,
      comment: values.document.comment,
    };
    console.log(movingGood);
    if (
      movingGood.branchId &&
      movingGood.recipientWarehouseId &&
      movingGood.senderWarehouseId &&
      movingGood.staffId &&
      movingGood.date
    ) {
      saveMovingGoods(movingGood).then((value) => {
        if (value && value.data.success) {
          props.getMovingGoods();
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
            title="Peremisheniya Tavar  "
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
                <Col span={3}>
                  <Button type="primary">Запусать и закрыть</Button>
                </Col>
                <Col span={2}>
                  <Button>Запусать</Button>
                </Col>
                <Col span={2}>
                  <Button>Провести</Button>
                </Col>
                <Col span={3} offset={14}>
                  <Button type="primary">Еще</Button>
                </Col>
              </Row>
            </div>

            <Form {...layout} name="nest-messages" onFinish={onFinishCreate}>
              <div className="ModalDiv">
                <Row>
                  <Col
                    span={12}
                    style={{ borderRight: "1px solid #333", padding: "1%" }}
                  >
                    <Form.Item
                      name={["document", "accounting"]}
                      label="Учет:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>
                    <Form.Item
                      name={["document", "branchId"]}
                      label="Организация"
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
                        // onChange={onChangeCounterpart}
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(branch)
                          ? branch.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={["document", "senderWarehouseId"]}
                      label="СкладОтправителя:"
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
                        // onChange={onChangeCounterpart}
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(warehouse)
                          ? warehouse.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={["document", "recipientWarehouseId"]}
                      label="СкладПолучатель:"
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
                        // onChange={onChangeCounterpart}
                        className="Select"
                        onSearch={onSearch}
                        filterOption={(input, option) =>
                          option.children
                            .toLowerCase()
                            .indexOf(input.toLowerCase()) >= 0
                        }
                      >
                        {Array.isArray(warehouse)
                          ? warehouse.map((item) => (
                              <Option value={item.id}>{item.name}</Option>
                            ))
                          : ""}
                      </Select>
                    </Form.Item>
                    <Form.Item
                      name={["document", "staffId"]}
                      label="Ответственный:"
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
                        // onChange={onChangeCounterpart}
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
                      label="Comment:"
                      rules={[
                        {
                          type: "string",
                        },
                      ]}
                    >
                      <Input />
                    </Form.Item>

                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                      <Button type="primary" htmlType="submit">
                        Submit
                      </Button>
                    </Form.Item>
                  </Col>
                  <Col span={12} style={{ padding: "1%" }}>
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
                      scroll={{ x: 1600, y: 400 }}
                      dataSource={dataa}
                    />
                  </Col>
                </Row>
              </div>
            </Form>
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
export default HeaderPeremisheniya;

{
  /* */
}
