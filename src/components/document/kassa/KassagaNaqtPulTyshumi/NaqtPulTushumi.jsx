import { Table, Button } from "antd";
import HeaderTushum from "./headerNaqtPulTushum";
const columns = [
  {
    title: "Data",
    dataIndex: "data",
    key: "data",
    fixed: "left",
    width: "26%",
  },
  { title: "Nomer", dataIndex: "numer", key: "numer", width: "7%" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet" },
  { title: "Izox", dataIndex: "izox", key: "izox" },
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

const Tushum = () => {
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      title={HeaderTushum}
    />
  );
};
export default Tushum;
