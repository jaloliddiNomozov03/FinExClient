import {HttpRequestHub} from "../../HttpRequestHub";
// import axios from "axios";
// import {host, port} from "../../host";


const BASE_URL = '/api/v1/warehouse';

export const getWarehouseList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};

export const getWarehousePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};
export const getWarehouseList = () => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};

export const saveWarehouse =(warehouse)=>{
    const config = {
        method: 'POST',
        data: warehouse,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteWarehouse = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
