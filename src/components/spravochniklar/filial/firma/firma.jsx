import { useState, useEffect } from "react";
import { notification, Table } from "antd";
import HeaderFirma from "./headerFirma";
import {
  deleteCompany,
  getCompanyPage,
} from "../../../../server/config/objects/CompanyService";

const Firma = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => <HeaderFirma getCompanies={getCompanies} />;

  useEffect(() => {
    getCompanies();
  }, []);

  const deleteCompanyById = (record) => {
    deleteCompany(record.id).then((value) => {
      if (value && value.data.success) {
        getCompanies();

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

  const getCompanies = () => {
    getCompanyPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getCompanyPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      } else {
        setData(null);
      }
    });
  };
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
        <button onClick={() => deleteCompanyById(record)}>Delete</button>
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
          // console.log(page+" "+pageSize);
          onChangePage(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getCompanies();
          });
        },
      }}
    />
  );
};
export default Firma;
