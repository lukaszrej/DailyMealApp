import React from 'react';
import { createStyles, Theme, withStyles } from '@material-ui/core/styles';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import { ModalTitleProps } from './index.types';
import * as S from "../../styles";

export const styles = (theme: Theme) => createStyles({
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

const ModalTitle = (props: ModalTitleProps) => {
	const { children, classes, onClose, ...other } = props;

	return (
		<MuiDialogTitle className={classes.root} disableTypography {...other}>
			<S.Typography variant='h6'>{children}</S.Typography>
			{onClose ? (
				<S.IconButton aria-label='close' onClick={onClose}>
					<S.CloseIcon />
				</S.IconButton>
			) : null}
		</MuiDialogTitle>
	);
};

export default withStyles(styles)(ModalTitle);
