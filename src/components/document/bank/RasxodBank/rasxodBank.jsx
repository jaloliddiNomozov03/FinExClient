import {useState, useEffect} from "react";
import {notification, Table} from "antd";
import HeaderRasxod from "./headerRasxod";
import {deleteBankExpense, getBankExpensePage} from "../../../../server/config/document/BankExpenseService";


const RasxodBank = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    useEffect(()=>{
        getBankExpenses();
    },[]);
    const deleteBankExpenseById=(record)=>{
        deleteBankExpense(record.id).then(value => {
            if (value && value.data.success){
                getBankExpenses();
                notification['success']({
                    message:'Data success deleted!',
                    description: `${record.code} deleted!`
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

    const columns = [
        { title: "Data", dataIndex: "date", key: "date", width: 100, },
        { title: "Bank Xisob Raqami", dataIndex: "objectBankAccount",width: 200, key: "objectBankAccount",  },
        { title: "Numer ", dataIndex: "code", key: "code", width: 100, },
        { title: "Kontragent", dataIndex: "objectCounterParty",width: 120, key: "objectCounterParty",  },
        { title: "Firma", dataIndex: "objectCompany",width: 100, key: "objectCompany",  },
        { title: "transfer currency", dataIndex: "currency",width: 180, key: "currency",  },
        { title: " Summa Perechisleniye ", dataIndex: "sumEnumeration",width: 200, key: "sumEnumeration",  },
        { title: " Foiz Perechisleniye ", dataIndex: "percentEnumeration",width: 200, key: "percentEnumeration",  },
        { title: " Summa Raznitsi", dataIndex: "retailAmount",width: 180, key: "retailAmount",  },
        { title: " Summa Kontragenta", dataIndex: "sumCounterParty",width: 180, key: "sumCounterParty",  },
        { title: "Kontragent Valyutasi", dataIndex: "currencyCounterparty",width: 200, key: "currencyCounterparty",  },
        { title: "Kurs Perechisleniyesi", dataIndex: "transferRate",width: 200, key: "transferRate",   },
        { title: "Kurs Kontragenta", dataIndex: "transferRateCounterparty",width: 200, key: "transferRateCounterparty",   },
        { title: "KonstantaDP", dataIndex: "isConstanta",width: 120, key: "isConstanta",   },
        { title: "SummaDP", dataIndex: "sumDP",width: 100, key: "sumDP",   },
        { title: "Organizatsiya", dataIndex: "branch",width: 120, key: "branch",   },
        { title: "Podrazdelyeniya", dataIndex: "sections",width: 150, key: "sections",   },
        { title: "TipRasxodi", dataIndex: "expenseType",width: 120, key: "expenseType",   },
        { title: "Izox", dataIndex: "comment",width: 100, key: "comment",   },
        { title: "Otvetstvenniy", dataIndex: "responsible",width: 120, key: "responsible",   },
        {
            title: "Action",
            dataIndex: "",
            key: "x",
            width: 100,
            render: (record) => <button onClick={()=>deleteBankExpenseById(record)}>Delete</button>,
        },
    ];
    let objectBank= {
        date: "",
        objectBankAccount: "",
        objectCounterParty: "",
        objectCompany: "",
        currency: "",
        sumEnumeration: "",
        percentEnumeration: "",
        retailAmount: "",
        sumCounterParty: "",
        currencyCounterparty:"",
        transferRate: null,
        transferRateCounterparty: null,
        isConstanta: null,
        sumDP: "",
        isCounterParty: null,
        branch: "",
        sections: "",
        expenseType: "",
        comment: "",
        responsible: "",
        id: "",
        code: null
    };
    let bankExpenseList = [];


    const getBankExpenses=()=>{
        getBankExpensePage(currentPage, pageSize).then(value => {
            if (value && value.data && value.data.content){
                setTotal(value.data.totalElements);
                setCurrentPage(value.data.pageable.pageNumber);
                for (let i = 0; i < value.data.content.length; i++) {
                    objectBank.date = value.data.content[i].date;
                    objectBank.objectBankAccount = value.data.content[i].objectBankAccountName;
                    objectBank.objectCounterParty = value.data.content[i].objectCounterPartyName;
                    objectBank.objectCompany = value.data.content[i].objectCompanyName;
                    objectBank.currency = value.data.content[i].currencyName;
                    objectBank.sumEnumeration = value.data.content[i].sumEnumeration;
                    objectBank.percentEnumeration = value.data.content[i].percentEnumeration;
                    objectBank.retailAmount = value.data.content[i].retailAmount;
                    objectBank.sumCounterParty = value.data.content[i].sumCounterParty;
                    objectBank.currencyCounterparty = value.data.content[i].currencyName;
                    objectBank.transferRate = value.data.content[i].transferRate;
                    objectBank.transferRateCounterparty = value.data.content[i].rateCounterparty;
                    objectBank.isConstanta = value.data.content[i].isConstanta;
                    objectBank.sumDP = value.data.content[i].sumDP;
                    objectBank.isCounterParty = value.data.content[i].isCounterParty;
                    objectBank.branch = value.data.content[i].branchName;
                    objectBank.sections = value.data.content[i].sectionsName;
                    objectBank.expenseType = value.data.content[i].expenseTypeName;
                    objectBank.comment = value.data.content[i].comment;
                    objectBank.responsible = value.data.content[i].responsibleName;
                    objectBank.id = value.data.content[i].id;
                    objectBank.code = value.data.content[i].code;
                    bankExpenseList.push(objectBank);
                    objectBank = {}
                }
                setData(bankExpenseList);
            }else {
                setData(null)
            }
        })
    };
    const onChangePage=(page, pageSize)=>{
        setPageSize(pageSize);
        setCurrentPage((page-1));
        getBankExpensePage(page-1, pageSize).then(value => {
            if (value && value.data){
                setCurrentPage(value.data.pageable.pageNumber);
                // setData(value.data.content);
                bankExpenseList = [];
                for (let i = 0; i < value.data.content.length; i++) {
                    objectBank.date = value.data.content[i].date;
                    objectBank.objectBankAccount = value.data.content[i].objectBankAccountName;
                    objectBank.objectCounterParty = value.data.content[i].objectCounterPartyName;
                    objectBank.objectCompany = value.data.content[i].objectCompanyName;
                    objectBank.currency = value.data.content[i].currencyName;
                    objectBank.sumEnumeration = value.data.content[i].sumEnumeration;
                    objectBank.percentEnumeration = value.data.content[i].percentEnumeration;
                    objectBank.retailAmount = value.data.content[i].retailAmount;
                    objectBank.sumCounterParty = value.data.content[i].sumCounterParty;
                    objectBank.currencyCounterparty = value.data.content[i].currencyName;
                    objectBank.transferRate = value.data.content[i].transferRate;
                    objectBank.transferRateCounterparty = value.data.content[i].rateCounterparty;
                    objectBank.isConstanta = value.data.content[i].isConstanta;
                    objectBank.sumDP = value.data.content[i].sumDP;
                    objectBank.isCounterParty = value.data.content[i].isCounterParty;
                    objectBank.branch = value.data.content[i].branchName;
                    objectBank.sections = value.data.content[i].sectionsName;
                    objectBank.expenseType = value.data.content[i].expenseTypeName;
                    objectBank.comment = value.data.content[i].comment;
                    objectBank.responsible = value.data.content[i].responsibleName;
                    objectBank.id = value.data.content[i].id;
                    objectBank.code = value.data.content[i].code;
                    bankExpenseList.push(objectBank);
                    objectBank = {}
                }
                setData(bankExpenseList);
            }else {
                setData(null)
            }
        })
    };
  return (
      <>
          <HeaderRasxod getBankExpenses={getBankExpenses}/>
            <Table className='Jadval'
                   columns={columns}
                // scroll={{ x: 2000, y: 400 }}
                   dataSource={data}
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
                               getBankExpenses();
                           });
                       },
                   }}
            />
    </>
  );
};
export default RasxodBank;
