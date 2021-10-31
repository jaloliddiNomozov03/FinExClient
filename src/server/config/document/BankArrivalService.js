import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/bankArrival';

export const getBankArrivalList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };
    return HttpRequestHub(config);
};
export const getBankArrivalPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveBankArrival =(bankArrival)=>{
    const config = {
        method: 'POST',
        data: bankArrival,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteBankArrival = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/delete/${id}`
    };
    return HttpRequestHub(config);
};
