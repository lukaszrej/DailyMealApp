import styled from "styled-components";

export const ProductList = styled.ul`
	list-style: none;
	width: 90%;
	padding: 0;
	margin: 0;
	text-align: center;

	& > li {
		padding-top: 8px;
		padding-bottom: 8px;
		padding-left: 8px;
		border-bottom: 1px solid #3f51b5;
		font-weight: 700;
		letter-spacing: 2;
		text-transform: lowercase;
	}

	& > li:hover {
		background: #00A8CC;
		color: white;
	}

	& > * > div {
		font-size: 13px;
		font-style: italic;
		font-weight: normal;
		letter-spacing: 0;
		word-spacing: 2;
	}
`;
