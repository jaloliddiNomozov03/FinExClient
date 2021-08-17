import {HttpRequestHub} from "../../HttpRequestHub";
// import axios from "axios";
// import {host, port} from "../../host";


const BASE_URL = '/api/v1/priceType';

export const getPricesList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};

export const getPricePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const savePrice =(priceType)=>{
    const config = {
        method: 'POST',
        data: priceType,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deletePrice = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
