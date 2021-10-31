import { Table, Button } from "antd";
import HeaderServis from "./headerServis";
import "./servis.css";
const columns = [
  { title: "N", dataIndex: "n", key: "n", width: "5%" },
  {
    title: "Nomenklavyatura",
    dataIndex: "nomenklavyatura",
    key: "nomenklavyatura",
    width: "10%",
  },
  { title: "EdnIzm", dataIndex: "ednizm", key: "ednizm" },
  { title: "Valyuta", dataIndex: "valyuta", key: "valyuta" },
  { title: "Ostatka", dataIndex: "ostatka", key: "ostatka" },
  {
    title: "SummaPosledniy",
    dataIndex: "summaposledniy",
    key: "summaposledniy",
  },
  { title: "SummaSredniy", dataIndex: "summasredniy", key: "summasredniy" },
  { title: "SummaMax", dataIndex: "summamax", key: "summamax" },
  { title: "SenaPosledniy", dataIndex: "senaposledniy", key: "senaposledniy" },
  { title: "Sena", dataIndex: "sena", key: "sena" },
  {
    title: "Action",
    dataIndex: "",
    fixed: "right",
    key: "x",
    width: "6%",
    render: () => <Button type="primary">Delete</Button>,
  },
];

const data = [
  {
    key: 1,
    n: "05.07.2021 10.22.23",
    nomenklavyatura: "00000001",
    ednizm: " Rustamjon ",
    valyuta: "... ",
    ostatka: "... ",
    summaposledniy: "... ",
    summasredniy: "... ",
    summamax: "... ",
    senaposledniy: "... ",
    sena: "... ",
  },
];

const Servis = () => {
  return (
    <Table
      className="Jadval"
      title={HeaderServis}
      columns={columns}
      scroll={{ x: 2000, y: 400 }}
      dataSource={data}
    />
  );
};
export default Servis;
