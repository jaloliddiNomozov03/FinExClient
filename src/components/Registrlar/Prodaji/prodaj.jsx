import { Table, Button } from "antd";
import HeaderProdaj from "./headeProdaj";
import "./prodaj.css";
const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
  { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
  { title: "Номенклатура", dataIndex: "namenklatura", key: "namenklatura" },
  { title: "Партия", dataIndex: "partiya", key: "partiya" },
  { title: "Склад", dataIndex: "sklad", key: "sklad" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
  { title: "Коммент", dataIndex: "komment", key: "komment" },
  { title: "Количество", dataIndex: "kolichestvo", key: "kolichestvo" },
  { title: " Сумма ", dataIndex: "summa", key: "summa" },
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
    registrator: "",
    numerStroki: "",
    namenklatura: "",
    partiya: "",
    sklad: "",
    valyuta: "",
    komment: "UZS",
    kolichestvo: "",
    summa: "",
  },
];
const Prodaj = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={HeaderProdaj}
    />
  );
};
export default Prodaj;
