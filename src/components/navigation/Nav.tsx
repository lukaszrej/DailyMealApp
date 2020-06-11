import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import {Dashboard} from "@material-ui/icons";

import useStyles from "./styles";
import {useHistory} from "react-router-dom";
import {useSelector} from "react-redux";
import {AppState} from '../../store';

interface Props {
    children: any
}

const ClippedDrawer = ({children}: Props) => {
    const classes = useStyles();
    const history = useHistory();
    const started = useSelector((state: AppState) => state.start.started);

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        DailyMealApp
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar/>
                <div className={classes.drawerContainer}>
                    <Divider/>
                    <List>
                        <ListItem disabled={!started} button onClick={() => history.push('/dashboard')}>
                            <ListItemIcon> <Dashboard/> </ListItemIcon>
                            <ListItemText primary='Dashboard'/>
                        </ListItem>
                        <ListItem disabled={!started} button onClick={() => history.push('/user')}>
                            <ListItemIcon> <AccountCircleIcon/> </ListItemIcon>
                            <ListItemText primary='Your profile'/>
                        </ListItem>
                        <ListItem disabled={!started} button onClick={() => history.push('/meals')}>
                            <ListItemIcon> <FormatListBulletedIcon/> </ListItemIcon>
                            <ListItemText primary='Your meals'/>
                        </ListItem>
                    </List>
                    <Divider/>
                </div>
            </Drawer>
            <main className={classes.content}>
                <Toolbar/>
                <section>
                    {children}
                </section>
            </main>
        </div>
    );
}

export default ClippedDrawer;
