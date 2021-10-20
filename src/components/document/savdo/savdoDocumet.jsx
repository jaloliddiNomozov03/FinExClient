import { Table, Button, notification } from "antd";
import HeaderSavdo from "./headerSavdo";
import { useEffect, useState } from "react";
import {
  deleteWholasale,
  getWholasalePage,
} from "../../../server/config/document/Wholesale";
import HeaderSpisaniya from "../ombor/SpisaniyaTavar/headerSpisaniya";

let datas = [
  {
    key: 1,
    data: "",
    code: "",
    warehouseId: "",
    warehouseName: "",
    responsibleId: "",
    responsibleName: "",
    branchId: "",
    branchName: "",
    counterpartyId: "",
    counterpartyName: "",
    priceTypeId: "..",
    priceTypeName: "..",
    course: "",
    sale: "",
    comment: " ",
    expenditureTypeName: "",
    expenditureTypeId: "",
    sectionsName: "",
    sectionsId: "",
    maturityDate: "..",
    percentBonus: "",
  },
];

const DocumentSavdo = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getList();
  }, []);
  const deleteById = (record) => {
    deleteWholasale(record.id).then((value) => {
      if (value && value.data.success) {
        getList();
        notification["success"]({
          message: "Data success deleted!",
          description: `${record.name} deleted!`,
        });
      } else if (record.id) {
        notification["error"]({
          message: "Data error!",
          description: `${record.key} not found!`,
        });
      } else {
        notification["error"]({
          message: "Data error!",
          description: `Don't delete!`,
        });
      }
    });
  };

  let datasList = [];
  const getList = () => {
    getWholasalePage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          datas.id = value.data.content[i].id;
          datas.code = value.data.content[i].code;
          datas.date = value.data.content[i].date;
          datas.responsibleId = value.data.content[i].responsibleId;
          datas.responsibleName = value.data.content[i].responsibleName;
          datas.warehouseId = value.data.content[i].warehouseId;
          datas.warehouseName = value.data.content[i].warehouseName;
          datas.branchId = value.data.content[i].branchId;
          datas.branchName = value.data.content[i].branchName;
          datas.sectionsId = value.data.content[i].sectionsId;
          datas.sectionsName = value.data.content[i].sectionsName;
          datas.counterpartyId = value.data.content[i].counterpartyId;
          datas.counterpartyName = value.data.content[i].counterpartyName;
          datas.priceTypeId = value.data.content[i].priceTypeId;
          datas.priceTypeName = value.data.content[i].priceTypeName;
          datas.sale = value.data.content[i].sale;
          datas.comment = value.data.content[i].comment;
          datas.course = value.data.content[i].course;
          datas.expenditureTypeId = value.data.content[i].expenditureTypeId;
          datas.expenditureTypeName = value.data.content[i].expenditureTypeName;
          datas.sectionsId = value.data.content[i].sectionsId;
          datas.sectionsName = value.data.content[i].sectionsName;
          datas.maturityDate = value.data.content[i].maturityDate;
          datas.percentBonus = value.data.content[i].percentBonus;
          datasList.push(datas);
          datas = {};
        }
        setData(datasList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getWholasalePage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        datasList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          datas.id = value.data.content[i].id;
          datas.code = value.data.content[i].code;
          datas.date = value.data.content[i].date;
          datas.responsibleId = value.data.content[i].responsibleId;
          datas.responsibleName = value.data.content[i].responsibleName;
          datas.warehouseId = value.data.content[i].warehouseId;
          datas.warehouseName = value.data.content[i].warehouseName;
          datas.branchId = value.data.content[i].branchId;
          datas.branchName = value.data.content[i].branchName;
          datas.sectionsId = value.data.content[i].sectionsId;
          datas.sectionsName = value.data.content[i].sectionsName;
          datas.counterpartyId = value.data.content[i].counterpartyId;
          datas.counterpartyName = value.data.content[i].counterpartyName;
          datas.priceTypeId = value.data.content[i].priceTypeId;
          datas.priceTypeName = value.data.content[i].priceTypeName;
          datas.sale = value.data.content[i].sale;
          datas.comment = value.data.content[i].comment;
          datas.course = value.data.content[i].course;
          datas.expenditureTypeId = value.data.content[i].expenditureTypeId;
          datas.expenditureTypeName = value.data.content[i].expenditureTypeName;
          datas.sectionsId = value.data.content[i].sectionsId;
          datas.sectionsName = value.data.content[i].sectionsName;
          datas.maturityDate = value.data.content[i].maturityDate;
          datas.percentBonus = value.data.content[i].percentBonus;
          datasList.push(datas);
          datas = {};
        }
        setData(datasList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Data", dataIndex: "date", key: "date", width: 120 },
    { title: "Nomer", dataIndex: "code", key: "code", width: 120 },
    {
      title: "Ombor",
      dataIndex: "warehouseName",
      key: "warehouseName",
      width: 120,
    },
    {
      title: "Kontragent",
      dataIndex: "counterpartyName",
      key: "counterpartyName",
      width: 120,
    },
    {
      title: "Organizatsiya",
      dataIndex: "branchName",
      key: "branchName",
      width: 150,
    },
    {
      title: "Otvetstvenniy",
      dataIndex: "responsibleName",
      key: "responsibleName",
      width: 150,
    },
    {
      title: "Tolov Turi",
      dataIndex: "priceTypeName",
      key: "priceTypeName",
      width: 150,
    },
    { title: "Kurs", dataIndex: "course", key: "course", width: 120 },
    { title: "Tip Prodaji", dataIndex: "sale", key: "sale", width: 120 },
    { title: "Izox", dataIndex: "comment", key: "comment", width: 120 },
    {
      title: "Harajat Turi",
      dataIndex: "expenditureTypeName",
      key: "expenditureTypeName",
      width: 180,
    },
    {
      title: "Podrazdeleniye",
      dataIndex: "sectionsName",
      key: "sectionsName",
      width: 150,
    },
    // {
    //   title: "TipUchyetSpisaniyeTavar",
    //   dataIndex: "spisaniya",
    //   key: "spisaniya",
    // },
    {
      title: "Tulov Muddati",
      dataIndex: "maturityDate",
      key: "maturityDate",
      width: 180,
    },
    {
      title: "ProSenaBonusPoProdaji",
      dataIndex: "percentBonus",
      key: "percentBonus",
      width: 200,
    },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      width: 100,
      render: (record) => (
        <Button onClick={() => deleteById(record)} type="primary">
          Delete
        </Button>
      ),
    },
  ];

  const TitleHeader = () => <HeaderSavdo getList={getList} />;

  return (
    <Table
      className="Jadval"
      columns={columns}
      scroll={{ x: 300, y: 500 }}
      dataSource={data}
      title={TitleHeader}
      pagination={{
        total: total,

        pageSizeOptions: ["5", "10", "20", "50", "100"],

        showTotal: (total) => `Total ${total}`,

        showSizeChanger: true,

        onChange: (page, pageSize) => {
          onChangePage(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getList();
          });
        },
      }}
    />
  );
};
export default DocumentSavdo;
