import { Table, Button } from "antd";
import HeaderChiqim from "./headerNaxtChiqim";
const columns = [
  {
    title: "Data",
    dataIndex: "data",
    key: "data",
    fixed: "left",
    width: "10%",
  },
  { title: "Nomer", dataIndex: "numer", key: "numer", width: "7%" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet", width: "10%" },
  { title: "Izox", dataIndex: "izox", key: "izox", width: "25%" },
  {
    title: " DPsprisaniyaPoPartiya",
    dataIndex: "popartiya",
    key: "popartiya",
    width: "15%",
  },
  { title: "KostantaDP", dataIndex: "konstantadp", key: "konstantadp" },
  {
    title: "Action",
    dataIndex: "",
    width: 90,
    fixed: "right",
    key: "x",
    render: () => <Button type="primary"> Delete </Button>,
  },
];

const data = [
  {
    key: 1,
    data: " Ombor",
    numer: "4",
    otvet: "ishchi",
    izox: "..",
    popartiya: "..",
    konstantadp: "...",
  },
];

const Chiqim = () => {
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      title={HeaderChiqim}
    />
  );
};
export default Chiqim;
