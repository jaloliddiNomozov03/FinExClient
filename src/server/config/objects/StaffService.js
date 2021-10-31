import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/staff';

export const getStaffList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };
    return HttpRequestHub(config);
};

export const saveStaff =(company)=>{
    const config = {
        method: 'POST',
        data: company,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};

export const getStaffPage=(page=0, size=10) =>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const deleteStaff = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
