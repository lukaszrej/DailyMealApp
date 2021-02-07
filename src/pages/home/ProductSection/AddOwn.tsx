import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch } from 'react-redux';
import { generate } from 'shortid';
import { AddOwnState } from './AddOwn.types';
import { storeProduct, increaseKcalSum } from '../../../store/product/Product.actions';
import { useInputRef } from '../../../hooks/useInputRef';
import * as S from '../../../styles';
import * as T from '../../../constants/constants';

export const AddOwnProduct = () => {
    const dispatch = useDispatch();
    const [ inputRef ] = useInputRef();
	const [ values, setValues ] = useState<AddOwnState>({
		name: '',
		calories: 0,
		fat: 0,
		carbs: 0,
		protein: 0
	});

	const onChange = (prop: keyof AddOwnState) => (event: ChangeEvent<HTMLInputElement>) => {
		setValues({ ...values, [prop]: event.currentTarget.value });
	};

	const onProductSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(
			storeProduct({
				foodId: generate(),
				label: values.name,
				carbs: values.carbs,
				calories: values.calories,
				fat: values.fat,
				protein: values.protein
			})
		);

		const kcalSum = Math.ceil(Number(values.calories));
		dispatch(increaseKcalSum(kcalSum));

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
			<form onSubmit={onProductSubmit}>
				<S.FormGroup className='group'>
					<S.Input
						type='text'
						placeholder='Type product name'
						value={values.name}
                        onChange={onChange('name')}
                        inputRef={inputRef}
						aria-describedby='add-product-helper-text'
					/>
					<S.FormHelperText id='add-product-helper-text'>{T.PRODUCT_NAME}</S.FormHelperText>

					<S.Input
						value={values.calories}
						type='number'
						onChange={onChange('calories')}
						endAdornment={<S.InputAdornment position='end'>{T.KCAL}</S.InputAdornment>}
						aria-describedby='standard-calories-helper-text'
						inputProps={{ 'aria-label': T.CALORIES, min: '0', max: '600', step: '1' }}
					/>
					<S.FormHelperText id='standard-weight-helper-text'>{T.CALORIES}</S.FormHelperText>

					<S.Input
						value={values.fat}
						type='number'
						onChange={onChange('fat')}
						endAdornment={<S.InputAdornment position='end'>{T.SLASH_100G}</S.InputAdornment>}
						aria-describedby='standard-fat-helper-text'
						inputProps={{ 'aria-label': T.FAT, min: '0', max: '100', step: '1' }}
					/>
					<S.FormHelperText id='standard-fat-helper-text'>{T.FAT}</S.FormHelperText>

					<S.Input
						value={values.carbs}
						type='number'
						onChange={onChange('carbs')}
						endAdornment={<S.InputAdornment position='end'>{T.SLASH_100G}</S.InputAdornment>}
						aria-describedby='standard-carbs-helper-text'
						inputProps={{ 'aria-label': T.CARBS, min: '0', max: '100', step: '1' }}
					/>
					<S.FormHelperText id='standard-carbs-helper-text'>{T.CARBS}</S.FormHelperText>

					<S.Input
						value={values.protein}
						type='number'
						onChange={onChange('protein')}
						endAdornment={<S.InputAdornment position='end'>{T.SLASH_100G}</S.InputAdornment>}
						aria-describedby='standard-protein-helper-text'
						inputProps={{ 'aria-label': T.PROTEIN, min: '0', max: '100', step: '1' }}
					/>
					<S.FormHelperText id='standard-carbs-helper-text'>{T.PROTEIN}</S.FormHelperText>

					<S.Button
						onSubmit={(e: SyntheticEvent) => onProductSubmit(e)}
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
