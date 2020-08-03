import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import Sidebar from '../sidebar/Sidebar';
import Alert from '../../components/utilsComponents/alert/Alert';
import useStyles from './styles';
import { useSelector } from 'react-redux';
import { getShowAlert } from '../../store/start/Start.selectors';
import { getUserName } from '../../store/user/User.selectors';

interface ContainerProps {
	children: JSX.Element;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps): JSX.Element => {
	const { children } = props;
	const classes = useStyles();
	const showAlert = useSelector(getShowAlert);
	const userName = useSelector(getUserName);

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Sidebar />

				<main>
					<Toolbar />
					<React.Fragment>{children}</React.Fragment>
				</main>
			</div>
			{showAlert && <Alert severity='success'>Hello {userName ? userName : 'User'}!</Alert>}
		</React.Fragment>
	);
};

export default Container;
