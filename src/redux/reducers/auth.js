import { types } from "../actions/types";

const initialState = {
    message: null,
    error: null,
    loading: false,
    user: null,
    authToken: null,
    isAuthenticated: false,
};

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.AUTH_LOADING:
            return {
                ...state,
                loading: true
            };
        case types.LOGIN_SUCCESS:
            return {
                ...state,
                authToken: action.authToken,
                loading: false,
                message: action.message
            };
        case types.SIGNUP_SUCCESS:
            return {
                ...state,
                message: action.message,
                user: action.user,
                loading: false
            };
        case types.LOGIN_ERROR:
            return {
                ...state,
                error: action.error,
            };
        case types.SIGNUP_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}
