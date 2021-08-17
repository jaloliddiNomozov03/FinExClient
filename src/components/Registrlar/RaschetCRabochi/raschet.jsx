import { Table, Button } from "antd";
import HeaderRaschet from "./headerRaschet";
import "./raschet.css";

const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
  { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
  { title: "Сотрудник", dataIndex: "sotrudnik", key: "sotrudnik" },
  { title: "Документ", dataIndex: "doc", key: "doc" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
  { title: "Подразделения", dataIndex: "podrazdel", key: "podrazdel" },
  { title: "Коммент", dataIndex: "komment", key: "komment" },
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
    podrazdel: "",
    sotrudnik: "",
    valyuta: "",
    doc: "",
    komment: "UZS",
    summa: "",
  },
];

const Raschet = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={HeaderRaschet}
    />
  );
};
export default Raschet;
