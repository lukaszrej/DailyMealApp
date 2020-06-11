import {UserAction, USER} from "./User.types";

export const createUser = ({name, height, weight, age, gender}: UserAction) => {

    return (dispatch: Function) => {
        dispatch({
            type: USER,
            name, height, weight, age, gender
        })
    }
};