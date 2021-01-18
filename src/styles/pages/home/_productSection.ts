import styled from "styled-components";

export const ProductSection = styled.section`
	& > div {
		margin-bottom: 12px;
		text-align: center;
	}

	& > div > h6 {
		padding: 24px;
	}

	@media screen and (min-width: 600px) {
		margin-bottom: 24px;

		& > div > h6 {
			font-size: 18px;
		}
	}
`;

export const TabContent = styled.div`
    padding-bottom: 24px;
    padding-top: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (min-width: 600px) {
        padding-right: 12px;
        padding-left: 12px;
    }
`;
