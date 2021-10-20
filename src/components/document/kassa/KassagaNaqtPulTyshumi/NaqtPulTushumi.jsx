import {Table, Button, notification, Checkbox} from "antd";
import HeaderTushum from "./headerNaqtPulTushum";
import React, {useEffect, useState} from "react";
import {
  deleteCashRegisterArrival,
  getCashRegisterArrivalPage
} from "../../../../server/config/document/CashRegisterArrivalService";


const Tushum = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(()=>{
    getCashRegisterArrivals();
  },[]);
  const deleteCashById=(record)=>{
    deleteCashRegisterArrival(record.id).then(value => {
      if (value && value.data.success){
        getCashRegisterArrivals();
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
  let cashRegister = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    dpsAssignmentByParty: null,
    isConstantDP: null,
    comment: "",
  };
  let cashRegisterList = [];
  const getCashRegisterArrivals=()=>{
    getCashRegisterArrivalPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          cashRegister.id = value.data.content[i].id;
          cashRegister.code = value.data.content[i].code;
          cashRegister.date = value.data.content[i].date;
          cashRegister.responsibleName = value.data.content[i].responsibleName;
          cashRegister.dpsAssignmentByParty = value.data.content[i].dpsAssignmentByParty;
          cashRegister.isConstantDP = value.data.content[i].isConstantDP;
          cashRegister.comment = value.data.content[i].comment;
          cashRegisterList.push(cashRegister);
          cashRegister = {};
        }
        setData(cashRegisterList);
      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getCashRegisterArrivalPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        cashRegisterList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          cashRegister.id = value.data.content[i].id;
          cashRegister.code = value.data.content[i].code;
          cashRegister.date = value.data.content[i].date;
          cashRegister.responsibleName = value.data.content[i].responsibleName;
          cashRegister.dpsAssignmentByParty = value.data.content[i].dpsAssignmentByParty;
          cashRegister.isConstantDP = value.data.content[i].isConstantDP;
          cashRegister.comment = value.data.content[i].comment;
          cashRegisterList.push(cashRegister);
          cashRegister = {};
        }
        setData(cashRegisterList);
      }else {
        setData(null)
      }
    })
  };
  const columns = [
    // {
    //   title: "Data",
    //   dataIndex: "data",
    //   key: "data",
    //   fixed: "left",
    //   width: "26%",
    // },
    { title: "Code", dataIndex: "code", key: "code", width: 120 },
    { title: "Otvetstvenniy", dataIndex: "responsibleName", key: "responsibleName", width: 120, },
    { title: "Date", dataIndex: "date", key: "date", width: 120, },
    {
      title: " DPsprisaniyaPoPartiya",
      dataIndex: "dpsAssignmentByParty",
      key: "dpsAssignmentByParty",
      width: 180,
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    { title: "KostantaDP", dataIndex: "isConstantDP", key: "isConstantDP", width: 150,
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    { title: "Izox", dataIndex: "comment", key: "comment", width: 120, },
    {
      title: "Action",
      dataIndex: "",
      width: 100,
      fixed: "right",
      key: "x",
      render: (record) => <Button onClick={()=>deleteCashById(record)} type="primary"> Delete </Button>,
    },
  ];
  const TitleHeaderTushum = ()=> <HeaderTushum getCashRegisterArrivals={getCashRegisterArrivals}/>;
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      scroll={{x: 300, y: 500}}
      title={TitleHeaderTushum}
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
            getCashRegisterArrivals();
          });
        },
      }}
    />
  );
};
export default Tushum;
