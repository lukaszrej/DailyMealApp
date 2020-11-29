import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProduct } from '../../store/product/Product.actions';
import { getIsLoading } from '../../store/product/Product.selectors';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Loader from '../Loader';
import ProductList from './ProductList';
import * as T from "../../utils/constants";
import * as S from '../../styles/components';

const FindProduct = () => {
	const dispatch = useDispatch();
	const [productToBeFound, setProductToBeFound] = React.useState('');
	const isLoading = useSelector(getIsLoading);

	const handleFindProductSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		dispatch(findProduct(productToBeFound));
		setProductToBeFound('');
	};

	return (
		<>
			<S.FindProduct onSubmit={handleFindProductSubmit} noValidate autoComplete='on'>
				<Input
					type='text'
					placeholder={T.TYPE_PRODUCT_NAME}
					value={productToBeFound}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductToBeFound(e.currentTarget.value)}
					aria-describedby='standard-find-product-helper-text'
				/>
				<FormHelperText>{T.PRODUCT_NAME}</FormHelperText>

				<Button
					type='submit'
					disabled={productToBeFound === '' ? true : false}
					color='secondary'
					variant='contained'
				>
					{isLoading ? <Loader /> : T.SEARCH}
				</Button>
			</S.FindProduct>

			<ProductList />
		</>
	);
};

export default FindProduct;
