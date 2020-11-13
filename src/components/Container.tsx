import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import SidebarWrapper from './Sidebar/SidebarWrapper';
import Alert from './Alert';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../store/start/Start.selectors';
import { getUserName } from '../store/user/User.selectors';
import * as S from "./_styles";

interface ContainerProps {
	children: JSX.Element;
}

const Container = (props: ContainerProps) => {
	const { children } = props;
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<>
			<S.Container >
				<CssBaseline />

				<SidebarWrapper />

				<main>
					<Toolbar />
					{children}
				</main>
			</S.Container>

			{showAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</>
	);
};

export default Container;
