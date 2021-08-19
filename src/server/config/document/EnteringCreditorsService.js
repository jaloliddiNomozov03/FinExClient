import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/entering-creditors';

export const getEnteringCreditorsList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getEnteringCreditorsPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveEnteringCreditors =(enteringCreditors)=>{
    const config = {
        method: 'POST',
        data: enteringCreditors,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteEnteringCreditors = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
