import { Props } from './ProductTag.types';
import * as S from "../../styles";

export const ProductTag = (props: Props) => {
	const { label, calories } = props;
	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<S.ProductTag>
			<S.Chip label={combinedLabel} icon={<S.FastFoodIcon />} />
		</S.ProductTag>
	);
};
