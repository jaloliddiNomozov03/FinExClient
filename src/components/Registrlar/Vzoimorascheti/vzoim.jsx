import React, {useState, useEffect} from 'react'
import { Table, Button } from "antd";
import HeaderVzoim from "./headerVzoim";
import "./vzoim.css";

import {getRegisterVzoimPage} from "../../../server/config/registerlar/vzoim";




const Vzoin = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterVzoim();
  },[])

  const getRegisterVzoim=()=>{
    getRegisterVzoimPage(currentPage, pageSize).then(value => {
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
    getRegisterVzoimPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }else {
        setData(null)
      }
    })
  };

  const columns = [
    { title: "Период", dataIndex: "createdAt", key: "createdAt", width: "15vh" },
    { title: "Регистратор ", dataIndex: "docType", key: "docType" },
    { title: "Номер строки", dataIndex: "code", key: "code" },
    { title: "Контрагент", dataIndex: "counterpartyName", key: "counterpartyName" },
    { title: "ОснавиеВзоиморасчетов", dataIndex: "osnaviye", key: "osnaviye" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: "Коммент", dataIndex: "comment", key: "comment" },
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

  const TitleHeaderVzoim = () => <HeaderVzoim/>
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleHeaderVzoim}

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
            getRegisterVzoimPage();
          });
        },
      }}

    />
  );
};
export default Vzoin;
