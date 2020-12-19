import { ChipProps } from '@material-ui/core/Chip';

export interface ProductTagProps extends ChipProps {
	label: string;
	calories: number | null;
}
