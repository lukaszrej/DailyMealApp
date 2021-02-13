import { ProductTagProps } from './types';
import { ProductTag as ProductTagContainer, Chip, FastFoodIcon } from '../../styles';

export const ProductTag = (props: ProductTagProps) => {
	const { label, calories } = props;
	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<ProductTagContainer>
			<Chip label={combinedLabel} icon={<FastFoodIcon />} />
		</ProductTagContainer>
	);
};
