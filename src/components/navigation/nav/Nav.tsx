import AppBar from "@material-ui/core/AppBar";
import clsx from "clsx";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Typography from "@material-ui/core/Typography";
import React from "react";

import useStyles from "./styles";

interface Props {
    handleDrawerOpen: () => void;
    open: boolean;
}

const Nav = (props: Props) => {
    const classes = useStyles();

    return (
        <AppBar
            position="fixed"
            className={clsx(classes.appBar, {
                [classes.appBarShift]: props.open,
            })}
        >
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={props.handleDrawerOpen}
                    edge="start"
                    className={clsx(classes.menuButton, props.open && classes.hide)}
                >
                    <MenuIcon/>
                </IconButton>
                <Typography variant="h6" noWrap>
                    DailyMealApp
                </Typography>
            </Toolbar>
        </AppBar>
    )
};

export default Nav;