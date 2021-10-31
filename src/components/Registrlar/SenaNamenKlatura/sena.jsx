import React, {useState, useEffect} from 'react'
import { Table, Button } from "antd";
import HeaderSena from "./headerSena";
import "./sena.css";
import {getRegisterBanKPage} from "../../../server/config/registerlar/bankService";
import {getRegisterSenaKPage} from "../../../server/config/registerlar/Sena";



const Sena = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterSena();
  },[])

  const getRegisterSena=()=>{
    getRegisterSenaKPage(currentPage, pageSize).then(value => {
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
    getRegisterSenaKPage(page-1, pageSize).then(value => {
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
    { title: "Наменклатура ", dataIndex: "nomenclatureName", key: "nomenclatureName" },
    { title: "ЕднИзм", dataIndex: "unitName", key: "unitName" },
    { title: "ТипЦена", dataIndex: "priceTypeName", key: "priceTypeName" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: "Цена", dataIndex: "priceTypeName", key: "priceTypeName" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "5%",
      render: () => <Button type="primary">Delete</Button>,
    },
  ];

  const TitleHeaderSena =()=><HeaderSena/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={TitleHeaderSena}
      scroll={{ y: 310, x: 2600 }}
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
            getRegisterSena();
          });
        },
      }}
    />
  );
};
export default Sena;
