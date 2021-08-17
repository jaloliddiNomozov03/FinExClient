import {HttpRequestHub} from "../../HttpRequestHub";


const BASE_URL = '/api/v1/expenditureType';

export const getExpenseTypeList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};

export const getExpenditureTypePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveExpenditureType =(expenditureType)=>{
    const config = {
        method: 'POST',
        data: expenditureType,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteExpenditureType = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
