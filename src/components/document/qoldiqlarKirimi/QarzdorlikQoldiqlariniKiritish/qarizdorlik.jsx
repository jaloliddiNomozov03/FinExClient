import React, { useState, useEffect } from "react";
import { Table, Button, notification, Checkbox } from "antd";
import HeaderQarizdorlik from "./headerQarizdorlik";
import {
  deleteEnteringDebtors,
  getEnteringDebtorsPage,
} from "../../../../server/config/document/EnteringDebtorsService";

const Qarizdorlik = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getEnteringDebtors();
  }, []);
  const deleteEnteringDebtorsById = (record) => {
    deleteEnteringDebtors(record.id).then((value) => {
      if (value && value.data.success) {
        getEnteringDebtors();
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
  let enteringDebtors = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    comment: "",
    isConstanta: null,
  };
  let enteringDebtorsList = [];
  const getEnteringDebtors = () => {
    getEnteringDebtorsPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        console.log(value.data);
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          enteringDebtors.id = value.data.content[i].id;
          enteringDebtors.code = value.data.content[i].code;
          enteringDebtors.date = value.data.content[i].date;
          enteringDebtors.responsibleName =
            value.data.content[i].responsibleName;
          enteringDebtors.comment = value.data.content[i].comment;
          enteringDebtors.isConstanta = value.data.content[i].isConstanta;
          enteringDebtorsList.push(enteringDebtors);
          enteringDebtors = {};
        }
        setData(enteringDebtorsList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getEnteringDebtorsPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        enteringDebtorsList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          enteringDebtors.id = value.data.content[i].id;
          enteringDebtors.code = value.data.content[i].code;
          enteringDebtors.date = value.data.content[i].date;
          enteringDebtors.responsibleName =
            value.data.content[i].responsibleName;
          enteringDebtors.isConstanta = value.data.content[i].isConstanta;
          enteringDebtors.comment = value.data.content[i].comment;
          enteringDebtorsList.push(enteringDebtors);
          enteringDebtors = {};
        }
        setData(enteringDebtorsList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: 120 },
    { title: "Date", dataIndex: "date", key: "date", width: 120 },
    {
      title: "ResponsibleName",
      dataIndex: "responsibleName",
      key: "responsibleName",
      width: 180,
    },
    {
      title: "KonstantaDP",
      dataIndex: "isConstanta",
      key: "isConstanta",
      width: 150,
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    { title: "Comment", dataIndex: "comment", key: "comment", width: 120 },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,
      render: (record) => (
        <Button
          type="primary"
          onClick={() => deleteEnteringDebtorsById(record)}
        >
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => (
    <HeaderQarizdorlik getEnteringDebtors={getEnteringDebtors} />
  );
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      scroll={{ x: 300, y: 500 }}
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
            getEnteringDebtors();
          });
        },
      }}
    />
  );
};
export default Qarizdorlik;
