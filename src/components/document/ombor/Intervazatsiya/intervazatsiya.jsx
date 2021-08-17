import { Table, Button } from "antd";
import HeaderInter from "./headerIntervazatsiya";
import "./intervazatsiya.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "15vh" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  { title: "Организация", dataIndex: "organizatsiya", key: "organizatsiya" },
  { title: "Ответственный", dataIndex: "otvetstvenniy", key: "otvetstvenniy" },
  { title: "Учет", dataIndex: "uchet", key: "uchet" },
  { title: "Даромад суммаси", dataIndex: "daromadsumma", key: "daromadsumma" },
  { title: " Расход ", dataIndex: "rasxod", key: "rasxod" },
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
    daromadsumma: "UZS",
    rasxod: "UZS",
  },
];

const Inter = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1600, y: 400 }}
      dataSource={data}
      title={HeaderInter}
    />
  );
};
export default Inter;
