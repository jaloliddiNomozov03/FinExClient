import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/entering-debtors';

export const getEnteringDebtorsList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getEnteringDebtorsPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveEnteringDebtors =(enteringDebtors)=>{
    const config = {
        method: 'POST',
        data: enteringDebtors,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteEnteringDebtors = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
