import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/returnOfGoodsToTheSupplier';

export const getGoodsToTheSupplierList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/list`,
    };

    return HttpRequestHub(config);
};
export const getGoodsToTheSupplierPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveGoodsToTheSupplier =(costs)=>{
    const config = {
        method: 'POST',
        data: costs,
        url: `${BASE_URL}/`
    };
    return HttpRequestHub(config);
};
export const deleteGoodsToTheSupplier = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
