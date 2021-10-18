import React, { useState, useEffect } from "react";
import {Checkbox, notification, Table} from "antd";
import HeaderNomenklatura from "./headerNomenklatura";
import {deleteNomenclature, getNomenclaturePage} from "../../../../server/config/objects/NomenklaturaService";

const Nomenklatura = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(()=>{
    getNomenclature();
  },[]);
  let nom = {
    barcode: "string",
    basicUnitName: "string",
    "code": 0,
    "coefficient": 0,
    "count": 0,
    "currencyId": "string",
    "currencyName": "string",
    "finishedProduct": true,
    "id": "string",
    "isMoreUnits": true,
    "name": "string",
    "productTypeId": "string",
    "productTypeName": "string",
    "rawMaterial": true,
    "serialNumber": true
  };
  let nomList =[];
  const getNomenclature = () => {
    getNomenclaturePage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          nom.id = value.data.content[i].id;
          nom.code = value.data.content[i].code;
          nom.name = value.data.content[i].name;
          nom.coefficient = value.data.content[i].coefficient;
          nom.count = value.data.content[i].count;
          nom.currencyName = value.data.content[i].currencyName;
          nom.finishedProduct = value.data.content[i].finishedProduct;
          nom.isMoreUnits = value.data.content[i].isMoreUnits;
          nom.productTypeName = value.data.content[i].productTypeName;
          nom.rawMaterial = value.data.content[i].rawMaterial;
          nom.serialNumber = value.data.content[i].serialNumber;
          nom.basicUnitName = value.data.content[i].basicUnitName;
          nom.barcode = value.data.content[i].barcode;
          nomList.push(nom);
          nom={};
        }
        setData(nomList);
      } else {
        setData(null);
      }
    });
  };
  const deleteNom= (record) => {
    deleteNomenclature(record.id).then((value) => {
      if (value && value.data.success) {
        getNomenclature();
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
          description: `Don't delete!`,
        });
      }
    });
  };

  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getNomenclaturePage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        nomList =[];
        for (let i = 0; i < value.data.content.length; i++) {
          nom.id = value.data.content[i].id;
          nom.code = value.data.content[i].code;
          nom.name = value.data.content[i].name;
          nom.coefficient = value.data.content[i].coefficient;
          nom.count = value.data.content[i].count;
          nom.currencyName = value.data.content[i].currencyName;
          nom.finishedProduct = value.data.content[i].finishedProduct;
          nom.isMoreUnits = value.data.content[i].isMoreUnits;
          nom.productTypeName = value.data.content[i].productTypeName;
          nom.rawMaterial = value.data.content[i].rawMaterial;
          nom.serialNumber = value.data.content[i].serialNumber;
          nom.basicUnitName = value.data.content[i].basicUnitName;
          nom.barcode = value.data.content[i].barcode;
          nomList.push(nom);
          nom={};
        }
        setData(nomList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Name", dataIndex: "name", key: "name"},
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "EdinitsaIzmereniya", dataIndex: "basicUnitName",width: 200, key: "basicUnitName" },
    { title: "ShtrixCode", dataIndex: "barcode", key: "barcode" },
    { title: "nomenclature", dataIndex: "nomenclatureName", key: "nomenclatureName" },
    { title: "TipTovara", dataIndex: "productTypeName", key: "productTypeName" },
    { title: "Seriyka", dataIndex: "serialNumber", key: "serialNumber",
      render: (record) => <Checkbox type="checkbox" checked={record} />,},
    {
      title: "MnogoEdinitsaIzmereniya", dataIndex: "isMoreUnits", width: 200, key: "isMoreUnits",
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    { title: "Koeffitsient", dataIndex: "coefficient", key: "coefficient" },
    { title: "Valyuta", dataIndex: "currencyName", key: "currencyName" },
    { title: "Sirye", dataIndex: "count", key: "count" },
    {
      title: "TayyorMahsulot", dataIndex: "finishedProduct", key: "finishedProduct",
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    { title: "MahsulotMiqdori", dataIndex: "rawMaterial", key: "rawMaterial",
      render: (record) => <Checkbox type="checkbox" checked={record} />,},
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      render: (record) => <button onClick={()=>deleteNom(record)}>Delete</button>,
    },
  ];
  const TitleHeader=()=> <HeaderNomenklatura getNomenclature={getNomenclature}/>;
  return (
    <Table
      size="small"
      title={TitleHeader}
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.description !== "",
      }}
      scroll={{ x: 2000, y: 2000 }}
      dataSource={data}
      pagination={{
        total: total,

        pageSizeOptions: ["5", "10", "20", "50", "100"],

        showTotal: (total) => `Total ${total}`,

        showSizeChanger: true,

        onChange: (page, pageSize) => {
          // console.log(page+" "+pageSize);
          onChangePage(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getNomenclature();
          });
        },
      }}
    />
  );
};
export default Nomenklatura;
