import { useState, useEffect } from "react";
import { notification, Table } from "antd";
import HeaderKontragent from "./headerKontragent";
import {
  deleteCounterParty,
  getCounterPartyPage,
} from "../../../../server/config/objects/CounterpartyService";

const Kontragent = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);

  const TitleHeader = () => (
    <HeaderKontragent getCounterparty={getCounterparty} />
  );

  useEffect(() => {
    getCounterparty();
  }, []);
  const deleteCounterPartyById = (record) => {
    deleteCounterParty(record.id).then((value) => {
      if (value && value.data.success) {
        getCounterparty();
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

  const getCounterparty = () => {
    getCounterPartyPage(currentPage, pageSize).then((value) => {
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
    getCounterPartyPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    {
      title: "Ismi",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      width: "26%",
    },
    { title: "Code", dataIndex: "code", key: "code", width: "7%" },
    { title: "Manzil", dataIndex: "address", key: "address " },
    {
      title: "Tel raqam",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: "15%",
    },
    { title: "Info", dataIndex: "info", key: "info" },
    {
      title: "Action",
      dataIndex: "",
      width: 90,
      fixed: "right",
      key: "x",
      render: (record) => (
        <button onClick={() => deleteCounterPartyById(record)}> Delete </button>
      ),
    },
  ];
  return (
    <Table
      className="table"
      columns={columns}
      title={TitleHeader}
      //   scroll={{ x: 1500, y: 400 }}
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
            getCounterparty();
          });
        },
      }}
    />
  );
};
export default Kontragent;
