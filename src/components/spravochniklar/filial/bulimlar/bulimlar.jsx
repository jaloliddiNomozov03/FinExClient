import { notification, Table } from "antd";
import HeaderBulimlar from "./headerBulimlar";
import { useState, useEffect } from "react";
import {
  deleteSections,
  getSectionsPage,
} from "../../../../server/config/objects/SectionsService";
import { getBranchesList } from "../../../../server/config/objects/BranchService";

const Bulimlar = () => {
  const [data, setData] = useState([]);
  const [branch, setBranch] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => (
    <HeaderBulimlar getSections={getSections} branch={branch} />
  );

  useEffect(() => {
    getSections();
    getBranches();
  }, []);
  const deleteSectionsById = (record) => {
    deleteSections(record.id).then((value) => {
      if (value && value.data.success) {
        getSections();
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

  let sections = {
    name: "",
    branch: "",
    branchId: "",
    id: "",
    code: null,
  };
  let sectionsList = [];
  const getBranches = () => {
    getBranchesList().then((value) => {
      console.log(value);
      if (value && value.data) {
        setBranch(value.data);
      }
    });
  };
  const getSections = () => {
    getSectionsPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        for (let i = 0; i < value.data.content.length; i++) {
          sections.name = value.data.content[i].name;
          sections.branch = value.data.content[i].branch.name;
          sections.branchId = value.data.content[i].branch.id;
          sections.id = value.data.content[i].id;
          sections.code = value.data.content[i].code;
          sectionsList.push(sections);
          sections = {};
        }
        setData(sectionsList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getSectionsPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        sectionsList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          sections.name = value.data.content[i].name;
          sections.branch = value.data.content[i].branch.name;
          sections.branchId = value.data.content[i].branch.id;
          sections.id = value.data.content[i].id;
          sections.code = value.data.content[i].code;
          sectionsList.push(sections);
          sections = {};
        }
        setData(sectionsList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Description", dataIndex: "name", key: "name", width: 110},
    { title: "Code", dataIndex: "code", key: "code" },
    { title: "Filial", dataIndex: "branch", key: "branch" },
    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      width: 100,
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
      scroll={{ x: 400 }}
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
            getSections();
          });
        },
      }}
    />
  );
};
export default Bulimlar;
