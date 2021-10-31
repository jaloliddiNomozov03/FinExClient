import { Table, Button } from "antd";
import HeaderDaxodi from "./headerDaxodi";
import "./daxodi.css";
import React, {useEffect, useState} from "react";
import {getRegisterBanKPage} from "../../../server/config/registerlar/bankService";
import {getRegisterIncomePage} from "../../../server/config/registerlar/daxod";




const Daxodi = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterIncome();
  },[])

  const getRegisterIncome=()=>{
    getRegisterIncomePage(currentPage, pageSize).then(value => {
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
    getRegisterIncomePage(page-1, pageSize).then(value => {
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
    { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
    { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
    { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
    { title: "Документ", dataIndex: "doc", key: "doc" },
    {
      title: "Подразделения",
      dataIndex: "podrazdelenniya",
      key: "podrazdelenniya",
    },
    { title: "ТипРасходы", dataIndex: "tipRasxod", key: "tipRasxod" },
    { title: "Коммент", dataIndex: "komment", key: "komment" },
    { title: " Сумма ", dataIndex: "summa", key: "summa" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "5%",
      render: () => <Button type="primary">Delete</Button>,
    },
  ];

  const TitleHeaderIncome=()=><HeaderDaxodi/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleHeaderIncome}

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
            getRegisterIncome();
          });
        },
      }}

    />
  );
};
export default Daxodi;
