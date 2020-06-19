import React from 'react';
import { useDispatch } from 'react-redux';
import { findProduct } from '../../../store/product/find/Find.actions';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import Loader from '../../loader/Loader';
import useStyles from './styles';

const ProductFind: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const dispatch = useDispatch();
	const [ productToBeFound, setProductToBeFound ] = React.useState('');
	const [ isLoading, setIsLoading ] = React.useState(false);

	const handleFindProductSubmit = (e: React.SyntheticEvent): void => {
		e.preventDefault();
		setIsLoading(true);
		dispatch(findProduct(productToBeFound));
		setProductToBeFound('');
	};

	return (
		<form className={classes.root} onSubmit={handleFindProductSubmit} noValidate autoComplete='off'>
			<Input
				id='standard-adornment-calories'
				type='text'
				value={productToBeFound}
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProductToBeFound(e.currentTarget.value)}
				aria-describedby='standard-find-product-helper-text'
			/>
			<FormHelperText id='standard-find-product-helper-text'>Find product</FormHelperText>
			<Button type='submit' disabled={productToBeFound ? false : true}>
				Search {isLoading && <Loader />}
			</Button>
		</form>
	);
};

export default ProductFind;
