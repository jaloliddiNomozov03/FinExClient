import {HttpRequestHub} from "../../HttpRequestHub";


const BASE_URL = '/api/v1/counterpart';
export const getCounterpartList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };
    return HttpRequestHub(config);
};
export const getCounterPartyPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveCounterParty =(counterParty)=>{
    const config = {
        method: 'POST',
        data: counterParty,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteCounterParty = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
