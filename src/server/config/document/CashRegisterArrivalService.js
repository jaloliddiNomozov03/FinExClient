import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/cashRegisterArrival';

// export const getCashRegisterArrivalList=()=>{
//     const config = {
//         method: 'GET',
//         url: `${BASE_URL}/list`,
//     };
//
//     return HttpRequestHub(config);
// };
export const getCashRegisterArrivalPage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveCashRegisterArrival =(cashRegisterArrival)=>{
    const config = {
        method: 'POST',
        data: cashRegisterArrival,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteCashRegisterArrival = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
