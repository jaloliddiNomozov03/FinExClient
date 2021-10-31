import {HttpRequestHub} from "../../HttpRequestHub";
import {getCookie} from "../../../utils/useCookie";
import {userAccessTokenName} from "../../host";
const token = getCookie(userAccessTokenName);
const BASE_URL='/api/client';

export const paymentSave=(payment)=>{
    const config = {
        method: 'POST',
        url: `${BASE_URL}/payment/save`,
        data: payment,
        headers: {
            'X-Requested-With': 'XMLHttpRequest',
            'Content-Type': 'application/json; charset=utf-8',
            'Authorization': token ? `Bearer ${token}` : ''
        }
    };
    return HttpRequestHub(config);
};
export const paymentDetailSave=(paymentDetail)=>{
    const config = {
        method: 'POST',
        url: `${BASE_URL}/paymentDetail/save`,
        data: paymentDetail,
    };
    return HttpRequestHub(config);
};
export const getUserPaymentsHistoryList = (userId) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/paymentDetail/getByAllUserIdOfPayment/${userId}`
    };
    return HttpRequestHub(config);
};