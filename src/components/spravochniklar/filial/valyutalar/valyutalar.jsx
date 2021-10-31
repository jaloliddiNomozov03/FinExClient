import { notification, Table } from "antd";
import HeaderValyutalar from "./headerValyutalar";
import { useState, useEffect } from "react";
import {
  deleteCurrency,
  getCurrencyPage,
} from "../../../../server/config/objects/CurrencyService";

const Valyutalar = () => {
  const [prices, setPrices] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => <HeaderValyutalar getCurrency={getCurrency} />;

  useEffect(() => {
    getCurrency();
  }, []);

  const deleteCurrencyById = (record) => {
    deleteCurrency(record.id).then((value) => {
      if (value && value.data.success) {
        getCurrency();
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

  const columns = [
    { title: "Description", dataIndex: "name", key: "name", fixed: "left" },
    { title: "Rate", dataIndex: "rate", key: "rate", width: 100 },
    { title: "Code", dataIndex: "code", key: "code", width: 100 },
    {
      title: "Action",
      dataIndex: "",
      width: 90,
      fixed: "right",
      key: "x",
      render: (record) => (
        <button onClick={() => deleteCurrencyById(record)}>Delete</button>
      ),
    },
  ];
  const getCurrency = () => {
    getCurrencyPage(currentPage, pageSize).then((value) => {
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
    getCurrencyPage(page - 1, pageSize).then((value) => {
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
            getCurrency();
          });
        },
      }}
    />
  );
};
export default Valyutalar;
