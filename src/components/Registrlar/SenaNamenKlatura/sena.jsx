import { Table, Button } from "antd";
import HeaderSena from "./headerSena";
import "./sena.css";
const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Наменклатура ", dataIndex: "namenklatura", key: "namenklatura" },
  { title: "ЕднИзм", dataIndex: "endizm", key: "endizm" },
  { title: "ТипЦена", dataIndex: "tipsena", key: "tipsena" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
  { title: "Цена", dataIndex: "sena", key: "sena" },
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
    period: "N",
    namenklatura: "",
    endizm: "",
    tipsena: "",
    valyuta: "",
    sena: "",
  },
];

const Sena = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderSena}
    />
  );
};
export default Sena;
