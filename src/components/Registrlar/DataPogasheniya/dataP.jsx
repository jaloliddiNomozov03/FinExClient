import { Table, Button } from "antd";
import HeaderData from "./headerData";
import "./datap.css";
import {useState, useEffect} from "react";
import {getRegisterBanKPage} from "../../../server/config/registerlar/bankService";
import {getRegisterDataPPage} from "../../../server/config/registerlar/dataP";



const Data = () => {

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getRegisterDataP();
  }, [])

  const getRegisterDataP=()=>{
    getRegisterDataPPage(currentPage, pageSize).then(value => {
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
    getRegisterDataPPage(page-1, pageSize).then(value => {
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
    { title: "Номер строки", dataIndex: "code", key: "code" },
    { title: "Контрагент", dataIndex: "counterpartyName", key: "counterpartyName" },
    { title: "Документ", dataIndex: "documentId", key: "documentId" },
    { title: "Валюта", dataIndex: "currencyName", key: "currencyName" },
    { title: "ДатаПогашение", dataIndex: "repaymentDate", key: "repaymentDate" },
    { title: "Коммент", dataIndex: "comment", key: "comment" },
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

  const TitleHeaderData =()=><HeaderData/>

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 1700, y: 400 }}
      dataSource={data}
      title={TitleHeaderData}

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
            getRegisterDataP();
          });
        },
      }}

    />
  );
};
export default Data;
