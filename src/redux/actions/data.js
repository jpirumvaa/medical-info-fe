import nodehttp from "../../utils/axios/nodeHttp";
import { types } from "./types";

const token = sessionStorage.getItem('token')

export const getData = () => dispatch => {
    dispatch({ type: types.DATA_LOADING });
    return nodehttp.get("/api/medInfo",
        { headers: { "auth-token": `${token}` } }
    )
        .then(res => {
            dispatch({
                type: types.DATA_SUCCESS,
                data: res.data.data,
                message: res.message
            });
        })
        .catch(err => {
            dispatch({
                type: types.DATA_ERROR,
                error: err
            })
        })
}
export const uploadData = (data, tag) => dispatch => {
    dispatch({ type: types.DATA_LOADING });
    data.forEach(item => {
        delete item.id
        delete item.newId
        item["tag"] = tag.toLowerCase()
    })
    return nodehttp.post("/api/medInfo",
        { data },
        { headers: { "auth-token": `${token}` } }
    )
        .then(res => {
            dispatch({
                type: types.DATA_SUCCESS,
                data: res.data.data,
                message: res.message
            });
        })
        .catch(err => {
            dispatch({
                type: types.DATA_ERROR,
                error: err
            })
        })
}
