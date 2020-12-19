import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

export const UserDetails = styled(Paper)`
	padding: 24px;
	display: flex;
	flex-direction: column;

	& p {
		margin: 0;
		margin-bottom: 12px;
	}

	& h6 {
		margin-bottom: 12px;
		text-align: center;
	}

	@media screen and (max-width: 600px) {
		& > button {
			width: 90%;
		}
	}
`;
