import { Table } from "antd";
import './bank.css';
const columns = [
    { title: "1", dataIndex: "1", key: "1", width: '15vh'  }, 
    { title: "2 ", dataIndex: "2", key: "2", },
    { title: "3 ", dataIndex: "3", key: "3",  },
    { title: "4 ", dataIndex: "4", key: "4", },
    { title: "5", dataIndex: "5", key: "5",  },
    { title: "6", dataIndex: "6", key: "6",  },
    { title: "7", dataIndex: "7", key: "7",  },
    { title: "8", dataIndex: "8", key: "8",  },
    { title: " 9 ", dataIndex: "9", key: "9",  },
    { title: " 10 ", dataIndex: "10", key: "10",  },
    { title: " 11 ", dataIndex: "11", key: "11",  },
    { title: " 12 ", dataIndex: "12", key: "12",  },
    { title: " 13 ", dataIndex: "13", key: "13",  },
    { title: " 14 ", dataIndex: "14", key: "14",  },
];

const data = [

  {
    key: 1,
    1: 'N',
    2: '',
    3: 'summa',
    4: '',
    5: '',
    6: 'UZS',
    7: 'summa',
    8: 'UZS',
    9: 'summa',
    10: 'summa',
    11: 'summa',
    12: 'summa',
    13: 'summa',
    14: 'summa',
   
   
    
  },
];

const Bank = () => {
  return (
    <Table className='Jadval'
      columns={columns}
      dataSource={data}
    />
  );
};
export default Bank;
