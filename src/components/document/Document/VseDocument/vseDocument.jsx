import { Table, Button } from "antd";
import HeaderDocument from "./headerVseDoc";
import "./vseDocument.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "15vh" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },
  { title: "Document Turi", dataIndex: "tipDocument", key: "tipDocument" },
  { title: "Grafa 1", dataIndex: "grafa", key: "grafa" },
  {
    title: "Action",
    dataIndex: "",
    fixed: "right",
    key: "x",
    width: "7%",
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
      title={HeaderDocument}
      width="100vh"
      size="small"
    />
  );
};
export default VseDoc;
