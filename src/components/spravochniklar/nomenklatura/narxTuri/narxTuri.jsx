import { notification, Table } from "antd";
import HeaderNarxTuri from "./headerNarxTuri";
import {
  getPricePage,
  deletePrice,
} from "../../../../server/config/objects/PriceTypeService";
import { useState, useEffect } from "react";

const NarxTuri = () => {
  const [prices, setPrices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  const TitleHeader = () => <HeaderNarxTuri getPageList={getPrices} />;
  useEffect(() => {
    getPrices();
  }, []);

  const deletePriceById = (record) => {
    deletePrice(record.id).then((value) => {
      if (value && value.data.success) {
        getPrices();
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
        <button onClick={() => deletePriceById(record)}>Delete</button>
      ),
    },
  ];
  const getPrices = () => {
    getPricePage(currentPage, pageSize).then((value) => {
      if (value && value.data) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setPrices(value.data.content);
      } else {
        setPrices(null);
      }
    });
  };
  const onChangePrice = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getPricePage(page - 1, pageSize).then((value) => {
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
          onChangePrice(page, pageSize);
        },
        onShowSizeChange: (pageSize) => {
          setPageSize({ pageSize }, () => {
            getPrices();
          });
        },
      }}
    />
  );
};
export default NarxTuri;
