import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/cashBox';

export const getCashBoxList = ()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };
    return HttpRequestHub(config);
};

export const getCashBoxPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveCashBox =(cashBox)=>{
    const config = {
        method: 'POST',
        data: cashBox,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteCashBox = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
