import { Table, Button } from "antd";
import HeaderSavdo from "./headerSavdo";
const columns = [
  { title: "Data", dataIndex: "data", key: "data" },
  { title: "Nomer", dataIndex: "nomer", key: "nomer" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  { title: "Kontragent", dataIndex: "kontragent", key: "kontragent" },
  { title: "Organizatsiya", dataIndex: "organizatsiya", key: "organizatsiya" },
  { title: "Otvetstvenniy", dataIndex: "otvet", key: "otvet" },
  { title: "Uchyet", dataIndex: "uchyet", key: "uchyet" },
  { title: "TolovTuri", dataIndex: "tulovturi", key: "tulovturi" },
  { title: "Kurs", dataIndex: "kurs", key: "kurs" },
  { title: "TipProdaji", dataIndex: "prodaji", key: "prodaji" },
  { title: "Valyuta", dataIndex: "valyuta", key: "valyuta" },
  { title: "Izox", dataIndex: "izox", key: "izox" },
  { title: "HarajatTuri", dataIndex: "harajatturi", key: "harajatturi" },
  {
    title: "Podrazdeleniye",
    dataIndex: "podrazdeleniye",
    key: "podrazdeleniye",
  },
  {
    title: "TipUchyetSpisaniyeTavar",
    dataIndex: "spisaniya",
    key: "spisaniya",
  },
  { title: "TulovMuddati", dataIndex: "tulovmuddati", key: "tulovmuddati" },
  { title: "KonstantaDP", dataIndex: "konstantadp", key: "konstantadp" },
  { title: "ProSenaBonusPoProdaji", dataIndex: "bonuspro", key: "bonuspro" },
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
    kontragent: "...",
    organizatsiya: "Filial Toshkent",
    otvet: " Rustamjon ",
    uchyet: "...",
    tolovturi: "..",
    kurs: "...",
    prodaji: "",
    valyuta: "...",
    izox: "... ",
    harajatturi: "",
    podrazdeleniye: "",
    spisaniya: "",
    tulovmuddati: "..",
    konstantadp: "...",
    bonuspro: "...",
  },
];

const DocumentSavdo = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 2500, y: 400 }}
      dataSource={data}
      title={HeaderSavdo}
    />
  );
};
export default DocumentSavdo;
