import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/salary-calculation';

export const getWholesaleList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getSalaryCalculationPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveSalaryCalculation =(costs)=>{
    const config = {
        method: 'POST',
        data: costs,
        url: `${BASE_URL}/`
    };
    return HttpRequestHub(config);
};
export const deleteSalaryCalculation = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
