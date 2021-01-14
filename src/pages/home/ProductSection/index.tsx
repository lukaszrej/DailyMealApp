import React, { useState, ChangeEvent } from 'react';
import { AddOwnProduct } from './AddOwn';
import { AddProduct } from './Add';
import * as T from "../../../utils/constants";
import * as S from "../../../styles";

export const ProductSection = () => {
	const [tabValue, setTabValue] = useState(0);

	const onChange = (event: ChangeEvent<{}>, newValue: number): void => {
		event.preventDefault();
		setTabValue(newValue);
	};

	return (
		<S.ProductSection>
			<S.Paper square>
				<S.Typography variant='h6' noWrap>
					{T.PRODUCT_SECTION_HEADING}
				</S.Typography>

				<S.Tabs
					value={tabValue}
					onChange={onChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='inherit'
					aria-label={T.ADD_OR_FIND_PRODUCT_ARIA}
				>
					<S.Tab icon={<S.SearchIcon />} label={T.ADD_PRODUCT} />
					<S.Tab icon={<S.AddIcon />} label={T.ADD_OWN_PRODUCT} />
				</S.Tabs>

				<div className="tabs">
					{tabValue ? <AddOwnProduct /> : <AddProduct />}
				</div>
			</S.Paper>
		</S.ProductSection>
	);
};
