import { Table, Button } from "antd";
import HeaderMaxsulot from "./headerMaxsulot";
const columns = [
  { title: "Data", dataIndex: "data", key: "data" },
  { title: "Nomer", dataIndex: "nomer", key: "nomer" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  { title: "Organizatsiya", dataIndex: "organizatsiya", key: "organizatsiya" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet" },
  { title: "SummaDapRas", dataIndex: "summadap", key: "summadap" },
  { title: "Uchyet", dataIndex: "uchyet", key: "uchyet" },
  {
    title: "UstanavitSenaNom",
    dataIndex: "ustanavit",
    key: "ustanavit",
    width: "15%",
  },
  {
    title: "TipuchyetSpisan",
    dataIndex: "tipuch",
    key: "tipuch",
    width: "10%",
  },
  { title: "Izox", dataIndex: "izox", key: "izox" },
  {
    title: "Action",
    dataIndex: "",
    fixed: "right",
    key: "x",
    width: "10%",
    render: () => <Button type="primary">Delete</Button>,
  },
];

const data = [
  {
    key: 1,
    data: "05.07.2021 10.22.23",
    nomer: "00000001",
    ombor: "Tosh viloyat",
    organizatsiya: "Filial Toshkent",
    otvet: " Rustamjon ",
    summadap: "..",
    uchyet: "..",
    ustanavit: "..",
    tipuch: "",
    izox: "... ",
    const: "...",
  },
];

const MaxsulotQoldiq = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 2300, y: 400 }}
      dataSource={data}
      title={HeaderMaxsulot}
    />
  );
};
export default MaxsulotQoldiq;
