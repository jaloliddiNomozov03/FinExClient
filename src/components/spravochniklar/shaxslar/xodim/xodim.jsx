import { useState, useEffect } from "react";
import {notification, Table} from "antd";
import HeaderXodim from "./headerXodim";
import {deleteStaff, getStaffPage} from "../../../../server/config/objects/StaffService";


const Xodim = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
  useEffect(() => {
    getEmployees();
  }, []);

  const deleteStaffById = (record) => {
    deleteStaff(record.id).then((value) => {
      if (value && value.data.success) {
        getEmployees();
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

  let section = {
    name: "",
    code: null,
    section: "",
    position: "",
    address: "",
    phoneNumber: "",
  };
  let sectionList = [];
  const getEmployees = () => {
    getStaffPage(currentPage, pageSize).then((value) => {
      if (value && value.data) {
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        for (let i = 0; i < value.data.content.length; i++) {
          section.name = value.data.content[i].name;
          section.code = value.data.content[i].code;
          section.section = value.data.content[i].section.name;
          section.position = value.data.content[i].position;
          section.address = value.data.content[i].address;
          section.phoneNumber = value.data.content[i].phoneNumber;
          sectionList.push(section);
          section ={};
        }
        setData(sectionList);
      } else {
        setData(null);
      }
    });
  };
  const onChangePrice = (page, pageSize) => {
    setPageSize(pageSize);
    setCurrentPage(page - 1);
    getStaffPage(page - 1, pageSize).then((value) => {
      if (value && value.data) {
        setCurrentPage(value.data.pageable.pageNumber);
        sectionList = [];
        for (let i = 0; i < value.data.content.length; i++) {
          section.name = value.data.content[i].name;
          section.code = value.data.content[i].code;
          section.section = value.data.content[i].section.name;
          section.position = value.data.content[i].position;
          section.address = value.data.content[i].address;
          section.phoneNumber = value.data.content[i].phoneNumber;
          sectionList.push(section);
          section ={};
        }
        setData(sectionList);
      } else {
        setData(null);
      }
    });
  };
  const columns = [
    { title: "Ismi", dataIndex: "name", key: "name", fixed: "left", width: '26%' },
    { title: "Code", dataIndex: "code", key: "code", width: '7%'  },
    { title: "Bulim", dataIndex: "section", key: "section"  },
    { title: "Lavozim", dataIndex: "position", key: "position"  },
    { title: "Manzil", dataIndex: "address", key: "address"  },
    { title: "Tel raqam", dataIndex: "phoneNumber", key: "phoneNumber", width:"15%"  },
    {
      title: "Action",
      dataIndex: "",
      width: 90,
      fixed: "right",
      key: "x",
      render: (record) => <button onClick={()=>deleteStaffById(record)}> Delete </button>,
    },
  ];

  return (
      <>
        <HeaderXodim getEmployees={getEmployees}/>
        <Table className="table"
              columns={columns}
            //   scroll={{ x: 1500, y: 400 }}
              dataSource={data}
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
                     getEmployees();
                   });
                 },
               }}
        />
    </>
  );
};
export default Xodim;
