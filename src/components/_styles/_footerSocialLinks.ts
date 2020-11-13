import List from '@material-ui/core/List';
import styled from "styled-components";

export const FooterSocialLinks = styled(List)`
	display: flex;
	justify-content: center;

	& li {
		padding: 0;
		width: auto;
		margin-right: 18px;

	}

	& li:last-of-type {
		margin-right: 0;
	}

	& a {
		color: grey;

		&:hover {
			color: #4d4d4d;
		}
	}
`;
