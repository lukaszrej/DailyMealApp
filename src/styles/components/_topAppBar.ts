import * as S from '@material-ui/core';
import styled from "styled-components";

export const TopAppBar = styled(S.AppBar)`
	display: flex;
    color: white;
	background: linear-gradient(270deg, #025997 0%, #00A8CC 55%);

	.MuiToolbar-root {
		@media screen and (min-width: 960px) {
			justify-content: flex-end;

			& button:first-of-type {
				display: none;
			}
		}

		@media screen and (max-width: 960px) {
			justify-content: space-between;

			& button:first-of-type {
				display: block;
			}
		}
	}
`;
