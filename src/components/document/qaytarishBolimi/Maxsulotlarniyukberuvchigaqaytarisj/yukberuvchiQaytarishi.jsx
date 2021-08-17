import { Table, Button } from "antd";
import HeaderYukberuvchi from "./headerYukberuvchiQaytarish";
const columns = [
  { title: "Data", dataIndex: "data", key: "data" }, 
  { title: "Nomer", dataIndex: "nomer", key: "nomer" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  { title: "Organizatsiya", dataIndex: "organizatsiya", key: "organizatsiya" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet" },
  { title: "Uchyet", dataIndex: "uchyet", key: "uchyet" },
  { title: "Kontragent", dataIndex: "kontragent", key: "kontragent" },
  { title: "KonstantaDP", dataIndex: "konstanta", key: "konstanta" },
  { title: "Tulov muddati", dataIndex: "tulov", key: "tulov" },
  { title: "SummaDakument", dataIndex: "summadac", key: "summadac" },
  { title: "ObshiyDolg", dataIndex: "obshiy", key: "obshiy" },
  { title: "ProtsentBonusPoProdaji", dataIndex: "bonus", key: "bonus" },
  { title: "Valyuta", dataIndex: "valyuta", key: "valyuta" },
  { title: "Kurs", dataIndex: "kurs", key: "kurs" },
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
    data: "05.07.2021 10.22.23",
    nomer: "00000001",
    ombor: "Tosh viloyat",
    organizatsiya: "Filial Toshkent",
    otvet: " Rustamjon ",
    uchyet: "...",
    kontragent: "...",
    konstanta: "...",
    tulov: "..",
    summadac: "..",
    obshiy: "",
    bonus: "...",
    valyuta: "...",
    kurs: "...",
    izox: "... ",
  },
];

const YukberuvchiQaytarish = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 2300, y: 400 }}
      dataSource={data}
      title={HeaderYukberuvchi}
    />
  );
};
export default YukberuvchiQaytarish;
