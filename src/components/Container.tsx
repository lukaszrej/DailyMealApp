import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import TopAppBar from './Nav/TopAppBarContainer';
import Alert from './Alert';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../store/start/Start.selectors';
import { getUserName } from '../store/user/User.selectors';
import * as S from "../styles";

interface ContainerProps {
	children: JSX.Element;
}

const Container = (props: ContainerProps) => {
	const { children } = props;
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<>
			<CssBaseline />

			<S.Container >
				<TopAppBar />

				<main>
					{children}
				</main>
			</S.Container>

			{showAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</>
	);
};

export default Container;
