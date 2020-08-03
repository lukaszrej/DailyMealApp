import React from 'react';
import Chip, { ChipProps } from '@material-ui/core/Chip';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import useStyles from './styles';

interface TagProps extends ChipProps {
	label: string;
	calories: number | null;
}

const ProductTag: React.FC<TagProps> = (props: TagProps): JSX.Element => {
	const { label, calories } = props;
	const classes = useStyles();

	const combinedLabel = `${label} ${calories} kcal`;

	return (
		<div className={classes.root}>
			<Chip label={combinedLabel} icon={<FastfoodIcon />} />
		</div>
	);
};

export default ProductTag;
