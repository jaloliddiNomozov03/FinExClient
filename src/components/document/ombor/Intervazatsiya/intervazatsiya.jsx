import React, { useState, useEffect } from "react";
import {Table, Button, notification} from "antd";
import HeaderInter from "./headerIntervazatsiya";
import "./intervazatsiya.css";
import {deleteInventory, getInventoryPage} from "../../../../server/config/document/InventoryService";

const Inter = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(()=>{
    getInventory();
  },[]);
  const deleteInventoryById=(record)=>{
    deleteInventory(record.id).then(value => {
      if (value && value.data.success){
        getInventory();
        notification['success']({
          message:'Data success deleted!',
          description: `${record.code} deleted!`
        });
      }else if (record.id){
        notification['error']({
          message:'Data error!',
          description: `${record.code} not found!`
        })
      }else {
        notification['error']({
          message:'Data error!',
          description: `Don't delete!`
        })
      }
    })
  };
  let inventory = {
    id: "",
    code: "",
    date: "",
    staffName: "",
    allSum: "",
    branchName: "",
    costs: "",
    currencyName: "",
    enteringSum: "",
    warehouseName: "",
    createAt: "",
  };
  let inventoryList = [];
  const getInventory=()=>{
    getInventoryPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          inventory.id = value.data.content[i].id;
          inventory.code = value.data.content[i].code;
          inventory.date = value.data.content[i].date;
          inventory.staffName = value.data.content[i].staffName;
          inventory.allSum = value.data.content[i].allSum;
          inventory.branchName = value.data.content[i].branchName;
          inventory.costs = value.data.content[i].costs;
          inventory.currencyName = value.data.content[i].currencyName;
          inventory.enteringSum = value.data.content[i].enteringSum;
          inventory.warehouseName = value.data.content[i].warehouseName;
          inventory.createAt = value.data.content[i].createAt;
          inventoryList.push(inventory);
          inventory = {};
        }
        setData(inventoryList);
      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getInventoryPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        inventoryList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          inventory.id = value.data.content[i].id;
          inventory.code = value.data.content[i].code;
          inventory.date = value.data.content[i].date;
          inventory.staffName = value.data.content[i].staffName;
          inventory.allSum = value.data.content[i].allSum;
          inventory.branchName = value.data.content[i].branchName;
          inventory.costs = value.data.content[i].costs;
          inventory.currencyName = value.data.content[i].currencyName;
          inventory.enteringSum = value.data.content[i].enteringSum;
          inventory.warehouseName = value.data.content[i].warehouseName;
          inventory.createAt = value.data.content[i].createAt;
          inventoryList.push(inventory);
          inventory = {};
        }
        setData(inventoryList);
      }else {
        setData(null)
      }
    })
  };
  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: "15vh" },
    { title: "Date ", dataIndex: "date", key: "date" },
    { title: "Ombor", dataIndex: "warehouseName", key: "warehouseName" },
    { title: "Организация", dataIndex: "branchName", key: "branchName" },
    { title: "Ответственный", dataIndex: "staffName", key: "staffName" },
    { title: "Учет", dataIndex: "allSum", key: "allSum" },
    { title: "Даромад суммаси", dataIndex: "enteringSum", key: "enteringSum" },
    { title: " Расход ", dataIndex: "costs", key: "costs" },
    { title: " Valyuta ", dataIndex: "currencyName", key: "currencyName" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "7%",

      render: (record) => <Button onClick={()=>deleteInventoryById(record)} type="primary">Delete</Button>,
    },
  ];
  const TitleHeader=()=><HeaderInter getInventory={getInventory}/>;
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1600, y: 400 }}
      dataSource={data}
      title={TitleHeader}
      pagination={{

        total: total,

        pageSizeOptions: ['5', '10', '20', '50', '100'],

        showTotal: total => `Total ${total}`,

        showSizeChanger: true,

        onChange: ((page, pageSize)=>{
          onChangePage(page, pageSize);
        }),
        onShowSizeChange: (pageSize)=>{
          setPageSize({pageSize},()=>{
            getInventory();
          });
        },
      }}
    />
  );
};
export default Inter;
