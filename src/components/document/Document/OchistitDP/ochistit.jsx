import { Table, Button } from "antd";
import HeaderOchistit from "./headerOchistit";
import "./ochistit.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "20%" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },

  {
    title: "Action",
    dataIndex: "",
    fixed: "right",
    key: "x",
    width: "7%",
    render: () => <Button type="primary"> Delete </Button>,
  },
];

const data = [
  {
    key: 1,
    data: "N",
    numer: "",
  },
];

const Ochistit = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderOchistit}
      width="100vh"
    />
  );
};
export default Ochistit;
