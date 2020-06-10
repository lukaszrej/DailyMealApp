import {START} from "./Start.types";

export const start = (started: any) => {
    console.log('dispatch an action start | Start.actions.ts');
    console.log(started, 'started from Start.tsx');

    return (dispatch: Function) => {
        dispatch({
            type: START,
            payload: started
        })
    }
};