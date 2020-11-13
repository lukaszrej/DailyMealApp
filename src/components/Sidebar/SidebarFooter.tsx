import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import StepperLink from './SidebarFooterStepperLink';
import SocialLinks from './SidebarFooterLinks';
import { FOOTER_HEADING } from "../../utils/constants";

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

const SidebarFooter = (props: WithStyles<typeof styles>) => {
	const { classes } = props;

	return (
		<footer>
			<List>
				<ListItem className={classes.root}>
					<ListItemText primary={FOOTER_HEADING} />
					<StepperLink />
				</ListItem>
			</List>

			<SocialLinks />
		</footer>
	);
};

export default withStyles(styles)(SidebarFooter);
