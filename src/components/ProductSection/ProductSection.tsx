import React from 'react';
import AddOwnProduct from './AddOwnProduct';
import FindProduct from './FindProduct';
import * as T from "../../utils/constants";
import * as S from "../../styles";

const ProductSection = () => {
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		event.preventDefault();
		setValue(newValue);
	};

	return (
		<S.ProductSection>
			<S.Paper square>
				<S.Typography variant='h6' noWrap>
					{T.PRODUCT_SECTION_HEADING}
				</S.Typography>

				<S.Tabs
					value={value}
					onChange={handleChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='inherit'
					aria-label={T.ADD_OR_FIND_PRODUCT_ARIA}
				>
					<S.Tab icon={<S.SearchIcon />} label={T.FIND_PRODUCT} />
					<S.Tab icon={<S.AddIcon />} label={T.ADD_OWN_PRODUCT} />
				</S.Tabs>

				<div className="tabs">{value ? <AddOwnProduct /> : <FindProduct />}</div>
			</S.Paper>
		</S.ProductSection>
	);
};

export default ProductSection;
