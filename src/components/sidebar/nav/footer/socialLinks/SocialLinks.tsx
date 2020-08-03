import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import useStyles from './styles';

const StepperLink: React.FC = (): JSX.Element => {
	const classes = useStyles();

	return (
		<List className={classes.root}>
			<ListItem>
				<Link variant='body2' href='https://www.linkedin.com/in/lukasz-rej/' target='_blank' rel='noopener'>
					<LinkedInIcon fontSize='small' />
				</Link>
			</ListItem>
			<ListItem>
				<Link variant='body2' href='https://github.com/lukaszrej' target='_blank' rel='noopener'>
					<GitHubIcon fontSize='small' />
				</Link>
			</ListItem>
			<ListItem>
				<Link variant='body2' href='mailto:rejlukasz@gmail.com'>
					<MailIcon color='inherit' fontSize='small' />
				</Link>
			</ListItem>
		</List>
	);
};

export default StepperLink;
