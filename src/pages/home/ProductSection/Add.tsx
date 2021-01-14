import React, { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import { Loader } from '../../../components/Loader';
import { Tooltip } from '../../../components/Tooltip';
import { Product } from '../../../types';
import { storeProduct, increaseKcalSum } from '../../../store/product/Product.actions';
import { findProducts } from '../../../store/product/Product.actions';
import { getIsLoading } from '../../../store/product/Product.selectors';
import { getFoundProducts } from '../../../store/product/Product.selectors';
import * as S from '../../../styles';
import * as T from '../../../utils/constants';

export const AddProduct = () => {
	const dispatch = useDispatch();
	const [productName, setProductName] = useState('');
	const isLoading = useSelector(getIsLoading);
	const foundProducts = useSelector(getFoundProducts);

	const onFindProductsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProductName(e.currentTarget.value)
	}

	const onFindProducts = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(findProducts(productName));
		setProductName('');
	};

	const onProductClick = (e: SyntheticEvent, product: Product) => {
		e.preventDefault();
		const calories = product.food.nutrients.ENERC_KCAL;
		const kcalSum = Math.ceil(Number(calories));
		dispatch(storeProduct(product));
		dispatch(increaseKcalSum(kcalSum));
	};

	return (
		<>
			<S.AddProduct onSubmit={onFindProducts} noValidate autoComplete='on'>
				<S.Input
					type='text'
					placeholder={T.TYPE_PRODUCT_NAME}
					value={productName}
					onChange={(e: ChangeEvent<HTMLInputElement>) => onFindProductsChange(e)}
					aria-describedby='standard-find-product-helper-text'
				/>
				<S.FormHelperText>{T.PRODUCT_NAME}</S.FormHelperText>

				<S.Button
					type='submit'
					disabled={productName === '' ? true : false}
					color='secondary'
					variant='contained'
				>
					{isLoading ? <Loader /> : T.SEARCH}
				</S.Button>
			</S.AddProduct>

			<S.ProductList>
				{foundProducts.map((product: Product) => {
					const label = product.food.label;
					const calories = product.food.nutrients.ENERC_KCAL;
					const protein = product.food.nutrients.PROCNT;
					const carbs = product.food.nutrients.CHOCDF;
					const fat = product.food.nutrients.FAT;

					return (
						<Tooltip arrow title='Click to add' placement='top' enterDelay={650} leaveDelay={50} key={generate()}>
							<li onClick={(e) => onProductClick(e, product)}>
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
