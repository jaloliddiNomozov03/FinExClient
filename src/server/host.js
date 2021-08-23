import axios from 'axios';
import { getCookie } from "../utils/useCookie";
export const userAccessTokenName = "ZUMWSUQUN";

export const token = getCookie(userAccessTokenName);

export let host = "https://ssgroup-finex-app.herokuapp.com";
// export let host = "http://localhost";
export let port = "9000";

export let headers = {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json; charset=utf-8',
    // 'Authorization': token ?`Bearer ${token}`:''
};
export let axiosInstance = axios.create({
    baseURL: `${host}:${port}`,
    headers,
    timeout: 30000,
});
