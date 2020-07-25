import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import { useDispatch, useSelector } from 'react-redux';
import { showStepper } from '../../../store/start/Start.actions';
import { getShowStepper } from '../../../store/start/Start.selectors';
import useStyles from './styles';

const Footer: React.FC = (): JSX.Element => {
	const classes = useStyles();
	const isStepper = useSelector(getShowStepper);
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(showStepper());
	};

	return (
		<footer>
			<List>
				<ListItem className={classes.footer}>
					<ListItemText primary='@2020 DailyMealApp' />
					{!isStepper && (
						<Link variant='body2' onClick={handleClick}>
							Still don't know how to use?
						</Link>
					)}
				</ListItem>
			</List>
			<List className={classes.social}>
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
		</footer>
	);
};

export default Footer;
