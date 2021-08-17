import {useState, useEffect} from "react";
import {notification, Table} from "antd";
import HeaderBankXisobRaqamlari from "./headerBankXisobRaqamlari";
import {deleteBankAccount, getBankAccountPage} from "../../../../server/config/objects/BankAccountService";



const BankXisobRaqamlari = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  useEffect(()=>{
    getBankAccounts();
  },[]);

  const deleteBankAccountById=(record)=>{
    deleteBankAccount(record.id).then(value => {
      if (value && value.data.success){
        getBankAccounts();

        notification['success']({
          message:'Data success deleted!',
          description: `${record.name} deleted!`
        });
      }else if (record.id){
        notification['error']({
          message:'Data error!',
          description: `${record.key} not found!`
        })
      }else {
        notification['error']({
          message:'Data error!',
          description: `Don't delete!`
        })
      }


    })
  };

  const getBankAccounts=()=>{
    getBankAccountPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getBankAccountPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content)
      }else {
        setData(null)
      }
    })
  };
  const columns = [
    { title: "Description", dataIndex: "bank", key: "bank", fixed: "left" },
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "AccountNumber", dataIndex: "accountNumber", key: "accountNumber" },
    { title: "Address", dataIndex: "address", key: "address" },
    { title: "Direktor", dataIndex: "director", key: "director" },
    { title: "mfi", dataIndex: "mfi", key: "mfi" },
    { title: "OKED", dataIndex: "oked", key: "oked" },
    { title: "STIR", dataIndex: "stir", key: "stir" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      render: (record) => <button onClick={()=>deleteBankAccountById(record)}>Delete</button>,
    },
  ];
  return (
      <>
        <HeaderBankXisobRaqamlari getBankAccounts={getBankAccounts}/>
        <Table
            columns={columns}
            dataSource={data}
            scroll={{ y: 310 }}
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
                  getBankAccounts();
                });
              },
            }}
        />
    </>
  );
};
export default BankXisobRaqamlari;
