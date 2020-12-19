import React from 'react';
import * as S from "../../styles";

const Loader = () => {
	return (
		<S.Loader>
			<S.CircularProgress size={24} />
		</S.Loader>
	);
};

export default Loader;
