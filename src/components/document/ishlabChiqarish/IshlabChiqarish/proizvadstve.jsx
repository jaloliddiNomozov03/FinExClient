import {Table, Button, notification} from "antd";
import HeaderProiz from "./headerProiz";
import "./proizvadstve.css";
import React, {useEffect, useState} from "react";
import {deleteProduction, getProductionPage} from "../../../../server/config/document/ProductionService";

const data = [
  {
    key: 1,
    data: "N",
    numer: "",
    status: "",
    namenklatura: "UZS",
    soni: "summa",
    ombor: "summa",
    omborpoluchatel: "UZS",
    narxkirimi: "UZS",
  },
];

const Proiz = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(()=>{
    getProduction();
  },[]);
  const deleteProductionById=(record)=>{
    deleteProduction(record.id).then(value => {
      if (value && value.data.success){
        getProduction();
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
  let production = {
    id: "",
    code: "",
    date: "",
    nomenclatureName: "",
    count: null,
    warehouseName: "",
    counterPartyName: "",
    enteringSum: "",
    currencyName: "",
    course: null,
    branchName: "",
    responsibleName: "",
    status:"",
    sumCost: null,
    sumProduct: null,
    type: "",
    unitName: "",
  };
  let productionList = [];
  const getProduction=()=>{
    getProductionPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          production.id = value.data.content[i].id;
          production.code = value.data.content[i].code;
          production.date = value.data.content[i].date;
          production.nomenclatureName = value.data.content[i].nomenclatureName;
          production.count = value.data.content[i].count;
          production.warehouseName = value.data.content[i].warehouseName;
          production.counterPartyName = value.data.content[i].counterPartyName;
          production.enteringSum = value.data.content[i].enteringSum;
          production.currencyName = value.data.content[i].currencyName;
          production.course = value.data.content[i].course;
          production.branchName = value.data.content[i].branchName;
          production.responsibleName = value.data.content[i].responsibleName;
          production.status = value.data.content[i].status;
          production.sumCost = value.data.content[i].sumCost;
          production.sumProduct = value.data.content[i].sumProduct;
          production.type = value.data.content[i].type;
          production.unitName = value.data.content[i].unitName;
          productionList.push(production);
          production = {};
        }
        setData(productionList);
      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getProductionPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        productionList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          production.id = value.data.content[i].id;
          production.code = value.data.content[i].code;
          production.date = value.data.content[i].date;
          production.nomenclatureName = value.data.content[i].nomenclatureName;
          production.count = value.data.content[i].count;
          production.warehouseName = value.data.content[i].warehouseName;
          production.counterPartyName = value.data.content[i].counterPartyName;
          production.enteringSum = value.data.content[i].enteringSum;
          production.currencyName = value.data.content[i].currencyName;
          production.course = value.data.content[i].course;
          production.branchName = value.data.content[i].branchName;
          production.responsibleName = value.data.content[i].responsibleName;
          production.status = value.data.content[i].status;
          production.sumCost = value.data.content[i].sumCost;
          production.sumProduct = value.data.content[i].sumProduct;
          production.type = value.data.content[i].type;
          production.unitName = value.data.content[i].unitName;
          productionList.push(production);
          production = {};
        }
        setData(productionList);
      }else {
        setData(null)
      }
    })
  };

  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: 120,},
    { title: "Date ", dataIndex: "date", key: "date", width: 120, },
    { title: "Status", dataIndex: "status", key: "status", width: 120, },
    { title: "Namenklatura", dataIndex: "nomenclatureName", key: "nomenclatureName", width: 150, },
    { title: "Soni", dataIndex: "count", key: "count", width: 120, },
    { title: "Ombor", dataIndex: "warehouseName", key: "warehouseName", width: 120, },
    // { title: "Counterparty", dataIndex: "counterPartyName", key: "counterPartyName",},
    { title: " Приход Цена ", dataIndex: "enteringSum", key: "enteringSum", width: 180, },
    { title: " Currency ", dataIndex: "currencyName", key: "currencyName", width: 120, },
    { title: " Kurs ", dataIndex: "course", key: "course", width: 120, },
    { title: " Filial ", dataIndex: "branchName", key: "branchName", width: 120, },
    { title: " Otvetsvenniy ", dataIndex: "responsibleName", key: "responsibleName", width: 150, },
    { title: " sumCost ", dataIndex: "sumCost", key: "sumCost", width: 120, },
    { title: " sumProduct ", dataIndex: "sumProduct", key: "sumProduct", width: 120, },
    { title: " type ", dataIndex: "type", key: "type", width: 120, },
    { title: " unitName ", dataIndex: "unitName", key: "unitName", width: 120, },
    { title: " Comment ", dataIndex: "comment", key: "comment", width: 150, },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,
      render: (record) => <Button onClick={()=>deleteProductionById(record)} type="primary">Delete</Button>,
    },
  ];

  const TitleHeaderProiz = ()=> <HeaderProiz getProduction={getProduction}/>;
  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 300, y: 500 }}
      dataSource={data}
      title={TitleHeaderProiz}
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
            getProduction();
          });
        },
      }}
    />
  );
};
export default Proiz;
