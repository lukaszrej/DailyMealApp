import styled from "styled-components";

export const Meals = styled.main`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin-bottom: 24px;

	& h6, & h3 {
		padding: 24px;
		text-align: center;
	}

	& h3 {
		padding-top: 0;
	}

	& > div:first-of-type {
		margin-bottom: 24px;
	}

	.buttons {
		display: flex;
		justify-content: center;
		margin-top: 48px;
		margin-bottom: 24px;

		& button {
			background: #00A8CC;
			color: white;

			&:hover {
				background: #025997;
			}
		}
	}
`;
