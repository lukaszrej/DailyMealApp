import React from 'react';
import { ContainerProps } from './index.types';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../../../store/login/Login.selectors';
import { getUserName } from '../../../store/user/User.selectors';
import Navigation from './Navigation';
import Alert from '../../../components/Alert';
import * as S from "../../../styles";

const Container = (props: ContainerProps) => {
	const { children } = props;
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<>
			<S.Container >
				<Navigation />

				<main>
					{children}
				</main>
			</S.Container>

			{showAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</>
	);
};

export default Container;
