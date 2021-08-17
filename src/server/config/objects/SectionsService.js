import {HttpRequestHub} from "../../HttpRequestHub";
// import axios from "axios";
// import {host, port} from "../../host";


const BASE_URL = '/api/v1/sections';
export const getSectionsList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};

export const getSectionsPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveSections =(sections)=>{
    const config = {
        method: 'POST',
        data: sections,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteSections = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
