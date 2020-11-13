import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

export const MealSection = styled(Paper)`
	width: 100%;
	padding: 24px;

	& section {
		display: flex;
		justify-content: center;
		margin: 12px;
		margin-top: 24px;

		& > button {
			width: 48%;
		}

		& > button:first-of-type {
			margin-right: 16px;
		}
	}
`;
