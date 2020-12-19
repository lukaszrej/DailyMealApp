import * as S from '@material-ui/core';
import styled from "styled-components";

export const FooterMain = styled(S.List)`
	min-height: 72px;

    & li {
        flex-direction: column;
        cursor: pointer;

        & > a.MuiLink-root {
	        font-size: 10px;
            color: grey;
        }

        & > div > span.MuiTypography-displayBlock {
            font-size: 12px;
            color: grey;
        }
    }
`;
