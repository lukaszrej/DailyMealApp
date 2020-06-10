// action constants
export const START = "START";

// types
export interface StartAction {
    type: typeof START;
    started?: boolean;
}

export type allStartActionTypes =
    | StartAction;