import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

const drawerWidth: number = 250;

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			zIndex: theme.zIndex.drawer + 1,
			background: 'linear-gradient(270deg, #025997 0%, #00A8CC 55%)',

			// rwd
			[theme.breakpoints.up('md')]: {
				width: `calc(100% - ${drawerWidth}px)`,
				marginLeft: drawerWidth
			},
			'& button': {
				marginRight: theme.spacing(2),

				// rwd
				[theme.breakpoints.up('md')]: {
					display: 'none'
				}
			}
		}
	})
);

export default useStyles;
