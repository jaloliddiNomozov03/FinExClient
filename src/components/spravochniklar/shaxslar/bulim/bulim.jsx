import { useState, useEffect } from "react";
import {notification, Table} from "antd";
import HeaderBulim from "./headerBulim";
import {deleteSection, getSectionPage} from "../../../../server/config/objects/SectionService";


const Bulim = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [total, setTotal] = useState(null);
  const [pageSize, setPageSize] = useState(10);
    useEffect(()=>{
        getSection();
    },[]);
  const deleteSectionById=(record)=>{
    deleteSection(record.id).then(value => {
      if (value && value.data.success){
        getSection();

        notification['success']({
          message:'Data success deleted!',
          description: `${record.name} deleted!`
        });
      }else if (record.id){
        notification['error']({
          message:'Data error!',
          description: `${record.key} not found!`
        })
      }else {
        notification['error']({
          message:'Data error!',
          description: `Don't delete!`
        })
      }


    })
  };

  const getSection=()=>{
    getSectionPage(currentPage, pageSize).then(value => {
      if (value && value.data && value.data.content){
        setTotal(value.data.totalElements);
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content);

      }else {
        setData(null)
      }
    })
  };
  const onChangePage=(page, pageSize)=>{
    setPageSize(pageSize);
    setCurrentPage((page-1));
    getSectionPage(page-1, pageSize).then(value => {
      if (value && value.data){
        setCurrentPage(value.data.pageable.pageNumber);
        setData(value.data.content)
      }else {
        setData(null)
      }
    })
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
            render: (record) => <button onClick={()=>deleteSectionById(record)}>Delete</button>,
        },
    ];
  return (
      <>
        <HeaderBulim getSection={getSection}/>
        <Table className="table"
               columns={columns}
               dataSource={data}
               scroll={{ y: 310 }}
               pagination={{
                 total: total,

                 pageSizeOptions: ['5', '10', '20', '50', '100'],

                 showTotal: total => `Total ${total}`,

                 showSizeChanger: true,

                 onChange: ((page, pageSize)=>{
                   // console.log(page+" "+pageSize);
                   onChangePage(page, pageSize);
                 }),
                 onShowSizeChange: (pageSize)=>{
                   setPageSize({pageSize},()=>{
                     getSection();
                   });
                 },
               }}

        />
    </>
  );
};
export default Bulim;
