import React, {useState, useEffect} from "react";
import { Table, Button, Checkbox } from "antd";
import HeaderValyuta from "./headerKurs";
import "./kursValyuta.css";


import {getValyutaPage} from "../../../server/config/registerlar/valyutaService";







const Kurs = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getKursValyuta();
  },[])

  const getKursValyuta=()=>{
    getValyutaPage(currentPage, pageSize).then(value => {
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
    getValyutaPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }else {
        setData(null)
      }
    })
  };

  const columns = [
    { title: "Период", dataIndex: "createdAt", key: "createdAt" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: " Курс ", dataIndex: "course", key: "course" },

    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "5%",
      render: () => <Button type="primary">Delete</Button>,
    },
  ];

  const TitleHeaderValyuta =()=><HeaderValyuta/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={TitleHeaderValyuta}
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
            getKursValyuta();
          });
        },
      }}
    />
  );
};
export default Kurs;
