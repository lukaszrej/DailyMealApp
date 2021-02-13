import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeals, getIsMealAdded } from '../../../../store/meal/Meal.selectors';
import { getDisplayedStepper } from '../../../../store/login/Login.selectors';
import { showStepper } from '../../../../store/login/Login.actions';
import { ListItem } from '@material-ui/core/';
import { routes } from '../../../../routing/routes';
import * as link from '../../../../constants/url-repository';
import * as T from '../../../../constants/constants';
import {
	SideBar as SideBarContainer,
	Toolbar,
	Typography,
	ListItemIcon,
	HomeIcon,
	Divider,
	List,
	FooterMain,
	ListItemText,
	Badge,
	Link,
	LinkedInIcon,
	GitHubIcon,
	FormatListBulletedIcon,
	SocialLinks,
	MailIcon
} from '../../../../styles';

export const SideBar = () => {
	const dispatch = useDispatch();
	const history = useHistory();
	const meals = useSelector(getMeals);
	const isMealAdded = useSelector(getIsMealAdded);
	const isStepperShown = useSelector(getDisplayedStepper);

	const onHomeClick = () => {
		history.push(routes.home);
	};

	const onMealsClick = () => {
		history.push(routes.meals);
	};

	const onHowToUseClick = () => {
		dispatch(showStepper());
	};

	return (
		<SideBarContainer>
			<Toolbar>
				<Typography variant='h6' noWrap>
					{T.APP_NAME}
				</Typography>
			</Toolbar>

			<Divider />

			<List>
				<ListItem onClick={onHomeClick} button>
					<ListItemIcon>
						<HomeIcon />
					</ListItemIcon>
					<ListItemText primary='Home' />
				</ListItem>

				<ListItem onClick={onMealsClick} disabled={!isMealAdded} button>
					<ListItemIcon>
						<Badge max={99} color='primary' badgeContent={meals ? meals.length : 0}>
							<FormatListBulletedIcon />
						</Badge>
					</ListItemIcon>
					<ListItemText primary='Your meals' />
				</ListItem>
			</List>

			<Divider />

			<footer>
				<FooterMain>
					<ListItem>
						<ListItemText primary='@2020 DailyMealApp' />

						{!isStepperShown && (
							<Link variant='body2' onClick={onHowToUseClick}>
								{T.STEPPER_LINK_TEXT}
							</Link>
						)}
					</ListItem>
				</FooterMain>

				<SocialLinks>
					<ListItem>
						<Link variant='body2' href={link.linkedIn} target='_blank' rel='noopener'>
							<LinkedInIcon fontSize='small' />
						</Link>
					</ListItem>
					<ListItem>
						<Link variant='body2' href={link.github} target='_blank' rel='noopener'>
							<GitHubIcon fontSize='small' />
						</Link>
					</ListItem>
					<ListItem>
						<Link variant='body2' href={`mailto:${link.email}`}>
							<MailIcon color='inherit' fontSize='small' />
						</Link>
					</ListItem>
				</SocialLinks>
			</footer>
		</SideBarContainer>
	);
};
