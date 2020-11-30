import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import MailIcon from '@material-ui/icons/Mail';
import Link from '@material-ui/core/Link';
import * as link from "../../utils/url.repository";
import * as S from '../../styles/components';

const SocialLinks = () => {
	return (
		<S.FooterSocialLinks>
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
		</S.FooterSocialLinks>
	);
};

export default SocialLinks;
