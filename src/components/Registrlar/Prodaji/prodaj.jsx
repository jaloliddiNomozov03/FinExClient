import { Table, Button } from "antd";
import React, {useState, useEffect} from 'react'
import HeaderProdaj from "./headeProdaj";
import "./prodaj.css";
import {getRegisterBanKPage} from "../../../server/config/registerlar/bankService";
import {getRegisterSalesPage} from "../../../server/config/registerlar/prodaj";



const Prodaj = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterSales();
  },[])

  const getRegisterSales=()=>{
    getRegisterSalesPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }
    })
  }

  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getRegisterSalesPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }else {
        setData(null)
      }
    })
  };

  const columns = [
    { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
    { title: "Регистратор ", dataIndex: "docType", key: "docType" },
    { title: "Номер строки", dataIndex: "code", key: "code  " },
    { title: "Номенклатура", dataIndex: "nomenclatureName", key: "nomenclatureName" },
    { title: "Партия", dataIndex: "batchName", key: "batchName" },
    { title: "Склад", dataIndex: "warehouseName", key: "warehouseName" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: "Коммент", dataIndex: "comment", key: "comment" },
    { title: "Количество", dataIndex: "count", key: "count" },
    { title: " Сумма ", dataIndex: "sum", key: "sum" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "5%",
      render: () => <Button type="primary">Delete</Button>,
    },
  ];

  const TitleHeaderProdaj=()=><HeaderProdaj/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleHeaderProdaj}

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
            getRegisterSales();
          });
        },
      }}
    />
  );
};
export default Prodaj;
