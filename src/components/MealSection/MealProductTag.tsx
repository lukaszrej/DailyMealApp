import React from 'react';
import { ChipProps } from '@material-ui/core/Chip';
import * as S from "../../styles";

interface MealTagProps extends ChipProps {
	label: string;
	calories: number | null;
}

const MealProductTag = (props: MealTagProps) => {
	const { label, calories } = props;
	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<S.MealProductTag>
			<S.Chip label={combinedLabel} icon={<S.FastFoodIcon />} />
		</S.MealProductTag>
	);
};

export default MealProductTag;
