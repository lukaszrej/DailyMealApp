import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';

import useStyles from './styles';
import ProductAdd from './productAdd/ProductAdd';
import ProductFind from './productFind/ProductFind';

const Add: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event: React.ChangeEvent<{}>, newValue: number): void => {
		setValue(newValue);
	};

	return (
		<React.Fragment>
			<Paper square className={classes.root}>
				<Tabs
					value={value}
					onChange={handleChange}
					variant='fullWidth'
					indicatorColor='primary'
					textColor='inherit'
					aria-label='icon label tabs example'
				>
					<Tab icon={<SearchIcon />} label='Find product' />
					<Tab icon={<AddIcon />} label='Add own product' />
				</Tabs>
			</Paper>
			{value ? <ProductAdd /> : <ProductFind />}
		</React.Fragment>
	);
};

export default Add;
