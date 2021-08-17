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
    <TabPane tab="Asosiy parametrlar" key="kons-1"></TabPane>
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
            <Option value="СерийныйУчет">СерийныйУчет</Option>
            <Option value="БезСерийныйУчет">БезСерийныйУчет</Option>
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
            <Option value="ПоПартиям_СрокГодности">
              ПоПартиям_СрокГодности
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
            <Option value="ПоТоваром">ПоТоваром</Option>
            <Option value="НаВалюта">НаВалюта</Option>
          </Select>
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
