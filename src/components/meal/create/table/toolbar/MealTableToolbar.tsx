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
					{numSelected} selected
				</Typography>
			) : (
				<Typography variant='h6' id='tableTitle' component='div'>
					Your meal
				</Typography>
			)}
			{numSelected > 0 && (
				<Tooltip title='Delete'>
					<IconButton aria-label='delete' onClick={handleDeleteSelectedProducts}>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

export default MealTableToolbar;
