import { Table, Button } from "antd";
import HeaderKassa from "./headeKassa";
import "./kassa.css";
const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
  { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
  { title: "Касса", dataIndex: "kassa", key: "kassa" },
  { title: "Контрагент", dataIndex: "kontragent", key: "kontragent" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
  { title: "Документ", dataIndex: "doc", key: "doc" },
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
    kassa: "",
    kontragent: "",
    valyuta: "",
    doc: "",
    komment: "UZS",
    summa: "",
  },
];
const Kassa = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={HeaderKassa}
    />
  );
};
export default Kassa;
