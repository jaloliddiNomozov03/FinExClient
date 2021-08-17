import { Table, Button } from "antd";
import HeaderRasxod from "./headerrasxod";
const columns = [
  { title: "N", dataIndex: "n", key: "n", width: "5%" },
  { title: "Sotrudnik ", dataIndex: "sotrudnik", key: "sotrudnik" },
  { title: "Valyuta", dataIndex: "valyuta", key: "valyuta" },
  { title: "Summa", dataIndex: "summa", key: "summa", width: "10%" },
  { title: "Izox", dataIndex: "izox", key: "izox" },
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
    n: "N",
    sotrudnik: "",
    valyuta: "UZS",
    summa: "summa",
    izox: "...",
  },
];

const Rasxod = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderRasxod}
    />
  );
};
export default Rasxod;
