import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProduct } from '../store/product/Product.actions';
import { getIsLoading } from '../store/product/Product.selectors';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Loader from './Loader';
import ProductList from './ProductList';
import * as S from './styles';

const ProductFind: React.FC = (): JSX.Element => {
	const dispatch = useDispatch();
	const [ productToBeFound, setProductToBeFound ] = React.useState('');
	const isLoading = useSelector(getIsLoading);

	const handleFindProductSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		dispatch(findProduct(productToBeFound));
		setProductToBeFound('');
	};

	return (
		<React.Fragment>
			<S.ProductFind onSubmit={handleFindProductSubmit} noValidate autoComplete='on'>
				<Input
					id='standard-adornment-find-product'
					type='text'
					placeholder='Type product name'
					value={productToBeFound}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductToBeFound(e.currentTarget.value)}
					aria-describedby='standard-find-product-helper-text'
				/>
				<FormHelperText id='standard-find-product-helper-text'>Product name</FormHelperText>

				<Button
					type='submit'
					disabled={productToBeFound === '' ? true : false}
					color='secondary'
					variant='contained'
				>
					{isLoading ? <Loader /> : 'Search'}
				</Button>
			</S.ProductFind>

			<ProductList />
		</React.Fragment>
	);
};

export default ProductFind;
