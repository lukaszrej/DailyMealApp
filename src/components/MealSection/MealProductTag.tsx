import React from 'react';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import * as S from "../../styles/components";

interface MealTagProps extends ChipProps {
	label: string;
	calories: number | null;
}

const MealProductTag = (props: MealTagProps) => {
	const { label, calories } = props;
	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<S.MealProductTag>
			<Chip label={combinedLabel} icon={<FastfoodIcon />} />
		</S.MealProductTag>
	);
};

export default MealProductTag;
