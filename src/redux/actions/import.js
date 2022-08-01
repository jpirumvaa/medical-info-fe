import { types } from "../types";

export const importData = () => dispatch => {
    return dispatch({
        type: types.IMPORT_HEADER
    })
}