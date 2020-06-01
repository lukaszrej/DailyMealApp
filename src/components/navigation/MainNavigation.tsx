import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Nav from './nav/Nav';
import AppDrawer from "./drawer/Drawer";
import useStyles from "../navigation/styles";

const MainNavigation = ({children}: any) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const renderNav = () => {

        return (
            <>
                <Nav handleDrawerOpen={handleDrawerOpen} open={open}/>
                <AppDrawer handleDrawerClose={handleDrawerClose} open={open}/>
            </>
        )
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            {renderNav()}
            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
                <div className={classes.drawerHeader}/>
                <Typography paragraph>
                    {children}
                </Typography>
            </main>
        </div>
    );
}

export default MainNavigation;