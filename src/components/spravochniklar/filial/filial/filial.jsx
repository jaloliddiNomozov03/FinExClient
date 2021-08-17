import { notification, Table } from "antd";
import HeaderFilial from "./headerFilial";
import { useState, useEffect } from "react";
import {
  deleteBranch,
  getBranchPage,
} from "../../../../server/config/objects/BranchService";

const Filial = () => {
  const [prices, setPrices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => <HeaderFilial getBranches={getBranches} />;

  useEffect(() => {
    getBranches();
  }, []);
  const columns = [
    { title: "Description", dataIndex: "name", key: "name", fixed: "left" },
    { title: "Code", dataIndex: "code", key: "code", width: 100 },
    {
      title: "Action",
      dataIndex: "",
      width: 90,
      fixed: "right",
      key: "x",
      render: (record) => (
        <button onClick={() => deleteBranchById(record)}>Delete</button>
      ),
    },
  ];
  const deleteBranchById = (record) => {
    deleteBranch(record.id).then((value) => {
      if (value && value.data.success) {
        getBranches();
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
  const getBranches = () => {
    getBranchPage(currentPage, pageSize).then((value) => {
      if (value && value.data) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setPrices(value.data.content);
      } else {
        setPrices(null);
      }
    });
  };
  const onChangeBranch = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getBranchPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        setPrices(value.data.content);
      } else {
        setPrices(null);
      }
    });
  };
  return (
    <Table
      title={TitleHeader}
      columns={columns}
      //   scroll={{ x: 1500, y: 400 }}
      dataSource={prices}
      scroll={{ y: 310 }}
      pagination={{
        total: total,

        pageSizeOptions: ["5", "10", "20", "50", "100"],

        showTotal: (total) => `Total ${total}`,

        showSizeChanger: true,

        onChange: (page, pageSize) => {
          // console.log(page+" "+pageSize);
          onChangeBranch(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getBranches();
          });
        },
      }}
    />
  );
};
export default Filial;
