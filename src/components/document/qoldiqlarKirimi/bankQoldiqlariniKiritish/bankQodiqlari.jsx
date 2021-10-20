import React, { useState, useEffect } from "react";
import { Table, Button, notification } from "antd";
import HeaderBankQoldiqlari from "./headerBankQoldiqlari";
import "./bankQoldiqlari.css";
import {
  deleteEnteringBank,
  getEnteringBankPage,
} from "../../../../server/config/document/EnteringBankService";

const BankQoldiqlari = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getEnteringBanks();
  }, []);
  const deleteEnteringBankById = (record) => {
    deleteEnteringBank(record.id).then((value) => {
      if (value && value.data.success) {
        getEnteringBanks();
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
  let enteringBank = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    comment: "",
  };
  let enteringBankList = [];
  const getEnteringBanks = () => {
    getEnteringBankPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          enteringBank.id = value.data.content[i].id;
          enteringBank.code = value.data.content[i].code;
          enteringBank.date = value.data.content[i].date;
          enteringBank.responsibleName = value.data.content[i].responsibleName;
          enteringBank.comment = value.data.content[i].comment;
          enteringBankList.push(enteringBank);
          enteringBank = {};
        }
        setData(enteringBankList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getEnteringBankPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        enteringBankList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          enteringBank.id = value.data.content[i].id;
          enteringBank.code = value.data.content[i].code;
          enteringBank.date = value.data.content[i].date;
          enteringBank.responsibleName = value.data.content[i].responsibleName;
          enteringBank.comment = value.data.content[i].comment;
          enteringBankList.push(enteringBank);
          enteringBank = {};
        }
        setData(enteringBankList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: 120 },
    { title: "Date", dataIndex: "date", key: "date", width: 120 },
    {
      title: "Responsible",
      dataIndex: "responsibleName",
      key: "responsibleName",
      width: 150,
    },
    { title: "Comment", dataIndex: "comment", key: "comment", width: 120 },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,
      render: (record) => (
        <Button onClick={() => deleteEnteringBankById(record)} type="primary">
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => (
    <HeaderBankQoldiqlari getEnteringBanks={getEnteringBanks} />
  );
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      scroll={{ x: 300, y: 400 }}
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
            getEnteringBanks();
          });
        },
      }}
    />
  );
};
export default BankQoldiqlari;
