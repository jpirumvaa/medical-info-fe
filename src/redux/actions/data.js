import nodehttp from "../../utils/axios/nodeHttp";
import { types } from "./types";

export const getData = () => dispatch => {
    dispatch({ type: types.DATA_LOADING });
    const token = document.cookie.split(";")[1].split("=")[1];
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
