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
    { title: "Code", dataIndex: "code", key: "code", width: 120 },
    { title: "Date ", dataIndex: "date", key: "date", width: 120, },
    { title: "Ombor", dataIndex: "warehouseName", key: "warehouseName", width: 120, },
    { title: "Организация", dataIndex: "branchName", key: "branchName", width: 150, },
    { title: "Ответственный", dataIndex: "staffName", key: "staffName", width: 150, },
    { title: "Учет", dataIndex: "allSum", key: "allSum", width: 120, },
    { title: "Даромад суммаси", dataIndex: "enteringSum", key: "enteringSum", width: 180, },
    { title: " Расход ", dataIndex: "costs", key: "costs", width: 120, },
    { title: " Valyuta ", dataIndex: "currencyName", key: "currencyName", width: 120, },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,

      render: (record) => <Button onClick={()=>deleteInventoryById(record)} type="primary">Delete</Button>,
    },
  ];
  const TitleHeader=()=><HeaderInter getInventory={getInventory}/>;
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 300, y: 500 }}
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
