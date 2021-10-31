import {useState, useEffect} from "react";
import {Table, Button, notification} from "antd";
import HeaderChiqim from "./headerNaxtChiqim";
import {
  deleteCashRegisterExpense,
  getCashRegisterExpensePage
} from "../../../../server/config/document/CashRegisterExpenseService";

const Chiqim = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(()=>{
    getCashRegisterExpenses();
  },[]);
  const deleteCashRExpenseById=(record)=>{
    console.log(record);
    console.log(record.id);
    deleteCashRegisterExpense(record.id).then(value => {
      if (value && value.data.success){
        getCashRegisterExpenses();
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
  let cashRegisterExpense = {
    id: "",
    code: "",
    date: "",
    responsibleName: "",
    comment: "",
  };
  let cashRegisterExpenseList = [];
  const getCashRegisterExpenses=()=>{
    getCashRegisterExpensePage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          cashRegisterExpense.id = value.data.content[i].id;
          cashRegisterExpense.code = value.data.content[i].code;
          cashRegisterExpense.date = value.data.content[i].date;
          cashRegisterExpense.responsibleName = value.data.content[i].responsibleName;
          cashRegisterExpense.comment = value.data.content[i].comment;
          cashRegisterExpenseList.push(cashRegisterExpense);
          cashRegisterExpense = {};
        }
        setData(cashRegisterExpenseList);
      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getCashRegisterExpensePage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        cashRegisterExpenseList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          cashRegisterExpense.id = value.data.content[i].id;
          cashRegisterExpense.code = value.data.content[i].code;
          cashRegisterExpense.date = value.data.content[i].date;
          cashRegisterExpense.responsibleName = value.data.content[i].responsibleName;
          cashRegisterExpense.comment = value.data.content[i].comment;
          cashRegisterExpenseList.push(cashRegisterExpense);
          cashRegisterExpense = {};
        }
        setData(cashRegisterExpenseList);
      }else {
        setData(null)
      }
    })
  };
  const columns = [
    {
      title: "Code", dataIndex: "code", key: "code", fixed: "left",width: "10%",
    },
    { title: "Date", dataIndex: "date", key: "date", width: "20%" },
    { title: "Otvetstvenniy", dataIndex: "responsibleName", key: "responsibleName", width: "25%" },
    { title: "Izox", dataIndex: "comment", key: "comment", width: "35%" },
    {
      title: "Action", dataIndex: "", width: "10", fixed: "right", key: "x",
      render: (record) => <Button type="primary" onClick={()=>deleteCashRExpenseById(record)}> Delete </Button>,
    },
  ];
  const TitleHeaderChiqim = ()=><HeaderChiqim getCashRegisterExpenses={getCashRegisterExpenses}/>;
  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      title={TitleHeaderChiqim}
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
            getCashRegisterExpenses();
          });
        },
      }}
    />
  );
};
export default Chiqim;
