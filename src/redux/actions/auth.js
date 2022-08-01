import http from "../../utils/axios/axios";
import { types } from "./types";

export const login = (data, history) => dispatch => {
    dispatch({ type: types.AUTH_LOADING });
    return http.post("/login", data)
        .then(res => {
            // console.log("The response from login is:", res)
            if (res.data.status === 200) {
                document.cookie = `token=${res.data.data}`
                dispatch({
                    type: types.LOGIN_SUCCESS,
                    authToken: res.data.data,
                    message: res.data.message
                });
                history('/data')
            }
            else {
                dispatch({
                    type: types.LOGIN_ERROR,
                    error: res.data
                });
            }
        })
        .catch(err => {
            dispatch({
                type: types.LOGIN_ERROR,
                error: err
                // payload: err.data.message ? err.data.message : "Error occured"
            })
        })
}
export const signup = (data, history) => dispatch => {
    dispatch({ type: types.AUTH_LOADING });
    return http.post("/register", data)
        .then(res => {
            history('/')
            dispatch({
                type: types.SIGNUP_SUCCESS,
                user: res.data,
                message: res.message
                // authToken: res.data
            });
        })
        .catch(err => {
            dispatch({
                type: types.SIGNUP_ERROR,
                error: err
                // payload: err.data.message ? err.data.message : "Error occured"
            })
        })
}