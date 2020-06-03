import React from 'react';
import useStyles from "./styles";
import {useDispatch} from "react-redux";
// import {AppState} from "../../store";
import {addProduct} from "../../store/product/Product.actions";
// import { generate } from 'shortid';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

const AddProduct = () => {
    const classes = useStyles();
    // const products = useSelector((state: AppState) => state.product.productList);
    const dispatch = useDispatch();

    const handleAddProductClick = () => {
        dispatch(addProduct())
    };

    return (
        <div className={classes.root}>
            <button onClick={handleAddProductClick}>Add product</button>

            {/*{products.map((product: any) => <div>{product}</div>)}*/}
        </div>
    )
};

export default AddProduct;