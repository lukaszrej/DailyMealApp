import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import {Dashboard} from "@material-ui/icons";

import useStyles from "./styles";
import {useTheme} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

interface Props {
    handleDrawerClose: () => void;
    open: boolean;
}

const AppDrawer = (props: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    return (
        <Drawer
            className={classes.drawer}
            variant="persistent"
            anchor="left"
            open={props.open}
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <div className={classes.drawerHeader}>
                <IconButton onClick={props.handleDrawerClose}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
                </IconButton>
            </div>
            <Divider/>
            <List>
                <ListItem button onClick={() => history.push('/dashboard')}>
                    <ListItemIcon> <Dashboard/> </ListItemIcon>
                    <ListItemText primary='Dashboard'/>
                </ListItem>
                <ListItem button onClick={() => history.push('/user')}>
                    <ListItemIcon> <AccountCircleIcon/> </ListItemIcon>
                    <ListItemText primary='Your profile'/>
                </ListItem>
                <ListItem button onClick={() => history.push('/meals')}>
                    <ListItemIcon> <FormatListBulletedIcon/> </ListItemIcon>
                    <ListItemText primary='Your meals'/>
                </ListItem>
            </List>
        </Drawer>
    )
};

export default AppDrawer;