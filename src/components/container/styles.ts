import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',

			'& > main': {
				flexGrow: 1,
				marginLeft: drawerWidth,
				padding: theme.spacing(3),

				// rwd
				[theme.breakpoints.down('sm')]: {
					marginLeft: 0,
					marginRight: 0,
					width: '100%'
				},

				// rwd
				[theme.breakpoints.down('md')]: {
					marginRight: 0,
					width: '100%'
				}
			}
		}
	})
);

export default useStyles;
