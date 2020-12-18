import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import shortid from 'shortid';
import { storeProduct, updateCurrentKcalSum } from '../../../store/product/Product.actions';
import * as S from '../../../styles';
import * as T from '../../../utils/constants';

interface AddOwnProductState {
	name: string;
	calories: number;
	fat: number;
	carbs: number;
	protein: number;
}

const AddOwnProduct = () => {
	const dispatch = useDispatch();
	const [values, setValues] = useState<AddOwnProductState>({
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
				<S.FormGroup className='group'>
					<S.Input
						type='text'
						placeholder={T.TYPE_PRODUCT_NAME}
						value={values.name}
						onChange={handleChange('name')}
						aria-describedby='standard-product-name-helper-text'
					/>
					<S.FormHelperText id='standard-product-name-helper-text'>{T.PRODUCT_NAME}</S.FormHelperText>

					<S.Input
						value={values.calories}
						type='number'
						onChange={handleChange('calories')}
						endAdornment={<S.InputAdornment position='end'>{T.KCAL}</S.InputAdornment>}
						aria-describedby='standard-calories-helper-text'
						inputProps={{ 'aria-label': T.CALORIES, min: '0', max: '600', step: '1' }}
					/>
					<S.FormHelperText id='standard-weight-helper-text'>{T.CALORIES}</S.FormHelperText>

					<S.Input
						value={values.fat}
						type='number'
						onChange={handleChange('fat')}
						endAdornment={<S.InputAdornment position='end'>{T.SLASH_100G}</S.InputAdornment>}
						aria-describedby='standard-fat-helper-text'
						inputProps={{ 'aria-label': T.FAT, min: '0', max: '100', step: '1' }}
					/>
					<S.FormHelperText id='standard-fat-helper-text'>{T.FAT}</S.FormHelperText>

					<S.Input
						value={values.carbs}
						type='number'
						onChange={handleChange('carbs')}
						endAdornment={<S.InputAdornment position='end'>{T.SLASH_100G}</S.InputAdornment>}
						aria-describedby='standard-carbs-helper-text'
						inputProps={{ 'aria-label': T.CARBS, min: '0', max: '100', step: '1' }}
					/>
					<S.FormHelperText id='standard-carbs-helper-text'>{T.CARBS}</S.FormHelperText>

					<S.Input
						value={values.protein}
						type='number'
						onChange={handleChange('protein')}
						endAdornment={<S.InputAdornment position='end'>{T.SLASH_100G}</S.InputAdornment>}
						aria-describedby='standard-protein-helper-text'
						inputProps={{ 'aria-label': T.PROTEIN, min: '0', max: '100', step: '1' }}
					/>
					<S.FormHelperText id='standard-carbs-helper-text'>{T.PROTEIN}</S.FormHelperText>

					<S.Button
						onSubmit={(e: React.SyntheticEvent) => handleSubmitProduct(e)}
						variant='contained'
						color='secondary'
						type='submit'
						disabled={values.name === '' ? true : false}
					>
						{T.SUBMIT_PRODUCT}
					</S.Button>
				</S.FormGroup>
			</form>
		</S.AddOwnProduct>
	);
};

export default AddOwnProduct;
