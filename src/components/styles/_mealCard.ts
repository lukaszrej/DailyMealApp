import styled from "styled-components";

export const MealCard = styled.article`
	padding-left: 24px;
	padding-right: 24px;
	padding-bottom: 26px;

	& h5 {
		margin-top: 8px;
		margin-bottom: 8px;
	}

	& header {
		margin-bottom: 24px;
		padding-top: 24px;
		font-size: 28px;
		text-align: center;
	}

	& hr {
		height: 2px;
		margin-top: 58px;
		margin-bottom: 24px;
		background: linear-gradient(270deg, #025997 0%, #00A8CC 55%);
	}

	.meal {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		margin-bottom: 32px;

		& p {
			margin: 0;
		}

		& > div > div {
			margin-bottom: 0;
		}

		& > div > div:first-of-type {
			margin-bottom: 0;
		}
	}
`;
