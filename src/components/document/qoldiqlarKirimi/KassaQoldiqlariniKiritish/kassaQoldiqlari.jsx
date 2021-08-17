import { Table, Button } from "antd";
import HeaderKassa from "./headerKassaQoldiqlari";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "17%" },
  { title: "Nomer", dataIndex: "nomer", key: "nomer", width: "13%" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet", width: "15%" },
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
    otvet: " Rustamjon ",
    izox: "... ",
    const: "...",
  },
];

const KassaQoldiq = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={HeaderKassa}
    />
  );
};
export default KassaQoldiq;
