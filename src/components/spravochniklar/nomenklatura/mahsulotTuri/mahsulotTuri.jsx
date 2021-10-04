import { Table, notification, Button } from "antd";
import HeaderMahsulotTuri from "./headerMahsulotTuri";
import { useEffect, useState } from "react";
import {
  deleteProduct,
  getPage,
} from "../../../../server/config/objects/ProductTypeService";

const MahsulotTuri = (props) => {
  const columns = [
    { title: "Description", dataIndex: "name", key: "name", width: 90 },
    { title: "Code", dataIndex: "code", key: "code", width: 90 },
    {
      title: "Action",
      dataIndex: "",
      width: 60,
    //   fixed: "right",
      key: "x",
      render: (record) => (
        <Button
          type="primary"
          onClick={() => {
            deleteProduct(record.key).then((value) => {
              if (value && value.data) {
                getList();
                notification["success"]({
                  message: "Data success deleted!",
                  description: `${record.name} deleted!`,
                });
              } else if (record.key) {
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
          }}
        >
          {" "}
          Delete{" "}
        </Button>
      ),
    },
  ];

  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => <HeaderMahsulotTuri getList={getList} />;

  useEffect(() => {
    getList();
  }, []);

  const getList = () => {
    // console.log(currentPage+" "+ pageSize);
    getPage(currentPage, pageSize).then((value) => {
      if (value && value.data) {
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
    getPage(page - 1, pageSize).then((value) => {
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
      size="small"
      title={TitleHeader}
      columns={columns}
      scroll={{ x: 400 }}
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
            getList();
          });
        },
      }}
    />
  );
};
export default MahsulotTuri;
