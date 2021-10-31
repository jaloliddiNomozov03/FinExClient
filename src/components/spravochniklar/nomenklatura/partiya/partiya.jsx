import { notification, Table } from "antd";
import HeaderPartiya from "./headerpartiya";
import { useState, useEffect } from "react";
import {
  deleteBatch,
  getBatchPage,
} from "../../../../server/config/objects/BatchService";

const Partiya = () => {
  const columns = [
    { title: "Description", dataIndex: "name", key: "name" }, //fixed: "left
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Owner", dataIndex: "responsible", key: "responsible" },
    { title: "PrixodData", dataIndex: "arrivalDate", key: "arrivalDate" },
    { title: "Document", dataIndex: "documentType", key: "documentType" },
    { title: "Kirim narxi", dataIndex: "price", key: "price" },
    { title: "Sotib olish narxi", dataIndex: "cost", key: "cost" },
    { title: "Valyuta", dataIndex: "currency", key: "currency" },
    { title: "Branch", dataIndex: "branch", key: "branch" },
    { title: "Organizatsiya", dataIndex: "serialNumber", key: "serialNumber" },
    {
      title: "Srokgodnosti",
      dataIndex: "expirationDate",
      key: "expirationDate",
    },
    { title: "O'lchov birligi", dataIndex: "unit", key: "unit" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "5%",
      render: (record) => (
        <button onClick={() => deleteBatchById(record)}>Delete</button>
      ),
    },
  ];
  const deleteBatchById = (record) => {
    deleteBatch(record.id).then((value) => {
      if (value && value.data.success) {
        getParties();
        notification["success"]({
          message: "Data success deleted!",
          description: `${record.name} deleted!`,
        });
      } else if (record.id) {
        notification["error"]({
          message: "Data error!",
          description: `${record.key} not found!`,
        });
      } else {
        notification["error"]({
          message: "Data error!",
          description: `Don't delete!`,
        });
      }
    });
  };
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => <HeaderPartiya getParties={getParties} />;

  useEffect(() => {
    getParties();
  }, []);
  let party = {
    name: "",
    code: null,
    nomenclatureName: "",
    arrivalDate: 0,
    documentType: "",
    documentUuid: null,
    cost: 0,
    price: 0,
    currency: "",
    serialNumber: "",
    branch: "",
    expirationDate: 0,
    unit: "",
    responsible: "",
  };
  let partyList = [];
  const getParties = () => {
    getBatchPage(currentPage, pageSize).then((value) => {
      if (value && value.data) {
        console.log(value);
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          party.name = value.data.content[i].name;
          party.code = value.data.content[i].code;
          party.nomenclatureName = value.data.content[i].nomenclature.name;
          party.arrivalDate = new Date(
            value.data.content[i].arrivalDate
          ).toUTCString();
          party.documentType = value.data.content[i].documentType.docType;
          party.documentUuid = value.data.content[i].documentType.documentUuid;
          party.cost = value.data.content[i].cost;
          party.price = value.data.content[i].price;
          party.currency = value.data.content[i].currency.name;
          party.serialNumber = value.data.content[i].serialNumber;
          party.branch = value.data.content[i].branch.name;
          party.expirationDate = new Date(
            value.data.content[i].expirationDate
          ).toUTCString();
          party.unit = value.data.content[i].unit.name;
          party.responsible = value.data.content[i].responsible.name;
          partyList.push(party);
          party = {};
        }
        setData(partyList);
      } else {
        setData(null);
      }
    });
  };
  const onChangeParty = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getBatchPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          party.name = value.data.content[i].name;
          party.code = value.data.content[i].code;
          party.nomenclatureName = value.data.content[i].nomenclature.name;
          party.arrivalDate = new Date(
            value.data.content[i].arrivalDate
          ).toUTCString();
          party.documentType = value.data.content[i].documentType.docType;
          party.documentUuid = value.data.content[i].documentType.documentUuid;
          party.cost = value.data.content[i].cost;
          party.price = value.data.content[i].price;
          party.currency = value.data.content[i].currency.name;
          party.serialNumber = value.data.content[i].serialNumber;
          party.branch = value.data.content[i].branch.name;
          party.expirationDate = new Date(
            value.data.content[i].expirationDate
          ).toUTCString();
          party.unit = value.data.content[i].unit.name;
          party.responsible = value.data.content[i].responsible.name;
          partyList.push(party);
          party = {};
        }
        setData(partyList);
      } else {
        setData(null);
      }
    });
  };
  return (
    <Table
      title={TitleHeader}
      columns={columns}
      dataSource={data}
      scroll={{ y: 310, x: 1500 }}
      pagination={{
        total: total,

        pageSizeOptions: ["5", "10", "20", "50", "100"],

        showTotal: (total) => `Total ${total}`,

        showSizeChanger: true,

        onChange: (page, pageSize) => {
          // console.log(page+" "+pageSize);
          onChangeParty(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getParties();
          });
        },
      }}
    />
  );
};
export default Partiya;
