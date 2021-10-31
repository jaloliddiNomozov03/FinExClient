import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/registerBonus';

export const getRegisterBankBonusPage = (page = 0, size = 0) =>{
    const config = {
        method: page,
        url:`${BASE_URL}/getPage?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
}