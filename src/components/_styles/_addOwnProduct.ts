import styled from "styled-components";

export const AddOwnProduct = styled.div`
	display: flex;
	flex-wrap: wrap;
	flex-direction: column;
	width: 90%;

	& button {
		margin-top: 18px;
	}

	& input {
		letter-spacing: 2;
		font-size: 20px;
	}

	@media screen and (min-width: 600px) {
		width: 95%;
	}

	.group {
		margin-bottom: 0;
		margin-left: 0;
		margin-right: 0;
	}
`;
