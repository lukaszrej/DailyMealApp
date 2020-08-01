import React from 'react';
import Toolbar from '@material-ui/core/Toolbar';
import useStyles from './styles';
import Sidebar from '../sidebar/Sidebar';

interface ContainerProps {
	children: JSX.Element;
}

const Container: React.FC<ContainerProps> = (props: ContainerProps): JSX.Element => {
	const { children } = props;
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Sidebar />
			<main>
				<Toolbar />
				<React.Fragment>{children}</React.Fragment>
			</main>
		</div>
	);
};

export default Container;
