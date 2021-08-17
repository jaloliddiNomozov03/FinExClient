import { Table, Button } from "antd";
import HeaderRasxod from "./headerRasxod";
import "./rasxod.css";

const columns = [
  { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
  { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
  { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
  { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
  { title: "Документ", dataIndex: "doc", key: "doc" },
  { title: "Подразделения", dataIndex: "podrazdel", key: "podrazdel" },
  { title: "ТипРасходы", dataIndex: "tipRasxodi", key: "tipRasxodi" },
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
    tipRasxodi: "",
    valyuta: "",
    doc: "",
    komment: "UZS",
    summa: "",
  },
];

const Rasxod = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={HeaderRasxod}
    />
  );
};
export default Rasxod;
