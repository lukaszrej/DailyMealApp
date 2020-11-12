import React from 'react';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import * as S from "./styles";

interface TagProps extends ChipProps {
	label: string;
	calories: number | null;
}

const ProductTag: React.FC<TagProps> = (props: TagProps): JSX.Element => {
	const { label, calories } = props;
	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<S.ProductTag>
			<Chip label={combinedLabel} icon={<FastfoodIcon />} />
		</S.ProductTag>
	);
};

export default ProductTag;
