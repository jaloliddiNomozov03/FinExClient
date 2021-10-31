import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/currency';

export const getCurrencyPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};
export const getCurrencyList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};
export const saveCurrency =(currency)=>{
    const config = {
        method: 'POST',
        data: currency,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteCurrency = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
