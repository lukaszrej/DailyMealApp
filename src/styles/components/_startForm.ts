import styled from "styled-components";

export const StartForm = styled.form`
	display: flex;
	flex-direction: column;

	& button {
		margin-top: 16px;
		font-size: 18px;
		min-height: 48px;
		background: #00A8CC;
		color: white;

		&:hover {
			background: #025997;
		}
	}

	.activity {
		margin-top: 16px;
		margin-bottom: 8px;
	}

	.gender {
		margin-top: 16px;
		margin-bottom: 8px;

			& div {
				flex-direction: row;
				justify-content: center;
			}
	}
`;
