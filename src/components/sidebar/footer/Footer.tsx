import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import StepperLink from './stepperLink/StepperLink';
import SocialLinks from './socialLinks/SocialLinks';

const styles = () =>
	createStyles({
		root: {
			flexDirection: 'column',
			'& > div > span.MuiTypography-displayBlock': {
				fontSize: 12,
				color: 'grey'
			}
		}
	});

const Footer = (props: WithStyles<typeof styles>): JSX.Element => {
	const { classes } = props;

	return (
		<footer>
			<List>
				<ListItem className={classes.root}>
					<ListItemText primary='@2020 DailyMealApp' />
					<StepperLink />
				</ListItem>
			</List>

			<SocialLinks />
		</footer>
	);
};

export default withStyles(styles)(Footer);
