import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Sidebar from './Sidebar';
import Alert from './Alert';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../store/start/Start.selectors';
import { getUserName } from '../store/user/User.selectors';
import * as S from "./styles";

interface ContainerProps {
	children: JSX.Element;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps): JSX.Element => {
	const { children } = props;
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<React.Fragment>
			<S.Container >
				<CssBaseline />
				<Sidebar />

				<main>
					<Toolbar />
					<React.Fragment>{children}</React.Fragment>
				</main>
			</S.Container>
			{showAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</React.Fragment>
	);
};

export default Container;
