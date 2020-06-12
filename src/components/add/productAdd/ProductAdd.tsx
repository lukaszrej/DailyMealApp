import React, {SyntheticEvent, useState} from 'react';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import useStyles from "./styles";

interface State {
    calories: number;
    fat: number;
    carbs: number;
    protein: number;
}

const ProductAdd: React.FC = () => {
    const classes = useStyles();
    const [values, setValues] = useState<State>({
        calories: 0,
        fat: 0,
        carbs: 0,
        protein: 0,
    });

    const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({...values, [prop]: event.target.value});
    };

    const handleSubmitProduct = () => (e: SyntheticEvent) => {
        e.preventDefault();
        console.log('my values: ', values);
    }

    return (
        <div className={classes.root}>
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
        </div>
    )
};

export default ProductAdd;