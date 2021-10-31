import React, {useState, useEffect} from "react";
import {Table, Button, notification} from "antd";
import HeaderKassa from "./headerKassaQoldiqlari";
import {deleteEnteringCashBox, getEnteringCashBoxPage} from "../../../../server/config/document/EnteringCashBoxService";


const KassaQoldiq = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(()=>{
    getEnteringCashBoxs();
  },[]);
  const deleteEnteringCashBoxById=(record)=>{
    deleteEnteringCashBox(record.id).then(value => {
      if (value && value.data.success){
        getEnteringCashBoxs();
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
  let enteringCashBox = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    comment: "",
    
  };
  let enteringCashBoxList = [];
  const getEnteringCashBoxs=()=>{
    getEnteringCashBoxPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          enteringCashBox.id = value.data.content[i].id;
          enteringCashBox.code = value.data.content[i].code;
          enteringCashBox.date = value.data.content[i].date;
          enteringCashBox.responsibleName = value.data.content[i].responsibleName;
          enteringCashBox.comment = value.data.content[i].comment;
          enteringCashBoxList.push(enteringCashBox);
          enteringCashBox = {};
        }
        setData(enteringCashBoxList);
      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getEnteringCashBoxPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        enteringCashBoxList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          enteringCashBox.id = value.data.content[i].id;
          enteringCashBox.code = value.data.content[i].code;
          enteringCashBox.date = value.data.content[i].date;
          enteringCashBox.responsibleName = value.data.content[i].responsibleName;
          enteringCashBox.comment = value.data.content[i].comment;
          enteringCashBoxList.push(enteringCashBox);
          enteringCashBox = {};
        }
        setData(enteringCashBoxList);
      }else {
        setData(null)
      }
    })
  };
  const columns = [
    { title: "Code", dataIndex: "code", key: "code", width: "10%" },
    { title: "Date", dataIndex: "date", key: "date", width: "15%" },
    { title: "Responsible", dataIndex: "responsibleName", key: "responsibleName", width: "15%" },
    { title: "Comment", dataIndex: "comment", key: "comment" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: "10%",
      render: (record) => <Button onClick={()=>deleteEnteringCashBoxById(record)} type="primary">Delete</Button>,
    },
  ];
  const TitleHeader=()=><HeaderKassa getEnteringCashBoxs={getEnteringCashBoxs}/>;
  return (
    <Table
      className="Jadval"
      columns={columns}
      dataSource={data}
      title={TitleHeader}
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
            getEnteringCashBoxs();
          });
        },
      }}
    />
  );
};
export default KassaQoldiq;
