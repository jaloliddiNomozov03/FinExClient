import { Table, Button } from "antd";
import HeaderValyuta from "./headerKurs";
import "./kursValyuta.css";
const columns = [
  { title: "Период", dataIndex: "period", key: "period" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
  { title: " Курс ", dataIndex: "kurs", key: "kurs" },
  {
    title: "Action",
    dataIndex: "",
    fixed: "right",
    key: "x",
    width: "5%",
    render: () => <Button type="primary">Delete</Button>,
  },
];

const data = [
  {
    key: 1,
    period: "Proid",
    valyuta: "",
    kurs: "",
  },
];

const Kurs = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderValyuta}
    />
  );
};
export default Kurs;
