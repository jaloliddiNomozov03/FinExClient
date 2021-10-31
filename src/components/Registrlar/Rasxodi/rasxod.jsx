import {Table, Button} from "antd";
import HeaderRasxod from "./headerRasxod";
import "./rasxod.css";
import {useEffect, useState} from "react";
import {getRegisterBanKPage} from "../../../server/config/registerlar/bankService";
import {getRegisterCostPage} from "../../../server/config/registerlar/rasxod";




const Rasxod = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [total, setTotal] = useState(null);
    const [pageSize, setPageSize] = useState(10);

    useEffect(() => {
        getRegisterCosts();
    }, [])
    const getRegisterCosts = () => {
            getRegisterCostPage(currentPage, pageSize).then(value => {
                if (value && value.data && value.data.content) {
                    setTotal(value.data.totalElements);
                    setCurrentPage(value.data.pageable.pageNumber);
                    setData(value.data.content);
                }
            })
        }, onChangePage = (page, pageSize) => {
            setPageSize(pageSize);
            setCurrentPage((page - 1));
            getRegisterCostPage(page - 1, pageSize).then(value => {
                if (value && value.data) {
                    setCurrentPage(value.data.pageable.pageNumber);
                    setData(value.data.content);
                } else {
                    setData(null)
                }
            })
        },
        columns = [
            {title: "Период", dataIndex: "createdAt", key: "createdAt", width: "15vh"},
            {title: "Регистратор ", dataIndex: "docType", key: "docType"},
            {title: "Номер строки", dataIndex: "numerStroki", key: "numerStroki"},
            {title: "Валюта", dataIndex: "currencyName", key: "currencyName"},
            {title: "Документ", dataIndex: "doc", key: "doc"},
            {title: "Подразделения", dataIndex: "podrazdel", key: "podrazdel"},
            {title: "ТипРасходы", dataIndex: "tipRasxodi", key: "tipRasxodi"},
            {title: "Коммент", dataIndex: "comment", key: "comment"},
            {title: " Сумма ", dataIndex: "summa", key: "summa"},
            {
                title: "Action",
                dataIndex: "",
                fixed: "right",
                key: "x",
                width: "5%",
                render: () => <Button type="primary">Delete</Button>,
            },
        ],
        TitleHeaderCosts = () => <HeaderRasxod/>;


    return (
        <Table
            className="Jadval"
            columns={columns}
            scroll={{x: 1700, y: 400}}
            dataSource={data}
            title={TitleHeaderCosts}

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
                        getRegisterCosts();
                    });
                },
            }}
        />
    );
};
export default Rasxod;
