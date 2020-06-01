// action constants
export const COUNTER = "COUNTER";

// types
export interface CounterAction {
    type: typeof COUNTER;
    counter: number;
}

export type allActionTypes =
    | CounterAction;