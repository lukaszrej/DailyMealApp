import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeals, getIsMealAdded } from '../../../../store/meal/Meal.selectors';
import { getDisplayedStepper } from '../../../../store/login/Login.selectors';
import { showStepper } from '../../../../store/login/Login.actions';
import { ListItem } from '@material-ui/core/';
import * as link from "../../../../constants/url-repository";
import * as T from '../../../../constants/constants';
import * as S from '../../../../styles';

export const SideBar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const meals = useSelector(getMeals);
	const isMealAdded = useSelector(getIsMealAdded);
	const isStepperShown = useSelector(getDisplayedStepper);

	const handleClick = () => {
		dispatch(showStepper());
	};

	return (
		<S.SideBar>
			<S.Toolbar>
				<S.Typography variant='h6' noWrap>
					{T.APP_NAME}
				</S.Typography>
			</S.Toolbar>

			<S.Divider />

			<S.List>
				<S.ListItem button onClick={() => history.push('/home')}>
					<S.ListItemIcon>
						<S.HomeIcon />
					</S.ListItemIcon>
					<S.ListItemText primary={T.HOME} />
				</S.ListItem>

				<S.ListItem button onClick={() => history.push('/meals')} disabled={!isMealAdded}>
					<S.ListItemIcon>
						<S.Badge badgeContent={meals ? meals.length : 0} max={99} color='primary'>
							<S.FormatListBulletedIcon />
						</S.Badge>
					</S.ListItemIcon>
					<S.ListItemText primary={T.YOUR_MEALS} />
				</S.ListItem>
			</S.List>

			<S.Divider />

			<footer>
				<S.FooterMain>
					<ListItem>
						<S.ListItemText primary={T.FOOTER_HEADING} />

						{!isStepperShown && (
							<S.Link variant='body2' onClick={handleClick}>
								{T.STEPPER_LINK_TEXT}
							</S.Link>
						)}
					</ListItem>
				</S.FooterMain>

				<S.SocialLinks>
					<ListItem>
						<S.Link variant='body2' href={link.linkedIn} target='_blank' rel='noopener'>
							<S.LinkedInIcon fontSize='small' />
						</S.Link>
					</ListItem>
					<ListItem>
						<S.Link variant='body2' href={link.github} target='_blank' rel='noopener'>
							<S.GitHubIcon fontSize='small' />
						</S.Link>
					</ListItem>
					<ListItem>
						<S.Link variant='body2' href={`mailto:${link.email}`}>
							<S.MailIcon color='inherit' fontSize='small' />
						</S.Link>
					</ListItem>
				</S.SocialLinks>
			</footer>
		</S.SideBar>
	);
};
