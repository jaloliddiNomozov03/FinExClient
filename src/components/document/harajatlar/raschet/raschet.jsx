import { Table, Button } from "antd";
import HeaderRaschet from "./headerRaschet";
const columns = [
  { title: "N", dataIndex: "n", key: "n", width: "5%" },
  { title: "Nomer ", dataIndex: "numer", key: "numer" },
  { title: "Kassa", dataIndex: "kassa", key: "kassa" },
  { title: "Otvetstvenniy", dataIndex: "otvetstvenniy", key: "otvetstvenniy" },
  { title: "Organizatsiya", dataIndex: "organizatsiya", key: "organizatsiya" },
  {
    title: "Podrazdeleniya",
    dataIndex: "podrazdeleniya",
    key: "podrazdeleniya",
  },
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
    numer: "",
    kassa: "UZS",
    otvetstvenniy: "summa",
    organizatsiya: "summa",
    podrazdeleniya: "summa",
    izox: "...",
  },
];

const Raschet = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderRaschet}
    />
  );
};
export default Raschet;
