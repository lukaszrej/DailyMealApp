import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import * as S from './styles';

const SocialLinks: React.FC = (): JSX.Element => {
	return (
		<S.FooterSocialLinks>
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
		</S.FooterSocialLinks>
	);
};

export default SocialLinks;
