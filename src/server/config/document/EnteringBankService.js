import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/enteringBank';

export const getEnteringBankList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getEnteringBankPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveEnteringBank =(enteringBank)=>{
    const config = {
        method: 'POST',
        data: enteringBank,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteEnteringBank = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
