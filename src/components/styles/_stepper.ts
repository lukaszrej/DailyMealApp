import Paper from '@material-ui/core/Paper';
import styled from "styled-components";

export const Stepper = styled(Paper)`
	width: 100%;
	margin-bottom: 12px;

	@media screen and (min-width: 600px) {
		margin-bottom: 24px;
	}
`;
