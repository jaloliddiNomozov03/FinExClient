import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/registerCosts';

export const getRegisterCostPage = (page = 0, size = 10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/getPage?page=${page}&size=${size}`,
    };
    return HttpRequestHub(config);
}