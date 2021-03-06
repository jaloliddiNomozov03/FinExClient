import { Table, Button, notification } from "antd";
import HeaderPastypleniya from "./headerPastupleniya";
import "./pastupleniya.css";
import React, { useEffect, useState } from "react";
import {
  deleteReceiptOfGoods,
  getReceiptOfGoodsPage,
} from "../../../../server/config/document/ReceiptOfGoodsService";

const Pastupleniya = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getReceiptOfGoods();
  }, []);
  const deleteReceiptOfGoodsById = (record) => {
    deleteReceiptOfGoods(record.id).then((value) => {
      if (value && value.data.success) {
        getReceiptOfGoods();
        notification["success"]({
          message: "Data success deleted!",
          description: `${record.code} deleted!`,
        });
      } else if (record.id) {
        notification["error"]({
          message: "Data error!",
          description: `${record.code} not found!`,
        });
      } else {
        notification["error"]({
          message: "Data error!",
          description: `Don't delete!`,
        });
      }
    });
  };
  let receiptOfGoods = {
    id: "",
    code: 0,
    date: "",
    responsibleName: "",
    accounting: "",
    additionalExpenses: 0,
    allSum: 0,
    branchName: "",
    comment: "",
    counterPartyName: "",
    course: 0,
    currencyName: "",
    maturityDate: "",
    repayment: "",
    sumDocument: 0,
    totalDebt: 0,
    type: "",
    warehouseName: "",
  };
  let receiptOfGoodsList = [];
  const getReceiptOfGoods = () => {
    getReceiptOfGoodsPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          receiptOfGoods.id = value.data.content[i].id;
          receiptOfGoods.code = value.data.content[i].code;
          receiptOfGoods.date = value.data.content[i].date;
          receiptOfGoods.responsibleName =
            value.data.content[i].responsibleName;
          receiptOfGoods.accounting = value.data.content[i].accounting;
          receiptOfGoods.additionalExpenses =
            value.data.content[i].additionalExpenses;
          receiptOfGoods.allSum = value.data.content[i].allSum;
          receiptOfGoods.branchName = value.data.content[i].branchName;
          receiptOfGoods.currencyName = value.data.content[i].currencyName;
          receiptOfGoods.counterPartyName =
            value.data.content[i].counterPartyName;
          receiptOfGoods.warehouseName = value.data.content[i].warehouseName;
          receiptOfGoods.comment = value.data.content[i].comment;
          receiptOfGoods.course = value.data.content[i].course;
          receiptOfGoods.maturityDate = value.data.content[i].maturityDate;
          receiptOfGoods.repayment = value.data.content[i].repayment;
          receiptOfGoods.sumDocument = value.data.content[i].sumDocument;
          receiptOfGoods.totalDebt = value.data.content[i].totalDebt;
          receiptOfGoods.type = value.data.content[i].type;
          receiptOfGoodsList.push(receiptOfGoods);
          receiptOfGoods = {};
        }
        setData(receiptOfGoodsList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getReceiptOfGoodsPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        receiptOfGoodsList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          receiptOfGoods.id = value.data.content[i].id;
          receiptOfGoods.code = value.data.content[i].code;
          receiptOfGoods.date = value.data.content[i].date;
          receiptOfGoods.responsibleName =
            value.data.content[i].responsibleName;
          receiptOfGoods.accounting = value.data.content[i].accounting;
          receiptOfGoods.additionalExpenses =
            value.data.content[i].additionalExpenses;
          receiptOfGoods.allSum = value.data.content[i].allSum;
          receiptOfGoods.branchName = value.data.content[i].branchName;
          receiptOfGoods.currencyName = value.data.content[i].currencyName;
          receiptOfGoods.counterPartyName =
            value.data.content[i].counterPartyName;
          receiptOfGoods.warehouseName = value.data.content[i].warehouseName;
          receiptOfGoods.comment = value.data.content[i].comment;
          receiptOfGoods.course = value.data.content[i].course;
          receiptOfGoods.maturityDate = value.data.content[i].maturityDate;
          receiptOfGoods.repayment = value.data.content[i].repayment;
          receiptOfGoods.sumDocument = value.data.content[i].sumDocument;
          receiptOfGoods.totalDebt = value.data.content[i].totalDebt;
          receiptOfGoods.type = value.data.content[i].type;
          receiptOfGoodsList.push(receiptOfGoods);
          receiptOfGoods = {};
        }
        setData(receiptOfGoodsList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Data", dataIndex: "code", key: "code", width: 120 },
    { title: "date ", dataIndex: "date", key: "date", width: 120 },
    {
      title: "Ombor",
      dataIndex: "warehouseName",
      key: "warehouseName",
      width: 120,
    },
    {
      title: "??????????????????????",
      dataIndex: "branchName",
      key: "branchName",
      width: 150,
    },
    {
      title: "??????????????????????????",
      dataIndex: "responsibleName",
      key: "responsibleName",
      width: 150,
    },
    {
      title: "Kontragent",
      dataIndex: "counterPartyName",
      key: "counterPartyName",
      width: 120,
    },
    {
      title: " Summa Document ",
      dataIndex: "sumDocument",
      key: "sumDocument",
      width: 180,
    },
    {
      title: " SummaDopRos ",
      dataIndex: "summadopros",
      key: "summadopros",
      width: 150,
    },
    {
      title: "Valyuta",
      dataIndex: "currencyName",
      key: "currencyName",
      width: 120,
    },
    { title: " Kurs ", dataIndex: "course", key: "course", width: 120 },
    { title: "????????", dataIndex: "accounting", key: "accounting", width: 120 },
    {
      title: " Ustanavit Sena Namenklatura ",
      dataIndex: "Ustanavitnamenklatura",
      key: "Ustanavitnamenklatura",
      width: 250,
    },
    {
      title: " Tip Uchet Spisaniye Tavar ",
      dataIndex: "tiptavar",
      key: "tiptavar",
      width: 200,
    },
    {
      title: " Tulov muddati ",
      dataIndex: "maturityDate",
      key: "maturityDate",
      width: 180,
    },
    {
      title: " KonstantaDP ",
      dataIndex: "konstantaDP",
      key: "konstantaDP",
      width: 150,
    },
    { title: " Type ", dataIndex: "type", key: "type", width: 120 },
    {
      title: " Repayment ",
      dataIndex: "repayment",
      key: "repayment",
      width: 120,
    },
    {
      title: " Additional Expenses ",
      dataIndex: "additionalExpenses",
      key: "additionalExpenses",
      width: 180,
    },
    { title: " Izox ", dataIndex: "comment", key: "comment", width: 120 },
    { title: " ?????????????????? ", dataIndex: "allSum", key: "allSum", width: 150 },

    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,

      render: (record) => (
        <Button onClick={() => deleteReceiptOfGoodsById(record)} type="primary">
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => (
    <HeaderPastypleniya getReceiptOfGoods={getReceiptOfGoods} />
  );
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 300, y: 500 }}
      dataSource={data}
      title={TitleHeader}
      pagination={{
        total: total,

        pageSizeOptions: ["5", "10", "20", "50", "100"],

        showTotal: (total) => `Total ${total}`,

        showSizeChanger: true,

        onChange: (page, pageSize) => {
          onChangePage(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getReceiptOfGoods();
          });
        },
      }}
    />
  );
};
export default Pastupleniya;
