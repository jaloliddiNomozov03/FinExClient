import React, { useState, useEffect } from "react";
import { Table, Button, notification } from "antd";
import HeaderMaxsulot from "./headerMaxsulot";
import {
  deleteEnteringGoods,
  getEnteringGoodsPage,
} from "../../../../server/config/document/EnteringGoodsService";

const MaxsulotQoldiq = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getEnteringGoods();
  }, []);
  const deleteEnteringGoodsById = (record) => {
    deleteEnteringGoods(record.id).then((value) => {
      if (value && value.data.success) {
        getEnteringGoods();
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
  let enteringGoods = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    branchName: "",
    warehouseName: "",
    comment: "",
    isConstanta: null,
  };
  let enteringGoodsList = [];
  const getEnteringGoods = () => {
    getEnteringGoodsPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        console.log(value.data);
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          enteringGoods.id = value.data.content[i].id;
          enteringGoods.code = value.data.content[i].code;
          enteringGoods.date = value.data.content[i].date;
          enteringGoods.responsibleName = value.data.content[i].responsibleName;
          enteringGoods.comment = value.data.content[i].comment;
          enteringGoods.isConstanta = value.data.content[i].isConstanta;
          enteringGoods.branchName = value.data.content[i].branchName;
          enteringGoods.warehouseName = value.data.content[i].warehouseName;
          enteringGoodsList.push(enteringGoods);
          enteringGoods = {};
        }
        setData(enteringGoodsList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getEnteringGoodsPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        enteringGoodsList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          enteringGoods.id = value.data.content[i].id;
          enteringGoods.code = value.data.content[i].code;
          enteringGoods.date = value.data.content[i].date;
          enteringGoods.responsibleName = value.data.content[i].responsibleName;
          enteringGoods.isConstanta = value.data.content[i].isConstanta;
          enteringGoods.branchName = value.data.content[i].branchName;
          enteringGoods.warehouseName = value.data.content[i].warehouseName;
          enteringGoods.comment = value.data.content[i].comment;
          enteringGoodsList.push(enteringGoods);
          enteringGoods = {};
        }
        setData(enteringGoodsList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: 120 },
    { title: "Date", dataIndex: "date", key: "date", width: 120 },
    {
      title: "Warehouse",
      dataIndex: "warehouseName",
      key: "warehouseName",
      width: 150,
    },
    { title: "Branch", dataIndex: "branchName", key: "branchName", width: 120 },
    {
      title: "Otvetstvenniy",
      dataIndex: "responsibleName",
      key: "responsibleName",
      width: 150,
    },
    // { title: "SummaDapRas", dataIndex: "summadap", key: "summadap" },
    // { title: "Uchyet", dataIndex: "uchyet", key: "uchyet" },
    // {/
    //   title: "UstanavitSenaNom", dataIndex: "ustanavit", key: "ustanavit", width: "15%",
    // },
    // {
    //   title: "TipuchyetSpisan", dataIndex: "tipuch", key: "tipuch", width: "10%",
    // },
    { title: "Izox", dataIndex: "comment", key: "comment", width: 120 },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 120,
      render: (record) => (
        <Button onClick={() => deleteEnteringGoodsById(record)} type="primary">
          Delete
        </Button>
      ),
    },
  ];
  const TitleHeader = () => (
    <HeaderMaxsulot getEnteringGoods={getEnteringGoods} />
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
            getEnteringGoods();
          });
        },
      }}
    />
  );
};
export default MaxsulotQoldiq;
