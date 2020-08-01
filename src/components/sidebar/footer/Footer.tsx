import React from 'react';
import StepperLink from './stepperLink/StepperLink';
import SocialLinks from './socialLinks/SocialLinks';

const Footer: React.FC = (): JSX.Element => {
	return (
		<footer>
			<StepperLink />
			<SocialLinks />
		</footer>
	);
};

export default Footer;
