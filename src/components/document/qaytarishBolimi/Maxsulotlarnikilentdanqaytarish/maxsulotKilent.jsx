import { Table, Button, notification } from "antd";
import HeaderMaxsulotKilent from "./headerMaxsulotKilent";
import { useEffect, useState } from "react";
import {
  deleteGoodsToTheClient,
  getGoodsToTheClientPage,
} from "../../../../server/config/document/ReturnOfGoodsToTheClient";

const MaxsulotKilent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getList();
  }, []);
  const deleteById = (record) => {
    deleteGoodsToTheClient(record.id).then((value) => {
      if (value && value.data.success) {
        getList();
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
  let datas = {
    key: 1,
    date: "",
    code: "",
    warehouseId: "",
    warehouseName: "",
    branchId: "",
    branchName: "",
    responsibleId: "",
    responsibleName: "",
    priceTypeId: "",
    priceTypeName: "",
    currencyId: "",
    currencyName: "",
    account: "",
    counterpartyId: "",
    counterpartyName: "",
    sumDocument: "",
    balanceDebt: "",
    rate: "",
    salesBonusPercentage: "",
    repaymentDate: "",
    comment: "",
  };
  let datasList = [];
  const getList = () => {
    getGoodsToTheClientPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          datas.id = value.data.content[i].id;
          datas.code = value.data.content[i].code;
          datas.date = value.data.content[i].date;
          datas.responsibleId = value.data.content[i].responsibleId;
          datas.responsibleName = value.data.content[i].responsibleName;
          datas.repaymentDate = value.data.content[i].repaymentDate;
          datas.counterpartyName = value.data.content[i].counterpartyName;
          datas.priceTypeName = value.data.content[i].priceTypeName;
          datas.currencyId = value.data.content[i].currencyId;
          datas.currencyName = value.data.content[i].currencyName;
          datas.sumDocument = value.data.content[i].sumDocument;
          datas.totalDebt = value.data.content[i].totalDebt;
          datas.salesBonusPercentage =
            value.data.content[i].salesBonusPercentage;
          datas.repaymentDate = value.data.content[i].repaymentDate;
          datas.rate = value.data.content[i].rate;
          datas.account = value.data.content[i].account;
          datas.comment = value.data.content[i].comment;
          datas.warehouseId = value.data.content[i].warehouseId;
          datas.warehouseName = value.data.content[i].warehouseName;
          datas.sectionsName = value.data.content[i].sectionsName;
          datas.branchId = value.data.content[i].branchId;
          datas.branchName = value.data.content[i].branchName;
          datasList.push(datas);
          datas = {};
        }
        setData(datasList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getGoodsToTheClientPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        datasList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          datas.id = value.data.content[i].id;
          datas.code = value.data.content[i].code;
          datas.date = value.data.content[i].date;
          datas.responsibleId = value.data.content[i].responsibleId;
          datas.responsibleName = value.data.content[i].responsibleName;
          datas.repaymentDate = value.data.content[i].repaymentDate;
          datas.counterpartyName = value.data.content[i].counterpartyName;
          datas.priceTypeName = value.data.content[i].priceTypeName;
          datas.currencyId = value.data.content[i].currencyId;
          datas.currencyName = value.data.content[i].currencyName;
          datas.sumDocument = value.data.content[i].sumDocument;
          datas.totalDebt = value.data.content[i].totalDebt;
          datas.salesBonusPercentage =
            value.data.content[i].salesBonusPercentage;
          datas.repaymentDate = value.data.content[i].repaymentDate;
          datas.rate = value.data.content[i].rate;
          datas.account = value.data.content[i].account;
          datas.comment = value.data.content[i].comment;
          datas.warehouseId = value.data.content[i].warehouseId;
          datas.warehouseName = value.data.content[i].warehouseName;
          datas.sectionsName = value.data.content[i].sectionsName;
          datas.branchId = value.data.content[i].branchId;
          datas.branchName = value.data.content[i].branchName;
          datasList.push(datas);
          datas = {};
        }
        setData(datasList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Data", dataIndex: "date", key: "date", width: 120 },
    { title: "Nomer", dataIndex: "code", key: "code", width: 120 },
    {
      title: "Ombor",
      dataIndex: "warehouseName",
      key: "warehouseName",
      width: 120,
    },
    {
      title: "Organizatsiya",
      dataIndex: "branchName",
      key: "branchName",
      width: 150,
    },
    {
      title: "Otvetstvenniy",
      dataIndex: "responsibleName",
      key: "responsibleName",
      width: 150,
    },
    { title: "Uchyet", dataIndex: "account", key: "account", width: 120 },
    {
      title: "Kontragent",
      dataIndex: "priceTypeName",
      key: "priceTypeName",
      width: 180,
    },
    {
      title: "Kontragent",
      dataIndex: "counterpartyName",
      key: "counterpartyName",
      width: 150,
    },
    {
      title: "Tulov muddati",
      dataIndex: "repaymentDate",
      key: "repaymentDate",
      width: 180,
    },
    {
      title: "SummaDakument",
      dataIndex: "sumDocument",
      key: "sumDocument",
      width: 180,
    },
    {
      title: "ObshiyDolg",
      dataIndex: "balanceDebt",
      key: "balanceDebt",
      width: 150,
    },
    {
      title: "ProtsentBonusPoProdaji",
      dataIndex: "salesBonusPercentage",
      key: "salesBonusPercentage",
      width: 200,
    },
    {
      title: "Valyuta",
      dataIndex: "currencyName",
      key: "currencyName",
      width: 120,
    },
    { title: "Kurs", dataIndex: "rate", key: "rate", width: 120 },
    { title: "Izox", dataIndex: "comment", key: "comment", width: 120 },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,
      render: (record) => (
        <Button onClick={() => deleteById(record)} type="primary">
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => <HeaderMaxsulotKilent getList={getList} />;

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 300, y: 400 }}
      dataSource={data}
      title={TitleHeader}
    />
  );
};
export default MaxsulotKilent;
