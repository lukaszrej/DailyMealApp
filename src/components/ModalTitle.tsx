import React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			margin: 0,
			padding: theme.spacing(2),
			minWidth: 500,
			'& button': {
				position: 'absolute',
				right: theme.spacing(1),
				top: theme.spacing(1),
				color: theme.palette.grey[500]
			}
		}
	});

export interface ModalTitleProps extends WithStyles<typeof styles> {
	id: string;
	children: React.ReactNode;
	onClose?: () => void;
}

const ModalTitle = (props: ModalTitleProps): JSX.Element => {
	const { children, classes, onClose, ...other } = props;

	return (
		<MuiDialogTitle className={classes.root} disableTypography {...other}>
			<Typography variant='h6'>{children}</Typography>
			{onClose ? (
				<IconButton aria-label='close' onClick={onClose}>
					<CloseIcon />
				</IconButton>
			) : null}
		</MuiDialogTitle>
	);
};

export default withStyles(styles)(ModalTitle);
