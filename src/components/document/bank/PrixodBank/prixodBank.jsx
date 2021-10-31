import React, { useState, useEffect } from "react";
import { Button, notification, Table, Checkbox } from "antd";
import HeaderBank from "./headerBank";
import {
  deleteBankArrival,
  getBankArrivalPage,
} from "../../../../server/config/document/BankArrivalService";

const PrixodBank = () => {
  const [data, setData] = useState([]);
  // const [branch, setBranch] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getBankArrivals();
  }, []);
  const deleteBankArrivalById = (record) => {
    deleteBankArrival(record.id).then((value) => {
      if (value && value.data.success) {
        getBankArrivals();
        notification["success"]({
          message: "Data success deleted!",
          description: `${record.code} deleted!`,
        });
      } else if (record.id) {
        notification["error"]({
          message: "Data error!",
          description: `${record.code} not found!`,
        });
      } else {
        notification["error"]({
          message: "Data error!",
          description: `Don't delete!`,
        });
      }
    });
  };

  let objectBank = {
    responsible: "",
    retailAmount: "",
    objectBankAccount: "",
    sumDP: "",
    isCounterParty: null,
    isConstanta: null,
    date: "",
    sumEnumeration: "",
    sumCounterParty: "",
    percentEnumeration: "",
    objectCompany: "",
    sections: "",
    objectCounterParty: "",
    currency: "",
    branch: "",
    comment: "",
    id: "",
    code: null,
  };
  let bankArrivalList = [];

  const getBankArrivals = () => {
    getBankArrivalPage(currentPage, pageSize).then((value) => {
      if (value && value.data && value.data.content) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          objectBank.responsible = value.data.content[i].responsibleName;
          objectBank.retailAmount = value.data.content[i].retailAmount;
          objectBank.objectBankAccount =
            value.data.content[i].objectBankAccountName;
          objectBank.sumDP = value.data.content[i].sumDP;
          objectBank.isCounterParty = value.data.content[i].isCounterParty;
          objectBank.isConstanta = value.data.content[i].isConstanta;
          objectBank.date = value.data.content[i].date;
          objectBank.sumEnumeration = value.data.content[i].sumEnumeration;
          objectBank.sumCounterParty = value.data.content[i].sumCounterParty;
          objectBank.percentEnumeration =
            value.data.content[i].percentEnumeration;
          objectBank.objectCompany = value.data.content[i].objectCompanyName;
          objectBank.sections = value.data.content[i].sectionsName;
          objectBank.objectCounterParty =
            value.data.content[i].objectCounterPartyName;
          objectBank.currency = value.data.content[i].currencyName;
          objectBank.branch = value.data.content[i].branchName;
          objectBank.comment = value.data.content[i].comment;
          objectBank.id = value.data.content[i].id;
          objectBank.code = value.data.content[i].code;
          bankArrivalList.push(objectBank);
          objectBank = {};
        }
        setData(bankArrivalList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePage = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getBankArrivalPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        // setData(value.data.content);
        bankArrivalList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          objectBank.responsible = value.data.content[i].responsibleName;
          objectBank.retailAmount = value.data.content[i].retailAmount;
          objectBank.objectBankAccount =
            value.data.content[i].objectBankAccountName;
          objectBank.sumDP = value.data.content[i].sumDP;
          objectBank.isCounterParty = value.data.content[i].isCounterParty;
          objectBank.isConstanta = value.data.content[i].isConstanta;
          objectBank.date = value.data.content[i].date;
          objectBank.sumEnumeration = value.data.content[i].sumEnumeration;
          objectBank.sumCounterParty = value.data.content[i].sumCounterParty;
          objectBank.percentEnumeration =
            value.data.content[i].percentEnumeration;
          objectBank.objectCompany = value.data.content[i].objectCompanyName;
          objectBank.sections = value.data.content[i].sectionsName;
          objectBank.objectCounterParty =
            value.data.content[i].objectCounterPartyName;
          objectBank.currency = value.data.content[i].currencyName;
          objectBank.branch = value.data.content[i].branchName;
          objectBank.comment = value.data.content[i].comment;
          objectBank.id = value.data.content[i].id;
          objectBank.code = value.data.content[i].code;
          bankArrivalList.push(objectBank);
          objectBank = {};
        }
        setData(bankArrivalList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Data", dataIndex: "date", key: "date" },
    { title: "Code ", dataIndex: "code", key: "code" },
    { title: "RetailAmount ", dataIndex: "retailAmount", key: "retailAmount" },
    {
      title: "Bank Xisob Raqamlari",
      dataIndex: "objectBankAccount",
      key: "objectBankAccount",
    },
    { title: "SumDP", dataIndex: "sumDP", key: "sumDP" },
    {
      title: "isCounterParty",
      dataIndex: "isCounterParty",
      key: "isCounterParty",
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    {
      title: "isConstanta",
      dataIndex: "isConstanta",
      key: "isConstanta",
      render: (record) => <Checkbox type="checkbox" checked={record} />,
    },
    {
      title: "SumEnumeration",
      dataIndex: "sumEnumeration",
      key: "sumEnumeration",
    },
    {
      title: "SumCounterParty",
      dataIndex: "sumCounterParty",
      key: "sumCounterParty",
    },
    {
      title: "PercentEnumeration",
      dataIndex: "percentEnumeration",
      key: "percentEnumeration",
    },
    // { title: "Kontragent", dataIndex: "kontragent", key: "kontragent",  },
    { title: "Firma", dataIndex: "objectCompany", key: "objectCompany" },
    { title: "Bulim", dataIndex: "sections", key: "sections" },
    {
      title: "objectCounterParty",
      dataIndex: "objectCounterParty",
      key: "objectCounterParty",
    },
    { title: "currency", dataIndex: "currency", key: "currency" },
    { title: "branch", dataIndex: "branch", key: "branch" },
    { title: "comment", dataIndex: "comment", key: "comment" },
    { title: "Responsible", dataIndex: "responsible", key: "responsible" },

    {
      title: "Action",
      dataIndex: "",
      fixed: "right",
      key: "x",
      // width: '7%',
      render: (record) => (
        <Button onClick={() => deleteBankArrivalById(record)}>Delete</Button>
      ),
    },
  ];
  const TitleHeader = () => <HeaderBank getBankArrivals={getBankArrivals} />;
  return (
    <Table
      className="Jadval"
      columns={columns}
      // scroll={{ x: 2000, y: 400 }}
      dataSource={data}
      title={TitleHeader}
      scroll={{ y: 360, x: 2600 }}
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
            getBankArrivals();
          });
        },
      }}
    />
  );
};
export default PrixodBank;
