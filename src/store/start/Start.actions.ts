import {START} from "./Start.types";

export const start = (started: boolean) => {
    return (dispatch: Function) => {
        dispatch({
            type: START,
            payload: started
        })
    }
};