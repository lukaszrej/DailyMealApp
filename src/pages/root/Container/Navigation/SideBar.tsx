import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getMeals, getIsMealAdded } from '../../../../store/meal/Meal.selectors';
import { getDisplayedStepper } from '../../../../store/login/Login.selectors';
import { showStepper } from '../../../../store/login/Login.actions';
import { ListItem } from '@material-ui/core/';
import { routes } from '../../../../routing/routes';
import * as link from "../../../../constants/url-repository";
import * as T from '../../../../constants/constants';
import * as S from '../../../../styles';

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
		<S.SideBar>
			<S.Toolbar>
				<S.Typography variant='h6' noWrap>
					{T.APP_NAME}
				</S.Typography>
			</S.Toolbar>

			<S.Divider />

			<S.List>
				<S.ListItem onClick={onHomeClick} button>
					<S.ListItemIcon>
						<S.HomeIcon />
					</S.ListItemIcon>
					<S.ListItemText primary="Home" />
				</S.ListItem>

				<S.ListItem onClick={onMealsClick} disabled={!isMealAdded} button>
					<S.ListItemIcon>
                        <S.Badge 
                            max={99}
                            color='primary'
                            badgeContent={meals ? meals.length : 0}
                        >
							<S.FormatListBulletedIcon />
						</S.Badge>
					</S.ListItemIcon>
					<S.ListItemText primary="Your meals" />
				</S.ListItem>
			</S.List>

			<S.Divider />

			<footer>
				<S.FooterMain>
					<ListItem>
						<S.ListItemText primary='@2020 DailyMealApp' />

						{!isStepperShown && 
							<S.Link variant='body2' onClick={onHowToUseClick}>
								{T.STEPPER_LINK_TEXT}
							</S.Link>
						}
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
