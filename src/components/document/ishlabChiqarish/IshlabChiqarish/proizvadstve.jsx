import { Table, Button } from "antd";
import HeaderProiz from "./headerProiz";
import "./proizvadstve.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "15vh" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },
  { title: "Status", dataIndex: "status", key: "status" },
  { title: "Namenklatura", dataIndex: "namenklatura", key: "namenklatura" },
  { title: "Soni", dataIndex: "soni", key: "soni" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  {
    title: "СкладПолучател",
    dataIndex: "omborpoluchatel",
    key: "omborpoluchatel",
  },
  { title: " ПриходЦена ", dataIndex: "narxkirimi", key: "narxkirimi" },

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
    status: "",
    namenklatura: "UZS",
    soni: "summa",
    ombor: "summa",
    omborpoluchatel: "UZS",
    narxkirimi: "UZS",
  },
];

const Proiz = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1600, y: 400 }}
      dataSource={data}
      title={HeaderProiz}
    />
  );
};
export default Proiz;
