import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/moving-goods';

// export const getMovingGoodsList=()=>{
//     const config = {
//         method: 'GET',
//         url: `${BASE_URL}/list`,
//     };
//
//     return HttpRequestHub(config);
// };
export const getMovingGoodsPage = (page=0, size=10) => {
    const config = {
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`,
        method: 'GET'
    };
    return HttpRequestHub(config);
};

export const saveMovingGoods =(movingGoods)=>{
    const config = {
        method: 'POST',
        data: movingGoods,
        url: `${BASE_URL}/save`
    };
    return HttpRequestHub(config);
};
export const deleteMovingGoods = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
