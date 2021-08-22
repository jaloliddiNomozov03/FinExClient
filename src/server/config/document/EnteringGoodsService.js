import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/documentEnteringGoods';

// export const getEnteringGoodsList=()=>{
//     const config = {
//         method: 'GET',
//         url: `${BASE_URL}/list`,
//     };
//
//     return HttpRequestHub(config);
// };
export const getEnteringGoodsPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveEnteringGoods =(enteringGoods)=>{
    const config = {
        method: 'POST',
        data: enteringGoods,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteEnteringGoods = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
