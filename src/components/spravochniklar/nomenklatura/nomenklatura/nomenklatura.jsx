import { useState } from "react";
import { Table } from "antd";
import HeaderNomenklatura from "./headerNomenklatura";
import { getNomenclaturePage } from "../../../../server/config/objects/NomenklaturaService";

const Nomenklatura = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const getNomenclature = () => {
    getNomenclaturePage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Description", dataIndex: "name", key: "name", fixed: "left" },
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "EdinitsaIzmereniya", dataIndex: "basicUnit", key: "basicUnit" },
    { title: "ShtrixCode", dataIndex: "barcode", key: "barcode" },
    { title: "TipTovara", dataIndex: "productType", key: "productType" },
    { title: "Seriyka", dataIndex: "serialNumber", key: "serialNumber" },
    {
      title: "MnogoEdinitsaIzmereniya",
      dataIndex: "isMoreUnits",
      key: "isMoreUnits",
    },
    { title: "Koeffitsient", dataIndex: "coefficient", key: "coefficient" },
    { title: "Valyuta", dataIndex: "currency", key: "currency" },
    { title: "Sirye", dataIndex: "count", key: "count" },
    {
      title: "TayyorMahsulot",
      dataIndex: "finishedProduct",
      key: "finishedProduct",
    },
    { title: "MahsulotMiqdori", dataIndex: "rawMaterial", key: "rawMaterial" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      render: () => <button>Delete</button>,
    },
  ];
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getNomenclaturePage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      } else {
        setData(null);
      }
    });
  };
  return (
    <Table
      title={HeaderNomenklatura}
      columns={columns}
      expandable={{
        expandedRowRender: (record) => (
          <p style={{ margin: 0 }}>{record.description}</p>
        ),
        rowExpandable: (record) => record.description !== "",
      }}
      scroll={{ x: 1500, y: 400 }}
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
