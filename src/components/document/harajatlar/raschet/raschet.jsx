import {Table, Button, notification} from "antd";
import HeaderRaschet from "./headerRaschet";
import {useEffect, useState} from "react";
import {deleteWriteOfGoods, getWriteOfGoodsPage} from "../../../../server/config/document/WriteOffOfGoods";
import {deleteSalaryCalculation, getSalaryCalculationPage} from "../../../../server/config/document/SalaryCalculation";


const Raschet = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(null);
    const [pageSize, setPageSize] = useState(10);
    useEffect(() => {
        getList();
    }, []);
    const deleteById = (record) => {
        deleteSalaryCalculation(record.id).then(value => {
            if (value && value.data.success) {
                getList();
                notification['success']({
                    message: 'Data success deleted!',
                    description: `${record.name} deleted!`
                });
            } else if (record.id) {
                notification['error']({
                    message: 'Data error!',
                    description: `${record.key} not found!`
                })
            } else {
                notification['error']({
                    message: 'Data error!',
                    description: `Don't delete!`
                })
            }
        })
    };
    let datas = {
        id: "",
        code: "",
        date: "",
        responsibleId: "",
        responsibleName: "",
        comment: "",
        sectionsId: "",
        sectionsName: "",
        branchId: "",
        branchName: ""
    };
    let datasList = [];
    const getList = () => {
        getSalaryCalculationPage(currentPage, pageSize).then(value => {
            if (value && value.data && value.data.content) {
                setTotal(value.data.totalElements);
                setCurrentPage(value.data.pageable.pageNumber);
                for (let i = 0; i < value.data.content.length; i++) {
                    datas.id = value.data.content[i].id;
                    datas.code = value.data.content[i].code;
                    datas.date = value.data.content[i].date;
                    datas.responsibleId = value.data.content[i].responsibleId;
                    datas.responsibleName = value.data.content[i].responsibleName;
                    datas.comment = value.data.content[i].comment;
                    datas.warehouseId = value.data.content[i].warehouseId;
                    datas.warehouseName = value.data.content[i].warehouseName;
                    datas.sectionsName = value.data.content[i].sectionsName;
                    datas.branchId = value.data.content[i].branchId;
                    datas.branchName = value.data.content[i].branchName;
                    datasList.push(datas);
                    datas = {};
                }
                setData(datasList);
            } else {
                setData(null)
            }
        })
    };
    const onChangePage = (page, pageSize) => {
        setPageSize(pageSize);
        setCurrentPage((page - 1));
        getSalaryCalculationPage(page - 1, pageSize).then(value => {
            if (value && value.data) {
                setCurrentPage(value.data.pageable.pageNumber);
                datasList = [];
                for (let i = 0; i < value.data.content.length; i++) {
                    datas.id = value.data.content[i].id;
                    datas.code = value.data.content[i].code;
                    datas.date = value.data.content[i].date;
                    datas.responsibleId = value.data.content[i].responsibleId;
                    datas.responsibleName = value.data.content[i].responsibleName;
                    datas.comment = value.data.content[i].comment;
                    datas.warehouseId = value.data.content[i].warehouseId;
                    datas.warehouseName = value.data.content[i].warehouseName;
                    datas.sectionsName = value.data.content[i].sectionsName;
                    datas.branchId = value.data.content[i].branchId;
                    datas.branchName = value.data.content[i].branchName;
                    datasList.push(datas);
                    datas = {};
                }
                setData(datasList);
            } else {
                setData(null)
            }
        })
    };
    const columns = [
        {title: "Nomer ", dataIndex: "code", key: "code", width: 120,},
        {title: "Otvetstvenniy", dataIndex: "responsibleName", key: "responsibleName", width: 120,},
        {title: "Organizatsiya", dataIndex: "branchName", key: "branchName", width: 120,},
        {
            title: "Podrazdeleniya",
            dataIndex: "sectionsName",
            key: "sectionsName",
            width: 150,
        },
        {title: "Izox", dataIndex: "comment", key: "comment", width: 120,},
        {
            title: "Action",
            dataIndex: "",
            fixed: "right",
            key: "x",
            width: 100,
            render: (record) => <Button onClick={() => deleteById(record)} type="primary">Delete</Button>,
        }
    ];
    const TitleHeader = () => <HeaderRaschet getList={getList}/>;

    return (
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

                onChange: ((page, pageSize) => {
                    onChangePage(page, pageSize);
                }),
                onShowSizeChange: (pageSize) => {
                    setPageSize({pageSize}, () => {
                        getList();
                    });
                },
            }}
        />
    );
};
export default Raschet;
