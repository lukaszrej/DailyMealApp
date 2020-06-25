import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../../store/product/Product.actions';
import { AppState } from '../../../store';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Loader from '../../loader/Loader';
import ProductList from '../../productList/ProductList';
import useStyles from './styles';

const ProductFind: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [ productToBeFound, setProductToBeFound ] = React.useState('');
	const isLoading = useSelector((state: AppState) => state.product.isLoading);

	const handleFindProductSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		dispatch(fetchProduct(productToBeFound));
		setProductToBeFound('');
	};

	return (
		<React.Fragment>
			<form className={classes.root} onSubmit={handleFindProductSubmit} noValidate autoComplete='on'>
				<Input
					id='standard-adornment-find-product'
					type='text'
					placeholder='Type product to be found'
					value={productToBeFound}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductToBeFound(e.currentTarget.value)}
					aria-describedby='standard-find-product-helper-text'
				/>
				<FormHelperText id='standard-find-product-helper-text'>Find product</FormHelperText>
				<Button type='submit' disabled={productToBeFound === '' ? true : false}>
					{isLoading ? <Loader /> : 'Search'}
				</Button>
			</form>
			<ProductList />
		</React.Fragment>
	);
};

export default ProductFind;
