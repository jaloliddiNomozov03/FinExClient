import { useState, useEffect } from "react";
import { notification, Table } from "antd";
import HeaderOmborlar from "./headerOmborlar";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import {
  deleteWarehouse,
  getWarehousePage,
} from "../../../../server/config/objects/WarehouseService";

const Omborlar = () => {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => (
    <HeaderOmborlar getWarehouse={getWarehouse} branch={branch} />
  );

  useEffect(() => {
    getWarehouse();
    getBranches();
  }, []);

  const deleteSectionsById = (record) => {
    deleteWarehouse(record.id).then((value) => {
      if (value && value.data.success) {
        getWarehouse();
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

  let warehouse = {
    name: "",
    branch: "",
    branchId: "",
    id: "",
    code: null,
  };
  let warehouseList = [];
  const getBranches = () => {
    getBranchesList().then((value) => {
      console.log(value);
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };
  const getWarehouse = () => {
    getWarehousePage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        for (let i = 0; i < value.data.content.length; i++) {
          warehouse.name = value.data.content[i].name;
          warehouse.branch = value.data.content[i].branch.name;
          warehouse.branchId = value.data.content[i].branch.id;
          warehouse.id = value.data.content[i].id;
          warehouse.code = value.data.content[i].code;
          warehouseList.push(warehouse);
          warehouse = {};
        }
        setData(warehouseList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getWarehousePage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        warehouseList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          warehouse.name = value.data.content[i].name;
          warehouse.branch = value.data.content[i].branch.name;
          warehouse.branchId = value.data.content[i].branch.id;
          warehouse.id = value.data.content[i].id;
          warehouse.code = value.data.content[i].code;
          warehouseList.push(warehouse);
          warehouse = {};
        }
        setData(warehouseList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Description", dataIndex: "name", key: "name", width: 110 },
    { title: "Code", dataIndex: "code", key: "code", width: 100 },
    { title: "Filial", dataIndex: "branch", key: "branch", width: 100 },
    {
      title: "Action",
      dataIndex: "",
      width: 90,
      fixed: "right",
      key: "x",
      render: (record) => (
        <button onClick={() => deleteSectionsById(record)}>Delete</button>
      ),
    },
  ];
  return (
    <Table
      title={TitleHeader}
      columns={columns}
      dataSource={data}
      scroll={{ y: 310 }}
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
            getWarehouse();
          });
        },
      }}
    />
  );
};
export default Omborlar;
