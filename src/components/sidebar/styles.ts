import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex'
		},
		drawer: {
			width: drawerWidth,
			background: '#282828',
			color: '#e6e7e8'
		}
	})
);

export default useStyles;
