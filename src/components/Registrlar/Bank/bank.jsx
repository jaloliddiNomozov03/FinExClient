import React, {useState, useEffect} from 'react'
import {Table, Button, Checkbox} from "antd";
import HeaderBank from "./headerBank";
import "./bank.css";

import {getRegisterBanKPage} from "../../../server/config/registerlar/bankService";


const Bank = () => {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(null);
    const [pageSize, setPageSize] = useState(10);

    useEffect(()=>{
        getRegisterBank();
    },[])

    const getRegisterBank=()=>{
        getRegisterBanKPage(currentPage, pageSize).then(value => {
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
        getRegisterBanKPage(page-1, pageSize).then(value => {
            if (value && value.data){
                setCurrentPage(value.data.pageable.pageNumber);
                setData(value.data.content);
            }else {
                setData(null)
            }
        })
    };

    const columns = [
        {title: "Период", dataIndex: "period", key: "period", width: "15vh"},
        {title: "Регистратор ", dataIndex: "docType", key: "docType"},
        {title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki"},
        {title: "БанковскиеСчета ", dataIndex: "bankAccountName", key: "bankAccountName"},
        {title: "Контрагент", dataIndex: "counterpartyName", key: "counterpartyName"},
        {title: "Валюта", dataIndex: "currencyName", key: "currencyName"},
        {title: "Документ", dataIndex: "doc", key: "doc"},
        {title: "isIncome", dataIndex: "isIncome", key: "isIncome",
            render: (record) => <Checkbox type="checkbox" checked={record} />,},
        {title: "Коммент", dataIndex: "comment", key: "comment"},

        {
            title: "Action",
            dataIndex: "",
            fixed: "right",
            key: "x",
            width: "5%",

            render: () => <Button type="primary">Delete</Button>,
        },
    ];
    const TitleHeaderBank=()=><HeaderBank/>

    return (
        <Table
            className="Jadval"
            columns={columns}
            // scroll={{x: 1700, y: 400}}
            dataSource={data}
            title={TitleHeaderBank}
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
                        getRegisterBank();
                    });
                },
            }}
        />
    );
}
export default Bank;
