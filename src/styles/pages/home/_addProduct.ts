import styled from "styled-components";

export const AddProduct = styled.form`
	width: 90%;
	margin-top: 24;

	& input {
		letter-spacing: 2;
		font-size: 20px;
	}

	& > div {
		width: 100%;
	}

	& .MuiButton-root {
		width: 100%;
		margin-top: 18px;
	}

	@media screen and (min-width: 600px) {
		width: 95%;
	}
`;
