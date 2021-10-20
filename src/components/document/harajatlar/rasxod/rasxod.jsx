import {useState, useEffect} from "react";
import {Table, Button, notification} from "antd";
import HeaderRasxod from "./headerrasxod";
import {deleteCosts, getCostsPage} from "../../../../server/config/document/CostsService";

const Rasxod = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    useEffect(()=>{
        getCosts();
    },[]);
    const deleteCostById=(record)=>{
        deleteCosts(record.id).then(value => {
            if (value && value.data.success){
                getCosts();
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
    let costs = {
        id: "",
        code: "",
        sum: null,
        responsibleName: "",
        cashBoxName: "",
        branchName:"",
        sectionsName: "",
        comment: "",
    };
    let costsList = [];
    const getCosts=()=>{
        getCostsPage(currentPage, pageSize).then(value => {
            if (value && value.data && value.data.content){
                setTotal(value.data.totalElements);
                setCurrentPage(value.data.pageable.pageNumber);
                for (let i = 0; i < value.data.content.length; i++) {
                    costs.id = value.data.content[i].id;
                    costs.code = value.data.content[i].code;
                    costs.sum = value.data.content[i].sum;
                    costs.responsibleName = value.data.content[i].responsibleName;
                    costs.cashBoxName = value.data.content[i].cashBoxName;
                    costs.branchName = value.data.content[i].branchName;
                    costs.sectionsName = value.data.content[i].sectionsName;
                    costs.comment = value.data.content[i].comment;
                    costsList.push(costs);
                    costs = {};
                }
                setData(costsList);
            }else {
                setData(null)
            }
        })
    };
    const onChangePage=(page, pageSize)=>{
        setPageSize(pageSize);
        setCurrentPage((page-1));
        getCostsPage(page-1, pageSize).then(value => {
            if (value && value.data){
                setCurrentPage(value.data.pageable.pageNumber);
                costsList = [];
                for (let i = 0; i < value.data.content.length; i++) {
                    costs.id = value.data.content[i].id;
                    costs.code = value.data.content[i].code;
                    costs.sum = value.data.content[i].sum;
                    costs.responsibleName = value.data.content[i].responsibleName;
                    costs.cashBoxName = value.data.content[i].cashBoxName;
                    costs.branchName = value.data.content[i].branchName;
                    costs.sectionsName = value.data.content[i].sectionsName;
                    costs.comment = value.data.content[i].comment;
                    costsList.push(costs);
                    costs = {};
                }
                setData(costsList);
            }else {
                setData(null)
            }
        })
    };
    const columns = [
        { title: "N", dataIndex: "code", key: "code", width: 120 },
        { title: "Sotrudnik ", dataIndex: "responsibleName", key: "responsibleName", width: 120, },
        { title: "Kassa", dataIndex: "cashBoxName", key: "cashBoxName", width: 120, },
        { title: "Filial", dataIndex: "branchName", key: "branchName", width: 120, },
        { title: "Bulim", dataIndex: "sectionsName", key: "sectionsName", width: 120, },
        { title: "Summa", dataIndex: "sum", key: "sum", width: 120 },
        { title: "Izox", dataIndex: "comment", key: "comment", width: 120, },
        {
            title: "Action",
            dataIndex: "",
            fixed: "right",
            key: "x",
            width: 100,
            render: (record) => <Button onClick={()=>deleteCostById(record)} type="primary">Delete</Button>,
        },
    ];
    const TitleHeader = ()=><HeaderRasxod getCosts={getCosts}/>;
  return (
        <>
            <Table
                className="Jadval"
                columns={columns}
                dataSource={data}
                scroll={{x: 300, y: 500}}
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
                            getCosts();
                        });
                    },
                }}
            />
        </>
  );
};
export default Rasxod;
