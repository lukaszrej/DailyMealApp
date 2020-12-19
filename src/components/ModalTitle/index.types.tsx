import React from 'react';
import { WithStyles } from '@material-ui/core/styles';
import { styles } from './';

export interface ModalTitleProps extends WithStyles<typeof styles> {
	id: string;
	children: React.ReactNode;
	onClose?: () => void;
}
