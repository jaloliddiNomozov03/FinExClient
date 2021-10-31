import React, {useState, useEffect} from "react";
import { Table, Button, Checkbox } from "antd";
import HeaderBonus from "./headerBonus";
import "./bonus.css";
import {getRegisterBankBonusPage} from "../../../server/config/registerlar/bankBonusService";
import {getBankExpensePage} from "../../../server/config/document/BankExpenseService";




const Bonus = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterBankBonus()
  }, [])

  const getRegisterBankBonus=()=>{
    getRegisterBankBonusPage(currentPage, pageSize).then(res => {
      if (res && res.data && res.data.content){
        setTotal(res.data.totalElements);
        setCurrentPage(res.data.pageable.pageNumber);
        setData(res.data.content);
      }
    })
  }

  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getBankExpensePage(page-1,pageSize).then(res =>{
      if (res && res.data){
        setCurrentPage(res.data.pageable.pageNumber);
        setData(res.data.content);
      }else {
        setData(null);
      }
    })
  };

  const columns = [
    { title: "Период", dataIndex: "period", key: "period", width: "15vh" },
    { title: "Регистратор ", dataIndex: "registrator", key: "registrator" },
    { title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki" },
    { title: "Контрагент", dataIndex: "kontragent", key: "kontragent" },
    { title: "Документ", dataIndex: "doc", key: "doc" },
    { title: "Валюта", dataIndex: "valyuta", key: "valyuta" },
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

  const TitleHeaderBankBonus =()=><HeaderBonus/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleHeaderBankBonus}
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
            getRegisterBankBonus();
          });
        },
      }}
    />
  );
};
export default Bonus;
