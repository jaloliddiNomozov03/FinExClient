import { HttpRequestHub } from '../HttpRequestHub';


export const getUserInfo = () => {
    const config = {
        method: 'GET',
        url: `/api/auth/userInfo`,
    };
    return HttpRequestHub(config);
};
// /api/client/file/preview/{hashCode}
export const getFile = (id) => {
    const config = {
        method: 'GET',
        url: `/api/auth/file/${id}`,
    };
    return HttpRequestHub(config);
};