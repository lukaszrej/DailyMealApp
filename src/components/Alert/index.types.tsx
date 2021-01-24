import { AlertProps } from '@material-ui/lab/Alert';

export interface Props extends AlertProps {
	children: React.ReactNode;
	severity: 'error' | 'info' | 'success' | 'warning';
}
