import { useState, useEffect } from "react";
import { notification, Table } from "antd";
import HeaderKassalar from "./headerKassalar";
import { getBranchesList } from "../../../../server/config/objects/BranchService";
import {
  deleteCashBox,
  getCashBoxPage,
} from "../../../../server/config/objects/CashBoxService";

const Kassalar = () => {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => (
    <HeaderKassalar getCashBoxes={getCashBoxes} branch={branch} />
  );

  useEffect(() => {
    getCashBoxes();
    getBranches();
  }, []);
  const deleteCashBoxById = (record) => {
    deleteCashBox(record.id).then((value) => {
      if (value && value.data.success) {
        getCashBoxes();
        notification["success"]({
          message: "Data success deleted!",
          description: `${record.name} deleted!`,
        });
      } else if (record.id) {
        notification["error"]({
          message: "Data error!",
          description: `${record.id} not found!`,
        });
      } else {
        notification["error"]({
          message: "Data error!",
          description: `Don't delete!`,
        });
      }
    });
  };

  let cashBox = {
    name: "",
    branch: "",
    branchId: "",
    id: "",
    code: null,
  };
  let cashBoxList = [];
  const getBranches = () => {
    getBranchesList().then((value) => {
      console.log(value);
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };
  const getCashBoxes = () => {
    getCashBoxPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        for (let i = 0; i < value.data.content.length; i++) {
          cashBox.name = value.data.content[i].name;
          cashBox.branch = value.data.content[i].branch.name;
          cashBox.branchId = value.data.content[i].branch.id;
          cashBox.id = value.data.content[i].id;
          cashBox.code = value.data.content[i].code;
          cashBoxList.push(cashBox);
          cashBox = {};
        }
        setData(cashBoxList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getCashBoxPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        cashBoxList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          cashBox.name = value.data.content[i].name;
          cashBox.branch = value.data.content[i].branch.name;
          cashBox.branchId = value.data.content[i].branch.id;
          cashBox.id = value.data.content[i].id;
          cashBox.code = value.data.content[i].code;
          cashBoxList.push(cashBox);
          cashBox = {};
        }
        setData(cashBoxList);
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
        <button onClick={() => deleteCashBoxById(record)}>Delete</button>
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
            getCashBoxes();
          });
        },
      }}
    />
  );
};
export default Kassalar;
