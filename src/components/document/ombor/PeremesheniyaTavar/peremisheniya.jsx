import { Table, Button } from "antd";
import HeaderPeremisheniya from "./headerPeremisheniya";
import "./peremisheniya.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "15vh" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },
  { title: "СкладОтправителя", dataIndex: "otpravleniya", key: "otpravleniya" },
  {
    title: "СкладПолучатель ",
    dataIndex: "skladpoluchatel",
    key: "skladpoluchatel",
  },
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
    otpravleniya: "summa",
    skladpoluchatel: "",
    organizatsiya: "",
    otvetstvenniy: "UZS",
    uchet: "summa",
    tipuchetspisaniya: "UZS",
    izox: "summa",
  },
];

const Peremisheniya = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={HeaderPeremisheniya}
    />
  );
};
export default Peremisheniya;
