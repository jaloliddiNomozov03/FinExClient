import { Table } from "antd";
import HeaderFoydalanuvchi from "./headerFoydalanuvchi";
const columns = [
  { title: "Nomi", dataIndex: "desc", key: "desc", fixed: "left" },
  { title: "Code", dataIndex: "code", key: "code", width: 100 },
  {
    title: "Action",
    dataIndex: "",
    width: 90,
    fixed: "right",
    key: "x",
    render: () => <button>Delete</button>,
  },
];

const data = [
  {
    key: 1,
    desc: " Ombor",
    code: "4",
  },
  {
    key: 3,
    desc: "  ",
    code: "1",
  },
  {
    key: 4,
    desc: "  ",
    code: "1 ",
  },
];

const Foydalanuvchi = () => {
  return (
    <Table
      className="table"
      columns={columns}
      //   scroll={{ x: 1500, y: 400 }}
      dataSource={data}
      title={HeaderFoydalanuvchi}
    />
  );
};
export default Foydalanuvchi;
