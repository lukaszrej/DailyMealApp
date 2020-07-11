import React from 'react';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import useStyles from './styles';

interface TableToolbarProps {
	numSelected: number;
	handleDeleteAllProducts: () => void;
}

const MealTableToolbar = (props: TableToolbarProps) => {
	const classes = useStyles();
	const { numSelected, handleDeleteAllProducts } = props;

	return (
		<Toolbar
			className={clsx(classes.root, {
				[classes.highlight]: numSelected > 0
			})}
		>
			{numSelected > 0 ? (
				<Typography className={classes.title} color='inherit' variant='subtitle1' component='div'>
					{numSelected} selected
				</Typography>
			) : (
				<Typography className={classes.title} variant='h6' id='tableTitle' component='div'>
					Your meal
				</Typography>
			)}
			{numSelected > 0 && (
				<Tooltip title='Delete'>
					<IconButton aria-label='delete' onClick={handleDeleteAllProducts}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

export default MealTableToolbar;
