import React from 'react';
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {AppState} from '../../store';
import {addProduct} from "../../store/product/Product.actions";
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';

import Button from '@material-ui/core/Button';

interface State {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}

const AddProduct: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const product = useSelector((state: AppState) => state.product.productList)

    const handleAddProductClick = () => {
        dispatch(addProduct())
    };

    const [values, setValues] = React.useState<State>({
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleSubmitProduct = () => (event: any) => {
        console.log('my values: ', values);
    }

    return (
        <div className={classes.root}>

            <div>
                <Button variant="contained" onClick={handleAddProductClick}>Add product</Button>
            </div>

            {product && <div>
                <FormGroup className={clsx(classes.margin, classes.withoutLabel, classes.textField)}>
                    <Input
                        id="standard-adornment-calories"
                        value={values.calories}
                        type="number"
                        onChange={handleChange('calories')}
                        endAdornment={<InputAdornment position="end">g/100g</InputAdornment>}
                        aria-describedby="standard-calories-helper-text"
                        inputProps={{'aria-label': 'calories'}}
                    />
                    <FormHelperText id="standard-weight-helper-text">Calories</FormHelperText>

                    <Input
                        id="standard-adornment-fat"
                        value={values.fat}
                        type="number"
                        onChange={handleChange('fat')}
                        endAdornment={<InputAdornment position="end">g/100g</InputAdornment>}
                        aria-describedby="standard-fat-helper-text"
                        inputProps={{'aria-label': 'fat'}}
                    />
                    <FormHelperText id="standard-fat-helper-text">Fat</FormHelperText>

                    <Button onSubmit={handleSubmitProduct} variant="contained" color="secondary" type="submit">
                        Submit product
                    </Button>
                </FormGroup>

                <pre>{JSON.stringify(values, null, 3)}</pre>
            </div>}
        </div>
    )
};

export default AddProduct;