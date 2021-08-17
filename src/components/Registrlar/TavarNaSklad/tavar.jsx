import { Table, Button } from "antd";
import HeaderTavar from "./headerTavar";
import "./tavar.css";

const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
  { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
  { title: "Номенклатура", dataIndex: "namenklatura", key: "namenklatura" },
  { title: "Партия", dataIndex: "partiya", key: "partiya" },
  { title: "Склад", dataIndex: "sklad", key: "sklad" },
  { title: "Активация", dataIndex: "aktivatsiya", key: "aktivatsiya" },
  { title: "Документ", dataIndex: "doc", key: "doc" },
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
    aktivatsiya: "",
    doc: "",
    komment: "UZS",
    kolichestvo: "UZS",
    summa: "",
  },
];

const Tavar = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1900, y: 400 }}
      dataSource={data}
      title={HeaderTavar}
    />
  );
};
export default Tavar;
