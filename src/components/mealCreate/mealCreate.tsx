import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import MealTable from '../mealTable/table/Table';
import ProductAddOwn from '../productAddOwn/ProductAddOwn';
import ProductFind from '../productFind/ProductFind';
import useStyles from './styles';

const MealCreate: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		event.preventDefault();
		setValue(newValue);
	};

	return (
		<main className={classes.root}>
			<Paper square>
				<Typography variant='h6' noWrap>
					Find or add own product to the report
				</Typography>
			</Paper>
			<Paper square>
				<Tabs
					value={value}
					onChange={handleChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='inherit'
					aria-label='add or find product tabs'
				>
					<Tab icon={<SearchIcon />} label='Find product' />
					<Tab icon={<AddIcon />} label='Add own product' />
				</Tabs>

				<div className={classes.tabs}>{value ? <ProductAddOwn /> : <ProductFind />}</div>

				<MealTable />
			</Paper>
		</main>
	);
};

export default MealCreate;
