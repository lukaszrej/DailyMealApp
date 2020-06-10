import React from 'react';
import useStyles from "./styles";
import {useDispatch} from "react-redux";
import {useSelector} from "react-redux";
import {AppState} from '../../store';
import {start} from '../../store/start/Start.actions';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';

const Start: React.FC = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const started = useSelector((state: AppState) => state.start.started)

    const handleSubmit = () => {
        console.log('submitted input user data');
        dispatch(start(started));
    };

    return (
        <div className={classes.root}>
            {
                (
                    !started &&
                    <React.Fragment>
                        <CssBaseline/>
                        <Container maxWidth="sm">
                            <Typography component="div" style={{backgroundColor: '#cfe8fc', height: '100vh'}}>
                                <form noValidate onSubmit={handleSubmit}>
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        // onChange={null}
                                        value=""
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        // onChange={null}
                                        value=""
                                    />
                                    <Button type="submit" variant="contained" onSubmit={handleSubmit}>Start</Button>
                                </form>
                            </Typography>
                        </Container>
                    </React.Fragment>

                ) ||
                (started && <div>Hello, world!</div>)
            }
        </div>
    )
};

export default Start;