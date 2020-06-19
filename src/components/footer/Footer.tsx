import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useStyles from './styles';

const Footer: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<footer>
			<List className={classes.root}>
				<ListItem>
					<ListItemText className={classes.text} primary='@2020 DailyMealApp' />
				</ListItem>
			</List>
		</footer>
	);
};

export default Footer;
