import { Table, Button, Checkbox, notification } from "antd";
import HeaderXodimlar from "./headerXodimlarQoldiqlari";
import {
  deleteEnteringCreditors,
  getEnteringCreditorsPage,
} from "../../../../server/config/document/EnteringCreditorsService";
import React, { useState, useEffect } from "react";

const XodimlarQoldiqi = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getEnteringCreditors();
  }, []);
  const deleteEnteringCreditorsById = (record) => {
    deleteEnteringCreditors(record.id).then((value) => {
      if (value && value.data.success) {
        getEnteringCreditors();
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
  let enteringCreditors = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    comment: "",
    isConstanta: null,
  };
  let enteringCreditorsList = [];
  const getEnteringCreditors = () => {
    getEnteringCreditorsPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        console.log(value.data);
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          enteringCreditors.id = value.data.content[i].id;
          enteringCreditors.code = value.data.content[i].code;
          enteringCreditors.date = value.data.content[i].date;
          enteringCreditors.responsibleName =
            value.data.content[i].responsibleName;
          enteringCreditors.comment = value.data.content[i].comment;
          enteringCreditors.isConstanta = value.data.content[i].isConstanta;
          enteringCreditorsList.push(enteringCreditors);
          enteringCreditors = {};
        }
        setData(enteringCreditorsList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getEnteringCreditorsPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        enteringCreditorsList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          enteringCreditors.id = value.data.content[i].id;
          enteringCreditors.code = value.data.content[i].code;
          enteringCreditors.date = value.data.content[i].date;
          enteringCreditors.responsibleName =
            value.data.content[i].responsibleName;
          enteringCreditors.isConstanta = value.data.content[i].isConstanta;
          enteringCreditors.comment = value.data.content[i].comment;
          enteringCreditorsList.push(enteringCreditors);
          enteringCreditors = {};
        }
        setData(enteringCreditorsList);
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
      width: 200,
    },
    {
      title: "KonstantaDP",
      dataIndex: "isConstanta",
      key: "isConstanta",
      width: 180,
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
          onClick={() => deleteEnteringCreditorsById(record)}
        >
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => (
    <HeaderXodimlar getEnteringCreditors={getEnteringCreditors} />
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
            getEnteringCreditors();
          });
        },
      }}
    />
  );
};
export default XodimlarQoldiqi;
