import React from "react";
import {useTheme} from "@material-ui/core/styles";
import useStyles from "./styles";
import Hidden from "@material-ui/core/Hidden";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {useHistory} from "react-router-dom";
import {Dashboard} from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import FormatListBulletedIcon from "@material-ui/icons/FormatListBulleted";

interface Props {
    handleDrawerToggle: () => void;
    mobileOpen: boolean;
}

const SideBar = (props: Props) => {
    const classes = useStyles();
    const theme = useTheme();
    const history = useHistory();

    const drawer = (
        <div>
            <div className={classes.toolbar}/>
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
            <Divider/>
        </div>
    );

    return (
        <nav className={classes.drawer} aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
                <Drawer
                    // container={container}
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={props.mobileOpen}
                    onClose={props.handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    {drawer}
                </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
                <Drawer
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    variant="permanent"
                    open
                >
                    {drawer}
                </Drawer>
            </Hidden>
        </nav>
    )
};

export default SideBar;