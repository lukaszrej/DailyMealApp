import styled from "styled-components";

export const Home = styled.main`
	display: flex;
	width: 100%;

	& > article {
		width: 70%;
		margin-right: 24px;
	}

	& > aside {
		width: 30%;
	}

	@media screen and (max-width: 960px) {
		width: 100%;
		flex-direction: column;
		margin-left: 0;

		& > article {
			width: 100%;
			margin-left: 0;
			margin-right: 0;
		}

		& > aside {
			width: 100%;
			display: flex;
			justify-content: space-around;
			margin-bottom: 24px;

			& > div {
				width: 33%;
				margin-top: 0;
			}
		}
	}

	@media screen and (max-width: 960px) {
		& > aside {
			flex-direction: column-reverse;

			& > div {
				width: 100%;
				align-items: center;
				margin-bottom: 24px;
			}
		}
	}
`;
