import { Table, Button } from "antd";
import HeaderSpisaniya from "./headerSpisaniya";
import "./spisaniya.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "15vh" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  { title: "Организация", dataIndex: "organizatsiya", key: "organizatsiya" },
  { title: "Ответственный", dataIndex: "otvetstvenniy", key: "otvetstvenniy" },
  { title: "Учет", dataIndex: "uchet", key: "uchet" },
  {
    title: "TipUchetSpisaniyaTavar",
    dataIndex: "tipuchetspisaniya",
    key: "tipuchetspisaniya",
  },
  { title: " Izox ", dataIndex: "izox", key: "izox" },

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
    ombor: "summa",
    organizatsiya: "",
    otvetstvenniy: "UZS",
    uchet: "summa",
    tipuchetspisaniya: "UZS",
    izox: "summa",
  },
];

const Spisaniya = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1600, y: 400 }}
      dataSource={data}
      title={HeaderSpisaniya}
    />
  );
};
export default Spisaniya;
