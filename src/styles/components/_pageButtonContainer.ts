import styled from "styled-components";

export const PageButtonContainer = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 24px;
	margin-bottom: 24px;

	& button {
		background: #00A8CC;
		color: white;

		&:hover {
			background: #025997;
		}
	}
`;
