import { Table, Button } from "antd";
import HeaderQarizdorlik from "./headerQarizdorlik";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "17%" },
  { title: "Nomer", dataIndex: "nomer", key: "nomer", width: "10%" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet", width: "15%" },
  { title: "Izox", dataIndex: "izox", key: "izox" },
  { title: "KonstantaDP", dataIndex: "const", key: "const", width: "10%" },
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
    otvet: " Rustamjon ",
    izox: "... ",
    const: "...",
  },
];

const Qarizdorlik = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderQarizdorlik}
    />
  );
};
export default Qarizdorlik;
