import { Table, Button } from "antd";
import HeaderPastypleniya from "./headerPastupleniya";
import "./pastupleniya.css";
const columns = [
  { title: "Data", dataIndex: "data", key: "data", width: "15vh" },
  { title: "Numer ", dataIndex: "numer", key: "numer" },
  { title: "Ombor", dataIndex: "ombor", key: "ombor" },
  { title: "Организация", dataIndex: "organizatsiya", key: "organizatsiya" },
  { title: "Ответственный", dataIndex: "otvetstvenniy", key: "otvetstvenniy" },
  { title: "Kontragent", dataIndex: "kontragent", key: "kontragent" },
  {
    title: " Summa Document ",
    dataIndex: "summadocument",
    key: "summadocument",
  },
  { title: " SummaDopRos ", dataIndex: "summadopros", key: "summadopros" },
  { title: " Kurs ", dataIndex: "kurs", key: "kurs" },
  { title: "Учет", dataIndex: "uchet", key: "uchet" },
  {
    title: " UstanavitSenaNamenklatura ",
    dataIndex: "Ustanavitnamenklatura",
    key: "Ustanavitnamenklatura",
  },
  { title: " TipUchetSpisaniyeTavar ", dataIndex: "tiptavar", key: "tiptavar" },
  { title: " Tulov muddati ", dataIndex: "tulovmuddati", key: "tulovmuddati" },
  { title: " KonstantaDP ", dataIndex: "konstantaDP", key: "konstantaDP" },
  { title: " Izox ", dataIndex: "izox", key: "izox" },
  { title: " ОбщийДолг ", dataIndex: "obshiydolg", key: "obshiydolg" },

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
    data: "N",
    numer: "",
    ombor: "summa",
    organizatsiya: "",
    otvetstvenniy: "UZS",
    kontragent: "UZS",
    summadocument: "UZS",
    summadopros: "summa",
    uchet: "summa",
    Ustanavitnamenklatura: "summa",
    tiptavar: "summa",
    tulovmuddati: "summa",
    konstantaDP: "summa",
    izox: "summa",
    obshiydolg: "summa",
  },
];

const Pastupleniya = () => {
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 2500, y: 400 }}
      dataSource={data}
      title={HeaderPastypleniya}
    />
  );
};
export default Pastupleniya;
