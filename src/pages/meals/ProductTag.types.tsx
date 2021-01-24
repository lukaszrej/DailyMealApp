import { ChipProps } from '@material-ui/core/Chip';

export interface Props extends ChipProps {
	label: string;
	calories: number | null;
}
