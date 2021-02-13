import { useState, ChangeEvent } from 'react';
import { AddOwnProduct } from './AddOwn';
import { AddProduct } from './Add';
import * as T from '../../../constants/constants';
import {
	ProductSection as ProductSectionContainer,
	Paper,
	Typography,
	Tabs,
	Tab,
	TabContent,
	SearchIcon,
	AddIcon
} from '../../../styles';

export const ProductSection = () => {
	const [ tabValue, setTabValue ] = useState(0);

	const onChange = (e: ChangeEvent<{}>, newValue: number) => {
		e.preventDefault();

		setTabValue(newValue);
	};

	return (
		<ProductSectionContainer>
			<Paper square>
				<Typography variant='h6' noWrap>
					{T.PRODUCT_SECTION_HEADING}
				</Typography>

				<Tabs
					value={tabValue}
					onChange={onChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='inherit'
					aria-label='add or find product tabs'
				>
					<Tab icon={<SearchIcon />} label='Add product' />
					<Tab icon={<AddIcon />} label='Add product' />
				</Tabs>

				<TabContent>{tabValue ? <AddOwnProduct /> : <AddProduct />}</TabContent>
			</Paper>
		</ProductSectionContainer>
	);
};
