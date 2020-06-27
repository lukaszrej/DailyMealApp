import React from 'react';
import Button from '@material-ui/core/Button';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import Typography from '@material-ui/core/Typography';

import { useSelector } from 'react-redux';
import { getLabels } from '../../store/chart/Chart.selectors';
import { getStoredProducts } from '../../store/product/Product.selectors';
import { generate } from 'shortid';
import useStyles from './styles';

const MealTable: React.FC = (): JSX.Element | null => {
	const classes = useStyles();
	const labels = useSelector(getLabels);
	const storedProducts = useSelector(getStoredProducts);

	if (storedProducts.length === 0) return null;
	else {
		return (
			<React.Fragment>
				<Typography variant='h6' noWrap>
					Add other product or submit meal
				</Typography>
				<TableContainer component={Paper} className={classes.tableContainer}>
					<Table className={classes.table} aria-label='simple table'>
						<TableHead>
							<TableRow>
								<TableCell>Product name</TableCell>
								{labels.map((label: string) => (
									<TableCell key={generate()} align='right'>
										{label}
									</TableCell>
								))}
							</TableRow>
						</TableHead>
						<TableBody>
							<TableRow>
								<TableCell component='th' scope='row'>
									Example name
								</TableCell>
								<TableCell align='right'>15g calories</TableCell>
								<TableCell align='right'>30g fat</TableCell>
								<TableCell align='right'>45g carbs</TableCell>
								<TableCell align='right'>16g protein</TableCell>
							</TableRow>
							<TableRow>
								<TableCell>Total</TableCell>
								{/*<TableCell align="right">*/}
								{/*{Number(props.fat) + Number(props.carbs) + Number(props.protein)}*/}
								{/*</TableCell>*/}
								{/*<TableCell align="right">{props.fat}</TableCell>*/}
								{/*<TableCell align="right">{props.carbs}</TableCell>*/}
								{/*<TableCell align="right">{props.protein}</TableCell>*/}
							</TableRow>
						</TableBody>
					</Table>
					<Button>Add meal</Button>
					<Button>Discard</Button>
				</TableContainer>
			</React.Fragment>
		);
	}
};

export default MealTable;
