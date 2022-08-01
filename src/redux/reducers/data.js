import { types } from "../actions/types";

const initialState = {
    message: null,
    error: null,
    loading: false,
    data: []
};

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case types.DATA_LOADING:
            return {
                ...state,
                loading: true
            };
        case types.DATA_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
                message: action.message
            };
        case types.DATA_ERROR:
            return {
                ...state,
                error: action.error,
            };
        default:
            return state;
    }
}