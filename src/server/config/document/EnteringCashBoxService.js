import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/entering-cash-box';

export const getEnteringCashBoxList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getEnteringCashBoxPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveEnteringCashBox =(enteringCashBox)=>{
    const config = {
        method: 'POST',
        data: enteringCashBox,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteEnteringCashBox = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
