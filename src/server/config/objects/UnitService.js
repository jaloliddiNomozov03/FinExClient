import {HttpRequestHub} from "../../HttpRequestHub";
// import axios from "axios";
// import {host, port} from "../../host";


const BASE_URL = '/api/v1/unit';

export const getUnitPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveUnit =(unitObj)=>{
    const config = {
        method: 'POST',
        data: unitObj,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteUnit = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};