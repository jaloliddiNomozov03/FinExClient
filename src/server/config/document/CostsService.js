import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/costs';

export const getCostsList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getCostsPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getCostsWithPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveCosts =(costs)=>{
    const config = {
        method: 'POST',
        data: costs,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteCosts = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/delete/${id}`
    };
    return HttpRequestHub(config);
};
