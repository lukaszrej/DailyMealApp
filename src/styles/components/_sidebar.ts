import styled from "styled-components";

export const Sidebar = styled.nav`
	& div:first-of-type {
		display: flex;
		justify-content: center;
	}

	& h6 {
		color: grey;
		font-size: 19px;
	}

	& hr {
		background: #343a40;
	}

	// list items elements
	& ul > div {
		&:hover {
			background: #4d4d4d;
			text-decoration: underline;
		}

		&.MuiListItem-root.Mui-disabled {
			opacity: 0.3;
		}

		& svg {
			color: #e6e7e8;
		}
	}
`;
