import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/wholesale';

export const getWholesaleList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getWholasalePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveWholasale =(costs)=>{
    const config = {
        method: 'POST',
        data: costs,
        url: `${BASE_URL}/`
    };
    return HttpRequestHub(config);
};
export const deleteWholasale = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
