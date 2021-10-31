import {HttpRequestHub} from "../../HttpRequestHub";

const BASE_URL = '/api/v1/nomenclature';

export const getNomenclatureList=()=>{
    const config = {
        method: 'GET',
        url: `${BASE_URL}/idList`
    };
    return HttpRequestHub(config);
};

export const getNomenclaturePage = (page=0, size=10) => {
    const config = {
        method: 'GET',
        url: `${BASE_URL}/all?page=${page}&size=${size}`
    };
    return HttpRequestHub(config);
};

export const saveNomenclature =(nomenclature)=>{
    const config = {
        method: 'POST',
        data: nomenclature,
        url: `${BASE_URL}`
    };
    return HttpRequestHub(config);
};
export const deleteNomenclature = (id) => {
    const config = {
        method: 'DELETE',
        url: `${BASE_URL}/${id}`
    };
    return HttpRequestHub(config);
};
