import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/cashRegisterExpense';

export const getCashRegisterExpenseList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getCashRegisterExpensePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveCashRegisterExpense =(cashRegisterExpense)=>{
    const config = {
        method: 'POST',
        data: cashRegisterExpense,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteCashRegisterExpense = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
