import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/inventory';

// export const getInventoryList=()=>{
//     const config = {
//         method: 'GET',
//         url: `${BASE_URL}/list`,
//     };
//
//     return HttpRequestHub(config);
// };
export const getInventoryPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveInventory =(inventory)=>{
    const config = {
        method: 'POST',
        data: inventory,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteInventory = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
