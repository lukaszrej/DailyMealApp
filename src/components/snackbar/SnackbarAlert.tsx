import React, {SyntheticEvent, useState} from 'react';
import useStyles from "./styles";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert, {AlertProps} from '@material-ui/lab/Alert';

import {useSelector} from "react-redux";
import {AppState} from '../../store';

const Alert = (props: AlertProps) => {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const SnackbarAlert: React.FC = () => {
    const classes = useStyles();
    const [open, setOpen] = useState(true);
    const userName = useSelector((state: AppState) => state.user.name);

    const handleClose = (event?: SyntheticEvent, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success">
                    Hello, {userName ? userName : "User"}. You can now use the App. Enjoy.
                </Alert>
            </Snackbar>
        </div>
    )
};

export default SnackbarAlert;