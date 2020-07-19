import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import MealTable from '../mealTable/table/Table';
import ProductAddOwn from '../productAddOwn/ProductAddOwn';
import ProductFind from '../productFind/ProductFind';
import InfoStepper from '../stepper/InfoStepper';
import useStyles from './styles';

const ProductAdd: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		event.preventDefault();
		setValue(newValue);
	};

	return (
		<section className={classes.root}>
			<InfoStepper />
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
			</Paper>
			<MealTable />
		</section>
	);
};

export default ProductAdd;
