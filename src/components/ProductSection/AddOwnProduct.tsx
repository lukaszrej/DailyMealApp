import React, { useState } from 'react';
import shortid from 'shortid';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { storeProduct, updateCurrentKcalSum } from '../../store/product/Product.actions';
import * as S from '../../styles/components';
import * as T from '../../utils/constants';

interface AddOwnProductState {
	name: string;
	calories: number;
	fat: number;
	carbs: number;
	protein: number;
}

const AddOwnProduct = () => {
	const dispatch = useDispatch();
	const [ values, setValues ] = useState<AddOwnProductState>({
		name: '',
		calories: 0,
		fat: 0,
		carbs: 0,
		protein: 0
	});

	const handleChange = (prop: keyof AddOwnProductState) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.currentTarget.value });
	};

	const handleSubmitProduct = (e: React.SyntheticEvent) => {
		e.preventDefault();
		dispatch(
			storeProduct({
				food: {
					foodId: shortid.generate(),
					label: values.name,
					nutrients: {
						CHOCDF: values.carbs,
						ENERC_KCAL: values.calories,
						FAT: values.fat,
						PROCNT: values.protein
					}
				}
			})
		);

		const currentKcalSum = Math.ceil(Number(values.calories));
		dispatch(updateCurrentKcalSum(currentKcalSum));

		setValues({
			name: '',
			calories: 0,
			fat: 0,
			carbs: 0,
			protein: 0
		});
	};

	return (
		<S.AddOwnProduct>
			<form onSubmit={handleSubmitProduct}>
				<FormGroup className='group'>
					<Input
						type='text'
						placeholder={T.TYPE_PRODUCT_NAME}
						value={values.name}
						onChange={handleChange('name')}
						aria-describedby='standard-product-name-helper-text'
					/>
					<FormHelperText id='standard-product-name-helper-text'>{T.PRODUCT_NAME}</FormHelperText>

					<Input
						value={values.calories}
						type='number'
						onChange={handleChange('calories')}
						endAdornment={<InputAdornment position='end'>{T.KCAL}</InputAdornment>}
						aria-describedby='standard-calories-helper-text'
						inputProps={{ 'aria-label': T.CALORIES, min: '0', max: '600', step: '1' }}
					/>
					<FormHelperText id='standard-weight-helper-text'>{T.CALORIES}</FormHelperText>

					<Input
						value={values.fat}
						type='number'
						onChange={handleChange('fat')}
						endAdornment={<InputAdornment position='end'>{T.SLASH_100G}</InputAdornment>}
						aria-describedby='standard-fat-helper-text'
						inputProps={{ 'aria-label': T.FAT, min: '0', max: '100', step: '1' }}
					/>
					<FormHelperText id='standard-fat-helper-text'>{T.FAT}</FormHelperText>

					<Input
						value={values.carbs}
						type='number'
						onChange={handleChange('carbs')}
						endAdornment={<InputAdornment position='end'>{T.SLASH_100G}</InputAdornment>}
						aria-describedby='standard-carbs-helper-text'
						inputProps={{ 'aria-label': T.CARBS, min: '0', max: '100', step: '1' }}
					/>
					<FormHelperText id='standard-carbs-helper-text'>{T.CARBS}</FormHelperText>

					<Input
						value={values.protein}
						type='number'
						onChange={handleChange('protein')}
						endAdornment={<InputAdornment position='end'>{T.SLASH_100G}</InputAdornment>}
						aria-describedby='standard-protein-helper-text'
						inputProps={{ 'aria-label': T.PROTEIN, min: '0', max: '100', step: '1' }}
					/>
					<FormHelperText id='standard-carbs-helper-text'>{T.PROTEIN}</FormHelperText>

					<Button
						onSubmit={(e: React.SyntheticEvent) => handleSubmitProduct(e)}
						variant='contained'
						color='secondary'
						type='submit'
						disabled={values.name === '' ? true : false}
					>
						{T.SUBMIT_PRODUCT}
					</Button>
				</FormGroup>
			</form>
		</S.AddOwnProduct>
	);
};

export default AddOwnProduct;
