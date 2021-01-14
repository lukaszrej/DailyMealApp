import React from 'react';
import { ProductTagProps } from './ProductTag.types';
import * as S from "../../styles";

export const ProductTag = (props: ProductTagProps) => {
	const { label, calories } = props;
	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<S.ProductTag>
			<S.Chip label={combinedLabel} icon={<S.FastFoodIcon />} />
		</S.ProductTag>
	);
};
