import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import { Typography, IconButton, CloseIcon, DialogTitle } from '../../styles';
import { Props } from './types';

export const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: 0,
			padding: theme.spacing(2),
			minWidth: 500,
			textAlign: 'center',
			'& button': {
				position: 'absolute',
				right: theme.spacing(1),
				top: theme.spacing(1),
				color: theme.palette.grey[500]
			}
		}
	});

export const ModalTitle = withStyles(styles)((props: Props) => {
	const { children, classes, onClose, ...other } = props;

	return (
		<DialogTitle className={classes.root} disableTypography {...other}>
			<Typography variant='h6'>{children}</Typography>

			{onClose ? (
				<IconButton onClick={onClose} aria-label='close'>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
});
