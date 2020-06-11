// action constants
export const USER = "USER";

// types
export interface UserAction {
    type?: typeof USER;
    name: string;
    height: string;
    weight: string;
    age: string;
    gender: string;
}

export type allUserActionTypes =
    | UserAction;