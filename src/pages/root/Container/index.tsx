import React from 'react';
import { ContainerProps } from './index.types';
import { useSelector } from 'react-redux';
import { getDisplayedAlert } from '../../../store/login/Login.selectors';
import { getUserName } from '../../../store/user/User.selectors';
import { Navigation } from './Navigation';
import { Alert } from '../../../components/Alert';
import * as S from "../../../styles";

export const Container = (props: ContainerProps) => {
	const { children } = props;
	const displayedAlert = useSelector(getDisplayedAlert);
	const userName = useSelector(getUserName);

	return (
		<>
			<S.Container >
				<Navigation />

				<main>
					{children}
				</main>
			</S.Container>

			{displayedAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</>
	);
};
