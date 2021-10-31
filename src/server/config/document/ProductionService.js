import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/production';

export const getProductionList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };
    return HttpRequestHub(config);
};
export const getProductionPage = (page=0, size=10) => {
    const config = {
        url: `${BASE_URL}/all?page=${page}&size=${size}`,
        method: 'GET'
    };
    return HttpRequestHub(config);
};

export const saveProduction =(object)=>{
    const config = {
        method: 'POST',
        data: object,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteProduction = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
