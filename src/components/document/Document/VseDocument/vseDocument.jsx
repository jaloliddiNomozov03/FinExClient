import { Table, Button } from "antd";
import HeaderDocument from "./headerVseDoc";
import "./vseDocument.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: 120 },
  { title: "Numer ", dataIndex: "numer", key: "numer", width: 120 },
  { title: "Document Turi", dataIndex: "tipDocument", key: "tipDocument", width: 200 },
  { title: "Grafa 1", dataIndex: "grafa", key: "grafa", width: 120 },
  {
    title: "Action",
    dataIndex: "",
    fixed: "right",
    key: "x",
    width: 100,
    render: () => <Button type="primary">Delete</Button>,
  },
];

const data = [
  {
    key: 1,
    data: "N",
    numer: "",
    tipDocument: "UZS",
    grafa: "",
  },
];

const VseDoc = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      scroll={{x: 300, y: 500}}
      title={HeaderDocument}
      width="100vh"
      size="small"
    />
  );
};
export default VseDoc;
