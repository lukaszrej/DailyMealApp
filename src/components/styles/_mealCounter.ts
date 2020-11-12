import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

export const MealCounter = styled(Paper)`
	display: flex;
	flex-direction: column;
	padding: 24px;
	margin-top: 12px;

	& .MuiTypography-h6 {
		padding-bottom: 12px;
		text-align: center;
	}
`;
