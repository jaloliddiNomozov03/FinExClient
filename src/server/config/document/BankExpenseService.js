import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/bankExpense';

export const getBankExpenseList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getBankExpensePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getBankExpenseWithPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveBankExpense =(bankExpense)=>{
    const config = {
        method: 'POST',
        data: bankExpense,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteBankExpense = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/delete/${id}`
    };
    return HttpRequestHub(config);
};
