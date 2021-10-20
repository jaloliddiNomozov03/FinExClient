import { Table, Button, notification } from "antd";
import HeaderPeremisheniya from "./headerPeremisheniya";
import "./peremisheniya.css";
import React, { useEffect, useState } from "react";
import {
  deleteMovingGoods,
  getMovingGoodsPage,
} from "../../../../server/config/document/MovingGoodsService";

const Peremisheniya = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getMovingGoods();
  }, []);
  const deleteMovingGoodsById = (record) => {
    deleteMovingGoods(record.id).then((value) => {
      if (value && value.data.success) {
        getMovingGoods();
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
  let movingGoods = {
    id: "",
    code: "",
    date: "",
    accounting: "",
    type: "",
    senderWarehouseName: "",
    recipientWarehouseName: "",
    branchName: "",
    staffName: "",
    comment: "",
    createAt: "",
  };
  let movingGoodsList = [];
  const getMovingGoods = () => {
    getMovingGoodsPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          movingGoods.id = value.data.content[i].id;
          movingGoods.code = value.data.content[i].code;
          movingGoods.date = value.data.content[i].date;
          movingGoods.accounting = value.data.content[i].accounting;
          movingGoods.type = value.data.content[i].type;
          movingGoods.senderWarehouseName =
            value.data.content[i].senderWarehouseName;
          movingGoods.recipientWarehouseName =
            value.data.content[i].recipientWarehouseName;
          movingGoods.branchName = value.data.content[i].branchName;
          movingGoods.staffName = value.data.content[i].staffName;
          movingGoods.comment = value.data.content[i].comment;
          movingGoods.createAt = value.data.content[i].createAt;
          movingGoodsList.push(movingGoods);
          movingGoods = {};
        }
        setData(movingGoodsList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getMovingGoodsPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        movingGoodsList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          movingGoods.id = value.data.content[i].id;
          movingGoods.code = value.data.content[i].code;
          movingGoods.date = value.data.content[i].date;
          movingGoods.accounting = value.data.content[i].accounting;
          movingGoods.type = value.data.content[i].type;
          movingGoods.senderWarehouseName =
            value.data.content[i].senderWarehouseName;
          movingGoods.recipientWarehouseName =
            value.data.content[i].recipientWarehouseName;
          movingGoods.branchName = value.data.content[i].branchName;
          movingGoods.staffName = value.data.content[i].staffName;
          movingGoods.comment = value.data.content[i].comment;
          movingGoods.createAt = value.data.content[i].createAt;
          movingGoodsList.push(movingGoods);
          movingGoods = {};
        }
        setData(movingGoodsList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: 120 },
    { title: "Date ", dataIndex: "date", key: "date", width: 120 },
    {
      title: "Склад Отправителя",
      dataIndex: "senderWarehouseName",
      key: "senderWarehouseName",
      width: 200,
    },
    {
      title: "Склад Получатель ",
      dataIndex: "recipientWarehouseName",
      key: "recipientWarehouseName",
      width: 200,
    },
    {
      title: "Организация",
      dataIndex: "branchName",
      key: "branchName",
      width: 150,
    },
    {
      title: "Ответственный",
      dataIndex: "staffName",
      key: "staffName",
      width: 180,
    },
    { title: "Учет", dataIndex: "accounting", key: "accounting" },
    {
      title: "Tip Uchet Spisaniya Tavar",
      dataIndex: "type",
      key: "type",
      width: 200,
    },
    { title: " Izox ", dataIndex: "comment", key: "comment", width: 120 },

    {
      title: "Action",
      dataIndex: "",
      key: "x",
      width: 100,

      render: (record) => (
        <Button onClick={() => deleteMovingGoodsById(record)} type="primary">
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => (
    <HeaderPeremisheniya getMovingGoods={getMovingGoods} />
  );
  return (
    <Table
      className="Jadval"
      size="small"
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
            getMovingGoods();
          });
        },
      }}
    />
  );
};
export default Peremisheniya;
