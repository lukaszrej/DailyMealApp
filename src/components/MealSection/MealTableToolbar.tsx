import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import * as T from "../../utils/constants";

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
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			{numSelected > 0 ? (
				<Typography color='inherit' variant='subtitle1' component='div'>
					{numSelected} {T.SELECTED}
				</Typography>
			) : (
					<Typography variant='h6' component='div'>
						{T.YOUR_MEAL}
					</Typography>
				)}
			{numSelected > 0 && (
				<Tooltip title={T.DELETE}>
					<IconButton aria-label={T.DELETE} onClick={handleDeleteSelectedProducts}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

export default MealTableToolbar;
