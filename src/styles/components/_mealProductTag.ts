import styled from "styled-components";

export const MealProductTag = styled.div`
	display: flex;
	flex-wrap: wrap;
	text-transform: uppercase;

	& div > svg {
		margin-left: 11px;
		margin-right: -6px;
		margin-bottom: 2px;
	}

	& > * {
		margin: 4px;
	}
`;
