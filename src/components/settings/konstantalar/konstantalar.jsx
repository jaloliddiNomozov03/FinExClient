import { Tabs, Form, Input, InputNumber, Button, Select } from "antd";
const { Option } = Select;
const { TabPane } = Tabs;
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const callback = (key) => {
  return console.log(key);
};
const onFinish = (values) => console.log(values);

const ContentKonstantalar = () => (
  <Tabs defaultActiveKey="1" onChange={callback}>
    <TabPane tab="Asosiy parametrlar" key="kons-1">
    <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["document", "1"]}
          label="Asosiy Valyuta"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="USD">USD</Option>
            <Option value="UZS">UZS</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "2"]}
          label="Asosiy Sklad "
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="Tashkent Sklad">Tashkent Sklad</Option>
            <Option value="Kokand Sklad">Kokand Sklad</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "3"]}
          label="Asosiy Narx turi"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="???????? ????????????????">???????? ????????????????</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "4"]}
          label="Asosiy Kontragent"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="?????? ????????????">?????? ????????????</Option>
            <Option value="?????? ????????????">?????? ????????????</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "5"]}
          label="Asosiy Bank Xisob Raqami"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="???????? ??????????">???????? ??????????</Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          name={["document", "6"]}
          label="Asosiy Filial"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="Filial Tashkent">Filial Tashkent</Option>
          </Select>
        </Form.Item>
        
        <Form.Item
          name={["document", "7"]}
          label="Asosiy Bolinma"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="????????????????">????????????????</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "8"]}
          label="Asosiy Masul Shaxs"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="??????????????????">??????????????????</Option>
          </Select>
        </Form.Item>
        
        
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </TabPane>
    <TabPane tab="Tovar Xisobi Sozlamasi" key="kons-2">
      <Form {...layout} name="nest-messages" onFinish={onFinish}>
        <Form.Item
          name={["document", "1"]}
          label="Seriyali Hisob"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="????????????????????????">????????????????????????</Option>
            <Option value="??????????????????????????????">??????????????????????????????</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "2"]}
          label="Tovarlarni Hisobdan Chqiarish Turi"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="FIFO">FIFO</Option>
            <Option value="LIFO">LIFO</Option>
            <Option value="??????????????????_????????????????????????">
              ??????????????????_????????????????????????
            </Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "3"]}
          label="Valyutalar boyicha sotish turi"
          rules={[{ required: true }]}
        >
          <Select
            showSearch
            style={{ width: 200 }}
            placeholder="Search to Select"
            optionFilterProp="children"
            filterOption={(input, option) =>
              option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
            }
            filterSort={(optionA, optionB) =>
              optionA.children
                .toLowerCase()
                .localeCompare(optionB.children.toLowerCase())
            }
          >
            <Option value="??????????????????">??????????????????</Option>
            <Option value="????????????????">????????????????</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={["document", "4"]}
          label="Kechiktirilgan Tolovlar Hisobi"
        >
          <Input type="checkbox" />
        </Form.Item>
        <Form.Item name={["document", "5"]} label="Savdodan Bonus Foizi">
          <InputNumber
            defaultValue={10}
            min={0}
            max={100}
            formatter={(value) => `${value}%`}
            parser={(value) => value.replace("%", "")}
          />
        </Form.Item>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </TabPane>
  </Tabs>
);
export default ContentKonstantalar;
