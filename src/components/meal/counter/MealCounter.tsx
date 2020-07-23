import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Product } from '../../../store/product/Product.types';
import useStyles from './styles';

interface CounterProps {
	meals?: Array<Product>;
}

const MealCounter: React.FC<CounterProps> = (props: CounterProps): JSX.Element => {
	const classes = useStyles();
	const { meals } = props;

	return (
		<React.Fragment>
			<Paper className={classes.root}>
				<Typography variant='h6' noWrap>
					Meals addded
				</Typography>
				<Typography variant='h3' color='primary' noWrap>
					{meals ? meals.length : '0'}
				</Typography>
			</Paper>
		</React.Fragment>
	);
};

export default MealCounter;
