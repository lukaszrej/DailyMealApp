import {allUserActionTypes, USER} from './User.types';

export const initialState = {
    name: "",
    height: "",
    weight: "",
    age: "",
    gender: "male"
};

export const UserReducer = (state = initialState, action: allUserActionTypes) => {
    switch (action.type) {
        case USER:
            return {
                ...state,
                name: action.name,
                height: action.height,
                weight: action.weight,
                age: action.age,
                gender: action.gender
            }
        default:
            return state
    }
};