import styled from "styled-components";
import * as S from '../../index';

export const Meals = styled(S.Paper)`
	display: flex;
	flex-direction: column;
	margin-bottom: 24px;

	& h6, & h3 {
		padding: 24px;
		text-align: center;
	}

	& header {
		padding: 12px;
		text-align: center;
		font-size: 22px;
	}

	& hr {
		margin-top: 64px;
    	margin-bottom: 32px;
		height: 2px;
	}

	& main {
		display: flex;
		align-items: center;
		flex-direction: column;
		margin-left: 24px;
		margin-right: 24px;
		padding: 12px;

		& aside {
			width: 80%;
		}
	}
`;
