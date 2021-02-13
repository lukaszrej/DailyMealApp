import { useState, ChangeEvent, SyntheticEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { generate } from 'shortid';
import { Product } from '../../../types';
import { storeProduct, increaseKcalSum } from '../../../store/product/Product.actions';
import { findProducts } from '../../../store/product/Product.actions';
import { getIsLoading } from '../../../store/product/Product.selectors';
import { getFoundProducts } from '../../../store/product/Product.selectors';
import { InlineLoader } from '../../../components/InlineLoader';
import { Tooltip } from '../../../components/Tooltip';
import { useInputFocus } from '../../../hooks/useInputFocus';
import * as T from '../../../constants/constants';
import { 
    AddProduct as AddProductContainer,
    Input,
    FormHelperText,
    Button,
    ProductList
} from '../../../styles';

export const AddProduct = () => {
	const dispatch = useDispatch();
    const [ productName, setProductName ] = useState('');
    const [ inputRef ] = useInputFocus();
	const isLoading = useSelector(getIsLoading);
	const foundProducts = useSelector(getFoundProducts);

	const onFindProductsChange = (e: ChangeEvent<HTMLInputElement>) => {
		setProductName(e.currentTarget.value)
	};

	const onFindProducts = (e: SyntheticEvent) => {
        e.preventDefault();
        
        dispatch(findProducts(productName));
		setProductName('');
	};

	const onProductClick = (e: SyntheticEvent, product: Product) => {
        e.preventDefault();
        
        const { calories } = product;
		const kcalSum = Math.ceil(Number(calories));
		dispatch(storeProduct(product));
		dispatch(increaseKcalSum(kcalSum));
	};

	return (
		<>
			<AddProductContainer onSubmit={onFindProducts} noValidate autoComplete='on'>
				<Input
					type='text'
					value={productName}
					placeholder='Type product name'
                    onChange={(e: ChangeEvent<HTMLInputElement>) => onFindProductsChange(e)}
                    inputRef={inputRef}
					aria-describedby='find-product-helper-text'
				/>
				<FormHelperText>{T.PRODUCT_NAME}</FormHelperText>

				<Button
					type='submit'
					color='secondary'
					variant='contained'
					disabled={!productName}
				>
					{isLoading ? <InlineLoader /> : T.SEARCH}
				</Button>
			</AddProductContainer>

			<ProductList>
				{foundProducts.map((product) => {
                    const { label, calories, protein, carbs, fat } = product;

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
			</ProductList>
		</>
	);
};
