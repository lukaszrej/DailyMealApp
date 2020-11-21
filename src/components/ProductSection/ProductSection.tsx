import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import AddOwnProduct from './AddOwnProduct';
import FindProduct from './FindProduct';
import { PRODUCT_SECTION_HEADING, FIND_PRODUCT, ADD_OWN_PRODUCT } from "../../utils/constants";
import * as S from "../../styles/components";

const ProductSection = () => {
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		event.preventDefault();
		setValue(newValue);
	};

	return (
		<S.ProductSection>
			<Paper square>
				<Typography variant='h6' noWrap>
					{PRODUCT_SECTION_HEADING}
				</Typography>

				<Tabs
					value={value}
					onChange={handleChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='inherit'
					aria-label='add or find product tabs'
				>
					<Tab icon={<SearchIcon />} label={FIND_PRODUCT} />
					<Tab icon={<AddIcon />} label={ADD_OWN_PRODUCT} />
				</Tabs>

				<div className="tabs">{value ? <AddOwnProduct /> : <FindProduct />}</div>
			</Paper>
		</S.ProductSection>
	);
};

export default ProductSection;
