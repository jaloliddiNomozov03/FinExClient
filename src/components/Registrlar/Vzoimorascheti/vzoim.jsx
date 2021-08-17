import { Table, Button } from "antd";
import HeaderVzoim from "./headerVzoim";
import "./vzoim.css";
const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
  { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
  { title: "Контрагент", dataIndex: "kontragent", key: "kontragent" },
  { title: "ОснавиеВзоиморасчетов", dataIndex: "osnaviye", key: "osnaviye" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
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
    kontragent: "",
    valyuta: "",
    osnaviye: "",
    komment: "UZS",
    summa: "",
  },
];
const Vzoin = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={HeaderVzoim}
    />
  );
};
export default Vzoin;
