import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';

const Footer: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<footer>
			<List>
				<ListItem className={classes.root}>
					<ListItemText primary='@2020 DailyMealApp' />
				</ListItem>
			</List>
		</footer>
	);
};

export default Footer;
