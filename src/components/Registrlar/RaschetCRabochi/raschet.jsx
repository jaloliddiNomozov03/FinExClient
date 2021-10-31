import { Table, Button } from "antd";
import HeaderRaschet from "./headerRaschet";
import "./raschet.css";
import {useEffect, useState} from "react";

import {getRegisterSettlementPage} from "../../../server/config/registerlar/raschet";





const Raschet = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterSettlement();
  },[])

  const getRegisterSettlement=()=>{
    getRegisterSettlementPage(currentPage, pageSize).then(value => {
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
    getRegisterSettlementPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }else {
        setData(null)
      }
    })
  };

  const columns = [
    { title: "Период", dataIndex: "date", key: "date", width: "15vh" },
    { title: "Регистратор ", dataIndex: "docType", key: "docType" },
    { title: "Номер строки", dataIndex: "code", key: "code" },
    { title: "Сотрудник", dataIndex: "staffName", key: "staffName" },
    { title: "Документ", dataIndex: "documentId", key: "documentId" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: "Подразделения", dataIndex: "sectionsName", key: "sectionsName" },
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

  const TitleHeaderRaschet=()=><HeaderRaschet/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleHeaderRaschet}

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
            getRegisterSettlement();
          });
        },
      }}
    />
  );
};
export default Raschet;
