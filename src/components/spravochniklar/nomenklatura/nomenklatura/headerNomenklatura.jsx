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
import { getCurrencyList } from "../../../../server/config/objects/CurrencyService";
import { getUnitList } from "../../../../server/config/objects/UnitService";
import { getProductionList } from "../../../../server/config/document/ProductionService";
import {
  getNomenclatureList,
  saveNomenclature,
} from "../../../../server/config/objects/NomenklaturaService";
import { getProductTypeList } from "../../../../server/config/objects/ProductTypeService";
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
const HeaderNomenklatura = (props) => {
  const [date, setDate] = useState(null);
  const [currency, setCurrency] = useState(null);
  const [nomenclature, setNomenclature] = useState(null);
  const [units, setUnits] = useState(null);
  const [productType, setProductType] = useState(null);
  const [isCreateModalVisble, setIsCreateModalVisible] = useState(false);
  const [isCreateGroupModalVisible, setIsCreateGroupModalVisible] =
    useState(false);
  useEffect(() => {
    getCurrency();
    getUnit();
    getProductType();
    getNom();
  }, []);

  const getCurrency = () => {
    getCurrencyList().then((res) => {
      if (res && res.data) {
        setCurrency(res.data);
      }
    });
  };
  const getUnit = () => {
    getUnitList().then((res) => {
      if (res && res.data) {
        setUnits(res.data);
      }
    });
  };
  const getProductType = () => {
    getProductTypeList().then((res) => {
      if (res && res.data) {
        setProductType(res.data);
      }
    });
  };
  const getNom = () => {
    getNomenclatureList().then((res) => {
      if (res && res.data) {
        setNomenclature(res.data);
      }
    });
  };
  const showCreateModal = () => {
    setIsCreateModalVisible(true);
    getNom();
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

  const onFinishCreateGroup = (values) => {
    console.log(values);
  };
  const onFinishCreate = (values) => {
    console.log(values);
    let nomenclature = {
      name: values.document.name,
      barcode: values.document.barcode,
      basicUnit: values.document.basicUnit,
      coefficient: values.document.coefficient,
      count: values.document.count,
      currencyId: values.document.currencyId,
      nomenclatureId: values.document.nomenclatureId,
      productTypeId: values.document.productTypeId,
      finishedProduct: values.document.finishedProduct
        ? values.document.finishedProduct.target.checked
        : false,
      isMoreUnits: values.document.isMoreUnits
        ? values.document.isMoreUnits.target.checked
        : false,
      rawMaterial: values.document.rawMaterial
        ? values.document.rawMaterial.target.checked
        : false,
      serialNumber: values.document.serialNumber
        ? values.document.serialNumber.target.checked
        : false,
    };
    if (
      nomenclature.name &&
      nomenclature.barcode &&
      nomenclature.basicUnit &&
      nomenclature.count &&
      nomenclature.currencyId &&
      nomenclature.productTypeId
    ) {
      saveNomenclature(nomenclature).then((value) => {
        if (value && value.data.success) {
          props.getNomenclature();
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
  return (
    <Row style={{
      padding: "14px 0 0"
    }}>
      <Col xs={{ span: 1 }} sm={{ span: 2 }} lg={{ span: 2 }}>
        <Space>
          <Button style={{
            marginLeft: "-26px"
          }} type="primary" size="small" onClick={showCreateModal}>
            Create
          </Button>
          <Modal
            title="Basic Modal"
            visible={isCreateModalVisble}
            onOk={handleCreateOk}
            onCancel={handleCreateCancel}
          >
            {/* <Button type="primary" >
              ???????????????? ?? ??????????????
            </Button>
            <Button className='Top'>
              ????????????????
            </Button>
            <Button className='Yew' >
              ??????
            </Button> */}
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreate}
              size="small"
              // validateMessages={validateMessages}
            >
              <Form.Item
                name={["document", "name"]}
                label="Name:"
                rules={[
                  {
                    required: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>

              {/*currencyId*/}
              <Form.Item
                name={["document", "currencyId"]}
                label="Currency:"
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
                  {Array.isArray(currency)
                    ? currency.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>
              {/*nomenclature*/}
              <Form.Item
                name={["document", "nomenclatureId"]}
                label="Roditel:"
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
                  // onChange={onChangeCounterpart}
                  className="Select"
                  onSearch={onSearch}
                  filterOption={(input, option) =>
                    option.children
                      .toLowerCase()
                      .indexOf(input.toLowerCase()) >= 0
                  }
                >
                  <Option>nothing...</Option>
                  {Array.isArray(nomenclature)
                    ? nomenclature.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>
              {/* units */}
              <Form.Item
                name={["document", "basicUnit"]}
                label="Unit:"
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
                  {Array.isArray(units)
                    ? units.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>

              <Form.Item
                name={["document", "barcode"]}
                label="ShtrixCode"
                rules={[{ type: "string" }]}
              >
                <Input />
              </Form.Item>
              {/*productType*/}
              <Form.Item
                name={["document", "productTypeId"]}
                label="productType:"
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
                  {Array.isArray(productType)
                    ? productType.map((item) => (
                        <Option value={item.id}>{item.name}</Option>
                      ))
                    : ""}
                </Select>
              </Form.Item>

              {/*<Form.Item*/}
              {/*  name={["document", "serialNumber"]}*/}
              {/*  label="Seriyka"*/}
              {/*  rules={[{ type: "string" }]}*/}
              {/*>*/}
              {/*  <Input />*/}
              {/*</Form.Item>*/}
              <Form.Item
                name={["document", "finishedProduct"]}
                label="finishedProduct:"
                valuePropName="unchecked"
              >
                <Input type="checkbox" />
              </Form.Item>
              <Form.Item
                name={["document", "isMoreUnits"]}
                label="IsMoreUnit:"
                valuePropName="unchecked"
              >
                <Input type="checkbox" />
              </Form.Item>
              <Form.Item
                name={["document", "count"]}
                label="Count:"
                rules={[{ type: "number" }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "coefficient"]}
                label="Koeffitsient"
                rules={[{ type: "number" }]}
              >
                <InputNumber />
              </Form.Item>
              <Form.Item
                name={["document", "rawMaterial"]}
                label="rawMaterial:"
                valuePropName="unchecked"
              >
                <Input type="checkbox" />
              </Form.Item>
              <Form.Item
                name={["document", "serialNumber"]}
                label="serialNumber:"
                valuePropName="unchecked"
              >
                <Input type="checkbox" />
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
            title="Basic Modal"
            visible={isCreateGroupModalVisible}
            onOk={handleCreateGroupOk}
            onCancel={handleCreateGroupCancel}
          >
            <Form
              {...layout}
              name="nest-messages"
              onFinish={onFinishCreateGroup}
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
                name={["document", "description"]}
                label="Description"
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
        lg={{ span: 8, offset: 14 }}
      >
        <Space>
          <Search
          size="small"
            placeholder="input search text"
            onSearch={onSearch}
            allowClear
          />
          <Button size="small" type="primary">More actions</Button>
        </Space>
      </Col>
    </Row>
  );
};
export default HeaderNomenklatura;