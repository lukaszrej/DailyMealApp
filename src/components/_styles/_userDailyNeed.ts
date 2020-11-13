import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

export const UserDailyNeed = styled(Paper)`
	padding: 24px;
	display: flex;
	flex-direction: column;
	margin-top: 12px;

	& p {
		margin: 0;
		margin-bottom: 12px;
	}

	& h6 {
		margin-bottom: 12px;
		text-align: center;
	}

	& h3 {
		padding-bottom: 12px;
	}
`;
