import React, {useState, useEffect} from 'react'
import { Table, Button } from "antd";
import HeaderKassa from "./headeKassa";
import "./kassa.css";
import {getRegisterCashBoxPage} from "../../../server/config/registerlar/cashBoxService";



const Kassa = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterCashBox()
  }, [])

  const getRegisterCashBox=()=>{
    getRegisterCashBoxPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content)
      }
    })
  }

  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getRegisterCashBoxPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }else {
        setData(null);
      }
    })
  }

  const columns = [
    { title: "Период", dataIndex: "createdAt", key: "createdAt", width: "15vh" },
    { title: "Регистратор ", dataIndex: "bankAccountName", key: "bankAccountName" },
    { title: "Номер строки", dataIndex: "code", key: "code" },
    { title: "Касса", dataIndex: "cashBoxName", key: "cashBoxName" },
    { title: "Контрагент", dataIndex: "counterpartyName", key: "counterpartyName" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: "Документ", dataIndex: "documentId", key: "documentId" },
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

  const TitleCashBox=()=><HeaderKassa/>
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleCashBox}

      pagination={{

        total: total,
        pageSizeOptions: ['5','10','20','50','100'],
        showTotal: total => `Total${total}`,
        showSizeChanger: true,

        onChangePage: ((page, pageSize)=>{
          onChangePage(page, pageSize);
        }),

        onShowSizeChange: (pageSize)=>{
          setPageSize({pageSize},()=>{
            getRegisterCashBox();
          });

        },
      }}
    />
  );
};
export default Kassa;
