import React, { useState, useEffect } from "react";
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
  notification,
} from "antd";
import { getPricesList } from "../../../../server/config/objects/PriceTypeService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import { saveCounterParty } from "../../../../server/config/objects/CounterpartyService";
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
const HeaderKontragent = (props) => {
  const [priceTypeId, setPriceType] = useState("");
  const [id, setId] = useState("");
  const [parent, setParent] = useState("");
  const [price, setPrice] = useState([]);
  const [branch, setBranch] = useState([]);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
  const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] =
    useState(false);

  useEffect(() => {
    getPrices();
    getBranches();
  }, []);

  const getPrices = () => {
    getPricesList().then((value) => {
      if (value && value.data) {
        setPrice(value.data);
      }
    });
  };
  const getBranches = () => {
    getBranchesList().then((value) => {
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };
  const showCreateModal = () => {
    setIsCreateModalVisible(true);
  };
  const showCreateGroupModal = () => {
    setIsCreateGroupModalVisible(true);
  };

  const handleCreateOk = () => {
    setIsCreateModalVisible(false);
  };
  const handleCreateGroupOk = () => {
    setIsCreateGroupModalVisible(false);
  };

  const handleCreateCancel = () => {
    setIsCreateModalVisible(false);
  };
  const handleCreateGroupCancel = () => {
    setIsCreateGroupModalVisible(false);
  };

  const onFinishCreate = (values) => {
    let counterpart = {
      name: values.document.name,
      parentId: values.document.parentId,
      address: values.document.address,
      phoneNumber: values.document.phone,
      // typeCounterPartId: parent,
      info: values.document.info,
      typePriceId: priceTypeId,
      branchId: id,
    };
    if (
      counterpart.branchId &&
      counterpart.name &&
      counterpart.address &&
      counterpart.typePriceId &&
      counterpart.info
    ) {
      saveCounterParty(counterpart).then((value) => {
        console.log(value);
        if (value && value.data.success) {
          props.getCounterparty();
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
    console.log(counterpart);
  };
  const onFinishCreateGroup = (values) => {
    console.log(values);
  };
  function onChange(value) {
    setId(value);
  }
  function onChangeCounterpartType(value) {
    setParent(value);
  }
  function onChangePriceType(value) {
    setPriceType(value);
  }
  return (
    <Row style={{
      padding: "14px 0 0"
    }}>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button
            type="primary"
            style={{ marginLeft: "-35px" }}
            size="small"
            onClick={showCreateModal}
          >
            Create
          </Button>
          <Modal
            title="Kontragent"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
            <Row style={{ marginBottom: "3%" }} >
              <Col span={10}>
                <Button type='primary'>Запусать и закрыть</Button>
              </Col>
              <Col span={2}>
                <Button>Запусать</Button>
              </Col>
              <Col span={3} offset={9}>
                <Button type='primary'>Еще</Button>
              </Col>
            </Row>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              size="small"
            // validateMessages={validateMessages}
            >
              <Form.Item
                name={["document", "code"]}
                label="Code"
                rules={[
                  {
                    type: "integer",
                  },
                ]}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name={["document", "name"]}
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
                name={["document", "parentId"]}
                label="Raditel"
                rules={[
                  {
                    type: "string",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["document", "address"]}
                label="Manzil"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "phone"]}
                label="Tel raqam"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "info"]}
                label="Info"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name={["document", "typeCounterpart"]}
                label="Kontragent turi"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name={["document", "typeCounterPart"]}
                label="TypeCounterPart"
              // rules={[
              //   {
              //     required: true,
              //   },
              // ]}
              >
                <Select
                  // showSearch

                  style={{ width: 300 }}
                  placeholder=" "
                  optionFilterProp="children"
                  onChange={onChangeCounterpartType}
                  className="Select"
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {Array.isArray(props.branch)
                    ? props.branch.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))
                    : ""}
                </Select>
              </Form.Item>

              <Form.Item
                name={["document", "priceType"]}
                label="Narx turi"
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
                  onChange={onChangePriceType}
                  className="Select"
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  {Array.isArray(price)
                    ? price.map((item) => (
                      <Option value={item.id}>{item.name}</Option>
                    ))
                    : ""}
                </Select>
              </Form.Item>

              <Form.Item
                name={["document", "branch"]}
                label="Filial"
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
                  onChange={onChange}
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

              <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Modal>
          <Button type="primary" size="small" onClick={showCreateGroupModal}>
            Create group
          </Button>
          <Modal
            title="Kontragent"
            visible={isCreateGroupModalVisible}
            onOk={handleCreateGroupOk}
            onCancel={handleCreateGroupCancel}
          >
            <Row style={{ marginBottom: "3%" }} >
              <Col span={10}>
                <Button type='primary'>Запусать и закрыть</Button>
              </Col>
              <Col span={2}>
                <Button>Запусать</Button>
              </Col>
              <Col span={3} offset={9}>
                <Button type='primary'>Еще</Button>
              </Col>
            </Row>
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreateGroup}
            // validateMessages={validateMessages}
            >
              <Form.Item
                name={["document", "desc"]}
                label="Ismi"
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
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>
              <Form.Item
                name={["document", "raditel"]}
                label="Raditel"
                rules={[{ type: "string" }]}
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
        xs={{ offset: 11, span: 1 }}
        sm={{ offset: 12, span: 10 }}
        lg={{ offset: 8, span: 14 }}
      >
        <Space>
          <Search
            size="small"
            placeholder="search"
            onSearch={onSearch}
            allowClear
          />
          <Button type="primary" size="small">
            More actions
          </Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderKontragent;
