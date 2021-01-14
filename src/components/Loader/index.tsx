import React from 'react';
import * as S from "../../styles";

export const Loader = () => {
	return (
		<S.Loader>
			<S.CircularProgress size={24} />
		</S.Loader>
	);
};
