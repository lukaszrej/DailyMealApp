import styled from "styled-components";

export const ProductTag = styled.span`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	text-transform: lowercase;
    padding-bottom: 12px;

	& div > svg {
		margin-left: 11px;
		margin-right: -6px;
		margin-bottom: 2px;
	}

	& > * {
		margin: 4px;
	}
`;
