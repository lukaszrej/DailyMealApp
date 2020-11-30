import AppBar from '@material-ui/core/AppBar';
import styled from "styled-components";

const drawerWidth: number = 250;

export const Appbar = styled(AppBar)`
	/* z-index: 1200 + 1; */
	background: linear-gradient(270deg, #025997 0%, #00A8CC 55%);
    color: white;

	@media screen and (min-width: 960px) {
		width: calc(100% - ${drawerWidth}px);
		margin-left: ${drawerWidth}px;
	}

	& button {
		margin-right: 16px;

		@media screen and (min-width: 960px) {
			display: none;
		}
	}
`;
