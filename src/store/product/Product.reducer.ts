import {ADD_PRODUCT, allProductActionTypes} from './Product.types';

export const initialState = {
    productList: []
};

export const ProductReducer = (state = initialState, action: allProductActionTypes) => {
    switch (action.type) {
        case ADD_PRODUCT:
            return {
                ...state,
                productList: action.product
            }
        default:
            return state
    }
};