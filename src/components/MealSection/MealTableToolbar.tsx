import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import * as T from "../../utils/constants";
import * as S from "../../styles";

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1),
			'& > div': {
				flex: '1 1 100%',
				textAlign: 'center'
			}
		},
		highlight:
			theme.palette.type === 'light'
				? {
					color: theme.palette.secondary.main,
					backgroundColor: lighten(theme.palette.secondary.light, 0.85)
				}
				: {
					color: theme.palette.text.primary,
					backgroundColor: theme.palette.secondary.dark
				}
	})
);

interface TableToolbarProps {
	numSelected: number;
	handleDeleteSelectedProducts: () => void;
}

const MealTableToolbar = (props: TableToolbarProps) => {
	const { numSelected, handleDeleteSelectedProducts } = props;
	const classes = useStyles();

	return (
		<S.Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			{numSelected > 0 ? (
				<S.Typography color='inherit' variant='subtitle1'>
					{numSelected} {T.SELECTED}
				</S.Typography>
			) : (
					<S.Typography variant='h6'>
						{T.YOUR_MEAL}
					</S.Typography>
				)}
			{numSelected > 0 && (
				<S.Tooltip title={T.DELETE}>
					<S.IconButton aria-label={T.DELETE} onClick={handleDeleteSelectedProducts}>
						<S.DeleteIcon />
					</S.IconButton>
				</S.Tooltip>
			)}
		</S.Toolbar>
	);
};

export default MealTableToolbar;
