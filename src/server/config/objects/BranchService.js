import {HttpRequestHub} from "../../HttpRequestHub";
// import axios from "axios";
// import {host, port} from "../../host";


const BASE_URL = '/api/v1/branch';

export const getBranchesList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`
    };
    return HttpRequestHub(config);
};

export const getBranchPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveBranch =(branch)=>{
    const config = {
        method: 'POST',
        data: branch,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteBranch = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
