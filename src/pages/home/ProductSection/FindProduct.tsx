import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import shortid from 'shortid';
import Loader from '../../../components/Loader';
import Tooltip from '../../../components/Tooltip';
import { useDispatch, useSelector } from 'react-redux';
import { storeProduct, updateCurrentKcalSum } from '../../../store/product/Product.actions';
import { findProduct } from '../../../store/product/Product.actions';
import { getIsLoading } from '../../../store/product/Product.selectors';
import { getFoundProducts } from '../../../store/product/Product.selectors';
import { Product } from '../../../store/product/Product.types';
import * as S from '../../../styles';
import * as T from '../../../utils/constants';

const FindProduct = () => {
	const dispatch = useDispatch();
	const [productToBeFound, setProductToBeFound] = useState('');
	const isLoading = useSelector(getIsLoading);
	const foundProducts = useSelector(getFoundProducts);

	const onProductFindChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProductToBeFound(e.currentTarget.value)
	}

	const onProductFindSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(findProduct(productToBeFound));
		setProductToBeFound('');
	};

	const onListItemClick = (e: SyntheticEvent, product: Product) => {
		e.preventDefault();
		const calories = product.food.nutrients.ENERC_KCAL;
		const currentKcalSum = Math.ceil(Number(calories));
		dispatch(storeProduct(product));
		dispatch(updateCurrentKcalSum(currentKcalSum));
	};

	return (
		<>
			<S.FindProduct onSubmit={onProductFindSubmit} noValidate autoComplete='on'>
				<S.Input
					type='text'
					placeholder={T.TYPE_PRODUCT_NAME}
					value={productToBeFound}
					onChange={(e: ChangeEvent<HTMLInputElement>) => onProductFindChange(e)}
					aria-describedby='standard-find-product-helper-text'
				/>
				<S.FormHelperText>{T.PRODUCT_NAME}</S.FormHelperText>

				<S.Button
					type='submit'
					disabled={productToBeFound === '' ? true : false}
					color='secondary'
					variant='contained'
				>
					{isLoading ? <Loader /> : T.SEARCH}
				</S.Button>
			</S.FindProduct>

			<S.ProductList>
				{foundProducts.map((product: Product) => {
					const label = product.food.label;
					const calories = product.food.nutrients.ENERC_KCAL;
					const protein = product.food.nutrients.PROCNT;
					const carbs = product.food.nutrients.CHOCDF;
					const fat = product.food.nutrients.FAT;

					return (
						<Tooltip arrow title='Click to add' placement='top' enterDelay={650} leaveDelay={50} key={shortid.generate()}>
							<li onClick={(e) => onListItemClick(e, product)}>
								{label}
								<div>
									{!isNaN(calories) && Math.ceil(calories) + ' kcal'}
									{!isNaN(protein) && ' | ' + Math.ceil(protein) + ' g protein'}
									{!isNaN(carbs) && ' | ' + Math.ceil(carbs) + ' g carbs'}
									{!isNaN(fat) && ' | ' + Math.ceil(fat) + ' g fat '}
								</div>
							</li>
						</Tooltip>
					);
				})}
			</S.ProductList>
		</>
	);
};

export default FindProduct;
