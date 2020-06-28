import React from 'react';
import clsx from 'clsx';
import { createStyles, lighten, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import { useSelector } from 'react-redux';
import { getStoredProducts } from '../../store/product/Product.selectors';

interface Data {
	calories: number;
	carbs: number;
	fat: number;
	name: string;
	protein: number;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number): Data {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Donut', 452, 25.0, 51, 4.9),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
	createData('Honeycomb', 408, 3.2, 87, 6.5)
];

interface HeadCell {
	disablePadding: boolean;
	id: keyof Data;
	label: string;
	numeric: boolean;
}

const headCells: HeadCell[] = [
	{ id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
	{ id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
	{ id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
	{ id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
	{ id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' }
];

interface EnhancedTableProps {
	classes: ReturnType<typeof useStyles>;
	numSelected: number;
	onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
	rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { onSelectAllClick, numSelected, rowCount } = props;

	return (
		<TableHead>
			<TableRow>
				<TableCell padding='checkbox'>
					<Checkbox
						indeterminate={numSelected > 0 && numSelected < rowCount}
						checked={rowCount > 0 && numSelected === rowCount}
						onChange={onSelectAllClick}
						inputProps={{ 'aria-label': 'select all desserts' }}
					/>
				</TableCell>
				{headCells.map((headCell) => (
					<TableCell
						key={headCell.id}
						align={headCell.numeric ? 'right' : 'left'}
						padding={headCell.disablePadding ? 'none' : 'default'}
					>
						{headCell.label}
					</TableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

const useToolbarStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			paddingLeft: theme.spacing(2),
			paddingRight: theme.spacing(1)
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
					},
		title: {
			flex: '1 1 100%'
		}
	})
);

interface EnhancedTableToolbarProps {
	numSelected: number;
}

const EnhancedTableToolbar = (props: EnhancedTableToolbarProps) => {
	const classes = useToolbarStyles();
	const { numSelected } = props;

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
					<IconButton aria-label='delete'>
						<DeleteIcon />
					</IconButton>
				</Tooltip>
			)}
		</Toolbar>
	);
};

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			width: '100%'
		},
		paper: {
			width: '100%',
			marginBottom: theme.spacing(2)
		},
		table: {
			minWidth: 750
		},
		visuallyHidden: {
			border: 0,
			clip: 'rect(0 0 0 0)',
			height: 1,
			margin: -1,
			overflow: 'hidden',
			padding: 0,
			position: 'absolute',
			top: 20,
			width: 1
		}
	})
);

const MealTable = () => {
	const classes = useStyles();
	const storedProducts = useSelector(getStoredProducts);
	const [ selected, setSelected ] = React.useState<string[]>([]);

	const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.checked) {
			const newSelecteds = rows.map((n) => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};

	const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected: string[] = [];

		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(selected.slice(0, selectedIndex), selected.slice(selectedIndex + 1));
		}

		setSelected(newSelected);
	};

	const isSelected = (name: string) => selected.indexOf(name) !== -1;

	if (storedProducts.length === 0) return null;
	else {
		return (
			<div className={classes.root}>
				<Paper className={classes.paper}>
					<EnhancedTableToolbar numSelected={selected.length} />
					<TableContainer>
						<Table
							className={classes.table}
							aria-labelledby='tableTitle'
							size='medium'
							aria-label='enhanced table'
						>
							<EnhancedTableHead
								classes={classes}
								numSelected={selected.length}
								onSelectAllClick={handleSelectAllClick}
								rowCount={rows.length}
							/>
							<TableBody>
								{rows.map((row, index) => {
									const isItemSelected = isSelected(row.name);
									const labelId = `enhanced-table-checkbox-${index}`;

									return (
										<TableRow
											hover
											onClick={(event) => handleClick(event, row.name)}
											role='checkbox'
											aria-checked={isItemSelected}
											tabIndex={-1}
											key={row.name}
											selected={isItemSelected}
										>
											<TableCell padding='checkbox'>
												<Checkbox
													checked={isItemSelected}
													inputProps={{ 'aria-labelledby': labelId }}
												/>
											</TableCell>
											<TableCell component='th' id={labelId} scope='row' padding='none'>
												{row.name}
											</TableCell>
											<TableCell align='right'>{row.calories}</TableCell>
											<TableCell align='right'>{row.fat}</TableCell>
											<TableCell align='right'>{row.carbs}</TableCell>
											<TableCell align='right'>{row.protein}</TableCell>
										</TableRow>
									);
								})}
							</TableBody>
						</Table>
					</TableContainer>
				</Paper>
			</div>
		);
	}
}

export default MealTable;
